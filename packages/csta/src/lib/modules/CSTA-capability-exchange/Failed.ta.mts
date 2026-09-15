/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Failed
 * @description
 * Capability bitmap for the Failed event (ECMA-269 C.6.9, ECMA-285 §9.10).
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
 * Failed  ::=  BIT STRING
 * {     originatingNIDConnection         ( 0),     -- optional parameters
 *     userData                 ( 1),     -- optional parameters
 *     servicesPermitted             ( 2),     -- optional parameters
 *     netwCallingDevice             ( 3),     -- optional parameters
 *     netwCalledDevice             ( 4),     -- optional parameters
 *     mediaCallCharacteristics         ( 5),     -- optional parameters
 *     callCharacteristics             ( 6),     -- optional parameters
 *     failedConnectionInfo             ( 7),     -- optional parameters
 *     subjectOfCall                (10),     -- optional parameters
 *     messageInfo                (11),     -- optional parameters
 *     languagePreferences            (12),     -- optional parameters
 *     deviceHistory                (13),     -- optional parameters
 *     privateData                 ( 8),     -- optional parameters
 *     callIDOnly                 ( 9),    -- miscellaneous characteristics
 *     locationInfoList            (14) }
 * ```
 */
export
type Failed = BIT_STRING;

/**
 * @summary Failed_originatingNIDConnection
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.9).
 */
export
const Failed_originatingNIDConnection: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary originatingNIDConnection
 * @constant
 * @description
 * Alias of `Failed_originatingNIDConnection`.
 */
export
const originatingNIDConnection: number = Failed_originatingNIDConnection; /* SHORT_NAMED_BIT */

/**
 * @summary Failed_userData
 * @constant
 * @description
 * Bit set means the SF supports the optional `userData` parameter (ECMA-269
 * C.6.9).
 */
export
const Failed_userData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 * @description
 * Alias of `Failed_userData`.
 */
export
const userData: number = Failed_userData; /* SHORT_NAMED_BIT */

/**
 * @summary Failed_servicesPermitted
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.9).
 */
export
const Failed_servicesPermitted: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 * @description
 * Alias of `Failed_servicesPermitted`.
 */
export
const servicesPermitted: number = Failed_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary Failed_netwCallingDevice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.9).
 */
export
const Failed_netwCallingDevice: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary netwCallingDevice
 * @constant
 * @description
 * Alias of `Failed_netwCallingDevice`.
 */
export
const netwCallingDevice: number = Failed_netwCallingDevice; /* SHORT_NAMED_BIT */

/**
 * @summary Failed_netwCalledDevice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.9).
 */
export
const Failed_netwCalledDevice: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary netwCalledDevice
 * @constant
 * @description
 * Alias of `Failed_netwCalledDevice`.
 */
export
const netwCalledDevice: number = Failed_netwCalledDevice; /* SHORT_NAMED_BIT */

/**
 * @summary Failed_mediaCallCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `mediaCallCharacteristics`
 * parameter (ECMA-269 C.6.9).
 */
export
const Failed_mediaCallCharacteristics: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 * @description
 * Alias of `Failed_mediaCallCharacteristics`.
 */
export
const mediaCallCharacteristics: number = Failed_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Failed_callCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `callCharacteristics` parameter
 * (ECMA-269 C.6.9).
 */
export
const Failed_callCharacteristics: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 * @description
 * Alias of `Failed_callCharacteristics`.
 */
export
const callCharacteristics: number = Failed_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Failed_failedConnectionInfo
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.9).
 */
export
const Failed_failedConnectionInfo: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary failedConnectionInfo
 * @constant
 * @description
 * Alias of `Failed_failedConnectionInfo`.
 */
export
const failedConnectionInfo: number = Failed_failedConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Failed_subjectOfCall
 * @constant
 * @description
 * Bit set means the SF supports the optional `subjectOfCall` parameter
 * (ECMA-269 C.6.9).
 */
export
const Failed_subjectOfCall: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary subjectOfCall
 * @constant
 * @description
 * Alias of `Failed_subjectOfCall`.
 */
export
const subjectOfCall: number = Failed_subjectOfCall; /* SHORT_NAMED_BIT */

/**
 * @summary Failed_messageInfo
 * @constant
 * @description
 * Bit set means the SF supports the optional `messageInfo` parameter (ECMA-269
 * C.6.9).
 */
export
const Failed_messageInfo: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary messageInfo
 * @constant
 * @description
 * Alias of `Failed_messageInfo`.
 */
export
const messageInfo: number = Failed_messageInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Failed_languagePreferences
 * @constant
 * @description
 * Bit set means the SF supports the optional `languagePreferences` parameter
 * (ECMA-269 C.6.9).
 */
export
const Failed_languagePreferences: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 * @description
 * Alias of `Failed_languagePreferences`.
 */
export
const languagePreferences: number = Failed_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary Failed_deviceHistory
 * @constant
 * @description
 * Bit set means the SF supports the optional `deviceHistory` parameter
 * (ECMA-269 C.6.9).
 */
export
const Failed_deviceHistory: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary deviceHistory
 * @constant
 * @description
 * Alias of `Failed_deviceHistory`.
 */
export
const deviceHistory: number = Failed_deviceHistory; /* SHORT_NAMED_BIT */

/**
 * @summary Failed_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.6.9).
 */
export
const Failed_privateData: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `Failed_privateData`.
 */
export
const privateData: number = Failed_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Failed_callIDOnly
 * @constant
 * @description
 * Bit set means the SF supports CallID-only ConnectionIDs for this service
 * (ECMA-269 C.6.9).
 */
export
const Failed_callIDOnly: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary callIDOnly
 * @constant
 * @description
 * Alias of `Failed_callIDOnly`.
 */
export
const callIDOnly: number = Failed_callIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary Failed_locationInfoList
 * @constant
 * @description
 * Bit set means the SF supports the optional `locationInfoList` parameter
 * (ECMA-269 C.6.9).
 */
export
const Failed_locationInfoList: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary locationInfoList
 * @constant
 * @description
 * Alias of `Failed_locationInfoList`.
 */
export
const locationInfoList: number = Failed_locationInfoList; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Failed: $.ASN1Decoder<Failed> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Failed
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Failed (el: _Element): Failed {
    if (!_cached_decoder_for_Failed) { _cached_decoder_for_Failed = $._decodeBitString; }
    return _cached_decoder_for_Failed(el);
}

let _cached_encoder_for_Failed: $.ASN1Encoder<Failed> | null = null;

/**
 * @summary Encodes a(n) Failed into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Failed, encoded as an ASN.1 Element.
 */
export
function _encode_Failed (value: Failed, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Failed) { _cached_encoder_for_Failed = $._encodeBitString; }
    return _cached_encoder_for_Failed(value, elGetter);
}


/* eslint-enable */
