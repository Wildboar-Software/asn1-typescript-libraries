/* eslint-disable */
// export { Certificate, _decode_Certificate, _encode_Certificate } from "../AuthenticationFramework/Certificate.ta.mjs";
// export { id_lsx_x509Certificate } from "../AuthenticationFramework/id-lsx-x509Certificate.va.mjs";
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";


/**
 * @summary x509Certificate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * x509Certificate SYNTAX-NAME ::= {
 *   LDAP-DESC         "X.509 Certificate"
 *   DIRECTORY SYNTAX  Certificate
 *   ID                id-lsx-x509Certificate }
 * ```
 * 
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export
const x509Certificate: SYNTAX_NAME = undefined;

/* eslint-enable */
