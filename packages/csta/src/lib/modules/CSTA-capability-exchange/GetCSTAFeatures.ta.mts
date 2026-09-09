/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetCSTAFeatures
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetCSTAFeatures  ::=  BIT STRING
 * {     privateDataInReq            ( 0),
 *     privateDataInAck            ( 1) }
 * ```
 */
export
type GetCSTAFeatures = BIT_STRING;

/**
 * @summary GetCSTAFeatures_privateDataInReq
 * @constant
 */
export
const GetCSTAFeatures_privateDataInReq: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInReq
 * @constant
 */
export
const privateDataInReq: number = GetCSTAFeatures_privateDataInReq; /* SHORT_NAMED_BIT */

/**
 * @summary GetCSTAFeatures_privateDataInAck
 * @constant
 */
export
const GetCSTAFeatures_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = GetCSTAFeatures_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetCSTAFeatures: $.ASN1Decoder<GetCSTAFeatures> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetCSTAFeatures
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetCSTAFeatures (el: _Element): GetCSTAFeatures {
    if (!_cached_decoder_for_GetCSTAFeatures) { _cached_decoder_for_GetCSTAFeatures = $._decodeBitString; }
    return _cached_decoder_for_GetCSTAFeatures(el);
}

let _cached_encoder_for_GetCSTAFeatures: $.ASN1Encoder<GetCSTAFeatures> | null = null;

/**
 * @summary Encodes a(n) GetCSTAFeatures into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetCSTAFeatures, encoded as an ASN.1 Element.
 */
export
function _encode_GetCSTAFeatures (value: GetCSTAFeatures, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetCSTAFeatures) { _cached_encoder_for_GetCSTAFeatures = $._encodeBitString; }
    return _cached_encoder_for_GetCSTAFeatures(value, elGetter);
}


/* eslint-enable */
