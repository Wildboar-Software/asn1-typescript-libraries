/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SpeakerVolume
 * @description
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
 */
export
const SpeakerVolume_speakerVolumeAbs: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary speakerVolumeAbs
 * @constant
 */
export
const speakerVolumeAbs: number = SpeakerVolume_speakerVolumeAbs; /* SHORT_NAMED_BIT */

/**
 * @summary SpeakerVolume_speakerVolumeInc
 * @constant
 */
export
const SpeakerVolume_speakerVolumeInc: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary speakerVolumeInc
 * @constant
 */
export
const speakerVolumeInc: number = SpeakerVolume_speakerVolumeInc; /* SHORT_NAMED_BIT */

/**
 * @summary SpeakerVolume_privateData
 * @constant
 */
export
const SpeakerVolume_privateData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
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
