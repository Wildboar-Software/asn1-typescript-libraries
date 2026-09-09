/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetAutoWorkMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetAutoWorkMode  ::=  BIT STRING
 * {    privateData                 ( 0),     -- optional parameters
 *     autoWorkIntervalInAck             ( 1),     -- optional parameters
 *     privateDataInAck             ( 2) }
 * ```
 */
export
type GetAutoWorkMode = BIT_STRING;

/**
 * @summary GetAutoWorkMode_privateData
 * @constant
 */
export
const GetAutoWorkMode_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = GetAutoWorkMode_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetAutoWorkMode_autoWorkIntervalInAck
 * @constant
 */
export
const GetAutoWorkMode_autoWorkIntervalInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary autoWorkIntervalInAck
 * @constant
 */
export
const autoWorkIntervalInAck: number = GetAutoWorkMode_autoWorkIntervalInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetAutoWorkMode_privateDataInAck
 * @constant
 */
export
const GetAutoWorkMode_privateDataInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = GetAutoWorkMode_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetAutoWorkMode: $.ASN1Decoder<GetAutoWorkMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetAutoWorkMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetAutoWorkMode (el: _Element): GetAutoWorkMode {
    if (!_cached_decoder_for_GetAutoWorkMode) { _cached_decoder_for_GetAutoWorkMode = $._decodeBitString; }
    return _cached_decoder_for_GetAutoWorkMode(el);
}

let _cached_encoder_for_GetAutoWorkMode: $.ASN1Encoder<GetAutoWorkMode> | null = null;

/**
 * @summary Encodes a(n) GetAutoWorkMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetAutoWorkMode, encoded as an ASN.1 Element.
 */
export
function _encode_GetAutoWorkMode (value: GetAutoWorkMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetAutoWorkMode) { _cached_encoder_for_GetAutoWorkMode = $._encodeBitString; }
    return _cached_encoder_for_GetAutoWorkMode(value, elGetter);
}


/* eslint-enable */
