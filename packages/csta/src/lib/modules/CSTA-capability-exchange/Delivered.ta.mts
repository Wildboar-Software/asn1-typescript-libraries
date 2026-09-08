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
 * @summary Delivered
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Delivered  ::=  BIT STRING
 * {     originatingNIDConnection         ( 0),     -- optional parameters
 *     userData                 ( 1),     -- optional parameters
 *     servicesPermitted             ( 2),     -- optional parameters
 *     netwCallingDevice             ( 3),     -- optional parameters
 *     netwCalledDevice             ( 4),     -- optional parameters
 *     mediaCallCharacteristics         ( 5),     -- optional parameters
 *     callCharacteristics             ( 6),     -- optional parameters
 *     connectionInfo                 ( 7),     -- optional parameters
 *     subjectOfCall                ( 9),     -- optional parameters
 *     messageInfo                (10),     -- optional parameters
 *     languagePreferences            (11),     -- optional parameters
 *     deviceHistory                (12),     -- optional parameters
 *     privateData                 ( 8),     -- optional parameters
 *     locationInfoList            (13) }
 * ```
 */
export
type Delivered = BIT_STRING;

/**
 * @summary Delivered_originatingNIDConnection
 * @constant
 */
export
const Delivered_originatingNIDConnection: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary originatingNIDConnection
 * @constant
 */
export
const originatingNIDConnection: number = Delivered_originatingNIDConnection; /* SHORT_NAMED_BIT */

/**
 * @summary Delivered_userData
 * @constant
 */
export
const Delivered_userData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 */
export
const userData: number = Delivered_userData; /* SHORT_NAMED_BIT */

/**
 * @summary Delivered_servicesPermitted
 * @constant
 */
export
const Delivered_servicesPermitted: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 */
export
const servicesPermitted: number = Delivered_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary Delivered_netwCallingDevice
 * @constant
 */
export
const Delivered_netwCallingDevice: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary netwCallingDevice
 * @constant
 */
export
const netwCallingDevice: number = Delivered_netwCallingDevice; /* SHORT_NAMED_BIT */

/**
 * @summary Delivered_netwCalledDevice
 * @constant
 */
export
const Delivered_netwCalledDevice: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary netwCalledDevice
 * @constant
 */
export
const netwCalledDevice: number = Delivered_netwCalledDevice; /* SHORT_NAMED_BIT */

/**
 * @summary Delivered_mediaCallCharacteristics
 * @constant
 */
export
const Delivered_mediaCallCharacteristics: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 */
export
const mediaCallCharacteristics: number = Delivered_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Delivered_callCharacteristics
 * @constant
 */
export
const Delivered_callCharacteristics: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 */
export
const callCharacteristics: number = Delivered_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Delivered_connectionInfo
 * @constant
 */
export
const Delivered_connectionInfo: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary connectionInfo
 * @constant
 */
export
const connectionInfo: number = Delivered_connectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Delivered_subjectOfCall
 * @constant
 */
export
const Delivered_subjectOfCall: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary subjectOfCall
 * @constant
 */
export
const subjectOfCall: number = Delivered_subjectOfCall; /* SHORT_NAMED_BIT */

/**
 * @summary Delivered_messageInfo
 * @constant
 */
export
const Delivered_messageInfo: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary messageInfo
 * @constant
 */
export
const messageInfo: number = Delivered_messageInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Delivered_languagePreferences
 * @constant
 */
export
const Delivered_languagePreferences: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 */
export
const languagePreferences: number = Delivered_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary Delivered_deviceHistory
 * @constant
 */
export
const Delivered_deviceHistory: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary deviceHistory
 * @constant
 */
export
const deviceHistory: number = Delivered_deviceHistory; /* SHORT_NAMED_BIT */

/**
 * @summary Delivered_privateData
 * @constant
 */
export
const Delivered_privateData: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = Delivered_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Delivered_locationInfoList
 * @constant
 */
export
const Delivered_locationInfoList: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary locationInfoList
 * @constant
 */
export
const locationInfoList: number = Delivered_locationInfoList; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Delivered: $.ASN1Decoder<Delivered> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Delivered
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Delivered (el: _Element): Delivered {
    if (!_cached_decoder_for_Delivered) { _cached_decoder_for_Delivered = $._decodeBitString; }
    return _cached_decoder_for_Delivered(el);
}

let _cached_encoder_for_Delivered: $.ASN1Encoder<Delivered> | null = null;

/**
 * @summary Encodes a(n) Delivered into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Delivered, encoded as an ASN.1 Element.
 */
export
function _encode_Delivered (value: Delivered, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Delivered) { _cached_encoder_for_Delivered = $._encodeBitString; }
    return _cached_encoder_for_Delivered(value, elGetter);
}


/* eslint-enable */
