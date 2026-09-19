/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LogotypeImageType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogotypeImageType  ::=  INTEGER { grayScale(0), color(1) }
 * ```
 */
export
type LogotypeImageType = INTEGER;

/**
 * @summary LogotypeImageType_grayScale
 * @constant
 * @type {number}
 */
export
const LogotypeImageType_grayScale: LogotypeImageType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LogotypeImageType_grayScale
 * @constant
 * @type {number}
 */
export
const grayScale: LogotypeImageType = LogotypeImageType_grayScale; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LogotypeImageType_color
 * @constant
 * @type {number}
 */
export
const LogotypeImageType_color: LogotypeImageType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LogotypeImageType_color
 * @constant
 * @type {number}
 */
export
const color: LogotypeImageType = LogotypeImageType_color; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_LogotypeImageType: $.ASN1Decoder<LogotypeImageType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LogotypeImageType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LogotypeImageType (el: _Element): LogotypeImageType {
    if (!_cached_decoder_for_LogotypeImageType) { _cached_decoder_for_LogotypeImageType = $._decodeInteger; }
    return _cached_decoder_for_LogotypeImageType(el);
}

let _cached_encoder_for_LogotypeImageType: $.ASN1Encoder<LogotypeImageType> | null = null;

/**
 * @summary Encodes a(n) LogotypeImageType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogotypeImageType, encoded as an ASN.1 Element.
 */
export
function _encode_LogotypeImageType (value: LogotypeImageType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LogotypeImageType) { _cached_encoder_for_LogotypeImageType = $._encodeInteger; }
    return _cached_encoder_for_LogotypeImageType(value, elGetter);
}


/* eslint-enable */
