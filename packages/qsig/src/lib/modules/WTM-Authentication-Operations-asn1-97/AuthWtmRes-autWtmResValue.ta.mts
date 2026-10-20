/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AuthWtmRes_autWtmResValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthWtmRes-autWtmResValue ::= ENUMERATED {
 *     auth-res-correct(0),
 *     auth-res-incorrect(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AuthWtmRes_autWtmResValue {
    auth_res_correct = 0,
    auth_res_incorrect = 1,
}

/**
 * @summary AuthWtmRes_autWtmResValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthWtmRes-autWtmResValue ::= ENUMERATED {
 *     auth-res-correct(0),
 *     auth-res-incorrect(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AuthWtmRes_autWtmResValue = _enum_for_AuthWtmRes_autWtmResValue;

/**
 * @summary AuthWtmRes_autWtmResValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthWtmRes-autWtmResValue ::= ENUMERATED {
 *     auth-res-correct(0),
 *     auth-res-incorrect(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AuthWtmRes_autWtmResValue = _enum_for_AuthWtmRes_autWtmResValue;

/**
 * @summary AuthWtmRes_autWtmResValue_auth_res_correct
 * @constant
 * @type {number}
 */
export
const AuthWtmRes_autWtmResValue_auth_res_correct: AuthWtmRes_autWtmResValue = AuthWtmRes_autWtmResValue.auth_res_correct; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary auth_res_correct
 * @constant
 * @type {number}
 */
export
const auth_res_correct: AuthWtmRes_autWtmResValue = AuthWtmRes_autWtmResValue.auth_res_correct; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AuthWtmRes_autWtmResValue_auth_res_incorrect
 * @constant
 * @type {number}
 */
export
const AuthWtmRes_autWtmResValue_auth_res_incorrect: AuthWtmRes_autWtmResValue = AuthWtmRes_autWtmResValue.auth_res_incorrect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary auth_res_incorrect
 * @constant
 * @type {number}
 */
export
const auth_res_incorrect: AuthWtmRes_autWtmResValue = AuthWtmRes_autWtmResValue.auth_res_incorrect; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_AuthWtmRes_autWtmResValue: $.ASN1Decoder<AuthWtmRes_autWtmResValue> = $._decodeEnumerated;

export
const _encode_AuthWtmRes_autWtmResValue: $.ASN1Encoder<AuthWtmRes_autWtmResValue> = $._encodeEnumerated;

/* eslint-enable */
