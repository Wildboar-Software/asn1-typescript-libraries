/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetRingerStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetRingerStatus  ::=  BIT STRING
 * {     ringer                     ( 0),     -- optional parameters
 *     privateData                 ( 1),     -- optional parameters
 *     ringCountInAck                 ( 2),     -- optional parameters
 *     ringPatternInAck             ( 3),     -- optional parameters
 *     ringVolumeInAck             ( 4),     -- optional parameters
 *     ringVolumeAbsInAck             ( 5),     -- optional parameters
 *     privateDataInAck             ( 6) }
 * ```
 */
export
type GetRingerStatus = BIT_STRING;

/**
 * @summary GetRingerStatus_ringer
 * @constant
 */
export
const GetRingerStatus_ringer: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary ringer
 * @constant
 */
export
const ringer: number = GetRingerStatus_ringer; /* SHORT_NAMED_BIT */

/**
 * @summary GetRingerStatus_privateData
 * @constant
 */
export
const GetRingerStatus_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = GetRingerStatus_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetRingerStatus_ringCountInAck
 * @constant
 */
export
const GetRingerStatus_ringCountInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary ringCountInAck
 * @constant
 */
export
const ringCountInAck: number = GetRingerStatus_ringCountInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetRingerStatus_ringPatternInAck
 * @constant
 */
export
const GetRingerStatus_ringPatternInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary ringPatternInAck
 * @constant
 */
export
const ringPatternInAck: number = GetRingerStatus_ringPatternInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetRingerStatus_ringVolumeInAck
 * @constant
 */
export
const GetRingerStatus_ringVolumeInAck: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary ringVolumeInAck
 * @constant
 */
export
const ringVolumeInAck: number = GetRingerStatus_ringVolumeInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetRingerStatus_ringVolumeAbsInAck
 * @constant
 */
export
const GetRingerStatus_ringVolumeAbsInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary ringVolumeAbsInAck
 * @constant
 */
export
const ringVolumeAbsInAck: number = GetRingerStatus_ringVolumeAbsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetRingerStatus_privateDataInAck
 * @constant
 */
export
const GetRingerStatus_privateDataInAck: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = GetRingerStatus_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetRingerStatus: $.ASN1Decoder<GetRingerStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetRingerStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetRingerStatus (el: _Element): GetRingerStatus {
    if (!_cached_decoder_for_GetRingerStatus) { _cached_decoder_for_GetRingerStatus = $._decodeBitString; }
    return _cached_decoder_for_GetRingerStatus(el);
}

let _cached_encoder_for_GetRingerStatus: $.ASN1Encoder<GetRingerStatus> | null = null;

/**
 * @summary Encodes a(n) GetRingerStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetRingerStatus, encoded as an ASN.1 Element.
 */
export
function _encode_GetRingerStatus (value: GetRingerStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetRingerStatus) { _cached_encoder_for_GetRingerStatus = $._encodeBitString; }
    return _cached_encoder_for_GetRingerStatus(value, elGetter);
}


/* eslint-enable */
