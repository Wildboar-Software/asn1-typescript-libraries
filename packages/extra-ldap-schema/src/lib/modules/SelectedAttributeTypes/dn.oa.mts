/* eslint-disable */
// export { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
// export { id_lsx_dn } from "../SelectedAttributeTypes/id-lsx-dn.va.mjs";
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";


/**
 * @summary dn
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dn SYNTAX-NAME ::= {
 *   LDAP-DESC         "DN"
 *   DIRECTORY SYNTAX  DistinguishedName
 *   ID                id-lsx-dn }
 * ```
 * 
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export
const dn: SYNTAX_NAME = undefined;

/* eslint-enable */
