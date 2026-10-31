/* eslint-disable */
// export { DomainName, _decode_DomainName, _encode_DomainName } from "../SelectedAttributeTypes/DomainName.ta.mjs";
// export { id_asx_dnsString } from "../SelectedAttributeTypes/id-asx-dnsString.va.mjs";
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";


/**
 * @summary dnsString
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dnsString SYNTAX-NAME ::= {
 *   LDAP-DESC         "DNS Name String"
 *   DIRECTORY SYNTAX  DomainName
 *   ID                id-asx-dnsString }
 * ```
 * 
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export
const dnsString: SYNTAX_NAME = undefined;

/* eslint-enable */
