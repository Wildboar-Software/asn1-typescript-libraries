/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Failed
 * @description
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
 */
export
const Failed_originatingNIDConnection: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary originatingNIDConnection
 * @constant
 */
export
const originatingNIDConnection: number = Failed_originatingNIDConnection; /* SHORT_NAMED_BIT */

/**
 * @summary Failed_userData
 * @constant
 */
export
const Failed_userData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 */
export
const userData: number = Failed_userData; /* SHORT_NAMED_BIT */

/**
 * @summary Failed_servicesPermitted
 * @constant
 */
export
const Failed_servicesPermitted: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 */
export
const servicesPermitted: number = Failed_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary Failed_netwCallingDevice
 * @constant
 */
export
const Failed_netwCallingDevice: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary netwCallingDevice
 * @constant
 */
export
const netwCallingDevice: number = Failed_netwCallingDevice; /* SHORT_NAMED_BIT */

/**
 * @summary Failed_netwCalledDevice
 * @constant
 */
export
const Failed_netwCalledDevice: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary netwCalledDevice
 * @constant
 */
export
const netwCalledDevice: number = Failed_netwCalledDevice; /* SHORT_NAMED_BIT */

/**
 * @summary Failed_mediaCallCharacteristics
 * @constant
 */
export
const Failed_mediaCallCharacteristics: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 */
export
const mediaCallCharacteristics: number = Failed_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Failed_callCharacteristics
 * @constant
 */
export
const Failed_callCharacteristics: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 */
export
const callCharacteristics: number = Failed_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Failed_failedConnectionInfo
 * @constant
 */
export
const Failed_failedConnectionInfo: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary failedConnectionInfo
 * @constant
 */
export
const failedConnectionInfo: number = Failed_failedConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Failed_subjectOfCall
 * @constant
 */
export
const Failed_subjectOfCall: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary subjectOfCall
 * @constant
 */
export
const subjectOfCall: number = Failed_subjectOfCall; /* SHORT_NAMED_BIT */

/**
 * @summary Failed_messageInfo
 * @constant
 */
export
const Failed_messageInfo: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary messageInfo
 * @constant
 */
export
const messageInfo: number = Failed_messageInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Failed_languagePreferences
 * @constant
 */
export
const Failed_languagePreferences: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 */
export
const languagePreferences: number = Failed_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary Failed_deviceHistory
 * @constant
 */
export
const Failed_deviceHistory: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary deviceHistory
 * @constant
 */
export
const deviceHistory: number = Failed_deviceHistory; /* SHORT_NAMED_BIT */

/**
 * @summary Failed_privateData
 * @constant
 */
export
const Failed_privateData: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = Failed_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Failed_callIDOnly
 * @constant
 */
export
const Failed_callIDOnly: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary callIDOnly
 * @constant
 */
export
const callIDOnly: number = Failed_callIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary Failed_locationInfoList
 * @constant
 */
export
const Failed_locationInfoList: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary locationInfoList
 * @constant
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
