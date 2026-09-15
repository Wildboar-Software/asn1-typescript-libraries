/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SetVoiceAttrib
 * @description
 * Capability bitmap for the Set Voice Attribute service (ECMA-269 C.19.13,
 * ECMA-285 §9.10). Presence of this entry in `VoiceUnitServList` means the SF
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
 * SetVoiceAttrib ::=  BIT STRING
 * {     resource                ( 9),     -- optional parameters
 *     currentSpeed                 ( 0),     -- optional parameters
 *     currentVolumeAbs             ( 1),     -- optional parameters
 *     currentVolumeInc             ( 2),     -- optional parameters
 *     grammars                (10),     -- optional parameters
 *     language                (11),     -- optional parameters
 *     mode                    (12),     -- optional parameters
 *     retainAudio                (13),     -- optional parameters
 *     silenceTimeout                (14),     -- optional parameters
 *     maxTimeout                (15),     -- optional parameters
 *     babbleTimeout                (16),     -- optional parameters
 *     endSilence                (17),     -- optional parameters
 *     rejectionThreshold            (18),     -- optional parameters
 *     autoInterruptable            (19),     -- optional parameters
 *     innerXML                (20),     -- optional parameters
 *     interdigitTimeout            (21),     -- optional parameters
 *     preflush                (22),     -- optional parameters
 *     periodToResumeStartOfMsg         ( 3),     -- optional parameters
 *     periodToResumeLengthOfReview         ( 4),     -- optional parameters
 *     currentGain                 ( 5),     -- optional parameters
 *     message                 ( 6),     -- optional parameters
 *     privateData                 ( 7),     -- optional parameters
 *     privateDataInAck             ( 8) }
 * ```
 */
export
type SetVoiceAttrib = BIT_STRING;

/**
 * @summary SetVoiceAttrib_resource
 * @constant
 * @description
 * Bit set means the SF supports the optional `resource` parameter (ECMA-269
 * C.19.13).
 */
export
const SetVoiceAttrib_resource: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 * @description
 * Alias of `SetVoiceAttrib_resource`.
 */
export
const resource: number = SetVoiceAttrib_resource; /* SHORT_NAMED_BIT */

/**
 * @summary SetVoiceAttrib_currentSpeed
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.13).
 */
export
const SetVoiceAttrib_currentSpeed: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary currentSpeed
 * @constant
 * @description
 * Alias of `SetVoiceAttrib_currentSpeed`.
 */
export
const currentSpeed: number = SetVoiceAttrib_currentSpeed; /* SHORT_NAMED_BIT */

/**
 * @summary SetVoiceAttrib_currentVolumeAbs
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.13).
 */
export
const SetVoiceAttrib_currentVolumeAbs: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary currentVolumeAbs
 * @constant
 * @description
 * Alias of `SetVoiceAttrib_currentVolumeAbs`.
 */
export
const currentVolumeAbs: number = SetVoiceAttrib_currentVolumeAbs; /* SHORT_NAMED_BIT */

/**
 * @summary SetVoiceAttrib_currentVolumeInc
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.13).
 */
export
const SetVoiceAttrib_currentVolumeInc: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary currentVolumeInc
 * @constant
 * @description
 * Alias of `SetVoiceAttrib_currentVolumeInc`.
 */
export
const currentVolumeInc: number = SetVoiceAttrib_currentVolumeInc; /* SHORT_NAMED_BIT */

/**
 * @summary SetVoiceAttrib_grammars
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.13).
 */
export
const SetVoiceAttrib_grammars: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary grammars
 * @constant
 * @description
 * Alias of `SetVoiceAttrib_grammars`.
 */
export
const grammars: number = SetVoiceAttrib_grammars; /* SHORT_NAMED_BIT */

/**
 * @summary SetVoiceAttrib_language
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.13).
 */
export
const SetVoiceAttrib_language: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary language
 * @constant
 * @description
 * Alias of `SetVoiceAttrib_language`.
 */
export
const language: number = SetVoiceAttrib_language; /* SHORT_NAMED_BIT */

/**
 * @summary SetVoiceAttrib_mode
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.13).
 */
export
const SetVoiceAttrib_mode: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary mode
 * @constant
 * @description
 * Alias of `SetVoiceAttrib_mode`.
 */
export
const mode: number = SetVoiceAttrib_mode; /* SHORT_NAMED_BIT */

/**
 * @summary SetVoiceAttrib_retainAudio
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.13).
 */
export
const SetVoiceAttrib_retainAudio: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary retainAudio
 * @constant
 * @description
 * Alias of `SetVoiceAttrib_retainAudio`.
 */
export
const retainAudio: number = SetVoiceAttrib_retainAudio; /* SHORT_NAMED_BIT */

/**
 * @summary SetVoiceAttrib_silenceTimeout
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.13).
 */
export
const SetVoiceAttrib_silenceTimeout: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary silenceTimeout
 * @constant
 * @description
 * Alias of `SetVoiceAttrib_silenceTimeout`.
 */
export
const silenceTimeout: number = SetVoiceAttrib_silenceTimeout; /* SHORT_NAMED_BIT */

/**
 * @summary SetVoiceAttrib_maxTimeout
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.13).
 */
export
const SetVoiceAttrib_maxTimeout: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary maxTimeout
 * @constant
 * @description
 * Alias of `SetVoiceAttrib_maxTimeout`.
 */
export
const maxTimeout: number = SetVoiceAttrib_maxTimeout; /* SHORT_NAMED_BIT */

/**
 * @summary SetVoiceAttrib_babbleTimeout
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.13).
 */
export
const SetVoiceAttrib_babbleTimeout: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary babbleTimeout
 * @constant
 * @description
 * Alias of `SetVoiceAttrib_babbleTimeout`.
 */
export
const babbleTimeout: number = SetVoiceAttrib_babbleTimeout; /* SHORT_NAMED_BIT */

/**
 * @summary SetVoiceAttrib_endSilence
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.13).
 */
export
const SetVoiceAttrib_endSilence: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary endSilence
 * @constant
 * @description
 * Alias of `SetVoiceAttrib_endSilence`.
 */
export
const endSilence: number = SetVoiceAttrib_endSilence; /* SHORT_NAMED_BIT */

/**
 * @summary SetVoiceAttrib_rejectionThreshold
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.13).
 */
export
const SetVoiceAttrib_rejectionThreshold: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary rejectionThreshold
 * @constant
 * @description
 * Alias of `SetVoiceAttrib_rejectionThreshold`.
 */
export
const rejectionThreshold: number = SetVoiceAttrib_rejectionThreshold; /* SHORT_NAMED_BIT */

/**
 * @summary SetVoiceAttrib_autoInterruptable
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.13).
 */
export
const SetVoiceAttrib_autoInterruptable: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary autoInterruptable
 * @constant
 * @description
 * Alias of `SetVoiceAttrib_autoInterruptable`.
 */
export
const autoInterruptable: number = SetVoiceAttrib_autoInterruptable; /* SHORT_NAMED_BIT */

/**
 * @summary SetVoiceAttrib_innerXML
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.13).
 */
export
const SetVoiceAttrib_innerXML: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary innerXML
 * @constant
 * @description
 * Alias of `SetVoiceAttrib_innerXML`.
 */
export
const innerXML: number = SetVoiceAttrib_innerXML; /* SHORT_NAMED_BIT */

/**
 * @summary SetVoiceAttrib_interdigitTimeout
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.13).
 */
export
const SetVoiceAttrib_interdigitTimeout: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary interdigitTimeout
 * @constant
 * @description
 * Alias of `SetVoiceAttrib_interdigitTimeout`.
 */
export
const interdigitTimeout: number = SetVoiceAttrib_interdigitTimeout; /* SHORT_NAMED_BIT */

/**
 * @summary SetVoiceAttrib_preflush
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.13).
 */
export
const SetVoiceAttrib_preflush: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary preflush
 * @constant
 * @description
 * Alias of `SetVoiceAttrib_preflush`.
 */
export
const preflush: number = SetVoiceAttrib_preflush; /* SHORT_NAMED_BIT */

/**
 * @summary SetVoiceAttrib_periodToResumeStartOfMsg
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.13).
 */
export
const SetVoiceAttrib_periodToResumeStartOfMsg: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary periodToResumeStartOfMsg
 * @constant
 * @description
 * Alias of `SetVoiceAttrib_periodToResumeStartOfMsg`.
 */
export
const periodToResumeStartOfMsg: number = SetVoiceAttrib_periodToResumeStartOfMsg; /* SHORT_NAMED_BIT */

/**
 * @summary SetVoiceAttrib_periodToResumeLengthOfReview
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.13).
 */
export
const SetVoiceAttrib_periodToResumeLengthOfReview: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary periodToResumeLengthOfReview
 * @constant
 * @description
 * Alias of `SetVoiceAttrib_periodToResumeLengthOfReview`.
 */
export
const periodToResumeLengthOfReview: number = SetVoiceAttrib_periodToResumeLengthOfReview; /* SHORT_NAMED_BIT */

/**
 * @summary SetVoiceAttrib_currentGain
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.13).
 */
export
const SetVoiceAttrib_currentGain: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary currentGain
 * @constant
 * @description
 * Alias of `SetVoiceAttrib_currentGain`.
 */
export
const currentGain: number = SetVoiceAttrib_currentGain; /* SHORT_NAMED_BIT */

/**
 * @summary SetVoiceAttrib_message
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.13).
 */
export
const SetVoiceAttrib_message: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary message
 * @constant
 * @description
 * Alias of `SetVoiceAttrib_message`.
 */
export
const message: number = SetVoiceAttrib_message; /* SHORT_NAMED_BIT */

/**
 * @summary SetVoiceAttrib_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.19.13).
 */
export
const SetVoiceAttrib_privateData: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SetVoiceAttrib_privateData`.
 */
export
const privateData: number = SetVoiceAttrib_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SetVoiceAttrib_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.19.13).
 */
export
const SetVoiceAttrib_privateDataInAck: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `SetVoiceAttrib_privateDataInAck`.
 */
export
const privateDataInAck: number = SetVoiceAttrib_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SetVoiceAttrib: $.ASN1Decoder<SetVoiceAttrib> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetVoiceAttrib
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetVoiceAttrib (el: _Element): SetVoiceAttrib {
    if (!_cached_decoder_for_SetVoiceAttrib) { _cached_decoder_for_SetVoiceAttrib = $._decodeBitString; }
    return _cached_decoder_for_SetVoiceAttrib(el);
}

let _cached_encoder_for_SetVoiceAttrib: $.ASN1Encoder<SetVoiceAttrib> | null = null;

/**
 * @summary Encodes a(n) SetVoiceAttrib into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetVoiceAttrib, encoded as an ASN.1 Element.
 */
export
function _encode_SetVoiceAttrib (value: SetVoiceAttrib, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetVoiceAttrib) { _cached_encoder_for_SetVoiceAttrib = $._encodeBitString; }
    return _cached_encoder_for_SetVoiceAttrib(value, elGetter);
}


/* eslint-enable */
