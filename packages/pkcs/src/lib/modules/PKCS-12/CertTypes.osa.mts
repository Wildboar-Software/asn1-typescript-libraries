/* eslint-disable */
import { type BAG_TYPE } from "../PKCS-12/BAG-TYPE.oca.mjs";
import { sdsiCertificate } from "../PKCS-12/sdsiCertificate.oa.mjs";
import { x509Certificate } from "../PKCS-12/x509Certificate.oa.mjs";

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

/* eslint-enable */
