/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SetSpeakerMute
 * @description
 * Capability bitmap for the Set Speaker Mute service (ECMA-269 C.12.22,
 * ECMA-285 §9.10). Presence of this entry in `PhysDevServList` means the SF
 * supports that service. Each set bit is an optional parameter, enumerated
 * value, initial connection state, or miscellaneous characteristic from Annex
 * C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
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
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.12.22).
 */
export
const SetSpeakerMute_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SetSpeakerMute_privateData`.
 */
export
const privateData: number = SetSpeakerMute_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SetSpeakerMute_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.12.22).
 */
export
const SetSpeakerMute_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `SetSpeakerMute_privateDataInAck`.
 */
export
const privateDataInAck: number = SetSpeakerMute_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SetSpeakerMute_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.12.22).
 */
export
const SetSpeakerMute_ackModelMultiStep: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `SetSpeakerMute_ackModelMultiStep`.
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
