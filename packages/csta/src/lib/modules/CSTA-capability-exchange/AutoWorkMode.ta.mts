/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AutoWorkMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AutoWorkMode  ::=  BIT STRING
 * {     privateData                 ( 0) }
 * ```
 */
export
type AutoWorkMode = BIT_STRING;

/**
 * @summary AutoWorkMode_privateData
 * @constant
 */
export
const AutoWorkMode_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = AutoWorkMode_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_AutoWorkMode: $.ASN1Decoder<AutoWorkMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AutoWorkMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AutoWorkMode (el: _Element): AutoWorkMode {
    if (!_cached_decoder_for_AutoWorkMode) { _cached_decoder_for_AutoWorkMode = $._decodeBitString; }
    return _cached_decoder_for_AutoWorkMode(el);
}

let _cached_encoder_for_AutoWorkMode: $.ASN1Encoder<AutoWorkMode> | null = null;

/**
 * @summary Encodes a(n) AutoWorkMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AutoWorkMode, encoded as an ASN.1 Element.
 */
export
function _encode_AutoWorkMode (value: AutoWorkMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AutoWorkMode) { _cached_encoder_for_AutoWorkMode = $._encodeBitString; }
    return _cached_encoder_for_AutoWorkMode(value, elGetter);
}


/* eslint-enable */
