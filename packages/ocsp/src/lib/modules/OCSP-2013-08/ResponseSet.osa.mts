/* eslint-disable */
import { basicResponse } from "../OCSP-2013-08/basicResponse.oa.mjs";
import { RESPONSE } from "../OCSP-2013-08/RESPONSE.oca.mjs";

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

/* eslint-enable */
