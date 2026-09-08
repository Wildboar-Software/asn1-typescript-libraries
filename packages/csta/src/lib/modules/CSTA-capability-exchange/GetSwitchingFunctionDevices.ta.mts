/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary GetSwitchingFunctionDevices
 * @description
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
 */
export
const GetSwitchingFunctionDevices_requestedDeviceID: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceID
 * @constant
 */
export
const requestedDeviceID: number = GetSwitchingFunctionDevices_requestedDeviceID; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryACD
 * @constant
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryACD: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryACD
 * @constant
 */
export
const requestedDeviceCategoryACD: number = GetSwitchingFunctionDevices_requestedDeviceCategoryACD; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryACDGroup
 * @constant
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryACDGroup: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryACDGroup
 * @constant
 */
export
const requestedDeviceCategoryACDGroup: number = GetSwitchingFunctionDevices_requestedDeviceCategoryACDGroup; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryHuntGroup
 * @constant
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryHuntGroup: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryHuntGroup
 * @constant
 */
export
const requestedDeviceCategoryHuntGroup: number = GetSwitchingFunctionDevices_requestedDeviceCategoryHuntGroup; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryPickGroup
 * @constant
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryPickGroup: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryPickGroup
 * @constant
 */
export
const requestedDeviceCategoryPickGroup: number = GetSwitchingFunctionDevices_requestedDeviceCategoryPickGroup; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryUserGroup
 * @constant
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryUserGroup: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryUserGroup
 * @constant
 */
export
const requestedDeviceCategoryUserGroup: number = GetSwitchingFunctionDevices_requestedDeviceCategoryUserGroup; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryOtherGroup
 * @constant
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryOtherGroup: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryOtherGroup
 * @constant
 */
export
const requestedDeviceCategoryOtherGroup: number = GetSwitchingFunctionDevices_requestedDeviceCategoryOtherGroup; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryNetwInterface
 * @constant
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryNetwInterface: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryNetwInterface
 * @constant
 */
export
const requestedDeviceCategoryNetwInterface: number = GetSwitchingFunctionDevices_requestedDeviceCategoryNetwInterface; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryPark
 * @constant
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryPark: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryPark
 * @constant
 */
export
const requestedDeviceCategoryPark: number = GetSwitchingFunctionDevices_requestedDeviceCategoryPark; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryRouteingDevice
 * @constant
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryRouteingDevice: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryRouteingDevice
 * @constant
 */
export
const requestedDeviceCategoryRouteingDevice: number = GetSwitchingFunctionDevices_requestedDeviceCategoryRouteingDevice; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryStation
 * @constant
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryStation: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryStation
 * @constant
 */
export
const requestedDeviceCategoryStation: number = GetSwitchingFunctionDevices_requestedDeviceCategoryStation; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryVoiceUnit
 * @constant
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryVoiceUnit: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryVoiceUnit
 * @constant
 */
export
const requestedDeviceCategoryVoiceUnit: number = GetSwitchingFunctionDevices_requestedDeviceCategoryVoiceUnit; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryGenericIV
 * @constant
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryGenericIV: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryGenericIV
 * @constant
 */
export
const requestedDeviceCategoryGenericIV: number = GetSwitchingFunctionDevices_requestedDeviceCategoryGenericIV; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryListenerIV
 * @constant
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryListenerIV: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryListenerIV
 * @constant
 */
export
const requestedDeviceCategoryListenerIV: number = GetSwitchingFunctionDevices_requestedDeviceCategoryListenerIV; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryVDTMFIV
 * @constant
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryVDTMFIV: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryVDTMFIV
 * @constant
 */
export
const requestedDeviceCategoryVDTMFIV: number = GetSwitchingFunctionDevices_requestedDeviceCategoryVDTMFIV; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryPromptIV
 * @constant
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryPromptIV: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryPromptIV
 * @constant
 */
export
const requestedDeviceCategoryPromptIV: number = GetSwitchingFunctionDevices_requestedDeviceCategoryPromptIV; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryPromptQueueIV
 * @constant
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryPromptQueueIV: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryPromptQueueIV
 * @constant
 */
export
const requestedDeviceCategoryPromptQueueIV: number = GetSwitchingFunctionDevices_requestedDeviceCategoryPromptQueueIV; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryMessageIV
 * @constant
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryMessageIV: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryMessageIV
 * @constant
 */
export
const requestedDeviceCategoryMessageIV: number = GetSwitchingFunctionDevices_requestedDeviceCategoryMessageIV; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryConference
 * @constant
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryConference: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryConference
 * @constant
 */
export
const requestedDeviceCategoryConference: number = GetSwitchingFunctionDevices_requestedDeviceCategoryConference; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_requestedDeviceCategoryOther
 * @constant
 */
export
const GetSwitchingFunctionDevices_requestedDeviceCategoryOther: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary requestedDeviceCategoryOther
 * @constant
 */
export
const requestedDeviceCategoryOther: number = GetSwitchingFunctionDevices_requestedDeviceCategoryOther; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_privateData
 * @constant
 */
export
const GetSwitchingFunctionDevices_privateData: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = GetSwitchingFunctionDevices_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionDevices_privateDataInAck
 * @constant
 */
export
const GetSwitchingFunctionDevices_privateDataInAck: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
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
