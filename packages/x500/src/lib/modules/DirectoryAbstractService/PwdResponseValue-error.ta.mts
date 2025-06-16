/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

export enum _enum_for_PwdResponseValue_error {
    passwordExpired = 0,
    changeAfterReset = 1,
}

/**
 * @summary PwdResponseValue_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PwdResponseValue-error ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export type PwdResponseValue_error =
    | _enum_for_PwdResponseValue_error
    | ENUMERATED;

/**
 * @summary PwdResponseValue_error_passwordExpired
 * @constant
 * @type {number}
 */
export const PwdResponseValue_error_passwordExpired: PwdResponseValue_error = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary passwordExpired
 * @constant
 * @type {number}
 */
export const passwordExpired: PwdResponseValue_error = PwdResponseValue_error_passwordExpired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PwdResponseValue_error_changeAfterReset
 * @constant
 * @type {number}
 */
export const PwdResponseValue_error_changeAfterReset: PwdResponseValue_error = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary changeAfterReset
 * @constant
 * @type {number}
 */
export const changeAfterReset: PwdResponseValue_error = PwdResponseValue_error_changeAfterReset; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_PwdResponseValue_error = $._decodeEnumerated;


export const _encode_PwdResponseValue_error = $._encodeEnumerated;


/* eslint-enable */
