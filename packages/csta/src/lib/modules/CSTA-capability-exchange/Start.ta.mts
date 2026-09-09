/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Start
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Start  ::=  BIT STRING
 * {    resource                ( 0),     -- optional parameters
 *     text                    ( 1),     -- optional parameters
 *     privateData                ( 2),     -- optional parameters
 *     privateDataInAck            ( 3) }
 * ```
 */
export
type Start = BIT_STRING;

/**
 * @summary Start_resource
 * @constant
 */
export
const Start_resource: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 */
export
const resource: number = Start_resource; /* SHORT_NAMED_BIT */

/**
 * @summary Start_text
 * @constant
 */
export
const Start_text: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary text
 * @constant
 */
export
const text: number = Start_text; /* SHORT_NAMED_BIT */

/**
 * @summary Start_privateData
 * @constant
 */
export
const Start_privateData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = Start_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Start_privateDataInAck
 * @constant
 */
export
const Start_privateDataInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = Start_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Start: $.ASN1Decoder<Start> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Start
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Start (el: _Element): Start {
    if (!_cached_decoder_for_Start) { _cached_decoder_for_Start = $._decodeBitString; }
    return _cached_decoder_for_Start(el);
}

let _cached_encoder_for_Start: $.ASN1Encoder<Start> | null = null;

/**
 * @summary Encodes a(n) Start into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Start, encoded as an ASN.1 Element.
 */
export
function _encode_Start (value: Start, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Start) { _cached_encoder_for_Start = $._encodeBitString; }
    return _cached_encoder_for_Start(value, elGetter);
}


/* eslint-enable */
