/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SetMessageWaitingIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetMessageWaitingIndicator  ::=  BIT STRING
 * {     deviceForMsg                 ( 0),     -- optional parameters
 *     privateData                 ( 1),     -- optional parameters
 *     privateDataInAck             ( 2),     -- optional parameters
 *     ackModelMultiStep             ( 3) }
 * ```
 */
export
type SetMessageWaitingIndicator = BIT_STRING;

/**
 * @summary SetMessageWaitingIndicator_deviceForMsg
 * @constant
 */
export
const SetMessageWaitingIndicator_deviceForMsg: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary deviceForMsg
 * @constant
 */
export
const deviceForMsg: number = SetMessageWaitingIndicator_deviceForMsg; /* SHORT_NAMED_BIT */

/**
 * @summary SetMessageWaitingIndicator_privateData
 * @constant
 */
export
const SetMessageWaitingIndicator_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SetMessageWaitingIndicator_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SetMessageWaitingIndicator_privateDataInAck
 * @constant
 */
export
const SetMessageWaitingIndicator_privateDataInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = SetMessageWaitingIndicator_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SetMessageWaitingIndicator_ackModelMultiStep
 * @constant
 */
export
const SetMessageWaitingIndicator_ackModelMultiStep: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = SetMessageWaitingIndicator_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SetMessageWaitingIndicator: $.ASN1Decoder<SetMessageWaitingIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetMessageWaitingIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetMessageWaitingIndicator (el: _Element): SetMessageWaitingIndicator {
    if (!_cached_decoder_for_SetMessageWaitingIndicator) { _cached_decoder_for_SetMessageWaitingIndicator = $._decodeBitString; }
    return _cached_decoder_for_SetMessageWaitingIndicator(el);
}

let _cached_encoder_for_SetMessageWaitingIndicator: $.ASN1Encoder<SetMessageWaitingIndicator> | null = null;

/**
 * @summary Encodes a(n) SetMessageWaitingIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetMessageWaitingIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_SetMessageWaitingIndicator (value: SetMessageWaitingIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetMessageWaitingIndicator) { _cached_encoder_for_SetMessageWaitingIndicator = $._encodeBitString; }
    return _cached_encoder_for_SetMessageWaitingIndicator(value, elGetter);
}


/* eslint-enable */
