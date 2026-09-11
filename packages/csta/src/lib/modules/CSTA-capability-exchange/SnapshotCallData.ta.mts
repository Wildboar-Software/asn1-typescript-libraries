/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SnapshotCallData
 * @description
 * Capability bitmap for the Snapshot CallData service (ECMA-269 C.4.3, ECMA-285
 * §9.10). Presence of this entry in `SnapshotServList` means the SF supports
 * that service. Each set bit is an optional parameter, enumerated value,
 * initial connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
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
 * @description
 * Bit set means the SF supports the optional `segmentID` parameter (ECMA-269
 * C.4.3).
 */
export
const SnapshotCallData_segmentID: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary segmentID
 * @constant
 * @description
 * Alias of `SnapshotCallData_segmentID`.
 */
export
const segmentID: number = SnapshotCallData_segmentID; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotCallData_localConnectionState
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.4.3).
 */
export
const SnapshotCallData_localConnectionState: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary localConnectionState
 * @constant
 * @description
 * Alias of `SnapshotCallData_localConnectionState`.
 */
export
const localConnectionState: number = SnapshotCallData_localConnectionState; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotCallData_mediaServiceInformationList
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.4.3).
 */
export
const SnapshotCallData_mediaServiceInformationList: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary mediaServiceInformationList
 * @constant
 * @description
 * Alias of `SnapshotCallData_mediaServiceInformationList`.
 */
export
const mediaServiceInformationList: number = SnapshotCallData_mediaServiceInformationList; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotCallData_mediaServiceVersion
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.4.3).
 */
export
const SnapshotCallData_mediaServiceVersion: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary mediaServiceVersion
 * @constant
 * @description
 * Alias of `SnapshotCallData_mediaServiceVersion`.
 */
export
const mediaServiceVersion: number = SnapshotCallData_mediaServiceVersion; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotCallData_mediaServiceInstance
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.4.3).
 */
export
const SnapshotCallData_mediaServiceInstance: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary mediaServiceInstance
 * @constant
 * @description
 * Alias of `SnapshotCallData_mediaServiceInstance`.
 */
export
const mediaServiceInstance: number = SnapshotCallData_mediaServiceInstance; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotCallData_mediaStreamID
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.4.3).
 */
export
const SnapshotCallData_mediaStreamID: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary mediaStreamID
 * @constant
 * @description
 * Alias of `SnapshotCallData_mediaStreamID`.
 */
export
const mediaStreamID: number = SnapshotCallData_mediaStreamID; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotCallData_connectionInformation
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.4.3).
 */
export
const SnapshotCallData_connectionInformation: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary connectionInformation
 * @constant
 * @description
 * Alias of `SnapshotCallData_connectionInformation`.
 */
export
const connectionInformation: number = SnapshotCallData_connectionInformation; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotCallData_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.4.3).
 */
export
const SnapshotCallData_privateData: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SnapshotCallData_privateData`.
 */
export
const privateData: number = SnapshotCallData_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotCallData_locationInfoList
 * @constant
 * @description
 * Bit set means the SF supports the optional `locationInfoList` parameter
 * (ECMA-269 C.4.3).
 */
export
const SnapshotCallData_locationInfoList: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary locationInfoList
 * @constant
 * @description
 * Alias of `SnapshotCallData_locationInfoList`.
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
