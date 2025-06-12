/* eslint-disable */
import { BAG_TYPE } from "../PKCS-12/BAG-TYPE.oca.js";
import { x509CRL } from "../PKCS-12/x509CRL.oa.js";
export { BAG_TYPE } from "../PKCS-12/BAG-TYPE.oca.js";
export { x509CRL } from "../PKCS-12/x509CRL.oa.js";

/* START_OF_SYMBOL_DEFINITION CRLTypes */
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
/* END_OF_SYMBOL_DEFINITION CRLTypes */

/* eslint-enable */
