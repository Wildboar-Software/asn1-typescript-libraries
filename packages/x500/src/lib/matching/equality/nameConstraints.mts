import { ASN1Element, type DotDelimitedOidString, type OBJECT_IDENTIFIER, ObjectIdentifier } from "@wildboar/asn1";
import type { Matcher } from "../../types/matching.mjs";
import type { GeneralName } from "../../modules/CertificateExtensions/GeneralName.ta.mjs";
import type { GeneralSubtree } from "../../modules/CertificateExtensions/GeneralSubtree.ta.mjs";
import type { NameConstraintsSyntax } from "../../modules/CertificateExtensions/NameConstraintsSyntax.ta.mjs";
import {
    countDNSLabels,
    dnsNameEqualsOrSubdomain,
    gnWithinGeneralSubtree,
    normalizeDNSName,
} from "../../utils/gnWithinGeneralSubtree.mjs";

type KeysOfUnion<T> = T extends unknown ? keyof T : never;

type NameFormKey =
    | `otherName:${DotDelimitedOidString}`
    | KeysOfUnion<Exclude<GeneralName, { tagClass: number }>>
    ;

const srvNameFormKey: NameFormKey = `otherName:${ObjectIdentifier.fromString("1.3.6.1.5.5.7.8.7").toString()}`;

function nameForm (name: GeneralName): NameFormKey | undefined {
    if (ASN1Element.isElement(name)) {
        return undefined;
    }
    if ("otherName" in name) {
        const type = name.otherName.directReference;
        return type
            ? `otherName:${type.toString()}`
            : undefined
            ;
    }
    return Object.keys(name)[0] as NameFormKey;
}

function supportedNameForm (form: NameFormKey): boolean {
    return form === "directoryName"
        || form === "dNSName"
        || form === "rfc822Name"
        || form === "iPAddress"
        || form === "registeredID"
        || form === "uniformResourceIdentifier"
        || form === srvNameFormKey; // SRVName
}

type FormSubtrees = {
    permitted: GeneralSubtree[];
    excluded: GeneralSubtree[];
};

/**
 * Group constraint subtrees by name form once. Each name looks up that form.
 * Order within each list is preserved so the first match still wins.
 * `undefined` means a base is not a GeneralName choice; the caller fails closed.
 */
function subtreesByForm (
    permitted: readonly GeneralSubtree[],
    excluded: readonly GeneralSubtree[],
): Map<NameFormKey, FormSubtrees> | undefined {
    const byForm: Map<NameFormKey, FormSubtrees> = new Map();
    const add = (subtree: GeneralSubtree, side: keyof FormSubtrees): boolean => {
        const form = nameForm(subtree.base);
        if (!form) {
            return false;
        }
        let group = byForm.get(form);
        if (!group) {
            group = { permitted: [], excluded: [] };
            byForm.set(form, group);
        }
        group[side].push(subtree);
        return true;
    };
    for (const subtree of permitted) {
        if (!add(subtree, "permitted")) {
            return undefined;
        }
    }
    for (const subtree of excluded) {
        if (!add(subtree, "excluded")) {
            return undefined;
        }
    }
    return byForm;
}

type PreparedUriBase = {
    readonly subdomainsOnly: boolean;
    readonly base: string | undefined;
    readonly labels: number;
};

type PreparedUriHost = {
    readonly host: string;
    readonly labels: number;
};

type NameConstraintCache = {
    readonly byForm: Map<NameFormKey, FormSubtrees>;
    readonly uriBases: Map<GeneralSubtree, PreparedUriBase>;
    readonly uriHosts: Map<string, PreparedUriHost>;
};

function prepareUriBase (constraint: string): PreparedUriBase {
    if (!constraint || /[\s/@:\\?#]/.test(constraint)) {
        throw new Error("Invalid URI name constraint");
    }
    const subdomainsOnly = constraint.startsWith(".");
    const base = normalizeDNSName(subdomainsOnly ? constraint.slice(1) : constraint);
    return {
        subdomainsOnly,
        base,
        labels: base ? countDNSLabels(base) : 0,
    };
}

/**
 * URI bases are independent of the name being tested, so each subtree is
 * normalized the first time it is actually compared. Subtrees that `.some()`
 * never reaches stay unparsed, including invalid ones behind an earlier match.
 */
function cachedUriBase (
    subtree: GeneralSubtree,
    constraint: string,
    cache: Map<GeneralSubtree, PreparedUriBase>,
): PreparedUriBase {
    const cached = cache.get(subtree);
    if (cached) {
        return cached;
    }
    const prepared = prepareUriBase(constraint);
    // An unusable base is not cached. The caller parses the name next, so a
    // broken URI still fails before the DNS-host error.
    if (prepared.base) {
        cache.set(subtree, prepared);
    }
    return prepared;
}

function cachedUriHost (
    uri: string,
    cache: Map<string, PreparedUriHost>,
): PreparedUriHost {
    const cached = cache.get(uri);
    if (cached) {
        return cached;
    }
    const host = normalizeDNSName(new URL(uri).hostname);
    if (!host || /^[\d.]+$/.test(host) || host.includes(":")) {
        throw new Error("URI name constraints require a DNS host");
    }
    const prepared: PreparedUriHost = {
        host,
        labels: countDNSLabels(host),
    };
    cache.set(uri, prepared);
    return prepared;
}

function withinSubtree (
    name: GeneralName,
    subtree: GeneralSubtree,
    cache: NameConstraintCache,
    getEqualityMatcher?: (type: OBJECT_IDENTIFIER) => Matcher | undefined,
): boolean {
    if ("uniformResourceIdentifier" in name && "uniformResourceIdentifier" in subtree.base) {
        // RFC 5280 §4.2.1.10 constrains URI DNS hosts, not complete URI strings.
        const base = cachedUriBase(subtree, subtree.base.uniformResourceIdentifier, cache.uriBases);
        const host = cachedUriHost(name.uniformResourceIdentifier, cache.uriHosts);
        if (!base.base) {
            throw new Error("URI name constraints require a DNS host");
        }
        const distance = host.labels - base.labels;
        if (distance < Number(subtree.minimum ?? 0)
            || distance > Number(subtree.maximum ?? Infinity)) {
            return false;
        }
        return base.subdomainsOnly
            ? host.host !== base.base && dnsNameEqualsOrSubdomain(host.host, base.base)
            : host.host === base.base;
    }
    return gnWithinGeneralSubtree(name, subtree, getEqualityMatcher);
}

function nameWithinNameConstraints (
    name: GeneralName,
    cache: NameConstraintCache,
    getEqualityMatcher?: (type: OBJECT_IDENTIFIER) => Matcher | undefined,
): boolean {
    const form = nameForm(name);
    if (!form) {
        return false;
    }
    const group = cache.byForm.get(form);
    if (!group) {
        return true;
    }
    if (!supportedNameForm(form)) {
        return false;
    }
    if (group.excluded.some((subtree) => withinSubtree(name, subtree, cache, getEqualityMatcher))) {
        return false;
    }
    return group.permitted.length === 0
        || group.permitted.some((subtree) => withinSubtree(name, subtree, cache, getEqualityMatcher));
}

/**
 * X.509 §9.4.2.2: every name must avoid all exclusions and belong to at least
 * one permitted subtree of its own form, if that form is constrained.
 * Unsupported applicable constraints and decoding failures fail closed.
 *
 * Subtrees are grouped by name form once per call and reused for every name.
 * URI constraint bases and name hosts are normalized once and reused too.
 */
export
function namesWithinNameConstraints (
    names: readonly GeneralName[],
    constraints: NameConstraintsSyntax,
    getEqualityMatcher?: (type: OBJECT_IDENTIFIER) => Matcher | undefined,
): boolean {
    const permitted = constraints.permittedSubtrees ?? [];
    const excluded = constraints.excludedSubtrees ?? [];
    try {
        const byForm = subtreesByForm(permitted, excluded);
        if (!byForm) {
            // A base that is not a GeneralName choice fails closed.
            return false;
        }
        const cache: NameConstraintCache = {
            byForm,
            uriBases: new Map(),
            uriHosts: new Map(),
        };
        return names.every((name) => nameWithinNameConstraints(name, cache, getEqualityMatcher));
    } catch {
        return false;
    }
}
