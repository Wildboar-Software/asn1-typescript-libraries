/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary CancelCallBack
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelCallBack  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1),     -- optional parameters
 *     ackModelMultiStep             ( 2),     -- misc characteristics
 *     supportsClearing             ( 3) }
 * ```
 */
export
type CancelCallBack = BIT_STRING;

/**
 * @summary CancelCallBack_privateData
 * @constant
 */
export
const CancelCallBack_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = CancelCallBack_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary CancelCallBack_privateDataInAck
 * @constant
 */
export
const CancelCallBack_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = CancelCallBack_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary CancelCallBack_ackModelMultiStep
 * @constant
 */
export
const CancelCallBack_ackModelMultiStep: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = CancelCallBack_ackModelMultiStep; /* SHORT_NAMED_BIT */

/**
 * @summary CancelCallBack_supportsClearing
 * @constant
 */
export
const CancelCallBack_supportsClearing: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary supportsClearing
 * @constant
 */
export
const supportsClearing: number = CancelCallBack_supportsClearing; /* SHORT_NAMED_BIT */

let _cached_decoder_for_CancelCallBack: $.ASN1Decoder<CancelCallBack> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelCallBack
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelCallBack (el: _Element): CancelCallBack {
    if (!_cached_decoder_for_CancelCallBack) { _cached_decoder_for_CancelCallBack = $._decodeBitString; }
    return _cached_decoder_for_CancelCallBack(el);
}

let _cached_encoder_for_CancelCallBack: $.ASN1Encoder<CancelCallBack> | null = null;

/**
 * @summary Encodes a(n) CancelCallBack into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelCallBack, encoded as an ASN.1 Element.
 */
export
function _encode_CancelCallBack (value: CancelCallBack, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancelCallBack) { _cached_encoder_for_CancelCallBack = $._encodeBitString; }
    return _cached_encoder_for_CancelCallBack(value, elGetter);
}


/* eslint-enable */
