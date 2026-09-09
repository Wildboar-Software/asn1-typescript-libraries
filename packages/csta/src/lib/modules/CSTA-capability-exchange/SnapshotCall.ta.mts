/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SnapshotCall
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SnapshotCall  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     locaConnectionStateInAck         ( 1),     -- optional parameters
 *     mediaServiceInfoListInAck         ( 2),     -- optional parameters
 *     mediaServiceVersionInAck         ( 3),     -- optional parameters
 *     mediaServiceInstanceInAck         ( 4),     -- optional parameters
 *     mediaStreamID                 ( 5),     -- optional parameters
 *     connectionInformation             ( 6),     -- optional parameters
 *     mediaCallCharacteristicsInAck         ( 7),     -- optional parameters
 *     callCharacteristicsInAck         ( 8),     -- optional parameters
 *     callingDeviceInAck             ( 9),     -- optional parameters
 *     calledDeviceInAck             (10),     -- optional parameters
 *     subjectOfCallInAck            (14),     -- optional parameters
 *     messageInfoInAck            (15),     -- optional parameters
 *     languagePreferencesInAck        (16),     -- optional parameters
 *     deviceHistoryInAck            (17),     -- optional parameters
 *     privateDataInAck             (11),     -- optional parameters
 *     callIDOnly                 (12),     -- miscellaneous characteristics
 *     reportsWithSnapsCallData         (13),     -- optional parameters
 *     locationInfoList            (18) }
 * ```
 */
export
type SnapshotCall = BIT_STRING;

/**
 * @summary SnapshotCall_privateData
 * @constant
 */
export
const SnapshotCall_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SnapshotCall_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotCall_locaConnectionStateInAck
 * @constant
 */
export
const SnapshotCall_locaConnectionStateInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary locaConnectionStateInAck
 * @constant
 */
export
const locaConnectionStateInAck: number = SnapshotCall_locaConnectionStateInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotCall_mediaServiceInfoListInAck
 * @constant
 */
export
const SnapshotCall_mediaServiceInfoListInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary mediaServiceInfoListInAck
 * @constant
 */
export
const mediaServiceInfoListInAck: number = SnapshotCall_mediaServiceInfoListInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotCall_mediaServiceVersionInAck
 * @constant
 */
export
const SnapshotCall_mediaServiceVersionInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary mediaServiceVersionInAck
 * @constant
 */
export
const mediaServiceVersionInAck: number = SnapshotCall_mediaServiceVersionInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotCall_mediaServiceInstanceInAck
 * @constant
 */
export
const SnapshotCall_mediaServiceInstanceInAck: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary mediaServiceInstanceInAck
 * @constant
 */
export
const mediaServiceInstanceInAck: number = SnapshotCall_mediaServiceInstanceInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotCall_mediaStreamID
 * @constant
 */
export
const SnapshotCall_mediaStreamID: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary mediaStreamID
 * @constant
 */
export
const mediaStreamID: number = SnapshotCall_mediaStreamID; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotCall_connectionInformation
 * @constant
 */
export
const SnapshotCall_connectionInformation: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary connectionInformation
 * @constant
 */
export
const connectionInformation: number = SnapshotCall_connectionInformation; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotCall_mediaCallCharacteristicsInAck
 * @constant
 */
export
const SnapshotCall_mediaCallCharacteristicsInAck: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristicsInAck
 * @constant
 */
export
const mediaCallCharacteristicsInAck: number = SnapshotCall_mediaCallCharacteristicsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotCall_callCharacteristicsInAck
 * @constant
 */
export
const SnapshotCall_callCharacteristicsInAck: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsInAck
 * @constant
 */
export
const callCharacteristicsInAck: number = SnapshotCall_callCharacteristicsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotCall_callingDeviceInAck
 * @constant
 */
export
const SnapshotCall_callingDeviceInAck: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary callingDeviceInAck
 * @constant
 */
export
const callingDeviceInAck: number = SnapshotCall_callingDeviceInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotCall_calledDeviceInAck
 * @constant
 */
export
const SnapshotCall_calledDeviceInAck: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary calledDeviceInAck
 * @constant
 */
export
const calledDeviceInAck: number = SnapshotCall_calledDeviceInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotCall_subjectOfCallInAck
 * @constant
 */
export
const SnapshotCall_subjectOfCallInAck: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary subjectOfCallInAck
 * @constant
 */
export
const subjectOfCallInAck: number = SnapshotCall_subjectOfCallInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotCall_messageInfoInAck
 * @constant
 */
export
const SnapshotCall_messageInfoInAck: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary messageInfoInAck
 * @constant
 */
export
const messageInfoInAck: number = SnapshotCall_messageInfoInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotCall_languagePreferencesInAck
 * @constant
 */
export
const SnapshotCall_languagePreferencesInAck: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferencesInAck
 * @constant
 */
export
const languagePreferencesInAck: number = SnapshotCall_languagePreferencesInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotCall_deviceHistoryInAck
 * @constant
 */
export
const SnapshotCall_deviceHistoryInAck: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary deviceHistoryInAck
 * @constant
 */
export
const deviceHistoryInAck: number = SnapshotCall_deviceHistoryInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotCall_privateDataInAck
 * @constant
 */
export
const SnapshotCall_privateDataInAck: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = SnapshotCall_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotCall_callIDOnly
 * @constant
 */
export
const SnapshotCall_callIDOnly: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary callIDOnly
 * @constant
 */
export
const callIDOnly: number = SnapshotCall_callIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotCall_reportsWithSnapsCallData
 * @constant
 */
export
const SnapshotCall_reportsWithSnapsCallData: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary reportsWithSnapsCallData
 * @constant
 */
export
const reportsWithSnapsCallData: number = SnapshotCall_reportsWithSnapsCallData; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotCall_locationInfoList
 * @constant
 */
export
const SnapshotCall_locationInfoList: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary locationInfoList
 * @constant
 */
export
const locationInfoList: number = SnapshotCall_locationInfoList; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SnapshotCall: $.ASN1Decoder<SnapshotCall> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SnapshotCall
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SnapshotCall (el: _Element): SnapshotCall {
    if (!_cached_decoder_for_SnapshotCall) { _cached_decoder_for_SnapshotCall = $._decodeBitString; }
    return _cached_decoder_for_SnapshotCall(el);
}

let _cached_encoder_for_SnapshotCall: $.ASN1Encoder<SnapshotCall> | null = null;

/**
 * @summary Encodes a(n) SnapshotCall into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SnapshotCall, encoded as an ASN.1 Element.
 */
export
function _encode_SnapshotCall (value: SnapshotCall, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SnapshotCall) { _cached_encoder_for_SnapshotCall = $._encodeBitString; }
    return _cached_encoder_for_SnapshotCall(value, elGetter);
}


/* eslint-enable */
