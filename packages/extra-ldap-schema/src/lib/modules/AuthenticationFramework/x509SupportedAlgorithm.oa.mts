/* eslint-disable */
// export { SupportedAlgorithm, _decode_SupportedAlgorithm, _encode_SupportedAlgorithm } from "../AuthenticationFramework/SupportedAlgorithm.ta.mjs";
// export { id_lsx_x509SupportedAlgorithm } from "../AuthenticationFramework/id-lsx-x509SupportedAlgorithm.va.mjs";
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";


/**
 * @summary x509SupportedAlgorithm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * x509SupportedAlgorithm SYNTAX-NAME ::= {
 *   LDAP-DESC         "X.509 Supported Algorithm"
 *   DIRECTORY SYNTAX  SupportedAlgorithm
 *   ID                id-lsx-x509SupportedAlgorithm }
 * ```
 * 
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export
const x509SupportedAlgorithm: SYNTAX_NAME = undefined;

/* eslint-enable */
