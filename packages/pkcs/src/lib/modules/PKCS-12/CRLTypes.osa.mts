/* eslint-disable */
import { type BAG_TYPE } from "../PKCS-12/BAG-TYPE.oca.mjs";
import { x509CRL } from "../PKCS-12/x509CRL.oa.mjs";

/**
 * @summary CRLTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CRLTypes BAG-TYPE ::= {
 *     x509CRL,
 *     ... -- For future extensions
 * }
 * ```
 *
 * @constant
 * @type {BAG_TYPE[]}
 *
 */
export const CRLTypes: BAG_TYPE<any>[] = [x509CRL];

/* eslint-enable */
