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
 * @summary ServiceInitiated
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceInitiated  ::=  BIT STRING
 * {     servicesPermitted             ( 0),     -- optional parameters
 *     mediaCallCharacteristics         ( 1),     -- optional parameters
 *     callCharacteristics             ( 2),     -- optional parameters
 *     initiatedConnectionInfo         ( 3),     -- optional parameters
 *     netwCallingDevice             ( 4),     -- optional parameters
 *     netwCalledDevice             ( 5),     -- optional parameters
 *     subjectOfCall                ( 7),     -- optional parameters
 *     messageInfo                ( 8),     -- optional parameters
 *     languagePreferences            ( 9),     -- optional parameters
 *     privateData                 ( 6),     -- optional parameters
 *     calledDevice                (10),     -- optional parameters
 *     locationInfoList            (11) }
 * ```
 */
export
type ServiceInitiated = BIT_STRING;

/**
 * @summary ServiceInitiated_servicesPermitted
 * @constant
 */
export
const ServiceInitiated_servicesPermitted: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 */
export
const servicesPermitted: number = ServiceInitiated_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceInitiated_mediaCallCharacteristics
 * @constant
 */
export
const ServiceInitiated_mediaCallCharacteristics: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 */
export
const mediaCallCharacteristics: number = ServiceInitiated_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceInitiated_callCharacteristics
 * @constant
 */
export
const ServiceInitiated_callCharacteristics: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 */
export
const callCharacteristics: number = ServiceInitiated_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceInitiated_initiatedConnectionInfo
 * @constant
 */
export
const ServiceInitiated_initiatedConnectionInfo: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary initiatedConnectionInfo
 * @constant
 */
export
const initiatedConnectionInfo: number = ServiceInitiated_initiatedConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceInitiated_netwCallingDevice
 * @constant
 */
export
const ServiceInitiated_netwCallingDevice: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary netwCallingDevice
 * @constant
 */
export
const netwCallingDevice: number = ServiceInitiated_netwCallingDevice; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceInitiated_netwCalledDevice
 * @constant
 */
export
const ServiceInitiated_netwCalledDevice: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary netwCalledDevice
 * @constant
 */
export
const netwCalledDevice: number = ServiceInitiated_netwCalledDevice; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceInitiated_subjectOfCall
 * @constant
 */
export
const ServiceInitiated_subjectOfCall: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary subjectOfCall
 * @constant
 */
export
const subjectOfCall: number = ServiceInitiated_subjectOfCall; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceInitiated_messageInfo
 * @constant
 */
export
const ServiceInitiated_messageInfo: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary messageInfo
 * @constant
 */
export
const messageInfo: number = ServiceInitiated_messageInfo; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceInitiated_languagePreferences
 * @constant
 */
export
const ServiceInitiated_languagePreferences: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 */
export
const languagePreferences: number = ServiceInitiated_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceInitiated_privateData
 * @constant
 */
export
const ServiceInitiated_privateData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = ServiceInitiated_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceInitiated_calledDevice
 * @constant
 */
export
const ServiceInitiated_calledDevice: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary calledDevice
 * @constant
 */
export
const calledDevice: number = ServiceInitiated_calledDevice; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceInitiated_locationInfoList
 * @constant
 */
export
const ServiceInitiated_locationInfoList: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary locationInfoList
 * @constant
 */
export
const locationInfoList: number = ServiceInitiated_locationInfoList; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ServiceInitiated: $.ASN1Decoder<ServiceInitiated> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceInitiated
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceInitiated (el: _Element): ServiceInitiated {
    if (!_cached_decoder_for_ServiceInitiated) { _cached_decoder_for_ServiceInitiated = $._decodeBitString; }
    return _cached_decoder_for_ServiceInitiated(el);
}

let _cached_encoder_for_ServiceInitiated: $.ASN1Encoder<ServiceInitiated> | null = null;

/**
 * @summary Encodes a(n) ServiceInitiated into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceInitiated, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceInitiated (value: ServiceInitiated, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceInitiated) { _cached_encoder_for_ServiceInitiated = $._encodeBitString; }
    return _cached_encoder_for_ServiceInitiated(value, elGetter);
}


/* eslint-enable */
