/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SpeakerVolume
 * @description
 * Capability bitmap for the Speaker Volume event (ECMA-269 C.13.11, ECMA-285
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
 * SpeakerVolume  ::=  BIT STRING
 * {     speakerVolumeAbs             ( 0),     -- optional parameters
 *     speakerVolumeInc             ( 1),     -- optional parameters
 *     privateData                 ( 2) }
 * ```
 */
export
type SpeakerVolume = BIT_STRING;

/**
 * @summary SpeakerVolume_speakerVolumeAbs
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.13.11).
 */
export
const SpeakerVolume_speakerVolumeAbs: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary speakerVolumeAbs
 * @constant
 * @description
 * Alias of `SpeakerVolume_speakerVolumeAbs`.
 */
export
const speakerVolumeAbs: number = SpeakerVolume_speakerVolumeAbs; /* SHORT_NAMED_BIT */

/**
 * @summary SpeakerVolume_speakerVolumeInc
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.13.11).
 */
export
const SpeakerVolume_speakerVolumeInc: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary speakerVolumeInc
 * @constant
 * @description
 * Alias of `SpeakerVolume_speakerVolumeInc`.
 */
export
const speakerVolumeInc: number = SpeakerVolume_speakerVolumeInc; /* SHORT_NAMED_BIT */

/**
 * @summary SpeakerVolume_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.13.11).
 */
export
const SpeakerVolume_privateData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SpeakerVolume_privateData`.
 */
export
const privateData: number = SpeakerVolume_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SpeakerVolume: $.ASN1Decoder<SpeakerVolume> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SpeakerVolume
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SpeakerVolume (el: _Element): SpeakerVolume {
    if (!_cached_decoder_for_SpeakerVolume) { _cached_decoder_for_SpeakerVolume = $._decodeBitString; }
    return _cached_decoder_for_SpeakerVolume(el);
}

let _cached_encoder_for_SpeakerVolume: $.ASN1Encoder<SpeakerVolume> | null = null;

/**
 * @summary Encodes a(n) SpeakerVolume into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpeakerVolume, encoded as an ASN.1 Element.
 */
export
function _encode_SpeakerVolume (value: SpeakerVolume, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SpeakerVolume) { _cached_encoder_for_SpeakerVolume = $._encodeBitString; }
    return _cached_encoder_for_SpeakerVolume(value, elGetter);
}


/* eslint-enable */
