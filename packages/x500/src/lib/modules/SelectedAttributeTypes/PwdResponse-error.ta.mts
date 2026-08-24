/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

export enum _enum_for_PwdResponse_error {
    passwordExpired = 0,
    changeAfterReset = 1,
}

/**
 * @summary PwdResponse_error
 * @description
 *
 * `passwordExpired` may pair with `graceRemaining`. `changeAfterReset`
 * ⇒ warning shall not be present; only change-password.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PwdResponse-error ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type PwdResponse_error = _enum_for_PwdResponse_error | ENUMERATED;

/**
 * @summary PwdResponse_error_passwordExpired
 * @description
 *
 * May pair with `graceRemaining`. With `timeleft` = 0 or
 * `graceRemaining` = 0 on master ⇒ only change-password.
 *
 * @constant
 * @type {number}
 */
export const PwdResponse_error_passwordExpired: PwdResponse_error = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary passwordExpired
 * @description
 *
 * May pair with `graceRemaining`. With `timeleft` = 0 or
 * `graceRemaining` = 0 on master ⇒ only change-password.
 *
 * @constant
 * @type {number}
 */
export const passwordExpired: PwdResponse_error = PwdResponse_error_passwordExpired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PwdResponse_error_changeAfterReset
 * @description
 *
 * Warning shall not be present; only change-password.
 *
 * @constant
 * @type {number}
 */
export const PwdResponse_error_changeAfterReset: PwdResponse_error = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary changeAfterReset
 * @description
 *
 * Warning shall not be present; only change-password.
 *
 * @constant
 * @type {number}
 */
export const changeAfterReset: PwdResponse_error = PwdResponse_error_changeAfterReset; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_PwdResponse_error = $._decodeEnumerated;


export const _encode_PwdResponse_error = $._encodeEnumerated;


/* eslint-enable */
