/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SnapshotDeviceData
 * @description
 * Capability bitmap for the Snapshot DeviceData service (ECMA-269 C.4.4,
 * ECMA-285 §9.10). Presence of this entry in `SnapshotServList` means the SF
 * supports that service. Each set bit is an optional parameter, enumerated
 * value, initial connection state, or miscellaneous characteristic from Annex
 * C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SnapshotDeviceData  ::=  BIT STRING
 * {    segmentID                 ( 0),     -- optional parameters
 *     localCallStateCompoundCallState     ( 1),     -- optional parameters
 *     localCallStateSimpleCallState         ( 2),     -- optional parameters
 *     localCallStateUnknown             ( 3),     -- optional parameters
 *     mediaServiceInformationList         ( 4),     -- optional parameters
 *     mediaServiceVersion             ( 5),     -- optional parameters
 *     mediaServiceInstance             ( 6),     -- optional parameters
 *     mediaStreamID                 ( 7),     -- optional parameters
 *     connectionInformation             ( 8),     -- optional parameters
 *     mediaCallCharacteristics         ( 9),     -- optional parameters
 *     endpointDeviceID            (11),     -- optional parameters
 *     privateData                 (10) }
 * ```
 */
export
type SnapshotDeviceData = BIT_STRING;

/**
 * @summary SnapshotDeviceData_segmentID
 * @constant
 * @description
 * Bit set means the SF supports the optional `segmentID` parameter (ECMA-269
 * C.4.4).
 */
export
const SnapshotDeviceData_segmentID: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary segmentID
 * @constant
 * @description
 * Alias of `SnapshotDeviceData_segmentID`.
 */
export
const segmentID: number = SnapshotDeviceData_segmentID; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotDeviceData_localCallStateCompoundCallState
 * @constant
 * @description
 * Bit set means the SF supports `localCallState` value `compoundCallState`
 * (ECMA-269 C.4.4).
 */
export
const SnapshotDeviceData_localCallStateCompoundCallState: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary localCallStateCompoundCallState
 * @constant
 * @description
 * Alias of `SnapshotDeviceData_localCallStateCompoundCallState`.
 */
export
const localCallStateCompoundCallState: number = SnapshotDeviceData_localCallStateCompoundCallState; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotDeviceData_localCallStateSimpleCallState
 * @constant
 * @description
 * Bit set means the SF supports `localCallState` value `simpleCallState`
 * (ECMA-269 C.4.4).
 */
export
const SnapshotDeviceData_localCallStateSimpleCallState: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary localCallStateSimpleCallState
 * @constant
 * @description
 * Alias of `SnapshotDeviceData_localCallStateSimpleCallState`.
 */
export
const localCallStateSimpleCallState: number = SnapshotDeviceData_localCallStateSimpleCallState; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotDeviceData_localCallStateUnknown
 * @constant
 * @description
 * Bit set means the SF supports `localCallState` value `unknown` (ECMA-269
 * C.4.4).
 */
export
const SnapshotDeviceData_localCallStateUnknown: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary localCallStateUnknown
 * @constant
 * @description
 * Alias of `SnapshotDeviceData_localCallStateUnknown`.
 */
export
const localCallStateUnknown: number = SnapshotDeviceData_localCallStateUnknown; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotDeviceData_mediaServiceInformationList
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.4.4).
 */
export
const SnapshotDeviceData_mediaServiceInformationList: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary mediaServiceInformationList
 * @constant
 * @description
 * Alias of `SnapshotDeviceData_mediaServiceInformationList`.
 */
export
const mediaServiceInformationList: number = SnapshotDeviceData_mediaServiceInformationList; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotDeviceData_mediaServiceVersion
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.4.4).
 */
export
const SnapshotDeviceData_mediaServiceVersion: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary mediaServiceVersion
 * @constant
 * @description
 * Alias of `SnapshotDeviceData_mediaServiceVersion`.
 */
export
const mediaServiceVersion: number = SnapshotDeviceData_mediaServiceVersion; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotDeviceData_mediaServiceInstance
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.4.4).
 */
export
const SnapshotDeviceData_mediaServiceInstance: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary mediaServiceInstance
 * @constant
 * @description
 * Alias of `SnapshotDeviceData_mediaServiceInstance`.
 */
export
const mediaServiceInstance: number = SnapshotDeviceData_mediaServiceInstance; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotDeviceData_mediaStreamID
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.4.4).
 */
export
const SnapshotDeviceData_mediaStreamID: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary mediaStreamID
 * @constant
 * @description
 * Alias of `SnapshotDeviceData_mediaStreamID`.
 */
export
const mediaStreamID: number = SnapshotDeviceData_mediaStreamID; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotDeviceData_connectionInformation
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.4.4).
 */
export
const SnapshotDeviceData_connectionInformation: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary connectionInformation
 * @constant
 * @description
 * Alias of `SnapshotDeviceData_connectionInformation`.
 */
export
const connectionInformation: number = SnapshotDeviceData_connectionInformation; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotDeviceData_mediaCallCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `mediaCallCharacteristics`
 * parameter (ECMA-269 C.4.4).
 */
export
const SnapshotDeviceData_mediaCallCharacteristics: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 * @description
 * Alias of `SnapshotDeviceData_mediaCallCharacteristics`.
 */
export
const mediaCallCharacteristics: number = SnapshotDeviceData_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotDeviceData_endpointDeviceID
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.4.4).
 */
export
const SnapshotDeviceData_endpointDeviceID: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary endpointDeviceID
 * @constant
 * @description
 * Alias of `SnapshotDeviceData_endpointDeviceID`.
 */
export
const endpointDeviceID: number = SnapshotDeviceData_endpointDeviceID; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotDeviceData_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.4.4).
 */
export
const SnapshotDeviceData_privateData: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SnapshotDeviceData_privateData`.
 */
export
const privateData: number = SnapshotDeviceData_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SnapshotDeviceData: $.ASN1Decoder<SnapshotDeviceData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SnapshotDeviceData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SnapshotDeviceData (el: _Element): SnapshotDeviceData {
    if (!_cached_decoder_for_SnapshotDeviceData) { _cached_decoder_for_SnapshotDeviceData = $._decodeBitString; }
    return _cached_decoder_for_SnapshotDeviceData(el);
}

let _cached_encoder_for_SnapshotDeviceData: $.ASN1Encoder<SnapshotDeviceData> | null = null;

/**
 * @summary Encodes a(n) SnapshotDeviceData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SnapshotDeviceData, encoded as an ASN.1 Element.
 */
export
function _encode_SnapshotDeviceData (value: SnapshotDeviceData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SnapshotDeviceData) { _cached_encoder_for_SnapshotDeviceData = $._encodeBitString; }
    return _cached_encoder_for_SnapshotDeviceData(value, elGetter);
}


/* eslint-enable */
