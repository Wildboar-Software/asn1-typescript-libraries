import type { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { approximatelyEqualStrings } from "../approximate.mjs";
import { domainToASCII } from "node:url";
import { stringsEqual } from "../constantTime.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_APPROXIMATE,
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_DEBUG,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

export interface JidParts {
    local?: string;
    domain: string;
    resource?: string;
}

/** IDNA key, without LDAP case folding, wildcard matching, or URI components. */
function normalizeDomain (domain: string): string {
    if (/[\s@/\\?#%*]/u.test(domain)) throw new Error("Invalid JID domainpart");
    const name = domain.replace(/[.\u3002\uff0e\uff61]$/u, "");
    // Appending a nonnumeric label prevents IDNA conversion from rewriting a
    // numeric DNS name such as "127.1" into the different name "127.0.0.1".
    const suffix = ".invalid";
    const ascii = name.startsWith("[")
        ? domainToASCII(name) // Let the built-in conversion handle IPv6 literals.
        : domainToASCII(name + suffix).slice(0, -suffix.length);
    if (!ascii) throw new Error("Invalid JID domainpart");
    return ascii.toLowerCase();
}

/** Deliberately partial JID preparation; this is not a full PRECIS validator. */
function normalizeJid (parts: JidParts): JidParts {
    return {
        local: parts.local?.toLowerCase().normalize("NFC"),
        domain: normalizeDomain(parts.domain),
        resource: parts.resource?.replace(/\p{Zs}/gu, " ").normalize("NFC"),
    };
}

/**
 * Split a JID per IETF RFC 7622: `[ localpart "@" ] domainpart [ "/" resourcepart ]`.
 * Separators are parsed before normalization. The resourcepart may contain
 * `/` and `@`; those characters are forbidden within a localpart.
 */
function parseJid (raw: string): JidParts | undefined {
    if (!raw) {
        return undefined;
    }
    let rest = raw;
    let resource: string | undefined;
    const slash = rest.indexOf("/");
    if (slash >= 0) {
        resource = rest.slice(slash + 1);
        rest = rest.slice(0, slash);
        if (resource.length === 0) {
            return undefined;
        }
    }
    let local: string | undefined;
    const at = rest.indexOf("@");
    if (at >= 0) {
        local = rest.slice(0, at);
        rest = rest.slice(at + 1);
        if (local.length === 0) {
            return undefined;
        }
    }
    if (!rest) {
        return undefined;
    }
    return { local, domain: rest, resource };
}

/**
 * Parse the presented JID without normalizing its parts. Missing required
 * components throw; this does not validate the full local/resource repertoire.
 */
export
function decodeJidMatchAssertion (el: ASN1Element): JidParts {
    const parsed = parseJid(el.utf8String);
    if (!parsed) {
        throw new Error("jidMatch assertion is not a JID");
    }
    return parsed;
}

/**
 * Lowercase and NFC-normalize the localpart; map non-ASCII resource spaces to
 * ASCII space and NFC-normalize the resource without case folding or trimming.
 * Domains use a built-in IDNA key, compared exactly rather than via dnsNameMatch.
 * Full PRECIS width mapping, repertoire/context rules, bidi rules, and length
 * checks are intentionally not implemented. Callers must validate JIDs separately
 * if they require strict RFC 7622 conformance; built-in IDNA conversion is not a
 * complete domain validator either. Do not use blanket NFKC as a shortcut:
 * it can collapse identifiers that PRECIS deliberately keeps distinct.
 */
export
function normalizeJidMatchAssertion (assertion: JidParts, _el?: ASN1Element): JidParts {
    try {
        return normalizeJid(assertion);
    } catch (cause) {
        throw new Error("jidMatch assertion is not a JID", { cause });
    }
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.9.4 `jidMatch`.
 *
 * Implements component equality with the lightweight, partial preparation
 * described by normalizeJidMatchAssertion, not full RFC 7622/PRECIS enforcement.
 * Presence of localpart/resourcepart must agree. Resource case and spaces stay
 * significant; domains have no wildcard semantics. Structural parsing and IDNA
 * conversion failures throw for assertions and produce FALSE for stored values.
 *
 * @param assertion Presented JID, already parsed. The localpart is
 *  lowercase/NFC-normalized; the domain is an ASCII IDNA name/IP literal,
 *  and the resourcepart has spaces mapped and is NFC-normalized.
 * @param value Stored JID, or that JID already decoded.
 */
export
function jidMatchTyped (
    assertion: JidParts,
    value: string | ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const stored = typeof value === "string" ? value : value.utf8String;
    let v: JidParts;
    try {
        const parsed = parseJid(stored);
        if (!parsed) throw new Error("Invalid JID");
        v = normalizeJid(parsed);
    } catch {
        if (flags & MATCH_FLAG_DEBUG) {
            console.error(
                "@wildboar/x500: debug: jidMatch: stored value is not a JID",
            );
        }
        return false;
    }
    const constantTime = flags & MATCH_FLAG_CONSTANT_TIME;
    const localPresenceMatch = Boolean(assertion.local) === Boolean(v.local);
    const resourcePresenceMatch = Boolean(assertion.resource) === Boolean(v.resource);
    if (!constantTime && (!localPresenceMatch || !resourcePresenceMatch)) {
        return false;
    }
    const approximate = (flags & MATCH_FLAG_APPROXIMATE) !== 0;
    const domains = approximate
        ? approximatelyEqualStrings(assertion.domain, v.domain)
        : stringsEqual(assertion.domain, v.domain, constantTime);
    if (!domains && !constantTime) return false;
    const localMatch = (assertion.local === undefined)
        ? v.local === undefined
        : (approximate
            ? approximatelyEqualStrings(assertion.local, v.local ?? "")
            : stringsEqual(assertion.local, v.local ?? "", constantTime));
    if (!localMatch && !constantTime) {
        return false;
    }
    const resourceMatch = (assertion.resource === undefined)
        ? v.resource === undefined
        : (approximate
            ? approximatelyEqualStrings(assertion.resource, v.resource ?? "")
            : stringsEqual(assertion.resource, v.resource ?? "", constantTime));
    return localPresenceMatch && resourcePresenceMatch && domains && localMatch && resourceMatch;
}

jidMatchTyped satisfies TypedEquationFunction<JidParts>;

/**
 * `jidMatch` as a `Matcher`.
 * `MATCH_FLAG_ASSERTION_NORMALIZED` skips normalization of the assertion.
 */
export
const jidMatch: Matcher = createEqualityMatcher(
    decodeJidMatchAssertion,
    jidMatchTyped,
    undefined,
    false,
    normalizeJidMatchAssertion,
);

export default jidMatch;
