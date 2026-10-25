/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SetFallbackAttributeResult
 * @description
 * 
 * Result of a setFallbackAttribute PSMO. SGP.32 v1.2, sections 2.11.2.1 and
 * 3.4.6.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetFallbackAttributeResult  ::=  INTEGER {
 *     ok(0),
 *     iccidOrAidNotFound (1),
 *     fallbackNotAllowed (2),
 *     fallbackProfileEnabled (3),
 *     undefinedError (127)
 * }
 * ```
 */
export
type SetFallbackAttributeResult = INTEGER;

/**
 * @summary SetFallbackAttributeResult_ok
 * @description
 * The target Profile already had the Fallback Attribute, or the attribute was
 * moved onto it from a disabled Fallback Profile. SGP.32 v1.2, section 3.4.6.
 * @constant
 * @type {number}
 */
export
const SetFallbackAttributeResult_ok = 0 satisfies SetFallbackAttributeResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SetFallbackAttributeResult_ok
 * @description
 * setFallbackAttribute succeeded. SGP.32 v1.2, section 3.4.6.
 * @constant
 * @type {number}
 */
export
const ok = SetFallbackAttributeResult_ok satisfies SetFallbackAttributeResult; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SetFallbackAttributeResult_iccidOrAidNotFound
 * @description
 * No Profile on the eUICC has the ICCID given to setFallbackAttribute. SGP.32
 * v1.2, section 3.4.6.
 * @constant
 * @type {number}
 */
export
const SetFallbackAttributeResult_iccidOrAidNotFound = 1 satisfies SetFallbackAttributeResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SetFallbackAttributeResult_iccidOrAidNotFound
 * @description
 * setFallbackAttribute found no Profile for that ICCID. SGP.32 v1.2, section
 * 3.4.6.
 * @constant
 * @type {number}
 */
export
const iccidOrAidNotFound = SetFallbackAttributeResult_iccidOrAidNotFound satisfies SetFallbackAttributeResult; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SetFallbackAttributeResult_fallbackNotAllowed
 * @description
 * fallbackAllowed is absent or FALSE on the target Profile, so the Fallback
 * Attribute stays unset. SGP.32 v1.2, section 3.4.6.
 * @constant
 * @type {number}
 */
export
const SetFallbackAttributeResult_fallbackNotAllowed = 2 satisfies SetFallbackAttributeResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SetFallbackAttributeResult_fallbackNotAllowed
 * @description
 * fallbackAllowed is absent or FALSE. SGP.32 v1.2, section 3.4.6.
 * @constant
 * @type {number}
 */
export
const fallbackNotAllowed = SetFallbackAttributeResult_fallbackNotAllowed satisfies SetFallbackAttributeResult; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SetFallbackAttributeResult_fallbackProfileEnabled
 * @description
 * Another Profile already has the Fallback Attribute and that Fallback Profile
 * is enabled. SGP.32 v1.2, section 3.4.6.
 * @constant
 * @type {number}
 */
export
const SetFallbackAttributeResult_fallbackProfileEnabled = 3 satisfies SetFallbackAttributeResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SetFallbackAttributeResult_fallbackProfileEnabled
 * @description
 * The current Fallback Profile is enabled. SGP.32 v1.2, section 3.4.6.
 * @constant
 * @type {number}
 */
export
const fallbackProfileEnabled = SetFallbackAttributeResult_fallbackProfileEnabled satisfies SetFallbackAttributeResult; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SetFallbackAttributeResult_undefinedError
 * @description
 * The target Profile is an Emergency Profile with ecallIndication TRUE. SGP.32
 * v1.2, section 3.4.6.
 * @constant
 * @type {number}
 */
export
const SetFallbackAttributeResult_undefinedError = 127 satisfies SetFallbackAttributeResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SetFallbackAttributeResult_undefinedError
 * @description
 * Emergency Profile with ecallIndication TRUE. SGP.32 v1.2, section 3.4.6.
 * @constant
 * @type {number}
 */
export
const undefinedError = SetFallbackAttributeResult_undefinedError satisfies SetFallbackAttributeResult; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_SetFallbackAttributeResult: $.ASN1Decoder<SetFallbackAttributeResult> = $._decodeInteger;
export const _encode_SetFallbackAttributeResult: $.ASN1Encoder<SetFallbackAttributeResult> = $._encodeInteger;


/* eslint-enable */
