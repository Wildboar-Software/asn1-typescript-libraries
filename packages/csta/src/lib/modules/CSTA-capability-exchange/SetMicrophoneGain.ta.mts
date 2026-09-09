/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SetMicrophoneGain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetMicrophoneGain  ::=  BIT STRING
 * {     microphoneGainAbs             ( 0),     -- optional parameters
 *     microphoneGainInc             ( 1),     -- optional parameters
 *     privateData                 ( 2),     -- optional parameters
 *     privateDataInAck             ( 3),     -- optional parameters
 *     ackModelMultiStep             ( 4) }
 * ```
 */
export
type SetMicrophoneGain = BIT_STRING;

/**
 * @summary SetMicrophoneGain_microphoneGainAbs
 * @constant
 */
export
const SetMicrophoneGain_microphoneGainAbs: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary microphoneGainAbs
 * @constant
 */
export
const microphoneGainAbs: number = SetMicrophoneGain_microphoneGainAbs; /* SHORT_NAMED_BIT */

/**
 * @summary SetMicrophoneGain_microphoneGainInc
 * @constant
 */
export
const SetMicrophoneGain_microphoneGainInc: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary microphoneGainInc
 * @constant
 */
export
const microphoneGainInc: number = SetMicrophoneGain_microphoneGainInc; /* SHORT_NAMED_BIT */

/**
 * @summary SetMicrophoneGain_privateData
 * @constant
 */
export
const SetMicrophoneGain_privateData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SetMicrophoneGain_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SetMicrophoneGain_privateDataInAck
 * @constant
 */
export
const SetMicrophoneGain_privateDataInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = SetMicrophoneGain_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SetMicrophoneGain_ackModelMultiStep
 * @constant
 */
export
const SetMicrophoneGain_ackModelMultiStep: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = SetMicrophoneGain_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SetMicrophoneGain: $.ASN1Decoder<SetMicrophoneGain> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetMicrophoneGain
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetMicrophoneGain (el: _Element): SetMicrophoneGain {
    if (!_cached_decoder_for_SetMicrophoneGain) { _cached_decoder_for_SetMicrophoneGain = $._decodeBitString; }
    return _cached_decoder_for_SetMicrophoneGain(el);
}

let _cached_encoder_for_SetMicrophoneGain: $.ASN1Encoder<SetMicrophoneGain> | null = null;

/**
 * @summary Encodes a(n) SetMicrophoneGain into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetMicrophoneGain, encoded as an ASN.1 Element.
 */
export
function _encode_SetMicrophoneGain (value: SetMicrophoneGain, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetMicrophoneGain) { _cached_encoder_for_SetMicrophoneGain = $._encodeBitString; }
    return _cached_encoder_for_SetMicrophoneGain(value, elGetter);
}


/* eslint-enable */
