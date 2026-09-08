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
 * @summary Originated
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Originated  ::=  BIT STRING
 * {     originatingDevice             ( 0),     -- optional parameters
 *     servicesPermitted             ( 1),     -- optional parameters
 *     netwCallingDevice             ( 2),     -- optional parameters
 *     netwCalledDevice             ( 3),     -- optional parameters
 *     mediaCallCharacteristics         ( 4),     -- optional parameters
 *     callCharacteristics             ( 5),     -- optional parameters
 *     originatedConnectionInfo         ( 6),     -- optional parameters
 *     subjectOfCall                ( 8),     -- optional parameters
 *     messageInfo                ( 9),     -- optional parameters
 *     languagePreferences            (10),     -- optional parameters
 *     privateData                 ( 7),     -- optional parameters
 *     locationInfoList            (11) }
 * ```
 */
export
type Originated = BIT_STRING;

/**
 * @summary Originated_originatingDevice
 * @constant
 */
export
const Originated_originatingDevice: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary originatingDevice
 * @constant
 */
export
const originatingDevice: number = Originated_originatingDevice; /* SHORT_NAMED_BIT */

/**
 * @summary Originated_servicesPermitted
 * @constant
 */
export
const Originated_servicesPermitted: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 */
export
const servicesPermitted: number = Originated_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary Originated_netwCallingDevice
 * @constant
 */
export
const Originated_netwCallingDevice: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary netwCallingDevice
 * @constant
 */
export
const netwCallingDevice: number = Originated_netwCallingDevice; /* SHORT_NAMED_BIT */

/**
 * @summary Originated_netwCalledDevice
 * @constant
 */
export
const Originated_netwCalledDevice: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary netwCalledDevice
 * @constant
 */
export
const netwCalledDevice: number = Originated_netwCalledDevice; /* SHORT_NAMED_BIT */

/**
 * @summary Originated_mediaCallCharacteristics
 * @constant
 */
export
const Originated_mediaCallCharacteristics: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 */
export
const mediaCallCharacteristics: number = Originated_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Originated_callCharacteristics
 * @constant
 */
export
const Originated_callCharacteristics: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 */
export
const callCharacteristics: number = Originated_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Originated_originatedConnectionInfo
 * @constant
 */
export
const Originated_originatedConnectionInfo: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary originatedConnectionInfo
 * @constant
 */
export
const originatedConnectionInfo: number = Originated_originatedConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Originated_subjectOfCall
 * @constant
 */
export
const Originated_subjectOfCall: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary subjectOfCall
 * @constant
 */
export
const subjectOfCall: number = Originated_subjectOfCall; /* SHORT_NAMED_BIT */

/**
 * @summary Originated_messageInfo
 * @constant
 */
export
const Originated_messageInfo: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary messageInfo
 * @constant
 */
export
const messageInfo: number = Originated_messageInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Originated_languagePreferences
 * @constant
 */
export
const Originated_languagePreferences: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 */
export
const languagePreferences: number = Originated_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary Originated_privateData
 * @constant
 */
export
const Originated_privateData: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = Originated_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Originated_locationInfoList
 * @constant
 */
export
const Originated_locationInfoList: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary locationInfoList
 * @constant
 */
export
const locationInfoList: number = Originated_locationInfoList; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Originated: $.ASN1Decoder<Originated> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Originated
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Originated (el: _Element): Originated {
    if (!_cached_decoder_for_Originated) { _cached_decoder_for_Originated = $._decodeBitString; }
    return _cached_decoder_for_Originated(el);
}

let _cached_encoder_for_Originated: $.ASN1Encoder<Originated> | null = null;

/**
 * @summary Encodes a(n) Originated into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Originated, encoded as an ASN.1 Element.
 */
export
function _encode_Originated (value: Originated, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Originated) { _cached_encoder_for_Originated = $._encodeBitString; }
    return _cached_encoder_for_Originated(value, elGetter);
}


/* eslint-enable */
