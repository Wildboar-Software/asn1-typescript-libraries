/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UnsetFallbackAttributeResult
 * @description
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
 * @constant
 * @type {number}
 */
export
const UnsetFallbackAttributeResult_ok: UnsetFallbackAttributeResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UnsetFallbackAttributeResult_ok
 * @constant
 * @type {number}
 */
export
const ok: UnsetFallbackAttributeResult = UnsetFallbackAttributeResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UnsetFallbackAttributeResult_noFallbackAttribute
 * @constant
 * @type {number}
 */
export
const UnsetFallbackAttributeResult_noFallbackAttribute: UnsetFallbackAttributeResult = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UnsetFallbackAttributeResult_noFallbackAttribute
 * @constant
 * @type {number}
 */
export
const noFallbackAttribute: UnsetFallbackAttributeResult = UnsetFallbackAttributeResult_noFallbackAttribute; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UnsetFallbackAttributeResult_fallbackProfileEnabled
 * @constant
 * @type {number}
 */
export
const UnsetFallbackAttributeResult_fallbackProfileEnabled: UnsetFallbackAttributeResult = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UnsetFallbackAttributeResult_fallbackProfileEnabled
 * @constant
 * @type {number}
 */
export
const fallbackProfileEnabled: UnsetFallbackAttributeResult = UnsetFallbackAttributeResult_fallbackProfileEnabled; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UnsetFallbackAttributeResult_commandError
 * @constant
 * @type {number}
 */
export
const UnsetFallbackAttributeResult_commandError: UnsetFallbackAttributeResult = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UnsetFallbackAttributeResult_commandError
 * @constant
 * @type {number}
 */
export
const commandError: UnsetFallbackAttributeResult = UnsetFallbackAttributeResult_commandError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UnsetFallbackAttributeResult_undefinedError
 * @constant
 * @type {number}
 */
export
const UnsetFallbackAttributeResult_undefinedError: UnsetFallbackAttributeResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UnsetFallbackAttributeResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: UnsetFallbackAttributeResult = UnsetFallbackAttributeResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_UnsetFallbackAttributeResult: $.ASN1Decoder<UnsetFallbackAttributeResult> = $._decodeInteger;
export const _encode_UnsetFallbackAttributeResult: $.ASN1Encoder<UnsetFallbackAttributeResult> = $._encodeInteger;


/* eslint-enable */
