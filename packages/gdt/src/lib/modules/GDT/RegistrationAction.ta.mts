/* eslint-disable */
import {
    type INTEGER
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
const RegistrationAction_ra_reg_request: 0 = 0 satisfies RegistrationAction; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RegistrationAction_ra_reg_request
 * @constant
 * @type {number}
 */
export
const ra_reg_request: 0 = RegistrationAction_ra_reg_request; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RegistrationAction_ra_reg_result
 * @constant
 * @type {number}
 */
export
const RegistrationAction_ra_reg_result: 1 = 1 satisfies RegistrationAction; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RegistrationAction_ra_reg_result
 * @constant
 * @type {number}
 */
export
const ra_reg_result: 1 = RegistrationAction_ra_reg_result; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RegistrationAction: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_RegistrationAction: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
