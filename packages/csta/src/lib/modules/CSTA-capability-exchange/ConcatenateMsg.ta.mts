/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ConcatenateMsg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConcatenateMsg  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1) }
 * ```
 */
export
type ConcatenateMsg = BIT_STRING;

/**
 * @summary ConcatenateMsg_privateData
 * @constant
 */
export
const ConcatenateMsg_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = ConcatenateMsg_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary ConcatenateMsg_privateDataInAck
 * @constant
 */
export
const ConcatenateMsg_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = ConcatenateMsg_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ConcatenateMsg: $.ASN1Decoder<ConcatenateMsg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConcatenateMsg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConcatenateMsg (el: _Element): ConcatenateMsg {
    if (!_cached_decoder_for_ConcatenateMsg) { _cached_decoder_for_ConcatenateMsg = $._decodeBitString; }
    return _cached_decoder_for_ConcatenateMsg(el);
}

let _cached_encoder_for_ConcatenateMsg: $.ASN1Encoder<ConcatenateMsg> | null = null;

/**
 * @summary Encodes a(n) ConcatenateMsg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConcatenateMsg, encoded as an ASN.1 Element.
 */
export
function _encode_ConcatenateMsg (value: ConcatenateMsg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConcatenateMsg) { _cached_encoder_for_ConcatenateMsg = $._encodeBitString; }
    return _cached_encoder_for_ConcatenateMsg(value, elGetter);
}


/* eslint-enable */
