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
 * @summary Record
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Record  ::=  BIT STRING
 * {     length                     ( 0),     -- optional parameters
 *     currentPosition             ( 1),     -- optional parameters
 *     speed                     ( 2),     -- optional parameters
 *     cause                     ( 3),     -- optional parameters
 *     servicesPermitted             ( 4),     -- optional parameters
 *     privateData                 ( 5) }
 * ```
 */
export
type Record = BIT_STRING;

/**
 * @summary Record_length
 * @constant
 */
export
const Record_length: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary length
 * @constant
 */
export
const length: number = Record_length; /* SHORT_NAMED_BIT */

/**
 * @summary Record_currentPosition
 * @constant
 */
export
const Record_currentPosition: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary currentPosition
 * @constant
 */
export
const currentPosition: number = Record_currentPosition; /* SHORT_NAMED_BIT */

/**
 * @summary Record_speed
 * @constant
 */
export
const Record_speed: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary speed
 * @constant
 */
export
const speed: number = Record_speed; /* SHORT_NAMED_BIT */

/**
 * @summary Record_cause
 * @constant
 */
export
const Record_cause: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 */
export
const cause: number = Record_cause; /* SHORT_NAMED_BIT */

/**
 * @summary Record_servicesPermitted
 * @constant
 */
export
const Record_servicesPermitted: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 */
export
const servicesPermitted: number = Record_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary Record_privateData
 * @constant
 */
export
const Record_privateData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = Record_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Record: $.ASN1Decoder<Record> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Record
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Record (el: _Element): Record {
    if (!_cached_decoder_for_Record) { _cached_decoder_for_Record = $._decodeBitString; }
    return _cached_decoder_for_Record(el);
}

let _cached_encoder_for_Record: $.ASN1Encoder<Record> | null = null;

/**
 * @summary Encodes a(n) Record into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Record, encoded as an ASN.1 Element.
 */
export
function _encode_Record (value: Record, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Record) { _cached_encoder_for_Record = $._encodeBitString; }
    return _cached_encoder_for_Record(value, elGetter);
}


/* eslint-enable */
