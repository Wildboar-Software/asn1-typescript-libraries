import type EqualityMatcher from "../types/EqualityMatcher";
import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type {
    GeneralName,
} from "../modules/CertificateExtensions/GeneralName.ta";
import type {
    GeneralSubtree,
} from "../modules/CertificateExtensions/GeneralSubtree.ta";
import compareDistinguishedName from "../comparators/compareDistinguishedName";


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
 */
export
function dnWithinGeneralSubtree (
    gn: GeneralName,
    subtree: GeneralSubtree,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    if (("dNSName" in gn) && ("dNSName" in subtree.base)) {
        const baseDCs = subtree.base.dNSName.toLowerCase()
            .split(".")
            .filter((str) => (str.length > 0));
        const nameDCs = gn.dNSName.toLowerCase()
            .split(".")
            .filter((str) => (str.length > 0));
        if (nameDCs.length < (baseDCs.length + (subtree.minimum ?? 0))) {
            return false;
        }
        if (nameDCs.length > (baseDCs.length + (subtree.maximum ?? Infinity))) {
            return false;
        }
        return (nameDCs.join(".").endsWith(baseDCs.join(".")));
    } else if (("directoryName" in gn) && ("directoryName" in subtree.base)) {
        const base = subtree.base.directoryName.rdnSequence;
        const entry = gn.directoryName.rdnSequence;
        if (entry.length < (base.length + (subtree.minimum ?? 0))) {
            return false;
        }
        if (entry.length > (base.length + (subtree.maximum ?? Infinity))) {
            return false;
        }
        return compareDistinguishedName(
            base,
            entry.slice(0, base.length),
            getEqualityMatcher,
        );
    } else if (("registeredID" in gn) && ("registeredID" in subtree.base)) {
        return (gn.registeredID.toString().endsWith(subtree.base.registeredID.toString()));
    } else {
        return false;
    }
}

export default dnWithinGeneralSubtree;
