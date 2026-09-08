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
 * @summary SendBroadcastData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendBroadcastData  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     dataPathTypeText             ( 1),     -- optional parameters
 *     dataPathTypeVoice             ( 2),     -- optional parameters
 *     displayAttribPhyBaseRowNumber         ( 3),     -- optional parameters
 *     displayAttribPhyBaseColumnNumber     ( 4),     -- optional parameters
 *     displayAttribOffset             ( 5),     -- optional parameters
 *     privateDataInAck             ( 6),     -- optional parameters
 *     supportsModifyingPosition         ( 7) }
 * ```
 */
export
type SendBroadcastData = BIT_STRING;

/**
 * @summary SendBroadcastData_privateData
 * @constant
 */
export
const SendBroadcastData_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SendBroadcastData_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SendBroadcastData_dataPathTypeText
 * @constant
 */
export
const SendBroadcastData_dataPathTypeText: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary dataPathTypeText
 * @constant
 */
export
const dataPathTypeText: number = SendBroadcastData_dataPathTypeText; /* SHORT_NAMED_BIT */

/**
 * @summary SendBroadcastData_dataPathTypeVoice
 * @constant
 */
export
const SendBroadcastData_dataPathTypeVoice: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary dataPathTypeVoice
 * @constant
 */
export
const dataPathTypeVoice: number = SendBroadcastData_dataPathTypeVoice; /* SHORT_NAMED_BIT */

/**
 * @summary SendBroadcastData_displayAttribPhyBaseRowNumber
 * @constant
 */
export
const SendBroadcastData_displayAttribPhyBaseRowNumber: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary displayAttribPhyBaseRowNumber
 * @constant
 */
export
const displayAttribPhyBaseRowNumber: number = SendBroadcastData_displayAttribPhyBaseRowNumber; /* SHORT_NAMED_BIT */

/**
 * @summary SendBroadcastData_displayAttribPhyBaseColumnNumber
 * @constant
 */
export
const SendBroadcastData_displayAttribPhyBaseColumnNumber: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary displayAttribPhyBaseColumnNumber
 * @constant
 */
export
const displayAttribPhyBaseColumnNumber: number = SendBroadcastData_displayAttribPhyBaseColumnNumber; /* SHORT_NAMED_BIT */

/**
 * @summary SendBroadcastData_displayAttribOffset
 * @constant
 */
export
const SendBroadcastData_displayAttribOffset: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary displayAttribOffset
 * @constant
 */
export
const displayAttribOffset: number = SendBroadcastData_displayAttribOffset; /* SHORT_NAMED_BIT */

/**
 * @summary SendBroadcastData_privateDataInAck
 * @constant
 */
export
const SendBroadcastData_privateDataInAck: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = SendBroadcastData_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SendBroadcastData_supportsModifyingPosition
 * @constant
 */
export
const SendBroadcastData_supportsModifyingPosition: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary supportsModifyingPosition
 * @constant
 */
export
const supportsModifyingPosition: number = SendBroadcastData_supportsModifyingPosition; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SendBroadcastData: $.ASN1Decoder<SendBroadcastData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendBroadcastData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendBroadcastData (el: _Element): SendBroadcastData {
    if (!_cached_decoder_for_SendBroadcastData) { _cached_decoder_for_SendBroadcastData = $._decodeBitString; }
    return _cached_decoder_for_SendBroadcastData(el);
}

let _cached_encoder_for_SendBroadcastData: $.ASN1Encoder<SendBroadcastData> | null = null;

/**
 * @summary Encodes a(n) SendBroadcastData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendBroadcastData, encoded as an ASN.1 Element.
 */
export
function _encode_SendBroadcastData (value: SendBroadcastData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendBroadcastData) { _cached_encoder_for_SendBroadcastData = $._encodeBitString; }
    return _cached_encoder_for_SendBroadcastData(value, elGetter);
}


/* eslint-enable */
