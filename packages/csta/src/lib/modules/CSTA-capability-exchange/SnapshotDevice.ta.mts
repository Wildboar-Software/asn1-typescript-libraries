/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SnapshotDevice
 * @description
 * Capability bitmap for the Snapshot Device service (ECMA-269 C.4.2, ECMA-285
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
 * SnapshotDevice  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     localCallStateCompoundCallState     ( 1),     -- optional parameters
 *     localCallStateSimpleCallState         ( 2),     -- optional parameters
 *     localCallStateUnknown             ( 3),     -- optional parameters
 *     mediaServiceInfoListInAck         ( 4),     -- optional parameters
 *     mediaServiceVersionInAck         ( 5),     -- optional parameters
 *     mediaServiceInstanceInAck         ( 6),     -- optional parameters
 *     mediaStreamID                 ( 7),     -- optional parameters
 *     connectionInformation             ( 8),     -- optional parameters
 *     mediaCallCharacteristicsInAck         ( 9),     -- optional parameters
 *     privateDataInAck             (10),     -- optional parameters
 *     reportsWithSnapsDeviceData         (11) }
 * ```
 */
export
type SnapshotDevice = BIT_STRING;

/**
 * @summary SnapshotDevice_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.4.2).
 */
export
const SnapshotDevice_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SnapshotDevice_privateData`.
 */
export
const privateData: number = SnapshotDevice_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotDevice_localCallStateCompoundCallState
 * @constant
 * @description
 * Bit set means the SF supports `localCallState` value `compoundCallState`
 * (ECMA-269 C.4.2).
 */
export
const SnapshotDevice_localCallStateCompoundCallState: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary localCallStateCompoundCallState
 * @constant
 * @description
 * Alias of `SnapshotDevice_localCallStateCompoundCallState`.
 */
export
const localCallStateCompoundCallState: number = SnapshotDevice_localCallStateCompoundCallState; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotDevice_localCallStateSimpleCallState
 * @constant
 * @description
 * Bit set means the SF supports `localCallState` value `simpleCallState`
 * (ECMA-269 C.4.2).
 */
export
const SnapshotDevice_localCallStateSimpleCallState: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary localCallStateSimpleCallState
 * @constant
 * @description
 * Alias of `SnapshotDevice_localCallStateSimpleCallState`.
 */
export
const localCallStateSimpleCallState: number = SnapshotDevice_localCallStateSimpleCallState; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotDevice_localCallStateUnknown
 * @constant
 * @description
 * Bit set means the SF supports `localCallState` value `unknown` (ECMA-269
 * C.4.2).
 */
export
const SnapshotDevice_localCallStateUnknown: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary localCallStateUnknown
 * @constant
 * @description
 * Alias of `SnapshotDevice_localCallStateUnknown`.
 */
export
const localCallStateUnknown: number = SnapshotDevice_localCallStateUnknown; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotDevice_mediaServiceInfoListInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `mediaServiceInfoList` in the
 * acknowledgement (ECMA-269 C.4.2).
 */
export
const SnapshotDevice_mediaServiceInfoListInAck: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary mediaServiceInfoListInAck
 * @constant
 * @description
 * Alias of `SnapshotDevice_mediaServiceInfoListInAck`.
 */
export
const mediaServiceInfoListInAck: number = SnapshotDevice_mediaServiceInfoListInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotDevice_mediaServiceVersionInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `mediaServiceVersion` in the
 * acknowledgement (ECMA-269 C.4.2).
 */
export
const SnapshotDevice_mediaServiceVersionInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary mediaServiceVersionInAck
 * @constant
 * @description
 * Alias of `SnapshotDevice_mediaServiceVersionInAck`.
 */
export
const mediaServiceVersionInAck: number = SnapshotDevice_mediaServiceVersionInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotDevice_mediaServiceInstanceInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `mediaServiceInstance` in the
 * acknowledgement (ECMA-269 C.4.2).
 */
export
const SnapshotDevice_mediaServiceInstanceInAck: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary mediaServiceInstanceInAck
 * @constant
 * @description
 * Alias of `SnapshotDevice_mediaServiceInstanceInAck`.
 */
export
const mediaServiceInstanceInAck: number = SnapshotDevice_mediaServiceInstanceInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotDevice_mediaStreamID
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.4.2).
 */
export
const SnapshotDevice_mediaStreamID: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary mediaStreamID
 * @constant
 * @description
 * Alias of `SnapshotDevice_mediaStreamID`.
 */
export
const mediaStreamID: number = SnapshotDevice_mediaStreamID; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotDevice_connectionInformation
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.4.2).
 */
export
const SnapshotDevice_connectionInformation: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary connectionInformation
 * @constant
 * @description
 * Alias of `SnapshotDevice_connectionInformation`.
 */
export
const connectionInformation: number = SnapshotDevice_connectionInformation; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotDevice_mediaCallCharacteristicsInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `mediaCallCharacteristics` in the
 * acknowledgement (ECMA-269 C.4.2).
 */
export
const SnapshotDevice_mediaCallCharacteristicsInAck: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristicsInAck
 * @constant
 * @description
 * Alias of `SnapshotDevice_mediaCallCharacteristicsInAck`.
 */
export
const mediaCallCharacteristicsInAck: number = SnapshotDevice_mediaCallCharacteristicsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotDevice_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.4.2).
 */
export
const SnapshotDevice_privateDataInAck: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `SnapshotDevice_privateDataInAck`.
 */
export
const privateDataInAck: number = SnapshotDevice_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SnapshotDevice_reportsWithSnapsDeviceData
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.4.2).
 */
export
const SnapshotDevice_reportsWithSnapsDeviceData: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary reportsWithSnapsDeviceData
 * @constant
 * @description
 * Alias of `SnapshotDevice_reportsWithSnapsDeviceData`.
 */
export
const reportsWithSnapsDeviceData: number = SnapshotDevice_reportsWithSnapsDeviceData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SnapshotDevice: $.ASN1Decoder<SnapshotDevice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SnapshotDevice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SnapshotDevice (el: _Element): SnapshotDevice {
    if (!_cached_decoder_for_SnapshotDevice) { _cached_decoder_for_SnapshotDevice = $._decodeBitString; }
    return _cached_decoder_for_SnapshotDevice(el);
}

let _cached_encoder_for_SnapshotDevice: $.ASN1Encoder<SnapshotDevice> | null = null;

/**
 * @summary Encodes a(n) SnapshotDevice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SnapshotDevice, encoded as an ASN.1 Element.
 */
export
function _encode_SnapshotDevice (value: SnapshotDevice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SnapshotDevice) { _cached_encoder_for_SnapshotDevice = $._encodeBitString; }
    return _cached_encoder_for_SnapshotDevice(value, elGetter);
}


/* eslint-enable */
