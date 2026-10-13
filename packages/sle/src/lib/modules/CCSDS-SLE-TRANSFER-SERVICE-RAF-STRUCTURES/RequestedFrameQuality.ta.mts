/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RequestedFrameQuality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedFrameQuality          ::=  INTEGER
 * {   goodFramesOnly                    (0)
 * ,   erredFrameOnly                    (1)
 * ,   allFrames                         (2)
 * }
 * ```
 */
export
type RequestedFrameQuality = INTEGER;

/**
 * @summary RequestedFrameQuality_goodFramesOnly
 * @constant
 * @type {number}
 */
export
const RequestedFrameQuality_goodFramesOnly: RequestedFrameQuality = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedFrameQuality_goodFramesOnly
 * @constant
 * @type {number}
 */
export
const goodFramesOnly: RequestedFrameQuality = RequestedFrameQuality_goodFramesOnly; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedFrameQuality_erredFrameOnly
 * @constant
 * @type {number}
 */
export
const RequestedFrameQuality_erredFrameOnly: RequestedFrameQuality = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedFrameQuality_erredFrameOnly
 * @constant
 * @type {number}
 */
export
const erredFrameOnly: RequestedFrameQuality = RequestedFrameQuality_erredFrameOnly; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedFrameQuality_allFrames
 * @constant
 * @type {number}
 */
export
const RequestedFrameQuality_allFrames: RequestedFrameQuality = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedFrameQuality_allFrames
 * @constant
 * @type {number}
 */
export
const allFrames: RequestedFrameQuality = RequestedFrameQuality_allFrames; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_RequestedFrameQuality: $.ASN1Decoder<RequestedFrameQuality> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestedFrameQuality
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestedFrameQuality (el: _Element): RequestedFrameQuality {
    if (!_cached_decoder_for_RequestedFrameQuality) { _cached_decoder_for_RequestedFrameQuality = $._decodeInteger; }
    return _cached_decoder_for_RequestedFrameQuality(el);
}

let _cached_encoder_for_RequestedFrameQuality: $.ASN1Encoder<RequestedFrameQuality> | null = null;

/**
 * @summary Encodes a(n) RequestedFrameQuality into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedFrameQuality, encoded as an ASN.1 Element.
 */
export
function _encode_RequestedFrameQuality (value: RequestedFrameQuality, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestedFrameQuality) { _cached_encoder_for_RequestedFrameQuality = $._encodeInteger; }
    return _cached_encoder_for_RequestedFrameQuality(value, elGetter);
}


/* eslint-enable */
