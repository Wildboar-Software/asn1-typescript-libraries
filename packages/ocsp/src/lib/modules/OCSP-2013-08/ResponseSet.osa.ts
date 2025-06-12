/* eslint-disable */
import { basicResponse } from "../OCSP-2013-08/basicResponse.oa.js";
import { RESPONSE } from "../OCSP-2013-08/RESPONSE.oca.js";
export { basicResponse } from "../OCSP-2013-08/basicResponse.oa.js";
export { RESPONSE } from "../OCSP-2013-08/RESPONSE.oca.js";

/* START_OF_SYMBOL_DEFINITION ResponseSet */
/**
 * @summary ResponseSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseSet RESPONSE ::= {basicResponse, ...}
 * ```
 *
 * @constant
 * @type {RESPONSE[]}
 *
 */
export const ResponseSet: RESPONSE<any>[] = [basicResponse];
/* END_OF_SYMBOL_DEFINITION ResponseSet */

/* eslint-enable */
