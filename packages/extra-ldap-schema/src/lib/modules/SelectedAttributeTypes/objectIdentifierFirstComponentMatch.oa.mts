/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { oid } from "../SelectedAttributeTypes/oid.oa.mjs";
// export { id_mr_objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/id-mr-objectIdentifierFirstComponentMatch.va.mjs";


/**
 * @summary objectIdentifierFirstComponentMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * objectIdentifierFirstComponentMatch MATCHING-RULE ::= {
 *   SYNTAX       OBJECT IDENTIFIER
 *   LDAP-SYNTAX  oid.&id
 *   LDAP-NAME    {"objectIdentifierFirstComponentMatch"}
 *   ID           id-mr-objectIdentifierFirstComponentMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const objectIdentifierFirstComponentMatch: MATCHING_RULE = undefined;

/* eslint-enable */
