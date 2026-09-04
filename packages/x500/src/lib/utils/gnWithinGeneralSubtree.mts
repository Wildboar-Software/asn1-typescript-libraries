import type EqualityMatcher from "../types/EqualityMatcher.mjs";
import type { OBJECT_IDENTIFIER, External } from "@wildboar/asn1";
import { ObjectIdentifier, ASN1Element, BERElement } from "@wildboar/asn1";
import type {
    GeneralName,
} from "../modules/CertificateExtensions/GeneralName.ta.mjs";
import type {
    GeneralSubtree,
} from "../modules/CertificateExtensions/GeneralSubtree.ta.mjs";
import compareDistinguishedName from "../comparators/compareDistinguishedName.mjs";
import { domainToASCII } from "node:url";
import { compareElements } from "../comparators/compareElements.mjs";
import { compareGeneralName } from "../comparators/compareGeneralName.mjs";

const ID_SRV_NAME = ObjectIdentifier.fromString("1.3.6.1.5.5.7.8.7");

/**
 * IDNA-normalize a DNS name, strip one trailing dot, and reject empty/invalid.
 * `domainToASCII` returns `""` for non-IDNA input, which would otherwise match
 * any name that ends with `"."`.
 *
 * @internal
 */
export
function normalizeDNSName(s: string): string | undefined {
    let ascii: string;
    try {
        ascii = domainToASCII(s.trim()).toLowerCase();
    } catch {
        return undefined;
    }
    if (ascii.endsWith(".")) {
        ascii = ascii.slice(0, -1);
    }
    if (ascii.length === 0) {
        return undefined;
    }
    return ascii;
}

/** @internal */
export
function dnsNameEqualsOrSubdomain(name: string, base: string): boolean {
    if (name.length < base.length) {
        return false;
    }
    if (name.length === base.length) {
        return name === base;
    }
    return (
        name.endsWith(base)
        && (name[name.length - (1 + base.length)] === ".")
    );
}

/**
 * RFC 5280 §4.2.1.10 rfc822Name constraints: a particular mailbox, all
 * mailboxes on a host, or all mailboxes in a domain (constraint starts with
 * `"."`).
 *
 * @internal
 */
export
function rfc822NameWithinSubtree(name: string, base: string): boolean {
    const nameTrim = name.trim();
    const baseTrim = base.trim();
    const nameAt = nameTrim.lastIndexOf("@");
    const baseAt = baseTrim.lastIndexOf("@");
    if (baseAt >= 0) {
        if (nameAt < 0) {
            return false;
        }
        const nameLocal = nameTrim.slice(0, nameAt);
        const baseLocal = baseTrim.slice(0, baseAt);
        if (nameLocal !== baseLocal) {
            return false;
        }
        const nameHost = normalizeDNSName(nameTrim.slice(nameAt + 1));
        const baseHost = normalizeDNSName(baseTrim.slice(baseAt + 1));
        return Boolean(nameHost && baseHost && (nameHost === baseHost));
    }
    if (nameAt < 0) {
        return false;
    }
    const nameHost = normalizeDNSName(nameTrim.slice(nameAt + 1));
    if (!nameHost) {
        return false;
    }
    if (baseTrim.startsWith(".")) {
        const domain = normalizeDNSName(baseTrim.slice(1));
        return Boolean(domain && dnsNameEqualsOrSubdomain(nameHost, domain));
    }
    const host = normalizeDNSName(baseTrim);
    return Boolean(host && (nameHost === host));
}

/**
 * RFC 5280 §4.2.1.10 iPAddress constraints: 8 octets (IPv4 address + mask) or
 * 32 octets (IPv6 address + mask). A 4- or 16-octet base is an exact address.
 *
 * @internal
 */
export
function ipAddressWithinSubtree(name: Uint8Array, base: Uint8Array): boolean {
    let address: Uint8Array;
    let mask: Uint8Array;
    let subject: Uint8Array;
    if ((base.length === 8) && (name.length === 4)) {
        address = base.subarray(0, 4);
        mask = base.subarray(4, 8);
        subject = name;
    } else if ((base.length === 32) && (name.length === 16)) {
        address = base.subarray(0, 16);
        mask = base.subarray(16, 32);
        subject = name;
    } else if (
        (base.length === name.length)
        && ((name.length === 4) || (name.length === 16))
    ) {
        for (let i = 0; i < name.length; i++) {
            if (base[i] !== name[i]) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
    for (let i = 0; i < subject.length; i++) {
        if ((subject[i] & mask[i]) !== (address[i] & mask[i])) {
            return false;
        }
    }
    return true;
}

/**
 * @summary Determine whether an SRVName matches a base SRVName.
 * @description
 * 
 * This is used to evaluate SRVName name constraints, per the procedures
 * described in
 * [IETF RFC 4985](https://datatracker.ietf.org/doc/html/rfc4985.html#section-4).
 * 
 * This name form isn't truly hierarchical, but since it has well-defined
 * procedures for evaluating name constraints, it is supported.
 * 
 * @param {string} base The base SRVName.
 * @param {string} name The name to be evaluated.
 * @returns {boolean} `true` if the name matches the base.
*/
export
function evaluateSRVNameConstraints(base: string, name: string): boolean {
    if (!name.startsWith("_")) {
        return false;
    }
    const nameFirstDot = name.indexOf(".");
    if (nameFirstDot < 0) {
        return false;
    }
    const nameService = name.slice(0, nameFirstDot);
    const nameDomain = name.slice(nameFirstDot + 1);
    if (base.startsWith("_")) {
        const baseFirstDot = base.indexOf(".");
        if (baseFirstDot >= 0) { // base is a service and domain (e.g. _ntp.example.com)
            const baseService = base.slice(0, baseFirstDot);
            const baseDomain = base.slice(baseFirstDot + 1);
            if (nameService.toLowerCase() !== baseService.toLowerCase()) {
                return false;
            }
            const baseNorm = normalizeDNSName(baseDomain);
            const nameNorm = normalizeDNSName(nameDomain);
            if (!baseNorm || !nameNorm) {
                return false;
            }
            return dnsNameEqualsOrSubdomain(nameNorm, baseNorm);
        } else { // There is no "." in the base (base is just a plain service name)
            return (nameService.toLowerCase() === base.toLowerCase());
        }
    } else { // base does not start with "_" (base is just a plain domain name)
        const a = normalizeDNSName(name.slice(nameFirstDot + 1));
        const b = normalizeDNSName(base);
        if (!a || !b) {
            return false;
        }
        return dnsNameEqualsOrSubdomain(a, b);
    }
}

// There are more elegant ways to do this, but this is the highest performance.
/** @internal */
export
function countDNSLabels(s: string): number {
    if (s.length === 0) {
        return 0;
    }
    let ret: number = 1;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '.') {
            ret++;
        }
    }
    return ret;
}

/** @internal */
export
function externalEncodingToElement(enc: External["encoding"]): ASN1Element | null {
    if (enc instanceof ASN1Element) {
        return enc;
    }
    if (enc instanceof Uint8ClampedArray) {
        return null;
    }
    const el = new BERElement();
    if (el.fromBytes(enc) != enc.length) {
        return null;
    }
    return el;
}

/**
 * @summary Determine whether an X.509v3 general name falls within a subtree.
 * @description
 *
 * If the `GeneralName` `gn` and the `base` of the `GeneralSubtree` `subtree`
 * differ by variant, this returns `false`.
 *
 * If the `GeneralName` variant used does not have a well-defined hierarchical
 * structure to it, this still returns `true` when the name is an exact match
 * for the subtree base and `minimum` is 0. Treating an unsupported form as
 * "not in the subtree" would fail-open for excluded subtrees. The variants
 * that _do_ have a well-defined hierarchical structure are:
 *
 * - `dNSName`
 * - `rfc822Name`
 * - `iPAddress`
 * - `directoryName`
 * - `registeredID`
 * - `otherName`, if the `SRVName` `OTHER-NAME` type is used
 * 
 * All of the registered IANA `OTHER-NAME` forms have been evaluated for
 * suitability, but only the `SRVName` form has clearly-defined
 * name constraints evaluation procedures. Oddly, the `SRVName` form does
 * not seem to use the `minimum` and `maximum` bounds; if the `minimum` is
 * set in this case, this implementation will always return `false`.
 *
 * ### Relevant ASN.1 Definitions
 *
 * ```asn1
 * GeneralSubtree ::= SEQUENCE {
 *     base          GeneralName,
 *     minimum  [0]  BaseDistance DEFAULT 0,
 *     maximum  [1]  BaseDistance OPTIONAL,
 *     ... }
 *
 * BaseDistance ::= INTEGER(0..MAX)
 *
 * GeneralName ::= CHOICE {
 *   otherName                  [0]  INSTANCE OF OTHER-NAME,
 *   rfc822Name                 [1]  IA5String,
 *   dNSName                    [2]  IA5String,
 *   x400Address                [3]  ORAddress,
 *   directoryName              [4]  Name,
 *   ediPartyName               [5]  EDIPartyName,
 *   uniformResourceIdentifier  [6]  IA5String,
 *   iPAddress                  [7]  OCTET STRING,
 *   registeredID               [8]  OBJECT IDENTIFIER,
 *   ... }
 * ```
 *
 * @returns {Boolean} `true` if the general name falls within the subtree
 * @function
 */
export
function gnWithinGeneralSubtree (
    gn: GeneralName,
    subtree: GeneralSubtree,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    const minimum: number = (subtree.minimum ? Number(subtree.minimum) : 0);
    const maximum: number = (subtree.maximum ? Number(subtree.maximum) : Infinity);
    if (maximum < minimum) {
        return false;
    }
    if (("otherName" in gn) && ("otherName" in subtree.base)) {
        if (minimum > 0) {
            return false;
        }
        const gnontype = gn.otherName.directReference;
        const basetype = subtree.base.otherName.directReference;
        if (!gnontype.isEqualTo(basetype)) {
            return false;
        }
        const ontype = gnontype;
        if (ontype.isEqualTo(ID_SRV_NAME)) {
            const name = externalEncodingToElement(gn.otherName.encoding);
            const base = externalEncodingToElement(subtree.base.otherName.encoding);
            if (!name || !base) {
                return false;
            }
            try {
                return evaluateSRVNameConstraints(base.utf8String, name.utf8String);
            } catch {
                return false;
            }
        }
        return false;
    }
    else if (("dNSName" in gn) && ("dNSName" in subtree.base)) {
        // Minimal-allocation approach.
        const base = normalizeDNSName(subtree.base.dNSName);
        const name = normalizeDNSName(gn.dNSName);
        if (!base || !name) {
            return false;
        }
        if (name.length < base.length) {
            return false; // It cannot possibly be equal or a subdomain.
        }
        const baseDCs = countDNSLabels(base);
        const nameDCs = countDNSLabels(name);
        if (nameDCs < (baseDCs + minimum)) {
            return false;
        }
        if (nameDCs > (baseDCs + maximum)) {
            return false;
        }
        return dnsNameEqualsOrSubdomain(name, base);
    } else if (("rfc822Name" in gn) && ("rfc822Name" in subtree.base)) {
        if (minimum > 0) {
            return false;
        }
        return rfc822NameWithinSubtree(gn.rfc822Name, subtree.base.rfc822Name);
    } else if (("iPAddress" in gn) && ("iPAddress" in subtree.base)) {
        if (minimum > 0) {
            return false;
        }
        return ipAddressWithinSubtree(gn.iPAddress, subtree.base.iPAddress);
    } else if (("directoryName" in gn) && ("directoryName" in subtree.base)) {
        const base = subtree.base.directoryName.rdnSequence;
        const entry = gn.directoryName.rdnSequence;
        if (entry.length < (base.length + minimum)) {
            return false;
        }
        if (entry.length > (base.length + maximum)) {
            return false;
        }
        return compareDistinguishedName(
            base,
            entry.slice(0, base.length),
            getEqualityMatcher ?? (() => compareElements),
        );
    } else if (("registeredID" in gn) && ("registeredID" in subtree.base)) {
        const gn_arcs: number[] = gn.registeredID.nodes;
        const base_arcs: number[] = subtree.base.registeredID.nodes;
        // Check that the base OID is a prefix of the GN
        let i = 0;
        for (const base_arc of base_arcs) {
            if (gn_arcs[i++] != base_arc) {
                return false;
            }
        }
        const remaining_arcs = gn_arcs.length - i;
        return ((remaining_arcs >= minimum) && (remaining_arcs <= maximum));
    } else {
        /**
         * Unsupported hierarchical forms still match when the names are equal
         * and `minimum` is 0. Returning `false` here used to fail-open for
         * excluded subtrees of those name forms.
         */
        if (minimum > 0) {
            return false;
        }
        return compareGeneralName(
            gn,
            subtree.base,
            getEqualityMatcher ?? (() => compareElements),
        );
    }
}

export default gnWithinGeneralSubtree;
