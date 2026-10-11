/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RegistrationAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RegistrationAction  ::=  INTEGER {
 *     ra-reg-request  (0),
 *     ra-reg-result   (1)
 * }
 * ```
 */
export
type RegistrationAction = INTEGER;

/**
 * @summary RegistrationAction_ra_reg_request
 * @constant
 * @type {number}
 */
export
const RegistrationAction_ra_reg_request: RegistrationAction = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RegistrationAction_ra_reg_request
 * @constant
 * @type {number}
 */
export
const ra_reg_request: RegistrationAction = RegistrationAction_ra_reg_request; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RegistrationAction_ra_reg_result
 * @constant
 * @type {number}
 */
export
const RegistrationAction_ra_reg_result: RegistrationAction = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RegistrationAction_ra_reg_result
 * @constant
 * @type {number}
 */
export
const ra_reg_result: RegistrationAction = RegistrationAction_ra_reg_result; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RegistrationAction = $._decodeInteger;
export const _encode_RegistrationAction = $._encodeInteger;


/* eslint-enable */
