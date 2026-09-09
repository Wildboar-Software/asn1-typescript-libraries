/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SetSpeakerMute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetSpeakerMute  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1),     -- optional parameters
 *     ackModelMultiStep             ( 2) }
 * ```
 */
export
type SetSpeakerMute = BIT_STRING;

/**
 * @summary SetSpeakerMute_privateData
 * @constant
 */
export
const SetSpeakerMute_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SetSpeakerMute_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SetSpeakerMute_privateDataInAck
 * @constant
 */
export
const SetSpeakerMute_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = SetSpeakerMute_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SetSpeakerMute_ackModelMultiStep
 * @constant
 */
export
const SetSpeakerMute_ackModelMultiStep: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = SetSpeakerMute_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SetSpeakerMute: $.ASN1Decoder<SetSpeakerMute> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetSpeakerMute
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetSpeakerMute (el: _Element): SetSpeakerMute {
    if (!_cached_decoder_for_SetSpeakerMute) { _cached_decoder_for_SetSpeakerMute = $._decodeBitString; }
    return _cached_decoder_for_SetSpeakerMute(el);
}

let _cached_encoder_for_SetSpeakerMute: $.ASN1Encoder<SetSpeakerMute> | null = null;

/**
 * @summary Encodes a(n) SetSpeakerMute into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetSpeakerMute, encoded as an ASN.1 Element.
 */
export
function _encode_SetSpeakerMute (value: SetSpeakerMute, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetSpeakerMute) { _cached_encoder_for_SetSpeakerMute = $._encodeBitString; }
    return _cached_encoder_for_SetSpeakerMute(value, elGetter);
}


/* eslint-enable */
