/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CheckResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CheckResult  ::=  ENUMERATED {
 *     locInfChk-correct(0),
 *     locInfChk-incorrect(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CheckResult {
    locInfChk_correct = 0,
    locInfChk_incorrect = 1,
}

/**
 * @summary CheckResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CheckResult  ::=  ENUMERATED {
 *     locInfChk-correct(0),
 *     locInfChk-incorrect(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CheckResult = _enum_for_CheckResult;

/**
 * @summary CheckResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CheckResult  ::=  ENUMERATED {
 *     locInfChk-correct(0),
 *     locInfChk-incorrect(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const CheckResult = _enum_for_CheckResult;

/**
 * @summary CheckResult_locInfChk_correct
 * @constant
 * @type {number}
 */
export
const CheckResult_locInfChk_correct: CheckResult = CheckResult.locInfChk_correct; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locInfChk_correct
 * @constant
 * @type {number}
 */
export
const locInfChk_correct: CheckResult = CheckResult.locInfChk_correct; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CheckResult_locInfChk_incorrect
 * @constant
 * @type {number}
 */
export
const CheckResult_locInfChk_incorrect: CheckResult = CheckResult.locInfChk_incorrect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locInfChk_incorrect
 * @constant
 * @type {number}
 */
export
const locInfChk_incorrect: CheckResult = CheckResult.locInfChk_incorrect; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_CheckResult: $.ASN1Decoder<CheckResult> = $._decodeEnumerated;

export
const _encode_CheckResult: $.ASN1Encoder<CheckResult> = $._encodeEnumerated;

/* eslint-enable */
