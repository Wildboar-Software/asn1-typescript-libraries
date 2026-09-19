/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SetFallbackAttributeResult
 * @description
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
 * @constant
 * @type {number}
 */
export
const SetFallbackAttributeResult_ok: SetFallbackAttributeResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SetFallbackAttributeResult_ok
 * @constant
 * @type {number}
 */
export
const ok: SetFallbackAttributeResult = SetFallbackAttributeResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SetFallbackAttributeResult_iccidOrAidNotFound
 * @constant
 * @type {number}
 */
export
const SetFallbackAttributeResult_iccidOrAidNotFound: SetFallbackAttributeResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SetFallbackAttributeResult_iccidOrAidNotFound
 * @constant
 * @type {number}
 */
export
const iccidOrAidNotFound: SetFallbackAttributeResult = SetFallbackAttributeResult_iccidOrAidNotFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SetFallbackAttributeResult_fallbackNotAllowed
 * @constant
 * @type {number}
 */
export
const SetFallbackAttributeResult_fallbackNotAllowed: SetFallbackAttributeResult = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SetFallbackAttributeResult_fallbackNotAllowed
 * @constant
 * @type {number}
 */
export
const fallbackNotAllowed: SetFallbackAttributeResult = SetFallbackAttributeResult_fallbackNotAllowed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SetFallbackAttributeResult_fallbackProfileEnabled
 * @constant
 * @type {number}
 */
export
const SetFallbackAttributeResult_fallbackProfileEnabled: SetFallbackAttributeResult = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SetFallbackAttributeResult_fallbackProfileEnabled
 * @constant
 * @type {number}
 */
export
const fallbackProfileEnabled: SetFallbackAttributeResult = SetFallbackAttributeResult_fallbackProfileEnabled; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SetFallbackAttributeResult_undefinedError
 * @constant
 * @type {number}
 */
export
const SetFallbackAttributeResult_undefinedError: SetFallbackAttributeResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SetFallbackAttributeResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: SetFallbackAttributeResult = SetFallbackAttributeResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_SetFallbackAttributeResult: $.ASN1Decoder<SetFallbackAttributeResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetFallbackAttributeResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetFallbackAttributeResult (el: _Element): SetFallbackAttributeResult {
    if (!_cached_decoder_for_SetFallbackAttributeResult) { _cached_decoder_for_SetFallbackAttributeResult = $._decodeInteger; }
    return _cached_decoder_for_SetFallbackAttributeResult(el);
}

let _cached_encoder_for_SetFallbackAttributeResult: $.ASN1Encoder<SetFallbackAttributeResult> | null = null;

/**
 * @summary Encodes a(n) SetFallbackAttributeResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetFallbackAttributeResult, encoded as an ASN.1 Element.
 */
export
function _encode_SetFallbackAttributeResult (value: SetFallbackAttributeResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetFallbackAttributeResult) { _cached_encoder_for_SetFallbackAttributeResult = $._encodeInteger; }
    return _cached_encoder_for_SetFallbackAttributeResult(value, elGetter);
}


/* eslint-enable */
