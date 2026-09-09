/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary StartDataPath
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StartDataPath  ::=  BIT STRING
 * {     objectDevice                 ( 0),     -- optional parameters
 *     objectCall                 ( 1),     -- optional parameters
 *     dataPathDirectionCfToObject         ( 2),     -- optional parameters
 *     dataPathDirectionObjectToCf         ( 3),     -- optional parameters
 *     dataPathDirectionBidirectional         ( 4),     -- optional parameters
 *     dataPathTypeText             ( 5),     -- optional parameters
 *     dataPathTypeVoice             ( 6),     -- optional parameters
 *     numberOfCharsToCollect             ( 7),     -- optional parameters
 *     terminationChar             ( 8),     -- optional parameters
 *     timeout                 ( 9),     -- optional parameters
 *     privateData                 (10),     -- optional parameters
 *     numberOfCharsToCollectInAck         (11),     -- optional parameters
 *     terminationCharInAck             (12),     -- optional parameters
 *     timeoutInAck                 (13),     -- optional parameters
 *     privateDataInAck             (14) }
 * ```
 */
export
type StartDataPath = BIT_STRING;

/**
 * @summary StartDataPath_objectDevice
 * @constant
 */
export
const StartDataPath_objectDevice: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary objectDevice
 * @constant
 */
export
const objectDevice: number = StartDataPath_objectDevice; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataPath_objectCall
 * @constant
 */
export
const StartDataPath_objectCall: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary objectCall
 * @constant
 */
export
const objectCall: number = StartDataPath_objectCall; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataPath_dataPathDirectionCfToObject
 * @constant
 */
export
const StartDataPath_dataPathDirectionCfToObject: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary dataPathDirectionCfToObject
 * @constant
 */
export
const dataPathDirectionCfToObject: number = StartDataPath_dataPathDirectionCfToObject; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataPath_dataPathDirectionObjectToCf
 * @constant
 */
export
const StartDataPath_dataPathDirectionObjectToCf: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary dataPathDirectionObjectToCf
 * @constant
 */
export
const dataPathDirectionObjectToCf: number = StartDataPath_dataPathDirectionObjectToCf; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataPath_dataPathDirectionBidirectional
 * @constant
 */
export
const StartDataPath_dataPathDirectionBidirectional: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary dataPathDirectionBidirectional
 * @constant
 */
export
const dataPathDirectionBidirectional: number = StartDataPath_dataPathDirectionBidirectional; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataPath_dataPathTypeText
 * @constant
 */
export
const StartDataPath_dataPathTypeText: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary dataPathTypeText
 * @constant
 */
export
const dataPathTypeText: number = StartDataPath_dataPathTypeText; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataPath_dataPathTypeVoice
 * @constant
 */
export
const StartDataPath_dataPathTypeVoice: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary dataPathTypeVoice
 * @constant
 */
export
const dataPathTypeVoice: number = StartDataPath_dataPathTypeVoice; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataPath_numberOfCharsToCollect
 * @constant
 */
export
const StartDataPath_numberOfCharsToCollect: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary numberOfCharsToCollect
 * @constant
 */
export
const numberOfCharsToCollect: number = StartDataPath_numberOfCharsToCollect; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataPath_terminationChar
 * @constant
 */
export
const StartDataPath_terminationChar: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary terminationChar
 * @constant
 */
export
const terminationChar: number = StartDataPath_terminationChar; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataPath_timeout
 * @constant
 */
export
const StartDataPath_timeout: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary timeout
 * @constant
 */
export
const timeout: number = StartDataPath_timeout; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataPath_privateData
 * @constant
 */
export
const StartDataPath_privateData: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = StartDataPath_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataPath_numberOfCharsToCollectInAck
 * @constant
 */
export
const StartDataPath_numberOfCharsToCollectInAck: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary numberOfCharsToCollectInAck
 * @constant
 */
export
const numberOfCharsToCollectInAck: number = StartDataPath_numberOfCharsToCollectInAck; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataPath_terminationCharInAck
 * @constant
 */
export
const StartDataPath_terminationCharInAck: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary terminationCharInAck
 * @constant
 */
export
const terminationCharInAck: number = StartDataPath_terminationCharInAck; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataPath_timeoutInAck
 * @constant
 */
export
const StartDataPath_timeoutInAck: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary timeoutInAck
 * @constant
 */
export
const timeoutInAck: number = StartDataPath_timeoutInAck; /* SHORT_NAMED_BIT */

/**
 * @summary StartDataPath_privateDataInAck
 * @constant
 */
export
const StartDataPath_privateDataInAck: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = StartDataPath_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_StartDataPath: $.ASN1Decoder<StartDataPath> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StartDataPath
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StartDataPath (el: _Element): StartDataPath {
    if (!_cached_decoder_for_StartDataPath) { _cached_decoder_for_StartDataPath = $._decodeBitString; }
    return _cached_decoder_for_StartDataPath(el);
}

let _cached_encoder_for_StartDataPath: $.ASN1Encoder<StartDataPath> | null = null;

/**
 * @summary Encodes a(n) StartDataPath into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StartDataPath, encoded as an ASN.1 Element.
 */
export
function _encode_StartDataPath (value: StartDataPath, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StartDataPath) { _cached_encoder_for_StartDataPath = $._encodeBitString; }
    return _cached_encoder_for_StartDataPath(value, elGetter);
}


/* eslint-enable */
