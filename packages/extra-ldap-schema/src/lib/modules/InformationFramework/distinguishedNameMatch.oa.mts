/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
// export { dn } from "../SelectedAttributeTypes/dn.oa.mjs";
// export { id_mr_distinguishedNameMatch } from "../InformationFramework/id-mr-distinguishedNameMatch.va.mjs";


/**
 * @summary distinguishedNameMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * distinguishedNameMatch MATCHING-RULE ::= {
 *   SYNTAX       DistinguishedName
 *   LDAP-SYNTAX  dn.&id
 *   LDAP-NAME    {"distinguishedNameMatch"}
 *   ID           id-mr-distinguishedNameMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const distinguishedNameMatch: MATCHING_RULE = undefined;

/* eslint-enable */
