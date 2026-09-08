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
 * @summary Diverted
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Diverted  ::=  BIT STRING
 * {     callingDevice                 ( 0),     -- optional parameters
 *     calledDevice                 ( 1),     -- optional parameters
 *     userData                 ( 2),     -- optional parameters
 *     servicesPermitted             ( 3),     -- optional parameters
 *     mediaCallCharacteristics         ( 4),     -- optional parameters
 *     callCharacteristics             ( 5),     -- optional parameters
 *     connectionInfo                 ( 6),     -- optional parameters
 *     netwCallingDevice             ( 7),     -- optional parameters
 *     netwCalledDevice             ( 8),     -- optional parameters
 *     subjectOfCall                (11),     -- optional parameters
 *     messageInfo                (12),     -- optional parameters
 *     languagePreferences            (13),     -- optional parameters
 *     deviceHistory                (14),     -- optional parameters
 *     privateData                 ( 9),     -- optional parameters
 *     sendsDivertedToAll             (10),     -- optional parameters
 *     locationInfoList            (15) }
 * ```
 */
export
type Diverted = BIT_STRING;

/**
 * @summary Diverted_callingDevice
 * @constant
 */
export
const Diverted_callingDevice: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary callingDevice
 * @constant
 */
export
const callingDevice: number = Diverted_callingDevice; /* SHORT_NAMED_BIT */

/**
 * @summary Diverted_calledDevice
 * @constant
 */
export
const Diverted_calledDevice: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary calledDevice
 * @constant
 */
export
const calledDevice: number = Diverted_calledDevice; /* SHORT_NAMED_BIT */

/**
 * @summary Diverted_userData
 * @constant
 */
export
const Diverted_userData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 */
export
const userData: number = Diverted_userData; /* SHORT_NAMED_BIT */

/**
 * @summary Diverted_servicesPermitted
 * @constant
 */
export
const Diverted_servicesPermitted: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 */
export
const servicesPermitted: number = Diverted_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary Diverted_mediaCallCharacteristics
 * @constant
 */
export
const Diverted_mediaCallCharacteristics: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 */
export
const mediaCallCharacteristics: number = Diverted_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Diverted_callCharacteristics
 * @constant
 */
export
const Diverted_callCharacteristics: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 */
export
const callCharacteristics: number = Diverted_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Diverted_connectionInfo
 * @constant
 */
export
const Diverted_connectionInfo: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary connectionInfo
 * @constant
 */
export
const connectionInfo: number = Diverted_connectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Diverted_netwCallingDevice
 * @constant
 */
export
const Diverted_netwCallingDevice: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary netwCallingDevice
 * @constant
 */
export
const netwCallingDevice: number = Diverted_netwCallingDevice; /* SHORT_NAMED_BIT */

/**
 * @summary Diverted_netwCalledDevice
 * @constant
 */
export
const Diverted_netwCalledDevice: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary netwCalledDevice
 * @constant
 */
export
const netwCalledDevice: number = Diverted_netwCalledDevice; /* SHORT_NAMED_BIT */

/**
 * @summary Diverted_subjectOfCall
 * @constant
 */
export
const Diverted_subjectOfCall: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary subjectOfCall
 * @constant
 */
export
const subjectOfCall: number = Diverted_subjectOfCall; /* SHORT_NAMED_BIT */

/**
 * @summary Diverted_messageInfo
 * @constant
 */
export
const Diverted_messageInfo: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary messageInfo
 * @constant
 */
export
const messageInfo: number = Diverted_messageInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Diverted_languagePreferences
 * @constant
 */
export
const Diverted_languagePreferences: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 */
export
const languagePreferences: number = Diverted_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary Diverted_deviceHistory
 * @constant
 */
export
const Diverted_deviceHistory: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary deviceHistory
 * @constant
 */
export
const deviceHistory: number = Diverted_deviceHistory; /* SHORT_NAMED_BIT */

/**
 * @summary Diverted_privateData
 * @constant
 */
export
const Diverted_privateData: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = Diverted_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Diverted_sendsDivertedToAll
 * @constant
 */
export
const Diverted_sendsDivertedToAll: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary sendsDivertedToAll
 * @constant
 */
export
const sendsDivertedToAll: number = Diverted_sendsDivertedToAll; /* SHORT_NAMED_BIT */

/**
 * @summary Diverted_locationInfoList
 * @constant
 */
export
const Diverted_locationInfoList: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary locationInfoList
 * @constant
 */
export
const locationInfoList: number = Diverted_locationInfoList; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Diverted: $.ASN1Decoder<Diverted> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Diverted
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Diverted (el: _Element): Diverted {
    if (!_cached_decoder_for_Diverted) { _cached_decoder_for_Diverted = $._decodeBitString; }
    return _cached_decoder_for_Diverted(el);
}

let _cached_encoder_for_Diverted: $.ASN1Encoder<Diverted> | null = null;

/**
 * @summary Encodes a(n) Diverted into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Diverted, encoded as an ASN.1 Element.
 */
export
function _encode_Diverted (value: Diverted, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Diverted) { _cached_encoder_for_Diverted = $._encodeBitString; }
    return _cached_encoder_for_Diverted(value, elGetter);
}


/* eslint-enable */
