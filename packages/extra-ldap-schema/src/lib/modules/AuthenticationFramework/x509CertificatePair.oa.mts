/* eslint-disable */
// export { CertificatePair, _decode_CertificatePair, _encode_CertificatePair } from "../AuthenticationFramework/CertificatePair.ta.mjs";
// export { id_lsx_x509CertificatePair } from "../AuthenticationFramework/id-lsx-x509CertificatePair.va.mjs";
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";


/**
 * @summary x509CertificatePair
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * x509CertificatePair SYNTAX-NAME ::= {
 *   LDAP-DESC         "X.509 Certificate Pair"
 *   DIRECTORY SYNTAX  CertificatePair
 *   ID                id-lsx-x509CertificatePair }
 * ```
 * 
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export
const x509CertificatePair: SYNTAX_NAME = undefined;

/* eslint-enable */
