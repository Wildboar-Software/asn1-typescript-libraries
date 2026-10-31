/* eslint-disable */
// export { SupportedPublicKeyAlgorithms, _decode_SupportedPublicKeyAlgorithms, _encode_SupportedPublicKeyAlgorithms } from "../AuthenticationFramework/SupportedPublicKeyAlgorithms.ta.mjs";
// export { id_asx_x509SupportedPublicKeyAlgos } from "../AuthenticationFramework/id-asx-x509SupportedPublicKeyAlgos.va.mjs";
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";


/**
 * @summary x509SupportedPublicKeyAlgos
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * x509SupportedPublicKeyAlgos SYNTAX-NAME ::= {
 *   LDAP-DESC         "X.509 supported publiv key algorithms"
 *   DIRECTORY SYNTAX  SupportedPublicKeyAlgorithms
 *   ID                id-asx-x509SupportedPublicKeyAlgos }
 * ```
 * 
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export
const x509SupportedPublicKeyAlgos: SYNTAX_NAME = undefined;

/* eslint-enable */
