/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SHAKENValidationResult
 * @description
 * 
 * SHAKEN validation result: TN-Validation-Passed, TN-Validation-Failed,
 * No-TN-Validation. See TS 24.229 [74] and IETF RFC 8588 [71].
 *
 * 3GPP TS 33.128, clause 7.11.2.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SHAKENValidationResult  ::=  ENUMERATED
 * {
 *     tNValidationPassed(1),
 *     tNValidationFailed(2),
 *     noTNValidation(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SHAKENValidationResult {
    tNValidationPassed = 1,
    tNValidationFailed = 2,
    noTNValidation = 3,
}

/**
 * @summary SHAKENValidationResult
 * @description
 * 
 * SHAKEN validation result: TN-Validation-Passed, TN-Validation-Failed,
 * No-TN-Validation. See TS 24.229 [74] and IETF RFC 8588 [71].
 *
 * 3GPP TS 33.128, clause 7.11.2.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SHAKENValidationResult  ::=  ENUMERATED
 * {
 *     tNValidationPassed(1),
 *     tNValidationFailed(2),
 *     noTNValidation(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SHAKENValidationResult = _enum_for_SHAKENValidationResult;

/**
 * @summary SHAKENValidationResult
 * @description
 * 
 * SHAKEN validation result: TN-Validation-Passed, TN-Validation-Failed,
 * No-TN-Validation. See TS 24.229 [74] and IETF RFC 8588 [71].
 *
 * 3GPP TS 33.128, clause 7.11.2.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SHAKENValidationResult  ::=  ENUMERATED
 * {
 *     tNValidationPassed(1),
 *     tNValidationFailed(2),
 *     noTNValidation(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SHAKENValidationResult = _enum_for_SHAKENValidationResult;

/**
 * @summary SHAKENValidationResult_tNValidationPassed
 * @constant
 * @type {number}
 */
export
const SHAKENValidationResult_tNValidationPassed = SHAKENValidationResult.tNValidationPassed satisfies SHAKENValidationResult; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tNValidationPassed
 * @constant
 * @type {number}
 */
export
const tNValidationPassed = SHAKENValidationResult.tNValidationPassed satisfies SHAKENValidationResult; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SHAKENValidationResult_tNValidationFailed
 * @constant
 * @type {number}
 */
export
const SHAKENValidationResult_tNValidationFailed = SHAKENValidationResult.tNValidationFailed satisfies SHAKENValidationResult; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tNValidationFailed
 * @constant
 * @type {number}
 */
export
const tNValidationFailed = SHAKENValidationResult.tNValidationFailed satisfies SHAKENValidationResult; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SHAKENValidationResult_noTNValidation
 * @constant
 * @type {number}
 */
export
const SHAKENValidationResult_noTNValidation = SHAKENValidationResult.noTNValidation satisfies SHAKENValidationResult; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noTNValidation
 * @constant
 * @type {number}
 */
export
const noTNValidation = SHAKENValidationResult.noTNValidation satisfies SHAKENValidationResult; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SHAKENValidationResult: $.ASN1Decoder<SHAKENValidationResult> = $._decodeEnumerated;
export const _encode_SHAKENValidationResult: $.ASN1Encoder<SHAKENValidationResult> = $._encodeEnumerated;


/* eslint-enable */
