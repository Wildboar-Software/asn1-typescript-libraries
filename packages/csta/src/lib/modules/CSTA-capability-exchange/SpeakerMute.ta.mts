/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SpeakerMute
 * @description
 * Capability bitmap for the Speaker Mute event (ECMA-269 C.13.10, ECMA-285
 * §9.10). Presence of this entry in `PhysDevEvtsList` means the SF supports
 * that event. Each set bit is an optional parameter, enumerated value, initial
 * connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpeakerMute  ::=  BIT STRING
 * {     privateData                 ( 0) }
 * ```
 */
export
type SpeakerMute = BIT_STRING;

/**
 * @summary SpeakerMute_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.13.10).
 */
export
const SpeakerMute_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SpeakerMute_privateData`.
 */
export
const privateData: number = SpeakerMute_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SpeakerMute: $.ASN1Decoder<SpeakerMute> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SpeakerMute
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SpeakerMute (el: _Element): SpeakerMute {
    if (!_cached_decoder_for_SpeakerMute) { _cached_decoder_for_SpeakerMute = $._decodeBitString; }
    return _cached_decoder_for_SpeakerMute(el);
}

let _cached_encoder_for_SpeakerMute: $.ASN1Encoder<SpeakerMute> | null = null;

/**
 * @summary Encodes a(n) SpeakerMute into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpeakerMute, encoded as an ASN.1 Element.
 */
export
function _encode_SpeakerMute (value: SpeakerMute, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SpeakerMute) { _cached_encoder_for_SpeakerMute = $._encodeBitString; }
    return _cached_encoder_for_SpeakerMute(value, elGetter);
}


/* eslint-enable */
