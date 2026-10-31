/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
// export { id_mr_uriMatch } from "../SelectedAttributeTypes/id-mr-uriMatch.va.mjs";


/**
 * @summary uriMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * uriMatch MATCHING-RULE ::= {
 *   SYNTAX       UTF8String
 *   LDAP-SYNTAX  directoryString.&id
 *   LDAP-NAME    {"uriMatch"}
 *   ID           id-mr-uriMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const uriMatch: MATCHING_RULE = undefined;

/* eslint-enable */
