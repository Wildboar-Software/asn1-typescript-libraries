/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { NameAndOptionalUID, _decode_NameAndOptionalUID, _encode_NameAndOptionalUID } from "../SelectedAttributeTypes/NameAndOptionalUID.ta.mjs";
// export { nameAndOptionalUID } from "../SelectedAttributeTypes/nameAndOptionalUID.oa.mjs";
// export { id_mr_uniqueMemberMatch } from "../SelectedAttributeTypes/id-mr-uniqueMemberMatch.va.mjs";


/**
 * @summary uniqueMemberMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * uniqueMemberMatch MATCHING-RULE ::= {
 *   SYNTAX       NameAndOptionalUID
 *   LDAP-SYNTAX  nameAndOptionalUID.&id
 *   LDAP-NAME    {"uniqueMemberMatch"}
 *   ID           id-mr-uniqueMemberMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const uniqueMemberMatch: MATCHING_RULE = undefined;

/* eslint-enable */
