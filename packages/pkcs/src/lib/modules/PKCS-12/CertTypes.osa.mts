/* eslint-disable */
import { BAG_TYPE } from "../PKCS-12/BAG-TYPE.oca.mjs";
import { sdsiCertificate } from "../PKCS-12/sdsiCertificate.oa.mjs";
import { x509Certificate } from "../PKCS-12/x509Certificate.oa.mjs";
export { BAG_TYPE } from "../PKCS-12/BAG-TYPE.oca.mjs";
export { sdsiCertificate } from "../PKCS-12/sdsiCertificate.oa.mjs";
export { x509Certificate } from "../PKCS-12/x509Certificate.oa.mjs";

/* START_OF_SYMBOL_DEFINITION CertTypes */
/**
 * @summary CertTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertTypes BAG-TYPE ::= {
 *     x509Certificate |
 *     sdsiCertificate,
 *     ... -- For future extensions
 * }
 * ```
 *
 * @constant
 * @type {BAG_TYPE[]}
 *
 */
export const CertTypes: BAG_TYPE<any>[] = [x509Certificate, sdsiCertificate];
/* END_OF_SYMBOL_DEFINITION CertTypes */

/* eslint-enable */
