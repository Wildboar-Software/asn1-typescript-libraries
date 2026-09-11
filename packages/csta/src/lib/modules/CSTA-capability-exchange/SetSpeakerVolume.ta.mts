/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SetSpeakerVolume
 * @description
 * Capability bitmap for the Set Speaker Volume service (ECMA-269 C.12.23,
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
 * SetSpeakerVolume  ::=  BIT STRING
 * {     speakerVolumeAbs             ( 0),     -- optional parameters
 *     speakerVolumeInc             ( 1),     -- optional parameters
 *     privateData                 ( 2),     -- optional parameters
 *     privateDataInAck             ( 3),     -- optional parameters
 *     ackModelMultiStep             ( 4),     -- misc characteristics
 *     resettedAfterCall             ( 5),     -- misc characteristics
 *     notSettableWhileActive             ( 6) }
 * ```
 */
export
type SetSpeakerVolume = BIT_STRING;

/**
 * @summary SetSpeakerVolume_speakerVolumeAbs
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.23).
 */
export
const SetSpeakerVolume_speakerVolumeAbs: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary speakerVolumeAbs
 * @constant
 * @description
 * Alias of `SetSpeakerVolume_speakerVolumeAbs`.
 */
export
const speakerVolumeAbs: number = SetSpeakerVolume_speakerVolumeAbs; /* SHORT_NAMED_BIT */

/**
 * @summary SetSpeakerVolume_speakerVolumeInc
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.23).
 */
export
const SetSpeakerVolume_speakerVolumeInc: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary speakerVolumeInc
 * @constant
 * @description
 * Alias of `SetSpeakerVolume_speakerVolumeInc`.
 */
export
const speakerVolumeInc: number = SetSpeakerVolume_speakerVolumeInc; /* SHORT_NAMED_BIT */

/**
 * @summary SetSpeakerVolume_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.12.23).
 */
export
const SetSpeakerVolume_privateData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SetSpeakerVolume_privateData`.
 */
export
const privateData: number = SetSpeakerVolume_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SetSpeakerVolume_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.12.23).
 */
export
const SetSpeakerVolume_privateDataInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `SetSpeakerVolume_privateDataInAck`.
 */
export
const privateDataInAck: number = SetSpeakerVolume_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SetSpeakerVolume_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.12.23).
 */
export
const SetSpeakerVolume_ackModelMultiStep: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `SetSpeakerVolume_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = SetSpeakerVolume_ackModelMultiStep; /* SHORT_NAMED_BIT */

/**
 * @summary SetSpeakerVolume_resettedAfterCall
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.23).
 */
export
const SetSpeakerVolume_resettedAfterCall: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary resettedAfterCall
 * @constant
 * @description
 * Alias of `SetSpeakerVolume_resettedAfterCall`.
 */
export
const resettedAfterCall: number = SetSpeakerVolume_resettedAfterCall; /* SHORT_NAMED_BIT */

/**
 * @summary SetSpeakerVolume_notSettableWhileActive
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.23).
 */
export
const SetSpeakerVolume_notSettableWhileActive: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary notSettableWhileActive
 * @constant
 * @description
 * Alias of `SetSpeakerVolume_notSettableWhileActive`.
 */
export
const notSettableWhileActive: number = SetSpeakerVolume_notSettableWhileActive; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SetSpeakerVolume: $.ASN1Decoder<SetSpeakerVolume> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetSpeakerVolume
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetSpeakerVolume (el: _Element): SetSpeakerVolume {
    if (!_cached_decoder_for_SetSpeakerVolume) { _cached_decoder_for_SetSpeakerVolume = $._decodeBitString; }
    return _cached_decoder_for_SetSpeakerVolume(el);
}

let _cached_encoder_for_SetSpeakerVolume: $.ASN1Encoder<SetSpeakerVolume> | null = null;

/**
 * @summary Encodes a(n) SetSpeakerVolume into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetSpeakerVolume, encoded as an ASN.1 Element.
 */
export
function _encode_SetSpeakerVolume (value: SetSpeakerVolume, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetSpeakerVolume) { _cached_encoder_for_SetSpeakerVolume = $._encodeBitString; }
    return _cached_encoder_for_SetSpeakerVolume(value, elGetter);
}


/* eslint-enable */
