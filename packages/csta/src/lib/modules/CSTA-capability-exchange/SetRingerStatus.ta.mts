/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SetRingerStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetRingerStatus  ::=  BIT STRING
 * {     ringerModeRinging             ( 0),     -- optional parameters
 *     ringerModeNotRinging             ( 1),     -- optional parameters
 *     ringVolumeAbs                 ( 2),     -- optional parameters
 *     ringVolumeInc                 ( 3),     -- optional parameters
 *     privateData                 ( 4),     -- optional parameters
 *     privateDataInAck             ( 5),     -- optional parameters
 *     ackModelMultiStep             ( 6) }
 * ```
 */
export
type SetRingerStatus = BIT_STRING;

/**
 * @summary SetRingerStatus_ringerModeRinging
 * @constant
 */
export
const SetRingerStatus_ringerModeRinging: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary ringerModeRinging
 * @constant
 */
export
const ringerModeRinging: number = SetRingerStatus_ringerModeRinging; /* SHORT_NAMED_BIT */

/**
 * @summary SetRingerStatus_ringerModeNotRinging
 * @constant
 */
export
const SetRingerStatus_ringerModeNotRinging: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary ringerModeNotRinging
 * @constant
 */
export
const ringerModeNotRinging: number = SetRingerStatus_ringerModeNotRinging; /* SHORT_NAMED_BIT */

/**
 * @summary SetRingerStatus_ringVolumeAbs
 * @constant
 */
export
const SetRingerStatus_ringVolumeAbs: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary ringVolumeAbs
 * @constant
 */
export
const ringVolumeAbs: number = SetRingerStatus_ringVolumeAbs; /* SHORT_NAMED_BIT */

/**
 * @summary SetRingerStatus_ringVolumeInc
 * @constant
 */
export
const SetRingerStatus_ringVolumeInc: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary ringVolumeInc
 * @constant
 */
export
const ringVolumeInc: number = SetRingerStatus_ringVolumeInc; /* SHORT_NAMED_BIT */

/**
 * @summary SetRingerStatus_privateData
 * @constant
 */
export
const SetRingerStatus_privateData: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SetRingerStatus_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SetRingerStatus_privateDataInAck
 * @constant
 */
export
const SetRingerStatus_privateDataInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = SetRingerStatus_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SetRingerStatus_ackModelMultiStep
 * @constant
 */
export
const SetRingerStatus_ackModelMultiStep: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = SetRingerStatus_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SetRingerStatus: $.ASN1Decoder<SetRingerStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetRingerStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetRingerStatus (el: _Element): SetRingerStatus {
    if (!_cached_decoder_for_SetRingerStatus) { _cached_decoder_for_SetRingerStatus = $._decodeBitString; }
    return _cached_decoder_for_SetRingerStatus(el);
}

let _cached_encoder_for_SetRingerStatus: $.ASN1Encoder<SetRingerStatus> | null = null;

/**
 * @summary Encodes a(n) SetRingerStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetRingerStatus, encoded as an ASN.1 Element.
 */
export
function _encode_SetRingerStatus (value: SetRingerStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetRingerStatus) { _cached_encoder_for_SetRingerStatus = $._encodeBitString; }
    return _cached_encoder_for_SetRingerStatus(value, elGetter);
}


/* eslint-enable */
