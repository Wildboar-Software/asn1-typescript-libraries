/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AuthCtmRes_result
 * @description
 *
 * Comparison of the response received from the CTM user with the expected
 * response (ECMA-243 §6.5.5.1). If the CTM user does not answer, the Visitor
 * PINX returns `temporarilyUnavailable` (§6.5.5.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-243/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthCtmRes-result ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AuthCtmRes_result {
    auth_res_correct = 0,
    auth_res_incorrect = 1,
}

/**
 * @summary AuthCtmRes_result
 * @description
 *
 * Comparison of the response received from the CTM user with the expected
 * response (ECMA-243 §6.5.5.1). If the CTM user does not answer, the Visitor
 * PINX returns `temporarilyUnavailable` (§6.5.5.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-243/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthCtmRes-result ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type AuthCtmRes_result = _enum_for_AuthCtmRes_result;

/**
 * @summary AuthCtmRes_result
 * @description
 *
 * Comparison of the response received from the CTM user with the expected
 * response (ECMA-243 §6.5.5.1). If the CTM user does not answer, the Visitor
 * PINX returns `temporarilyUnavailable` (§6.5.5.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-243/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthCtmRes-result ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const AuthCtmRes_result = _enum_for_AuthCtmRes_result;

/**
 * @summary AuthCtmRes_result_auth_res_correct
 * @description
 * CTM user response matched the expected response. ECMA-243 §6.5.5.1.
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-243/
 * @constant
 * @type {number}
 */
export
const AuthCtmRes_result_auth_res_correct = AuthCtmRes_result.auth_res_correct satisfies AuthCtmRes_result; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary auth_res_correct
 * @description Alias of {@link AuthCtmRes_result_auth_res_correct}.
 * @constant
 * @type {number}
 */
export
const auth_res_correct = AuthCtmRes_result.auth_res_correct satisfies AuthCtmRes_result; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AuthCtmRes_result_auth_res_incorrect
 * @description
 * CTM user response differed from the expected response. ECMA-243 §6.5.5.1.
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-243/
 * @constant
 * @type {number}
 */
export
const AuthCtmRes_result_auth_res_incorrect = AuthCtmRes_result.auth_res_incorrect satisfies AuthCtmRes_result; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary auth_res_incorrect
 * @description Alias of {@link AuthCtmRes_result_auth_res_incorrect}.
 * @constant
 * @type {number}
 */
export
const auth_res_incorrect = AuthCtmRes_result.auth_res_incorrect satisfies AuthCtmRes_result; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_AuthCtmRes_result: $.ASN1Decoder<AuthCtmRes_result> = $._decodeEnumerated;

export
const _encode_AuthCtmRes_result: $.ASN1Encoder<AuthCtmRes_result> = $._encodeEnumerated;

/* eslint-enable */
