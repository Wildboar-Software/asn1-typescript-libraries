/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetSwitchingFunctionDevices
 * @description
 * Capability bitmap for the Get Switching Function Devices service (ECMA-269
 * C.1.5, ECMA-285 §9.10). Presence of this entry in `CapExchangeServList` means
 * the SF supports that service. Each set bit is an optional parameter,
 * enumerated value, initial connection state, or miscellaneous characteristic
 * from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetSwitchingFunctionDevices  ::=  BIT STRING
 * {     requestedDeviceID             ( 0),
 *     requestedDeviceCategoryACD         ( 1),
 *     requestedDeviceCategoryACDGroup     ( 2),
 *     requestedDeviceCategoryHuntGroup     ( 3),
 *     requestedDeviceCategoryPickGroup     ( 4),
 *     requestedDeviceCategoryUserGroup    (14),
 *     requestedDeviceCategoryOtherGroup     ( 5),
 *     requestedDeviceCategoryNetwInterface     ( 6),
 *     requestedDeviceCategoryPark         ( 7),
 *     requestedDeviceCategoryRouteingDevice     ( 8),
 *     requestedDeviceCategoryStation         ( 9),
 *     requestedDeviceCategoryVoiceUnit     (10),
 *     requestedDeviceCategoryGenericIV    (15),
 *     requestedDeviceCategoryListenerIV    (16),
 *     requestedDeviceCategoryVDTMFIV        (17),
 *     requestedDeviceCategoryPromptIV        (18),
 *     requestedDeviceCategoryPromptQueueIV    (19),
 *     requestedDeviceCategoryMessageIV    (20),
 *     requestedDeviceCategoryConference    (21),
 *     requestedDeviceCategoryOther         (11),
 *     privateData                 (12),
 *     privateDataInAck             (13) }
 * ```
 */
export
type GetSwitchingFunctionDevices = BIT_STRING;

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceID
 * @constant
 * @description
 * Bit set means the SF supports the optional `requestedDeviceID` parameter
 * (ECMA-269 C.1.5).
 */
export
const GetSwitchingFunctionDevices_requestedDeviceID: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceID
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionDevices_requestedDeviceID`.
 */
export
const requestedDeviceID: number = GetSwitchingFunctionDevices_requestedDeviceID; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryACD
 * @constant
 * @description
 * Bit set means the SF supports `requestedDeviceCategory` value ACD (ECMA-269
 * C.1.5).
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryACD: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryACD
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionDevices_requestedDeviceCategoryACD`.
 */
export
const requestedDeviceCategoryACD: number = GetSwitchingFunctionDevices_requestedDeviceCategoryACD; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryACDGroup
 * @constant
 * @description
 * Bit set means the SF supports `requestedDeviceCategory` value Group (ACD)
 * (ECMA-269 C.1.5).
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryACDGroup: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryACDGroup
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionDevices_requestedDeviceCategoryACDGroup`.
 */
export
const requestedDeviceCategoryACDGroup: number = GetSwitchingFunctionDevices_requestedDeviceCategoryACDGroup; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryHuntGroup
 * @constant
 * @description
 * Bit set means the SF supports `requestedDeviceCategory` value Group (Hunt)
 * (ECMA-269 C.1.5).
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryHuntGroup: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryHuntGroup
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionDevices_requestedDeviceCategoryHuntGroup`.
 */
export
const requestedDeviceCategoryHuntGroup: number = GetSwitchingFunctionDevices_requestedDeviceCategoryHuntGroup; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryPickGroup
 * @constant
 * @description
 * Bit set means the SF supports `requestedDeviceCategory` value Group (Pick)
 * (ECMA-269 C.1.5).
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryPickGroup: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryPickGroup
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionDevices_requestedDeviceCategoryPickGroup`.
 */
export
const requestedDeviceCategoryPickGroup: number = GetSwitchingFunctionDevices_requestedDeviceCategoryPickGroup; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryUserGroup
 * @constant
 * @description
 * Bit set means the SF supports `requestedDeviceCategory` value Group (User)
 * (ECMA-269 C.1.5).
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryUserGroup: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryUserGroup
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionDevices_requestedDeviceCategoryUserGroup`.
 */
export
const requestedDeviceCategoryUserGroup: number = GetSwitchingFunctionDevices_requestedDeviceCategoryUserGroup; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryOtherGroup
 * @constant
 * @description
 * Bit set means the SF supports `requestedDeviceCategory` value Group (Other)
 * (ECMA-269 C.1.5).
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryOtherGroup: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryOtherGroup
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionDevices_requestedDeviceCategoryOtherGroup`.
 */
export
const requestedDeviceCategoryOtherGroup: number = GetSwitchingFunctionDevices_requestedDeviceCategoryOtherGroup; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryNetwInterface
 * @constant
 * @description
 * Bit set means the SF supports `requestedDeviceCategory` value Network
 * Interface (ECMA-269 C.1.5).
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryNetwInterface: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryNetwInterface
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionDevices_requestedDeviceCategoryNetwInterface`.
 */
export
const requestedDeviceCategoryNetwInterface: number = GetSwitchingFunctionDevices_requestedDeviceCategoryNetwInterface; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryPark
 * @constant
 * @description
 * Bit set means the SF supports `requestedDeviceCategory` value Park (ECMA-269
 * C.1.5).
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryPark: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryPark
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionDevices_requestedDeviceCategoryPark`.
 */
export
const requestedDeviceCategoryPark: number = GetSwitchingFunctionDevices_requestedDeviceCategoryPark; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryRouteingDevice
 * @constant
 * @description
 * Bit set means the SF supports `requestedDeviceCategory` value Routeing Device
 * (ECMA-269 C.1.5).
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryRouteingDevice: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryRouteingDevice
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionDevices_requestedDeviceCategoryRouteingDevice`.
 */
export
const requestedDeviceCategoryRouteingDevice: number = GetSwitchingFunctionDevices_requestedDeviceCategoryRouteingDevice; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryStation
 * @constant
 * @description
 * Bit set means the SF supports `requestedDeviceCategory` value Station
 * (ECMA-269 C.1.5).
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryStation: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryStation
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionDevices_requestedDeviceCategoryStation`.
 */
export
const requestedDeviceCategoryStation: number = GetSwitchingFunctionDevices_requestedDeviceCategoryStation; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryVoiceUnit
 * @constant
 * @description
 * Bit set means the SF supports `requestedDeviceCategory` value Voice Unit
 * (ECMA-269 C.1.5).
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryVoiceUnit: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryVoiceUnit
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionDevices_requestedDeviceCategoryVoiceUnit`.
 */
export
const requestedDeviceCategoryVoiceUnit: number = GetSwitchingFunctionDevices_requestedDeviceCategoryVoiceUnit; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryGenericIV
 * @constant
 * @description
 * Bit set means the SF supports `requestedDeviceCategory` value Generic
 * Interactive Voice (ECMA-269 C.1.5).
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryGenericIV: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryGenericIV
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionDevices_requestedDeviceCategoryGenericIV`.
 */
export
const requestedDeviceCategoryGenericIV: number = GetSwitchingFunctionDevices_requestedDeviceCategoryGenericIV; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryListenerIV
 * @constant
 * @description
 * Bit set means the SF supports `requestedDeviceCategory` value Listener
 * Interactive Voice (ECMA-269 C.1.5).
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryListenerIV: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryListenerIV
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionDevices_requestedDeviceCategoryListenerIV`.
 */
export
const requestedDeviceCategoryListenerIV: number = GetSwitchingFunctionDevices_requestedDeviceCategoryListenerIV; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryVDTMFIV
 * @constant
 * @description
 * Bit set means the SF supports `requestedDeviceCategory` value DTMF
 * Interactive Voice (ECMA-269 C.1.5).
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryVDTMFIV: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryVDTMFIV
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionDevices_requestedDeviceCategoryVDTMFIV`.
 */
export
const requestedDeviceCategoryVDTMFIV: number = GetSwitchingFunctionDevices_requestedDeviceCategoryVDTMFIV; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryPromptIV
 * @constant
 * @description
 * Bit set means the SF supports `requestedDeviceCategory` value Prompt
 * Interactive Voice (ECMA-269 C.1.5).
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryPromptIV: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryPromptIV
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionDevices_requestedDeviceCategoryPromptIV`.
 */
export
const requestedDeviceCategoryPromptIV: number = GetSwitchingFunctionDevices_requestedDeviceCategoryPromptIV; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryPromptQueueIV
 * @constant
 * @description
 * Bit set means the SF supports `requestedDeviceCategory` value Prompt Queue
 * Interactive Voice (ECMA-269 C.1.5).
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryPromptQueueIV: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryPromptQueueIV
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionDevices_requestedDeviceCategoryPromptQueueIV`.
 */
export
const requestedDeviceCategoryPromptQueueIV: number = GetSwitchingFunctionDevices_requestedDeviceCategoryPromptQueueIV; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryMessageIV
 * @constant
 * @description
 * Bit set means the SF supports `requestedDeviceCategory` value Message
 * Interactive Voice (ECMA-269 C.1.5).
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryMessageIV: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryMessageIV
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionDevices_requestedDeviceCategoryMessageIV`.
 */
export
const requestedDeviceCategoryMessageIV: number = GetSwitchingFunctionDevices_requestedDeviceCategoryMessageIV; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryConference
 * @constant
 * @description
 * Bit set means the SF supports `requestedDeviceCategory` value Conference
 * (ECMA-269 C.1.5).
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryConference: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryConference
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionDevices_requestedDeviceCategoryConference`.
 */
export
const requestedDeviceCategoryConference: number = GetSwitchingFunctionDevices_requestedDeviceCategoryConference; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryOther
 * @constant
 * @description
 * Bit set means the SF supports `requestedDeviceCategory` value Other (ECMA-269
 * C.1.5).
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryOther: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryOther
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionDevices_requestedDeviceCategoryOther`.
 */
export
const requestedDeviceCategoryOther: number = GetSwitchingFunctionDevices_requestedDeviceCategoryOther; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.1.5).
 */
export
const GetSwitchingFunctionDevices_privateData: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionDevices_privateData`.
 */
export
const privateData: number = GetSwitchingFunctionDevices_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.1.5).
 */
export
const GetSwitchingFunctionDevices_privateDataInAck: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionDevices_privateDataInAck`.
 */
export
const privateDataInAck: number = GetSwitchingFunctionDevices_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetSwitchingFunctionDevices: $.ASN1Decoder<GetSwitchingFunctionDevices> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetSwitchingFunctionDevices
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetSwitchingFunctionDevices (el: _Element): GetSwitchingFunctionDevices {
    if (!_cached_decoder_for_GetSwitchingFunctionDevices) { _cached_decoder_for_GetSwitchingFunctionDevices = $._decodeBitString; }
    return _cached_decoder_for_GetSwitchingFunctionDevices(el);
}

let _cached_encoder_for_GetSwitchingFunctionDevices: $.ASN1Encoder<GetSwitchingFunctionDevices> | null = null;

/**
 * @summary Encodes a(n) GetSwitchingFunctionDevices into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetSwitchingFunctionDevices, encoded as an ASN.1 Element.
 */
export
function _encode_GetSwitchingFunctionDevices (value: GetSwitchingFunctionDevices, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetSwitchingFunctionDevices) { _cached_encoder_for_GetSwitchingFunctionDevices = $._encodeBitString; }
    return _cached_encoder_for_GetSwitchingFunctionDevices(value, elGetter);
}


/* eslint-enable */
