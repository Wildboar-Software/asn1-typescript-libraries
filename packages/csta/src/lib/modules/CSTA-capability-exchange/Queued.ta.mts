/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Queued
 * @description
 * Capability bitmap for the Queued event (ECMA-269 C.6.15, ECMA-285 §9.10).
 * Presence of this entry in `CallControlEvtsList` means the SF supports that
 * event. Each set bit is an optional parameter, enumerated value, initial
 * connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Queued  ::=  BIT STRING
 * {     numberQueued                 ( 0),     -- optional parameters
 *     callsInFront                 ( 1),     -- optional parameters
 *     userData                 ( 2),     -- optional parameters
 *     servicesPermitted             ( 3),     -- optional parameters
 *     netwCallingDevice             ( 4),     -- optional parameters
 *     netwCalledDevice             ( 5),     -- optional parameters
 *     mediaCallCharacteristics         ( 6),     -- optional parameters
 *     callCharacteristics             ( 7),     -- optional parameters
 *     queuedConnectionInfo             ( 8),     -- optional parameters
 *     subjectOfCall                (10),     -- optional parameters
 *     messageInfo                (11),     -- optional parameters
 *     languagePreferences            (12),     -- optional parameters
 *     deviceHistory                (13),     -- optional parameters
 *     privateData                 ( 9),     -- optional parameters
 *     locationInfoList            (14) }
 * ```
 */
export
type Queued = BIT_STRING;

/**
 * @summary Queued_numberQueued
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.15).
 */
export
const Queued_numberQueued: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary numberQueued
 * @constant
 * @description
 * Alias of `Queued_numberQueued`.
 */
export
const numberQueued: number = Queued_numberQueued; /* SHORT_NAMED_BIT */

/**
 * @summary Queued_callsInFront
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.15).
 */
export
const Queued_callsInFront: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary callsInFront
 * @constant
 * @description
 * Alias of `Queued_callsInFront`.
 */
export
const callsInFront: number = Queued_callsInFront; /* SHORT_NAMED_BIT */

/**
 * @summary Queued_userData
 * @constant
 * @description
 * Bit set means the SF supports the optional `userData` parameter (ECMA-269
 * C.6.15).
 */
export
const Queued_userData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 * @description
 * Alias of `Queued_userData`.
 */
export
const userData: number = Queued_userData; /* SHORT_NAMED_BIT */

/**
 * @summary Queued_servicesPermitted
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.15).
 */
export
const Queued_servicesPermitted: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 * @description
 * Alias of `Queued_servicesPermitted`.
 */
export
const servicesPermitted: number = Queued_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary Queued_netwCallingDevice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.15).
 */
export
const Queued_netwCallingDevice: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary netwCallingDevice
 * @constant
 * @description
 * Alias of `Queued_netwCallingDevice`.
 */
export
const netwCallingDevice: number = Queued_netwCallingDevice; /* SHORT_NAMED_BIT */

/**
 * @summary Queued_netwCalledDevice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.15).
 */
export
const Queued_netwCalledDevice: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary netwCalledDevice
 * @constant
 * @description
 * Alias of `Queued_netwCalledDevice`.
 */
export
const netwCalledDevice: number = Queued_netwCalledDevice; /* SHORT_NAMED_BIT */

/**
 * @summary Queued_mediaCallCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `mediaCallCharacteristics`
 * parameter (ECMA-269 C.6.15).
 */
export
const Queued_mediaCallCharacteristics: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 * @description
 * Alias of `Queued_mediaCallCharacteristics`.
 */
export
const mediaCallCharacteristics: number = Queued_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Queued_callCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `callCharacteristics` parameter
 * (ECMA-269 C.6.15).
 */
export
const Queued_callCharacteristics: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 * @description
 * Alias of `Queued_callCharacteristics`.
 */
export
const callCharacteristics: number = Queued_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Queued_queuedConnectionInfo
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.15).
 */
export
const Queued_queuedConnectionInfo: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary queuedConnectionInfo
 * @constant
 * @description
 * Alias of `Queued_queuedConnectionInfo`.
 */
export
const queuedConnectionInfo: number = Queued_queuedConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Queued_subjectOfCall
 * @constant
 * @description
 * Bit set means the SF supports the optional `subjectOfCall` parameter
 * (ECMA-269 C.6.15).
 */
export
const Queued_subjectOfCall: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary subjectOfCall
 * @constant
 * @description
 * Alias of `Queued_subjectOfCall`.
 */
export
const subjectOfCall: number = Queued_subjectOfCall; /* SHORT_NAMED_BIT */

/**
 * @summary Queued_messageInfo
 * @constant
 * @description
 * Bit set means the SF supports the optional `messageInfo` parameter (ECMA-269
 * C.6.15).
 */
export
const Queued_messageInfo: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary messageInfo
 * @constant
 * @description
 * Alias of `Queued_messageInfo`.
 */
export
const messageInfo: number = Queued_messageInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Queued_languagePreferences
 * @constant
 * @description
 * Bit set means the SF supports the optional `languagePreferences` parameter
 * (ECMA-269 C.6.15).
 */
export
const Queued_languagePreferences: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 * @description
 * Alias of `Queued_languagePreferences`.
 */
export
const languagePreferences: number = Queued_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary Queued_deviceHistory
 * @constant
 * @description
 * Bit set means the SF supports the optional `deviceHistory` parameter
 * (ECMA-269 C.6.15).
 */
export
const Queued_deviceHistory: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary deviceHistory
 * @constant
 * @description
 * Alias of `Queued_deviceHistory`.
 */
export
const deviceHistory: number = Queued_deviceHistory; /* SHORT_NAMED_BIT */

/**
 * @summary Queued_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.6.15).
 */
export
const Queued_privateData: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `Queued_privateData`.
 */
export
const privateData: number = Queued_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Queued_locationInfoList
 * @constant
 * @description
 * Bit set means the SF supports the optional `locationInfoList` parameter
 * (ECMA-269 C.6.15).
 */
export
const Queued_locationInfoList: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary locationInfoList
 * @constant
 * @description
 * Alias of `Queued_locationInfoList`.
 */
export
const locationInfoList: number = Queued_locationInfoList; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Queued: $.ASN1Decoder<Queued> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Queued
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Queued (el: _Element): Queued {
    if (!_cached_decoder_for_Queued) { _cached_decoder_for_Queued = $._decodeBitString; }
    return _cached_decoder_for_Queued(el);
}

let _cached_encoder_for_Queued: $.ASN1Encoder<Queued> | null = null;

/**
 * @summary Encodes a(n) Queued into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Queued, encoded as an ASN.1 Element.
 */
export
function _encode_Queued (value: Queued, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Queued) { _cached_encoder_for_Queued = $._encodeBitString; }
    return _cached_encoder_for_Queued(value, elGetter);
}


/* eslint-enable */
