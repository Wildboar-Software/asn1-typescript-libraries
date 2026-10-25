/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CheckResult
 * @description
 *
 * Outcome of a location-data check (ECMA-302 §6.3.1, §7.6). The invoker may act
 * on the value. The procedures are silent on which comparison produces either
 * value and on what the invoker must do.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-302/
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
 * Outcome of a location-data check (ECMA-302 §6.3.1, §7.6). The invoker may act
 * on the value. The procedures are silent on which comparison produces either
 * value and on what the invoker must do.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-302/
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
 * Outcome of a location-data check (ECMA-302 §6.3.1, §7.6). The invoker may act
 * on the value. The procedures are silent on which comparison produces either
 * value and on what the invoker must do.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-302/
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
const CheckResult: typeof _enum_for_CheckResult = _enum_for_CheckResult;

/**
 * @summary CheckResult_locInfChk_correct
 * @description
 *
 * Location information checked as correct. ECMA-302 §6.3.1 names this value.
 * §7.6 is silent on the comparison that produces it.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-302/
 * @constant
 * @type {number}
 */
export
const CheckResult_locInfChk_correct: _enum_for_CheckResult.locInfChk_correct = CheckResult.locInfChk_correct; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locInfChk_correct
 * @description Alias of {@link CheckResult_locInfChk_correct}.
 * @constant
 * @type {number}
 */
export
const locInfChk_correct: _enum_for_CheckResult.locInfChk_correct = CheckResult.locInfChk_correct; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CheckResult_locInfChk_incorrect
 * @description
 *
 * Location information checked as incorrect. ECMA-302 §6.3.1 names this value.
 * §7.6 is silent on the comparison that produces it.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-302/
 * @constant
 * @type {number}
 */
export
const CheckResult_locInfChk_incorrect: _enum_for_CheckResult.locInfChk_incorrect = CheckResult.locInfChk_incorrect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locInfChk_incorrect
 * @description Alias of {@link CheckResult_locInfChk_incorrect}.
 * @constant
 * @type {number}
 */
export
const locInfChk_incorrect: _enum_for_CheckResult.locInfChk_incorrect = CheckResult.locInfChk_incorrect; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_CheckResult: $.ASN1Decoder<CheckResult> = $._decodeEnumerated;

export
const _encode_CheckResult: $.ASN1Encoder<CheckResult> = $._encodeEnumerated;

/* eslint-enable */
