/* eslint-disable */
// export { CertificateList, _decode_CertificateList, _encode_CertificateList } from "../AuthenticationFramework/CertificateList.ta.mjs";
// export { id_lsx_x509CertificateList } from "../AuthenticationFramework/id-lsx-x509CertificateList.va.mjs";
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";


/**
 * @summary x509CertificateList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * x509CertificateList SYNTAX-NAME ::= {
 *   LDAP-DESC         "X.509 Certificate List"
 *   DIRECTORY SYNTAX  CertificateList
 *   ID                id-lsx-x509CertificateList }
 * ```
 * 
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export
const x509CertificateList: SYNTAX_NAME = undefined;

/* eslint-enable */
