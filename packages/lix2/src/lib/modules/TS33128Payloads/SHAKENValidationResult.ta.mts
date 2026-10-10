/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SHAKENValidationResult
 * @description
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
const SHAKENValidationResult_tNValidationPassed: SHAKENValidationResult = SHAKENValidationResult.tNValidationPassed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tNValidationPassed
 * @constant
 * @type {number}
 */
export
const tNValidationPassed: SHAKENValidationResult = SHAKENValidationResult.tNValidationPassed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SHAKENValidationResult_tNValidationFailed
 * @constant
 * @type {number}
 */
export
const SHAKENValidationResult_tNValidationFailed: SHAKENValidationResult = SHAKENValidationResult.tNValidationFailed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tNValidationFailed
 * @constant
 * @type {number}
 */
export
const tNValidationFailed: SHAKENValidationResult = SHAKENValidationResult.tNValidationFailed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SHAKENValidationResult_noTNValidation
 * @constant
 * @type {number}
 */
export
const SHAKENValidationResult_noTNValidation: SHAKENValidationResult = SHAKENValidationResult.noTNValidation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noTNValidation
 * @constant
 * @type {number}
 */
export
const noTNValidation: SHAKENValidationResult = SHAKENValidationResult.noTNValidation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) SHAKENValidationResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SHAKENValidationResult = $._decodeEnumerated;

/**
 * @summary Encodes a(n) SHAKENValidationResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SHAKENValidationResult, encoded as an ASN.1 Element.
 */
export const _encode_SHAKENValidationResult = $._encodeEnumerated;


/* eslint-enable */
