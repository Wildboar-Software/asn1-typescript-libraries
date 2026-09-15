/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary RingerStatus
 * @description
 * Capability bitmap for the Ringer Status event (ECMA-269 C.13.9, ECMA-285
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
 * RingerStatus  ::=  BIT STRING
 * {     ringerModeRinging             ( 0),     -- optional parameters
 *     ringerModeNotRinging             ( 1),     -- optional parameters
 *     ringCount                 ( 2),     -- optional parameters
 *     ringPattern                 ( 3),     -- optional parameters
 *     ringVolumeAbs                 ( 4),     -- optional parameters
 *     ringVolumeInc                 ( 5),     -- optional parameters
 *     privateData                 ( 6) }
 * ```
 */
export
type RingerStatus = BIT_STRING;

/**
 * @summary RingerStatus_ringerModeRinging
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.13.9).
 */
export
const RingerStatus_ringerModeRinging: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary ringerModeRinging
 * @constant
 * @description
 * Alias of `RingerStatus_ringerModeRinging`.
 */
export
const ringerModeRinging: number = RingerStatus_ringerModeRinging; /* SHORT_NAMED_BIT */

/**
 * @summary RingerStatus_ringerModeNotRinging
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.13.9).
 */
export
const RingerStatus_ringerModeNotRinging: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary ringerModeNotRinging
 * @constant
 * @description
 * Alias of `RingerStatus_ringerModeNotRinging`.
 */
export
const ringerModeNotRinging: number = RingerStatus_ringerModeNotRinging; /* SHORT_NAMED_BIT */

/**
 * @summary RingerStatus_ringCount
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.13.9).
 */
export
const RingerStatus_ringCount: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary ringCount
 * @constant
 * @description
 * Alias of `RingerStatus_ringCount`.
 */
export
const ringCount: number = RingerStatus_ringCount; /* SHORT_NAMED_BIT */

/**
 * @summary RingerStatus_ringPattern
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.13.9).
 */
export
const RingerStatus_ringPattern: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary ringPattern
 * @constant
 * @description
 * Alias of `RingerStatus_ringPattern`.
 */
export
const ringPattern: number = RingerStatus_ringPattern; /* SHORT_NAMED_BIT */

/**
 * @summary RingerStatus_ringVolumeAbs
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.13.9).
 */
export
const RingerStatus_ringVolumeAbs: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary ringVolumeAbs
 * @constant
 * @description
 * Alias of `RingerStatus_ringVolumeAbs`.
 */
export
const ringVolumeAbs: number = RingerStatus_ringVolumeAbs; /* SHORT_NAMED_BIT */

/**
 * @summary RingerStatus_ringVolumeInc
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.13.9).
 */
export
const RingerStatus_ringVolumeInc: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary ringVolumeInc
 * @constant
 * @description
 * Alias of `RingerStatus_ringVolumeInc`.
 */
export
const ringVolumeInc: number = RingerStatus_ringVolumeInc; /* SHORT_NAMED_BIT */

/**
 * @summary RingerStatus_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.13.9).
 */
export
const RingerStatus_privateData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `RingerStatus_privateData`.
 */
export
const privateData: number = RingerStatus_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_RingerStatus: $.ASN1Decoder<RingerStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RingerStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RingerStatus (el: _Element): RingerStatus {
    if (!_cached_decoder_for_RingerStatus) { _cached_decoder_for_RingerStatus = $._decodeBitString; }
    return _cached_decoder_for_RingerStatus(el);
}

let _cached_encoder_for_RingerStatus: $.ASN1Encoder<RingerStatus> | null = null;

/**
 * @summary Encodes a(n) RingerStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RingerStatus, encoded as an ASN.1 Element.
 */
export
function _encode_RingerStatus (value: RingerStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RingerStatus) { _cached_encoder_for_RingerStatus = $._encodeBitString; }
    return _cached_encoder_for_RingerStatus(value, elGetter);
}


/* eslint-enable */
