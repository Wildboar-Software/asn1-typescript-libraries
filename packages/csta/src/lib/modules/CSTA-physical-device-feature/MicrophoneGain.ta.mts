/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element } from "@wildboar/asn1";
import { MicGainAbs, _decode_MicGainAbs, _encode_MicGainAbs } from "../CSTA-physical-device-feature/MicGainAbs.ta.mjs";

import { MicGainInc, _decode_MicGainInc, _encode_MicGainInc } from "../CSTA-physical-device-feature/MicGainInc.ta.mjs";



/**
 * @summary MicrophoneGain
 * @description
 *
 * Microphone gain as an absolute 0–100 value or a relative increment/decrement.
 * ECMA-285 §9.16.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/ ECMA-285}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MicrophoneGain  ::=  CHOICE
 * {     micGainAbs                 MicGainAbs,
 *     micGainInc                 MicGainInc }
 * ```
 */
export
type MicrophoneGain =
    { micGainAbs: MicGainAbs } /* CHOICE_ALT_ROOT */
    | { micGainInc: MicGainInc } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MicrophoneGain: $.ASN1Decoder<MicrophoneGain> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MicrophoneGain
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MicrophoneGain (el: _Element): MicrophoneGain {
    if (!_cached_decoder_for_MicrophoneGain) { _cached_decoder_for_MicrophoneGain = $._decode_inextensible_choice<MicrophoneGain>({
    "UNIVERSAL 2": [ "micGainAbs", _decode_MicGainAbs ],
    "UNIVERSAL 10": [ "micGainInc", _decode_MicGainInc ]
}); }
    return _cached_decoder_for_MicrophoneGain(el);
}

let _cached_encoder_for_MicrophoneGain: $.ASN1Encoder<MicrophoneGain> | null = null;

/**
 * @summary Encodes a(n) MicrophoneGain into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MicrophoneGain, encoded as an ASN.1 Element.
 */
export
function _encode_MicrophoneGain (value: MicrophoneGain, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MicrophoneGain) { _cached_encoder_for_MicrophoneGain = $._encode_choice<MicrophoneGain>({
    "micGainAbs": _encode_MicGainAbs,
    "micGainInc": _encode_MicGainInc,
}, $.BER); }
    return _cached_encoder_for_MicrophoneGain(value, elGetter);
}


/* eslint-enable */
