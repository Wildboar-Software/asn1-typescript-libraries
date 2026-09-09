/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetCallBack
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetCallBack  ::=  BIT STRING
 * {    privateData                ( 0),     -- optional parameters
 *     privateDataInAck            ( 1) }
 * ```
 */
export
type GetCallBack = BIT_STRING;

/**
 * @summary GetCallBack_privateData
 * @constant
 */
export
const GetCallBack_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = GetCallBack_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetCallBack_privateDataInAck
 * @constant
 */
export
const GetCallBack_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = GetCallBack_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetCallBack: $.ASN1Decoder<GetCallBack> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetCallBack
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetCallBack (el: _Element): GetCallBack {
    if (!_cached_decoder_for_GetCallBack) { _cached_decoder_for_GetCallBack = $._decodeBitString; }
    return _cached_decoder_for_GetCallBack(el);
}

let _cached_encoder_for_GetCallBack: $.ASN1Encoder<GetCallBack> | null = null;

/**
 * @summary Encodes a(n) GetCallBack into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetCallBack, encoded as an ASN.1 Element.
 */
export
function _encode_GetCallBack (value: GetCallBack, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetCallBack) { _cached_encoder_for_GetCallBack = $._encodeBitString; }
    return _cached_encoder_for_GetCallBack(value, elGetter);
}


/* eslint-enable */
