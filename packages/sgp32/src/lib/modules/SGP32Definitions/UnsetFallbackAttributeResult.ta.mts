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

let _cached_decoder_for_UnsetFallbackAttributeResult: $.ASN1Decoder<UnsetFallbackAttributeResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UnsetFallbackAttributeResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UnsetFallbackAttributeResult (el: _Element): UnsetFallbackAttributeResult {
    if (!_cached_decoder_for_UnsetFallbackAttributeResult) { _cached_decoder_for_UnsetFallbackAttributeResult = $._decodeInteger; }
    return _cached_decoder_for_UnsetFallbackAttributeResult(el);
}

let _cached_encoder_for_UnsetFallbackAttributeResult: $.ASN1Encoder<UnsetFallbackAttributeResult> | null = null;

/**
 * @summary Encodes a(n) UnsetFallbackAttributeResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnsetFallbackAttributeResult, encoded as an ASN.1 Element.
 */
export
function _encode_UnsetFallbackAttributeResult (value: UnsetFallbackAttributeResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UnsetFallbackAttributeResult) { _cached_encoder_for_UnsetFallbackAttributeResult = $._encodeInteger; }
    return _cached_encoder_for_UnsetFallbackAttributeResult(value, elGetter);
}


/* eslint-enable */
