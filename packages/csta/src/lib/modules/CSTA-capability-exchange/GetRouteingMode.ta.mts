/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetRouteingMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetRouteingMode  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1) }
 * ```
 */
export
type GetRouteingMode = BIT_STRING;

/**
 * @summary GetRouteingMode_privateData
 * @constant
 */
export
const GetRouteingMode_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = GetRouteingMode_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetRouteingMode_privateDataInAck
 * @constant
 */
export
const GetRouteingMode_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = GetRouteingMode_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetRouteingMode: $.ASN1Decoder<GetRouteingMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetRouteingMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetRouteingMode (el: _Element): GetRouteingMode {
    if (!_cached_decoder_for_GetRouteingMode) { _cached_decoder_for_GetRouteingMode = $._decodeBitString; }
    return _cached_decoder_for_GetRouteingMode(el);
}

let _cached_encoder_for_GetRouteingMode: $.ASN1Encoder<GetRouteingMode> | null = null;

/**
 * @summary Encodes a(n) GetRouteingMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetRouteingMode, encoded as an ASN.1 Element.
 */
export
function _encode_GetRouteingMode (value: GetRouteingMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetRouteingMode) { _cached_encoder_for_GetRouteingMode = $._encodeBitString; }
    return _cached_encoder_for_GetRouteingMode(value, elGetter);
}


/* eslint-enable */
