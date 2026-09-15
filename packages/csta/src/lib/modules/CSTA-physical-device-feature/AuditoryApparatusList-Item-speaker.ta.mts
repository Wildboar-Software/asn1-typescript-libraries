/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AuditoryApparatusList_Item_speaker
 * @description
 *
 * Speaker capabilities of an auditory apparatus. ECMA-285 §9.16.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/ ECMA-285}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuditoryApparatusList-Item-speaker ::= BIT STRING {
 *     present (0),
 *     volumeSettable (1),
 *     volumeReadable (2),
 *     muteSettable (3),
 *     muteReadable (4)
 * }
 * ```
 */
export
type AuditoryApparatusList_Item_speaker = BIT_STRING;

/**
 * @summary AuditoryApparatusList_Item_speaker_present
 * @description
 *
 * Speaker is present. ECMA-285 §9.16.
 *
 * @constant
 */
export
const AuditoryApparatusList_Item_speaker_present: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary present
 * @constant
 */
export
const present: number = AuditoryApparatusList_Item_speaker_present; /* SHORT_NAMED_BIT */

/**
 * @summary AuditoryApparatusList_Item_speaker_volumeSettable
 * @description
 *
 * Speaker volume can be set. ECMA-285 §9.16.
 *
 * @constant
 */
export
const AuditoryApparatusList_Item_speaker_volumeSettable: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary volumeSettable
 * @constant
 */
export
const volumeSettable: number = AuditoryApparatusList_Item_speaker_volumeSettable; /* SHORT_NAMED_BIT */

/**
 * @summary AuditoryApparatusList_Item_speaker_volumeReadable
 * @description
 *
 * Speaker volume can be read. ECMA-285 §9.16.
 *
 * @constant
 */
export
const AuditoryApparatusList_Item_speaker_volumeReadable: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary volumeReadable
 * @constant
 */
export
const volumeReadable: number = AuditoryApparatusList_Item_speaker_volumeReadable; /* SHORT_NAMED_BIT */

/**
 * @summary AuditoryApparatusList_Item_speaker_muteSettable
 * @description
 *
 * Speaker mute can be set. ECMA-285 §9.16.
 *
 * @constant
 */
export
const AuditoryApparatusList_Item_speaker_muteSettable: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary muteSettable
 * @constant
 */
export
const muteSettable: number = AuditoryApparatusList_Item_speaker_muteSettable; /* SHORT_NAMED_BIT */

/**
 * @summary AuditoryApparatusList_Item_speaker_muteReadable
 * @description
 *
 * Speaker mute can be read. ECMA-285 §9.16.
 *
 * @constant
 */
export
const AuditoryApparatusList_Item_speaker_muteReadable: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary muteReadable
 * @constant
 */
export
const muteReadable: number = AuditoryApparatusList_Item_speaker_muteReadable; /* SHORT_NAMED_BIT */

let _cached_decoder_for_AuditoryApparatusList_Item_speaker: $.ASN1Decoder<AuditoryApparatusList_Item_speaker> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuditoryApparatusList_Item_speaker
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuditoryApparatusList_Item_speaker (el: _Element): AuditoryApparatusList_Item_speaker {
    if (!_cached_decoder_for_AuditoryApparatusList_Item_speaker) { _cached_decoder_for_AuditoryApparatusList_Item_speaker = $._decodeBitString; }
    return _cached_decoder_for_AuditoryApparatusList_Item_speaker(el);
}

let _cached_encoder_for_AuditoryApparatusList_Item_speaker: $.ASN1Encoder<AuditoryApparatusList_Item_speaker> | null = null;

/**
 * @summary Encodes a(n) AuditoryApparatusList_Item_speaker into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuditoryApparatusList_Item_speaker, encoded as an ASN.1 Element.
 */
export
function _encode_AuditoryApparatusList_Item_speaker (value: AuditoryApparatusList_Item_speaker, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuditoryApparatusList_Item_speaker) { _cached_encoder_for_AuditoryApparatusList_Item_speaker = $._encodeBitString; }
    return _cached_encoder_for_AuditoryApparatusList_Item_speaker(value, elGetter);
}


/* eslint-enable */
