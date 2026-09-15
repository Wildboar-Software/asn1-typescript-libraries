/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetRingerStatus
 * @description
 * Capability bitmap for the Get Ringer Status service (ECMA-269 C.12.11,
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
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.11).
 */
export
const GetRingerStatus_ringer: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary ringer
 * @constant
 * @description
 * Alias of `GetRingerStatus_ringer`.
 */
export
const ringer: number = GetRingerStatus_ringer; /* SHORT_NAMED_BIT */

/**
 * @summary GetRingerStatus_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.12.11).
 */
export
const GetRingerStatus_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `GetRingerStatus_privateData`.
 */
export
const privateData: number = GetRingerStatus_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetRingerStatus_ringCountInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `ringCount` in the acknowledgement
 * (ECMA-269 C.12.11).
 */
export
const GetRingerStatus_ringCountInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary ringCountInAck
 * @constant
 * @description
 * Alias of `GetRingerStatus_ringCountInAck`.
 */
export
const ringCountInAck: number = GetRingerStatus_ringCountInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetRingerStatus_ringPatternInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `ringPattern` in the acknowledgement
 * (ECMA-269 C.12.11).
 */
export
const GetRingerStatus_ringPatternInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary ringPatternInAck
 * @constant
 * @description
 * Alias of `GetRingerStatus_ringPatternInAck`.
 */
export
const ringPatternInAck: number = GetRingerStatus_ringPatternInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetRingerStatus_ringVolumeInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `ringVolume` in the acknowledgement
 * (ECMA-269 C.12.11).
 */
export
const GetRingerStatus_ringVolumeInAck: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary ringVolumeInAck
 * @constant
 * @description
 * Alias of `GetRingerStatus_ringVolumeInAck`.
 */
export
const ringVolumeInAck: number = GetRingerStatus_ringVolumeInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetRingerStatus_ringVolumeAbsInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `ringVolumeAbs` in the acknowledgement
 * (ECMA-269 C.12.11).
 */
export
const GetRingerStatus_ringVolumeAbsInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary ringVolumeAbsInAck
 * @constant
 * @description
 * Alias of `GetRingerStatus_ringVolumeAbsInAck`.
 */
export
const ringVolumeAbsInAck: number = GetRingerStatus_ringVolumeAbsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetRingerStatus_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.12.11).
 */
export
const GetRingerStatus_privateDataInAck: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `GetRingerStatus_privateDataInAck`.
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
