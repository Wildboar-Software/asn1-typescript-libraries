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
 * @summary Start
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Start  ::=  BIT STRING
 * {    resource                ( 0),     -- optional parameters
 *     text                    ( 1),     -- optional parameters
 *     privateData                ( 2),     -- optional parameters
 *     privateDataInAck            ( 3) }
 * ```
 */
export
type Start = BIT_STRING;

/**
 * @summary Start_resource
 * @constant
 */
export
const Start_resource: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 */
export
const resource: number = Start_resource; /* SHORT_NAMED_BIT */

/**
 * @summary Start_text
 * @constant
 */
export
const Start_text: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary text
 * @constant
 */
export
const text: number = Start_text; /* SHORT_NAMED_BIT */

/**
 * @summary Start_privateData
 * @constant
 */
export
const Start_privateData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = Start_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Start_privateDataInAck
 * @constant
 */
export
const Start_privateDataInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = Start_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Start: $.ASN1Decoder<Start> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Start
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Start (el: _Element): Start {
    if (!_cached_decoder_for_Start) { _cached_decoder_for_Start = $._decodeBitString; }
    return _cached_decoder_for_Start(el);
}

let _cached_encoder_for_Start: $.ASN1Encoder<Start> | null = null;

/**
 * @summary Encodes a(n) Start into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Start, encoded as an ASN.1 Element.
 */
export
function _encode_Start (value: Start, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Start) { _cached_encoder_for_Start = $._encodeBitString; }
    return _cached_encoder_for_Start(value, elGetter);
}


/* eslint-enable */
