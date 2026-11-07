import { ASN1Element, type DotDelimitedOidString, type OBJECT_IDENTIFIER, ObjectIdentifier } from "@wildboar/asn1";
import type EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { GeneralName } from "../../modules/CertificateExtensions/GeneralName.ta.mjs";
import type { GeneralSubtree } from "../../modules/CertificateExtensions/GeneralSubtree.ta.mjs";
import type { NameConstraintsSyntax } from "../../modules/CertificateExtensions/NameConstraintsSyntax.ta.mjs";
import {
    countDNSLabels,
    dnsNameEqualsOrSubdomain,
    gnWithinGeneralSubtree,
    normalizeDNSName,
} from "../../utils/gnWithinGeneralSubtree.mjs";

const NAME_FORMS = [
    "otherName", "rfc822Name", "dNSName", "x400Address", "directoryName",
    "ediPartyName", "uniformResourceIdentifier", "iPAddress", "registeredID",
] as const;

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

function withinSubtree (
    name: GeneralName,
    subtree: GeneralSubtree,
    getEqualityMatcher?: (type: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    if ("uniformResourceIdentifier" in name && "uniformResourceIdentifier" in subtree.base) {
        // RFC 5280 §4.2.1.10 constrains URI DNS hosts, not complete URI strings.
        const constraint = subtree.base.uniformResourceIdentifier;
        if (!constraint || /[\s/@:\\?#]/.test(constraint)) {
            throw new Error("Invalid URI name constraint");
        }
        const subdomainsOnly = constraint.startsWith(".");
        const base = normalizeDNSName(subdomainsOnly ? constraint.slice(1) : constraint);
        const host = normalizeDNSName(new URL(name.uniformResourceIdentifier).hostname);
        if (!base || !host || /^[\d.]+$/.test(host) || host.includes(":")) {
            throw new Error("URI name constraints require a DNS host");
        }
        const distance = countDNSLabels(host) - countDNSLabels(base);
        if (distance < Number(subtree.minimum ?? 0)
            || distance > Number(subtree.maximum ?? Infinity)) {
            return false;
        }
        return subdomainsOnly
            ? host !== base && dnsNameEqualsOrSubdomain(host, base)
            : host === base;
    }
    return gnWithinGeneralSubtree(name, subtree, getEqualityMatcher);
}

function nameWithinNameConstraints (
    name: GeneralName,
    permitted: readonly GeneralSubtree[],
    excluded: readonly GeneralSubtree[],
    getEqualityMatcher?: (type: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    const form = nameForm(name);
    if (!form) {
        return false;
    }
    const permittedForForm = permitted.filter((subtree) => nameForm(subtree.base) === form);
    const excludedForForm = excluded.filter((subtree) => nameForm(subtree.base) === form);
    if (permittedForForm.length === 0 && excludedForForm.length === 0) {
        return true;
    }
    if (!supportedNameForm(form)) {
        return false;
    }
    if (excludedForForm.some((subtree) => withinSubtree(name, subtree, getEqualityMatcher))) {
        return false;
    }
    return permittedForForm.length === 0
        || permittedForForm.some((subtree) => withinSubtree(name, subtree, getEqualityMatcher));
}

/**
 * X.509 §9.4.2.2: every name must avoid all exclusions and belong to at least
 * one permitted subtree of its own form, if that form is constrained.
 * Unsupported applicable constraints and decoding failures fail closed.
 */
export
function namesWithinNameConstraints (
    names: readonly GeneralName[],
    constraints: NameConstraintsSyntax,
    getEqualityMatcher?: (type: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    const permitted = constraints.permittedSubtrees ?? [];
    const excluded = constraints.excludedSubtrees ?? [];
    try {
        if ([ ...permitted, ...excluded ].some((subtree) => nameForm(subtree.base) === undefined)) {
            // If the subtree is not a supported name form, fail closed.
            return false;
        }
        return names.every((name) => nameWithinNameConstraints(name, permitted, excluded, getEqualityMatcher));
    } catch {
        return false;
    }
}
