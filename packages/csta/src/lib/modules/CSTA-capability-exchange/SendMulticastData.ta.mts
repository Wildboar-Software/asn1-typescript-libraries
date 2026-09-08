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
 * @summary SendMulticastData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendMulticastData  ::=  BIT STRING
 * {     ioData                     ( 0),     -- optional parameters
 *     displayAttribPhyBaseRowNumber         ( 1),     -- optional parameters
 *     displayAttribPhyBaseColumnNumber     ( 2),     -- optional parameters
 *     displayAttribOffset             ( 3),     -- optional parameters
 *     privateData                 ( 4),     -- optional parameters
 *     privateDataInAck             ( 5),     -- optional parameters
 *     supportsModifyingPosition         ( 6) }
 * ```
 */
export
type SendMulticastData = BIT_STRING;

/**
 * @summary SendMulticastData_ioData
 * @constant
 */
export
const SendMulticastData_ioData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary ioData
 * @constant
 */
export
const ioData: number = SendMulticastData_ioData; /* SHORT_NAMED_BIT */

/**
 * @summary SendMulticastData_displayAttribPhyBaseRowNumber
 * @constant
 */
export
const SendMulticastData_displayAttribPhyBaseRowNumber: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary displayAttribPhyBaseRowNumber
 * @constant
 */
export
const displayAttribPhyBaseRowNumber: number = SendMulticastData_displayAttribPhyBaseRowNumber; /* SHORT_NAMED_BIT */

/**
 * @summary SendMulticastData_displayAttribPhyBaseColumnNumber
 * @constant
 */
export
const SendMulticastData_displayAttribPhyBaseColumnNumber: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary displayAttribPhyBaseColumnNumber
 * @constant
 */
export
const displayAttribPhyBaseColumnNumber: number = SendMulticastData_displayAttribPhyBaseColumnNumber; /* SHORT_NAMED_BIT */

/**
 * @summary SendMulticastData_displayAttribOffset
 * @constant
 */
export
const SendMulticastData_displayAttribOffset: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary displayAttribOffset
 * @constant
 */
export
const displayAttribOffset: number = SendMulticastData_displayAttribOffset; /* SHORT_NAMED_BIT */

/**
 * @summary SendMulticastData_privateData
 * @constant
 */
export
const SendMulticastData_privateData: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SendMulticastData_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SendMulticastData_privateDataInAck
 * @constant
 */
export
const SendMulticastData_privateDataInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = SendMulticastData_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SendMulticastData_supportsModifyingPosition
 * @constant
 */
export
const SendMulticastData_supportsModifyingPosition: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary supportsModifyingPosition
 * @constant
 */
export
const supportsModifyingPosition: number = SendMulticastData_supportsModifyingPosition; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SendMulticastData: $.ASN1Decoder<SendMulticastData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendMulticastData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendMulticastData (el: _Element): SendMulticastData {
    if (!_cached_decoder_for_SendMulticastData) { _cached_decoder_for_SendMulticastData = $._decodeBitString; }
    return _cached_decoder_for_SendMulticastData(el);
}

let _cached_encoder_for_SendMulticastData: $.ASN1Encoder<SendMulticastData> | null = null;

/**
 * @summary Encodes a(n) SendMulticastData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendMulticastData, encoded as an ASN.1 Element.
 */
export
function _encode_SendMulticastData (value: SendMulticastData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendMulticastData) { _cached_encoder_for_SendMulticastData = $._encodeBitString; }
    return _cached_encoder_for_SendMulticastData(value, elGetter);
}


/* eslint-enable */
