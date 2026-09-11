/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary VoiceAttribChanged
 * @description
 * Capability bitmap for the Voice Attribute Changed event (ECMA-269 C.20.17,
 * ECMA-285 §9.10). Presence of this entry in `VoiceUnitEvtsList` means the SF
 * supports that event. Each set bit is an optional parameter, enumerated value,
 * initial connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VoiceAttribChanged  ::=  BIT STRING
 * {     message                    ( 7),     -- optional parameters
 *     resource                ( 8),     -- optional parameters
 *     playVolumeAbs                 ( 0),     -- optional parameters
 *     playVolumeInc                 ( 1),     -- optional parameters
 *     recordGain                 ( 2),     -- optional parameters
 *     speed                     ( 3),     -- optional parameters
 *     currentPosition             ( 4),     -- optional parameters
 *     grammars                ( 9),     -- optional parameters
 *     language                (10),     -- optional parameters
 *     mode                    (11),     -- optional parameters
 *     retainAudio                (12),     -- optional parameters
 *     silenceTimeout                (13),     -- optional parameters
 *     maxTimeout                (14),     -- optional parameters
 *     babbleTimeout                (15),     -- optional parameters
 *     endSilence                (16),     -- optional parameters
 *     rejectionThreshold            (17),     -- optional parameters
 *     autoInterruptable            (18),     -- optional parameters
 *     innerXML                (19),     -- optional parameters
 *     interdigitTimeout            (20),     -- optional parameters
 *     preflush                (21),     -- optional parameters
 *     cause                     ( 5),     -- optional parameters
 *     privateData                 ( 6) }
 * ```
 */
export
type VoiceAttribChanged = BIT_STRING;

/**
 * @summary VoiceAttribChanged_message
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 Annex C).
 */
export
const VoiceAttribChanged_message: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary message
 * @constant
 * @description
 * Alias of `VoiceAttribChanged_message`.
 */
export
const message: number = VoiceAttribChanged_message; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceAttribChanged_resource
 * @constant
 * @description
 * Bit set means the SF supports the optional `resource` parameter (ECMA-269
 * Annex C).
 */
export
const VoiceAttribChanged_resource: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 * @description
 * Alias of `VoiceAttribChanged_resource`.
 */
export
const resource: number = VoiceAttribChanged_resource; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceAttribChanged_playVolumeAbs
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 Annex C).
 */
export
const VoiceAttribChanged_playVolumeAbs: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary playVolumeAbs
 * @constant
 * @description
 * Alias of `VoiceAttribChanged_playVolumeAbs`.
 */
export
const playVolumeAbs: number = VoiceAttribChanged_playVolumeAbs; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceAttribChanged_playVolumeInc
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 Annex C).
 */
export
const VoiceAttribChanged_playVolumeInc: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary playVolumeInc
 * @constant
 * @description
 * Alias of `VoiceAttribChanged_playVolumeInc`.
 */
export
const playVolumeInc: number = VoiceAttribChanged_playVolumeInc; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceAttribChanged_recordGain
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 Annex C).
 */
export
const VoiceAttribChanged_recordGain: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary recordGain
 * @constant
 * @description
 * Alias of `VoiceAttribChanged_recordGain`.
 */
export
const recordGain: number = VoiceAttribChanged_recordGain; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceAttribChanged_speed
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 Annex C).
 */
export
const VoiceAttribChanged_speed: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary speed
 * @constant
 * @description
 * Alias of `VoiceAttribChanged_speed`.
 */
export
const speed: number = VoiceAttribChanged_speed; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceAttribChanged_currentPosition
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 Annex C).
 */
export
const VoiceAttribChanged_currentPosition: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary currentPosition
 * @constant
 * @description
 * Alias of `VoiceAttribChanged_currentPosition`.
 */
export
const currentPosition: number = VoiceAttribChanged_currentPosition; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceAttribChanged_grammars
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 Annex C).
 */
export
const VoiceAttribChanged_grammars: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary grammars
 * @constant
 * @description
 * Alias of `VoiceAttribChanged_grammars`.
 */
export
const grammars: number = VoiceAttribChanged_grammars; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceAttribChanged_language
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 Annex C).
 */
export
const VoiceAttribChanged_language: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary language
 * @constant
 * @description
 * Alias of `VoiceAttribChanged_language`.
 */
export
const language: number = VoiceAttribChanged_language; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceAttribChanged_mode
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 Annex C).
 */
export
const VoiceAttribChanged_mode: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary mode
 * @constant
 * @description
 * Alias of `VoiceAttribChanged_mode`.
 */
export
const mode: number = VoiceAttribChanged_mode; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceAttribChanged_retainAudio
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 Annex C).
 */
export
const VoiceAttribChanged_retainAudio: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary retainAudio
 * @constant
 * @description
 * Alias of `VoiceAttribChanged_retainAudio`.
 */
export
const retainAudio: number = VoiceAttribChanged_retainAudio; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceAttribChanged_silenceTimeout
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 Annex C).
 */
export
const VoiceAttribChanged_silenceTimeout: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary silenceTimeout
 * @constant
 * @description
 * Alias of `VoiceAttribChanged_silenceTimeout`.
 */
export
const silenceTimeout: number = VoiceAttribChanged_silenceTimeout; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceAttribChanged_maxTimeout
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 Annex C).
 */
export
const VoiceAttribChanged_maxTimeout: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary maxTimeout
 * @constant
 * @description
 * Alias of `VoiceAttribChanged_maxTimeout`.
 */
export
const maxTimeout: number = VoiceAttribChanged_maxTimeout; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceAttribChanged_babbleTimeout
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 Annex C).
 */
export
const VoiceAttribChanged_babbleTimeout: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary babbleTimeout
 * @constant
 * @description
 * Alias of `VoiceAttribChanged_babbleTimeout`.
 */
export
const babbleTimeout: number = VoiceAttribChanged_babbleTimeout; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceAttribChanged_endSilence
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 Annex C).
 */
export
const VoiceAttribChanged_endSilence: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary endSilence
 * @constant
 * @description
 * Alias of `VoiceAttribChanged_endSilence`.
 */
export
const endSilence: number = VoiceAttribChanged_endSilence; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceAttribChanged_rejectionThreshold
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 Annex C).
 */
export
const VoiceAttribChanged_rejectionThreshold: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary rejectionThreshold
 * @constant
 * @description
 * Alias of `VoiceAttribChanged_rejectionThreshold`.
 */
export
const rejectionThreshold: number = VoiceAttribChanged_rejectionThreshold; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceAttribChanged_autoInterruptable
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 Annex C).
 */
export
const VoiceAttribChanged_autoInterruptable: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary autoInterruptable
 * @constant
 * @description
 * Alias of `VoiceAttribChanged_autoInterruptable`.
 */
export
const autoInterruptable: number = VoiceAttribChanged_autoInterruptable; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceAttribChanged_innerXML
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 Annex C).
 */
export
const VoiceAttribChanged_innerXML: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary innerXML
 * @constant
 * @description
 * Alias of `VoiceAttribChanged_innerXML`.
 */
export
const innerXML: number = VoiceAttribChanged_innerXML; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceAttribChanged_interdigitTimeout
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 Annex C).
 */
export
const VoiceAttribChanged_interdigitTimeout: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary interdigitTimeout
 * @constant
 * @description
 * Alias of `VoiceAttribChanged_interdigitTimeout`.
 */
export
const interdigitTimeout: number = VoiceAttribChanged_interdigitTimeout; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceAttribChanged_preflush
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 Annex C).
 */
export
const VoiceAttribChanged_preflush: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary preflush
 * @constant
 * @description
 * Alias of `VoiceAttribChanged_preflush`.
 */
export
const preflush: number = VoiceAttribChanged_preflush; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceAttribChanged_cause
 * @constant
 * @description
 * Bit set means the SF supports the optional `cause` parameter (ECMA-269 Annex
 * C).
 */
export
const VoiceAttribChanged_cause: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 * @description
 * Alias of `VoiceAttribChanged_cause`.
 */
export
const cause: number = VoiceAttribChanged_cause; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceAttribChanged_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * Annex C).
 */
export
const VoiceAttribChanged_privateData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `VoiceAttribChanged_privateData`.
 */
export
const privateData: number = VoiceAttribChanged_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_VoiceAttribChanged: $.ASN1Decoder<VoiceAttribChanged> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VoiceAttribChanged
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VoiceAttribChanged (el: _Element): VoiceAttribChanged {
    if (!_cached_decoder_for_VoiceAttribChanged) { _cached_decoder_for_VoiceAttribChanged = $._decodeBitString; }
    return _cached_decoder_for_VoiceAttribChanged(el);
}

let _cached_encoder_for_VoiceAttribChanged: $.ASN1Encoder<VoiceAttribChanged> | null = null;

/**
 * @summary Encodes a(n) VoiceAttribChanged into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VoiceAttribChanged, encoded as an ASN.1 Element.
 */
export
function _encode_VoiceAttribChanged (value: VoiceAttribChanged, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VoiceAttribChanged) { _cached_encoder_for_VoiceAttribChanged = $._encodeBitString; }
    return _cached_encoder_for_VoiceAttribChanged(value, elGetter);
}


/* eslint-enable */
