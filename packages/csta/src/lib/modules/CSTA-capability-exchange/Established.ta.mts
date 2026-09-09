/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Established
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Established  ::=  BIT STRING
 * {     originatingNIDConnection         ( 0),     -- optional parameters
 *     userData                 ( 1),     -- optional parameters
 *     servicesPermitted             ( 2),     -- optional parameters
 *     netwCallingDevice             ( 3),     -- optional parameters
 *     netwCalledDevice             ( 4),     -- optional parameters
 *     mediaCallCharacteristics         ( 5),     -- optional parameters
 *     callCharacteristics             ( 6),     -- optional parameters
 *     establishedConnectionInfo         ( 7),     -- optional parameters
 *     subjectOfCall                ( 9),     -- optional parameters
 *     messageInfo                (10),     -- optional parameters
 *     languagePreferences            (11),     -- optional parameters
 *     deviceHistory                (12),     -- optional parameters
 *     privateData                 ( 8),     -- optional parameters
 *     locationInfoList            (13) }
 * ```
 */
export
type Established = BIT_STRING;

/**
 * @summary Established_originatingNIDConnection
 * @constant
 */
export
const Established_originatingNIDConnection: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary originatingNIDConnection
 * @constant
 */
export
const originatingNIDConnection: number = Established_originatingNIDConnection; /* SHORT_NAMED_BIT */

/**
 * @summary Established_userData
 * @constant
 */
export
const Established_userData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 */
export
const userData: number = Established_userData; /* SHORT_NAMED_BIT */

/**
 * @summary Established_servicesPermitted
 * @constant
 */
export
const Established_servicesPermitted: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 */
export
const servicesPermitted: number = Established_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary Established_netwCallingDevice
 * @constant
 */
export
const Established_netwCallingDevice: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary netwCallingDevice
 * @constant
 */
export
const netwCallingDevice: number = Established_netwCallingDevice; /* SHORT_NAMED_BIT */

/**
 * @summary Established_netwCalledDevice
 * @constant
 */
export
const Established_netwCalledDevice: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary netwCalledDevice
 * @constant
 */
export
const netwCalledDevice: number = Established_netwCalledDevice; /* SHORT_NAMED_BIT */

/**
 * @summary Established_mediaCallCharacteristics
 * @constant
 */
export
const Established_mediaCallCharacteristics: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 */
export
const mediaCallCharacteristics: number = Established_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Established_callCharacteristics
 * @constant
 */
export
const Established_callCharacteristics: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 */
export
const callCharacteristics: number = Established_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Established_establishedConnectionInfo
 * @constant
 */
export
const Established_establishedConnectionInfo: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary establishedConnectionInfo
 * @constant
 */
export
const establishedConnectionInfo: number = Established_establishedConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Established_subjectOfCall
 * @constant
 */
export
const Established_subjectOfCall: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary subjectOfCall
 * @constant
 */
export
const subjectOfCall: number = Established_subjectOfCall; /* SHORT_NAMED_BIT */

/**
 * @summary Established_messageInfo
 * @constant
 */
export
const Established_messageInfo: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary messageInfo
 * @constant
 */
export
const messageInfo: number = Established_messageInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Established_languagePreferences
 * @constant
 */
export
const Established_languagePreferences: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 */
export
const languagePreferences: number = Established_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary Established_deviceHistory
 * @constant
 */
export
const Established_deviceHistory: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary deviceHistory
 * @constant
 */
export
const deviceHistory: number = Established_deviceHistory; /* SHORT_NAMED_BIT */

/**
 * @summary Established_privateData
 * @constant
 */
export
const Established_privateData: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = Established_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Established_locationInfoList
 * @constant
 */
export
const Established_locationInfoList: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary locationInfoList
 * @constant
 */
export
const locationInfoList: number = Established_locationInfoList; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Established: $.ASN1Decoder<Established> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Established
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Established (el: _Element): Established {
    if (!_cached_decoder_for_Established) { _cached_decoder_for_Established = $._decodeBitString; }
    return _cached_decoder_for_Established(el);
}

let _cached_encoder_for_Established: $.ASN1Encoder<Established> | null = null;

/**
 * @summary Encodes a(n) Established into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Established, encoded as an ASN.1 Element.
 */
export
function _encode_Established (value: Established, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Established) { _cached_encoder_for_Established = $._encodeBitString; }
    return _cached_encoder_for_Established(value, elGetter);
}


/* eslint-enable */
