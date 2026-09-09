/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SnapshotCallData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SnapshotCallData  ::=  BIT STRING
 * {    segmentID                 ( 0),     -- optional parameters
 *     localConnectionState             ( 1),     -- optional parameters
 *     mediaServiceInformationList         ( 2),     -- optional parameters
 *     mediaServiceVersion             ( 3),     -- optional parameters
 *     mediaServiceInstance             ( 4),     -- optional parameters
 *     mediaStreamID                 ( 5),     -- optional parameters
 *     connectionInformation             ( 6),     -- optional parameters
 *     privateData                 ( 7),     -- optional parameters
 *     locationInfoList            ( 8) }
 * ```
 */
export
type SnapshotCallData = BIT_STRING;

/**
 * @summary SnapshotCallData_segmentID
 * @constant
 */
export
const SnapshotCallData_segmentID: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary segmentID
 * @constant
 */
export
const segmentID: number = SnapshotCallData_segmentID; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotCallData_localConnectionState
 * @constant
 */
export
const SnapshotCallData_localConnectionState: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary localConnectionState
 * @constant
 */
export
const localConnectionState: number = SnapshotCallData_localConnectionState; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotCallData_mediaServiceInformationList
 * @constant
 */
export
const SnapshotCallData_mediaServiceInformationList: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary mediaServiceInformationList
 * @constant
 */
export
const mediaServiceInformationList: number = SnapshotCallData_mediaServiceInformationList; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotCallData_mediaServiceVersion
 * @constant
 */
export
const SnapshotCallData_mediaServiceVersion: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary mediaServiceVersion
 * @constant
 */
export
const mediaServiceVersion: number = SnapshotCallData_mediaServiceVersion; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotCallData_mediaServiceInstance
 * @constant
 */
export
const SnapshotCallData_mediaServiceInstance: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary mediaServiceInstance
 * @constant
 */
export
const mediaServiceInstance: number = SnapshotCallData_mediaServiceInstance; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotCallData_mediaStreamID
 * @constant
 */
export
const SnapshotCallData_mediaStreamID: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary mediaStreamID
 * @constant
 */
export
const mediaStreamID: number = SnapshotCallData_mediaStreamID; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotCallData_connectionInformation
 * @constant
 */
export
const SnapshotCallData_connectionInformation: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary connectionInformation
 * @constant
 */
export
const connectionInformation: number = SnapshotCallData_connectionInformation; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotCallData_privateData
 * @constant
 */
export
const SnapshotCallData_privateData: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SnapshotCallData_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotCallData_locationInfoList
 * @constant
 */
export
const SnapshotCallData_locationInfoList: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary locationInfoList
 * @constant
 */
export
const locationInfoList: number = SnapshotCallData_locationInfoList; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SnapshotCallData: $.ASN1Decoder<SnapshotCallData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SnapshotCallData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SnapshotCallData (el: _Element): SnapshotCallData {
    if (!_cached_decoder_for_SnapshotCallData) { _cached_decoder_for_SnapshotCallData = $._decodeBitString; }
    return _cached_decoder_for_SnapshotCallData(el);
}

let _cached_encoder_for_SnapshotCallData: $.ASN1Encoder<SnapshotCallData> | null = null;

/**
 * @summary Encodes a(n) SnapshotCallData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SnapshotCallData, encoded as an ASN.1 Element.
 */
export
function _encode_SnapshotCallData (value: SnapshotCallData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SnapshotCallData) { _cached_encoder_for_SnapshotCallData = $._encodeBitString; }
    return _cached_encoder_for_SnapshotCallData(value, elGetter);
}


/* eslint-enable */
