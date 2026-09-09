/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary RouteingMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteingMode  ::=  BIT STRING
 * {     privateData                 ( 0) }
 * ```
 */
export
type RouteingMode = BIT_STRING;

/**
 * @summary RouteingMode_privateData
 * @constant
 */
export
const RouteingMode_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = RouteingMode_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_RouteingMode: $.ASN1Decoder<RouteingMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteingMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteingMode (el: _Element): RouteingMode {
    if (!_cached_decoder_for_RouteingMode) { _cached_decoder_for_RouteingMode = $._decodeBitString; }
    return _cached_decoder_for_RouteingMode(el);
}

let _cached_encoder_for_RouteingMode: $.ASN1Encoder<RouteingMode> | null = null;

/**
 * @summary Encodes a(n) RouteingMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteingMode, encoded as an ASN.1 Element.
 */
export
function _encode_RouteingMode (value: RouteingMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteingMode) { _cached_encoder_for_RouteingMode = $._encodeBitString; }
    return _cached_encoder_for_RouteingMode(value, elGetter);
}


/* eslint-enable */
