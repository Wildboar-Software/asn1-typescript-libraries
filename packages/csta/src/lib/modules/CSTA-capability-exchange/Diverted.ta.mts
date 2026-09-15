/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Diverted
 * @description
 * Capability bitmap for the Diverted event (ECMA-269 C.6.7, ECMA-285 §9.10).
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
 * Diverted  ::=  BIT STRING
 * {     callingDevice                 ( 0),     -- optional parameters
 *     calledDevice                 ( 1),     -- optional parameters
 *     userData                 ( 2),     -- optional parameters
 *     servicesPermitted             ( 3),     -- optional parameters
 *     mediaCallCharacteristics         ( 4),     -- optional parameters
 *     callCharacteristics             ( 5),     -- optional parameters
 *     connectionInfo                 ( 6),     -- optional parameters
 *     netwCallingDevice             ( 7),     -- optional parameters
 *     netwCalledDevice             ( 8),     -- optional parameters
 *     subjectOfCall                (11),     -- optional parameters
 *     messageInfo                (12),     -- optional parameters
 *     languagePreferences            (13),     -- optional parameters
 *     deviceHistory                (14),     -- optional parameters
 *     privateData                 ( 9),     -- optional parameters
 *     sendsDivertedToAll             (10),     -- optional parameters
 *     locationInfoList            (15) }
 * ```
 */
export
type Diverted = BIT_STRING;

/**
 * @summary Diverted_callingDevice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.7).
 */
export
const Diverted_callingDevice: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary callingDevice
 * @constant
 * @description
 * Alias of `Diverted_callingDevice`.
 */
export
const callingDevice: number = Diverted_callingDevice; /* SHORT_NAMED_BIT */

/**
 * @summary Diverted_calledDevice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.7).
 */
export
const Diverted_calledDevice: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary calledDevice
 * @constant
 * @description
 * Alias of `Diverted_calledDevice`.
 */
export
const calledDevice: number = Diverted_calledDevice; /* SHORT_NAMED_BIT */

/**
 * @summary Diverted_userData
 * @constant
 * @description
 * Bit set means the SF supports the optional `userData` parameter (ECMA-269
 * C.6.7).
 */
export
const Diverted_userData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 * @description
 * Alias of `Diverted_userData`.
 */
export
const userData: number = Diverted_userData; /* SHORT_NAMED_BIT */

/**
 * @summary Diverted_servicesPermitted
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.7).
 */
export
const Diverted_servicesPermitted: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 * @description
 * Alias of `Diverted_servicesPermitted`.
 */
export
const servicesPermitted: number = Diverted_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary Diverted_mediaCallCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `mediaCallCharacteristics`
 * parameter (ECMA-269 C.6.7).
 */
export
const Diverted_mediaCallCharacteristics: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 * @description
 * Alias of `Diverted_mediaCallCharacteristics`.
 */
export
const mediaCallCharacteristics: number = Diverted_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Diverted_callCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `callCharacteristics` parameter
 * (ECMA-269 C.6.7).
 */
export
const Diverted_callCharacteristics: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 * @description
 * Alias of `Diverted_callCharacteristics`.
 */
export
const callCharacteristics: number = Diverted_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Diverted_connectionInfo
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.7).
 */
export
const Diverted_connectionInfo: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary connectionInfo
 * @constant
 * @description
 * Alias of `Diverted_connectionInfo`.
 */
export
const connectionInfo: number = Diverted_connectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Diverted_netwCallingDevice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.7).
 */
export
const Diverted_netwCallingDevice: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary netwCallingDevice
 * @constant
 * @description
 * Alias of `Diverted_netwCallingDevice`.
 */
export
const netwCallingDevice: number = Diverted_netwCallingDevice; /* SHORT_NAMED_BIT */

/**
 * @summary Diverted_netwCalledDevice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.7).
 */
export
const Diverted_netwCalledDevice: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary netwCalledDevice
 * @constant
 * @description
 * Alias of `Diverted_netwCalledDevice`.
 */
export
const netwCalledDevice: number = Diverted_netwCalledDevice; /* SHORT_NAMED_BIT */

/**
 * @summary Diverted_subjectOfCall
 * @constant
 * @description
 * Bit set means the SF supports the optional `subjectOfCall` parameter
 * (ECMA-269 C.6.7).
 */
export
const Diverted_subjectOfCall: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary subjectOfCall
 * @constant
 * @description
 * Alias of `Diverted_subjectOfCall`.
 */
export
const subjectOfCall: number = Diverted_subjectOfCall; /* SHORT_NAMED_BIT */

/**
 * @summary Diverted_messageInfo
 * @constant
 * @description
 * Bit set means the SF supports the optional `messageInfo` parameter (ECMA-269
 * C.6.7).
 */
export
const Diverted_messageInfo: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary messageInfo
 * @constant
 * @description
 * Alias of `Diverted_messageInfo`.
 */
export
const messageInfo: number = Diverted_messageInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Diverted_languagePreferences
 * @constant
 * @description
 * Bit set means the SF supports the optional `languagePreferences` parameter
 * (ECMA-269 C.6.7).
 */
export
const Diverted_languagePreferences: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 * @description
 * Alias of `Diverted_languagePreferences`.
 */
export
const languagePreferences: number = Diverted_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary Diverted_deviceHistory
 * @constant
 * @description
 * Bit set means the SF supports the optional `deviceHistory` parameter
 * (ECMA-269 C.6.7).
 */
export
const Diverted_deviceHistory: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary deviceHistory
 * @constant
 * @description
 * Alias of `Diverted_deviceHistory`.
 */
export
const deviceHistory: number = Diverted_deviceHistory; /* SHORT_NAMED_BIT */

/**
 * @summary Diverted_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.6.7).
 */
export
const Diverted_privateData: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `Diverted_privateData`.
 */
export
const privateData: number = Diverted_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Diverted_sendsDivertedToAll
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.7).
 */
export
const Diverted_sendsDivertedToAll: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary sendsDivertedToAll
 * @constant
 * @description
 * Alias of `Diverted_sendsDivertedToAll`.
 */
export
const sendsDivertedToAll: number = Diverted_sendsDivertedToAll; /* SHORT_NAMED_BIT */

/**
 * @summary Diverted_locationInfoList
 * @constant
 * @description
 * Bit set means the SF supports the optional `locationInfoList` parameter
 * (ECMA-269 C.6.7).
 */
export
const Diverted_locationInfoList: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary locationInfoList
 * @constant
 * @description
 * Alias of `Diverted_locationInfoList`.
 */
export
const locationInfoList: number = Diverted_locationInfoList; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Diverted: $.ASN1Decoder<Diverted> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Diverted
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Diverted (el: _Element): Diverted {
    if (!_cached_decoder_for_Diverted) { _cached_decoder_for_Diverted = $._decodeBitString; }
    return _cached_decoder_for_Diverted(el);
}

let _cached_encoder_for_Diverted: $.ASN1Encoder<Diverted> | null = null;

/**
 * @summary Encodes a(n) Diverted into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Diverted, encoded as an ASN.1 Element.
 */
export
function _encode_Diverted (value: Diverted, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Diverted) { _cached_encoder_for_Diverted = $._encodeBitString; }
    return _cached_encoder_for_Diverted(value, elGetter);
}


/* eslint-enable */
