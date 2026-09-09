/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary RouteRegisterAbort
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteRegisterAbort  ::=  BIT STRING
 * {     privateData                 ( 0) }
 * ```
 */
export
type RouteRegisterAbort = BIT_STRING;

/**
 * @summary RouteRegisterAbort_privateData
 * @constant
 */
export
const RouteRegisterAbort_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = RouteRegisterAbort_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_RouteRegisterAbort: $.ASN1Decoder<RouteRegisterAbort> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteRegisterAbort
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteRegisterAbort (el: _Element): RouteRegisterAbort {
    if (!_cached_decoder_for_RouteRegisterAbort) { _cached_decoder_for_RouteRegisterAbort = $._decodeBitString; }
    return _cached_decoder_for_RouteRegisterAbort(el);
}

let _cached_encoder_for_RouteRegisterAbort: $.ASN1Encoder<RouteRegisterAbort> | null = null;

/**
 * @summary Encodes a(n) RouteRegisterAbort into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteRegisterAbort, encoded as an ASN.1 Element.
 */
export
function _encode_RouteRegisterAbort (value: RouteRegisterAbort, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteRegisterAbort) { _cached_encoder_for_RouteRegisterAbort = $._encodeBitString; }
    return _cached_encoder_for_RouteRegisterAbort(value, elGetter);
}


/* eslint-enable */
