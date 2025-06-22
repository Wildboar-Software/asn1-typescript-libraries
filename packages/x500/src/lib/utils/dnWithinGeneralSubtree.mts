import type EqualityMatcher from "../types/EqualityMatcher.mjs";
import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type {
    GeneralName,
} from "../modules/CertificateExtensions/GeneralName.ta.mjs";
import type {
    GeneralSubtree,
} from "../modules/CertificateExtensions/GeneralSubtree.ta.mjs";
import compareDistinguishedName from "../comparators/compareDistinguishedName.mjs";


/**
 * @summary Determine whether a distinguished name falls within a subtree.
 * @description
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
 * @returns {Boolean} `true` if the distinguished name falls within the subtree
 * @function
 */
export
function dnWithinGeneralSubtree (
    gn: GeneralName,
    subtree: GeneralSubtree,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    const minimum: number = (subtree.minimum ? Number(subtree.minimum) : 0);
    const maximum: number = (subtree.maximum ? Number(subtree.maximum) : Infinity);
    if (("dNSName" in gn) && ("dNSName" in subtree.base)) {
        const baseDCs = subtree.base.dNSName.toLowerCase()
            .split(".")
            .filter((str) => (str.length > 0));
        const nameDCs = gn.dNSName.toLowerCase()
            .split(".")
            .filter((str) => (str.length > 0));
        if (nameDCs.length < (baseDCs.length + minimum)) {
            return false;
        }
        if (nameDCs.length > (baseDCs.length + maximum)) {
            return false;
        }
        return (nameDCs.join(".").endsWith(baseDCs.join(".")));
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
            getEqualityMatcher ?? (() => () => false),
        );
    } else if (("registeredID" in gn) && ("registeredID" in subtree.base)) {
        return (gn.registeredID.toString().endsWith(subtree.base.registeredID.toString()));
    } else {
        return false;
    }
}

export default dnWithinGeneralSubtree;
