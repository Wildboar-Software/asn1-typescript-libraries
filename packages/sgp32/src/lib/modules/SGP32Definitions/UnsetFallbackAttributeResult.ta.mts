/* eslint-disable */
import {
    type ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UnsetFallbackAttributeResult
 * @description
 * 
 * Result of an unsetFallbackAttribute PSMO. SGP.32 v1.2, sections 2.11.2.1 and
 * 3.4.7.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnsetFallbackAttributeResult  ::=  INTEGER {
 *     ok(0),
 *     noFallbackAttribute(2),
 *     fallbackProfileEnabled (3),
 *     commandError(7),    
 *     undefinedError (127)
 * }
 * ```
 */
export
type UnsetFallbackAttributeResult = INTEGER;

/**
 * @summary UnsetFallbackAttributeResult_ok
 * @description
 * The Fallback Profile was disabled and its Fallback Attribute was cleared.
 * The eUICC then has no Fallback Profile. SGP.32 v1.2, section 3.4.7.
 * @constant
 * @type {number}
 */
export
const UnsetFallbackAttributeResult_ok: UnsetFallbackAttributeResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UnsetFallbackAttributeResult_ok
 * @description
 * The Fallback Attribute was cleared. SGP.32 v1.2, section 3.4.7.
 * @constant
 * @type {number}
 */
export
const ok: UnsetFallbackAttributeResult = UnsetFallbackAttributeResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UnsetFallbackAttributeResult_noFallbackAttribute
 * @description
 * No Profile on the eUICC has the Fallback Attribute set. SGP.32 v1.2, section
 * 3.4.7.
 * @constant
 * @type {number}
 */
export
const UnsetFallbackAttributeResult_noFallbackAttribute: UnsetFallbackAttributeResult = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UnsetFallbackAttributeResult_noFallbackAttribute
 * @description
 * No Fallback Attribute is set. SGP.32 v1.2, section 3.4.7.
 * @constant
 * @type {number}
 */
export
const noFallbackAttribute: UnsetFallbackAttributeResult = UnsetFallbackAttributeResult_noFallbackAttribute; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UnsetFallbackAttributeResult_fallbackProfileEnabled
 * @description
 * A Fallback Profile exists and it is enabled, so the attribute stays set.
 * SGP.32 v1.2, section 3.4.7.
 * @constant
 * @type {number}
 */
export
const UnsetFallbackAttributeResult_fallbackProfileEnabled: UnsetFallbackAttributeResult = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UnsetFallbackAttributeResult_fallbackProfileEnabled
 * @description
 * The Fallback Profile is enabled. SGP.32 v1.2, section 3.4.7.
 * @constant
 * @type {number}
 */
export
const fallbackProfileEnabled: UnsetFallbackAttributeResult = UnsetFallbackAttributeResult_fallbackProfileEnabled; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UnsetFallbackAttributeResult_commandError
 * @description
 * SGP.32 v1.2 lists commandError(7) on UnsetFallbackAttributeResult and does
 * not further define the condition. Section 2.11.2.1.
 * @constant
 * @type {number}
 */
export
const UnsetFallbackAttributeResult_commandError: UnsetFallbackAttributeResult = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UnsetFallbackAttributeResult_commandError
 * @description
 * SGP.32 v1.2 does not further define commandError(7). Section 2.11.2.1.
 * @constant
 * @type {number}
 */
export
const commandError: UnsetFallbackAttributeResult = UnsetFallbackAttributeResult_commandError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UnsetFallbackAttributeResult_undefinedError
 * @description
 * SGP.32 v1.2 lists undefinedError(127) on UnsetFallbackAttributeResult and
 * does not further define the condition. Section 2.11.2.1.
 * @constant
 * @type {number}
 */
export
const UnsetFallbackAttributeResult_undefinedError: UnsetFallbackAttributeResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UnsetFallbackAttributeResult_undefinedError
 * @description
 * SGP.32 v1.2 does not further define undefinedError(127). Section 2.11.2.1.
 * @constant
 * @type {number}
 */
export
const undefinedError: UnsetFallbackAttributeResult = UnsetFallbackAttributeResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_UnsetFallbackAttributeResult: $.ASN1Decoder<UnsetFallbackAttributeResult> = $._decodeInteger;
export const _encode_UnsetFallbackAttributeResult: $.ASN1Encoder<UnsetFallbackAttributeResult> = $._encodeInteger;


/* eslint-enable */
