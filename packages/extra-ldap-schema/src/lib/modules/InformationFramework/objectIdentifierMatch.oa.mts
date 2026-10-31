/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { oid } from "../SelectedAttributeTypes/oid.oa.mjs";
// export { id_mr_objectIdentifierMatch } from "../InformationFramework/id-mr-objectIdentifierMatch.va.mjs";


/**
 * @summary objectIdentifierMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * objectIdentifierMatch MATCHING-RULE ::= {
 *   SYNTAX       OBJECT IDENTIFIER
 *   LDAP-SYNTAX  oid.&id
 *   LDAP-NAME    {"objectIdentifierMatch"}
 *   ID           id-mr-objectIdentifierMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const objectIdentifierMatch: MATCHING_RULE = undefined;

/* eslint-enable */
