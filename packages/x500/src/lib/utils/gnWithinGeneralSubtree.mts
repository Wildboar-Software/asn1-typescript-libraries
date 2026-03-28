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

const ID_SRV_NAME = ObjectIdentifier.fromString("1.3.6.1.5.5.7.8.7");

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
            const baseNorm = domainToASCII(baseDomain).toLowerCase();
            const nameNorm = domainToASCII(nameDomain).toLowerCase();
            if (baseNorm.length === nameNorm.length) {
                return baseNorm === nameNorm;
            }
            return (
                nameNorm.endsWith(baseNorm)
                && (nameNorm[nameNorm.length - (1 + baseNorm.length)] === '.')
            );
        } else { // There is no "." in the base (base is just a plain service name)
            return (nameService.toLowerCase() === base.toLowerCase());
        }
    } else { // base does not start with "_" (base is just a plain domain name)
        const a = domainToASCII(name.slice(nameFirstDot + 1)).toLowerCase();
        const b = domainToASCII(base).toLowerCase();
        if (a.length === b.length) {
            return a === b;
        }
        return a.endsWith(b) && (a[a.length - (1 + b.length)] === '.');
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
 * structure to it, this returns `false`. The variants that _do_ have a
 * well-defined hierarchical structure are:
 *
 * - `dNSName`
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
        const base = domainToASCII(subtree.base.dNSName.trim()).toLowerCase();
        const name = domainToASCII(gn.dNSName.trim()).toLowerCase();
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
        if (name.length === base.length) {
            return name === base;
        }
        return (
            name.endsWith(base)
            && (name[name.length - (1 + base.length)] === '.')
        );
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
        return false;
    }
}

export default gnWithinGeneralSubtree;
