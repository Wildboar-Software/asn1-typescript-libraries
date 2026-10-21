/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AuthCtmRes_result
 * @description
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
 * @constant
 * @type {number}
 */
export
const AuthCtmRes_result_auth_res_correct: AuthCtmRes_result = AuthCtmRes_result.auth_res_correct; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary auth_res_correct
 * @constant
 * @type {number}
 */
export
const auth_res_correct: AuthCtmRes_result = AuthCtmRes_result.auth_res_correct; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AuthCtmRes_result_auth_res_incorrect
 * @constant
 * @type {number}
 */
export
const AuthCtmRes_result_auth_res_incorrect: AuthCtmRes_result = AuthCtmRes_result.auth_res_incorrect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary auth_res_incorrect
 * @constant
 * @type {number}
 */
export
const auth_res_incorrect: AuthCtmRes_result = AuthCtmRes_result.auth_res_incorrect; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_AuthCtmRes_result: $.ASN1Decoder<AuthCtmRes_result> = $._decodeEnumerated;

export
const _encode_AuthCtmRes_result: $.ASN1Encoder<AuthCtmRes_result> = $._encodeEnumerated;

/* eslint-enable */
