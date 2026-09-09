/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetAutoAnswer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetAutoAnswer  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     numberOfRingsInAck             ( 1),     -- optional parameters
 *     privateDataInAck             ( 2) }
 * ```
 */
export
type GetAutoAnswer = BIT_STRING;

/**
 * @summary GetAutoAnswer_privateData
 * @constant
 */
export
const GetAutoAnswer_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = GetAutoAnswer_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetAutoAnswer_numberOfRingsInAck
 * @constant
 */
export
const GetAutoAnswer_numberOfRingsInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary numberOfRingsInAck
 * @constant
 */
export
const numberOfRingsInAck: number = GetAutoAnswer_numberOfRingsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetAutoAnswer_privateDataInAck
 * @constant
 */
export
const GetAutoAnswer_privateDataInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = GetAutoAnswer_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetAutoAnswer: $.ASN1Decoder<GetAutoAnswer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetAutoAnswer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetAutoAnswer (el: _Element): GetAutoAnswer {
    if (!_cached_decoder_for_GetAutoAnswer) { _cached_decoder_for_GetAutoAnswer = $._decodeBitString; }
    return _cached_decoder_for_GetAutoAnswer(el);
}

let _cached_encoder_for_GetAutoAnswer: $.ASN1Encoder<GetAutoAnswer> | null = null;

/**
 * @summary Encodes a(n) GetAutoAnswer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetAutoAnswer, encoded as an ASN.1 Element.
 */
export
function _encode_GetAutoAnswer (value: GetAutoAnswer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetAutoAnswer) { _cached_encoder_for_GetAutoAnswer = $._encodeBitString; }
    return _cached_encoder_for_GetAutoAnswer(value, elGetter);
}


/* eslint-enable */
