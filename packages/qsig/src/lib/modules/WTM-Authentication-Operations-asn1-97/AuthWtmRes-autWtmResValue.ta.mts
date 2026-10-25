/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AuthWtmRes_autWtmResValue
 * @description
 *
 * Comparison of the response received from the WTM user with the expected
 * response (ECMA-306 §6.5.5.1). The component name in the module is
 * `autWtmResValue`. If the WTM user does not answer, the Visitor PINX returns
 * `temporarilyUnavailable` (§6.5.5.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
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
 * Comparison of the response received from the WTM user with the expected
 * response (ECMA-306 §6.5.5.1). The component name in the module is
 * `autWtmResValue`. If the WTM user does not answer, the Visitor PINX returns
 * `temporarilyUnavailable` (§6.5.5.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
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
 * Comparison of the response received from the WTM user with the expected
 * response (ECMA-306 §6.5.5.1). The component name in the module is
 * `autWtmResValue`. If the WTM user does not answer, the Visitor PINX returns
 * `temporarilyUnavailable` (§6.5.5.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
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
const AuthWtmRes_autWtmResValue: typeof _enum_for_AuthWtmRes_autWtmResValue = _enum_for_AuthWtmRes_autWtmResValue;

/**
 * @summary AuthWtmRes_autWtmResValue_auth_res_correct
 * @description
 * WTM user response matched the expected response. ECMA-306 §6.5.5.1.
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
 * @constant
 * @type {number}
 */
export
const AuthWtmRes_autWtmResValue_auth_res_correct: _enum_for_AuthWtmRes_autWtmResValue.auth_res_correct = AuthWtmRes_autWtmResValue.auth_res_correct; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary auth_res_correct
 * @description Alias of {@link AuthWtmRes_autWtmResValue_auth_res_correct}.
 * @constant
 * @type {number}
 */
export
const auth_res_correct: _enum_for_AuthWtmRes_autWtmResValue.auth_res_correct = AuthWtmRes_autWtmResValue.auth_res_correct; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AuthWtmRes_autWtmResValue_auth_res_incorrect
 * @description
 * WTM user response differed from the expected response. ECMA-306 §6.5.5.1.
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
 * @constant
 * @type {number}
 */
export
const AuthWtmRes_autWtmResValue_auth_res_incorrect: _enum_for_AuthWtmRes_autWtmResValue.auth_res_incorrect = AuthWtmRes_autWtmResValue.auth_res_incorrect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary auth_res_incorrect
 * @description Alias of {@link AuthWtmRes_autWtmResValue_auth_res_incorrect}.
 * @constant
 * @type {number}
 */
export
const auth_res_incorrect: _enum_for_AuthWtmRes_autWtmResValue.auth_res_incorrect = AuthWtmRes_autWtmResValue.auth_res_incorrect; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_AuthWtmRes_autWtmResValue: $.ASN1Decoder<AuthWtmRes_autWtmResValue> = $._decodeEnumerated;

export
const _encode_AuthWtmRes_autWtmResValue: $.ASN1Encoder<AuthWtmRes_autWtmResValue> = $._encodeEnumerated;

/* eslint-enable */
