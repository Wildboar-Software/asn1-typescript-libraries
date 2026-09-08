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
 * @summary Queue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Queue  ::=  BIT STRING
 * {    message                    ( 0),     -- optional parameters
 *     resource                ( 1),     -- optional parameters
 *     text                    ( 2),     -- optional parameters
 *     privateData                ( 3),     -- optional parameters
 *     privateDataInAck            ( 4) }
 * ```
 */
export
type Queue = BIT_STRING;

/**
 * @summary Queue_message
 * @constant
 */
export
const Queue_message: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary message
 * @constant
 */
export
const message: number = Queue_message; /* SHORT_NAMED_BIT */

/**
 * @summary Queue_resource
 * @constant
 */
export
const Queue_resource: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 */
export
const resource: number = Queue_resource; /* SHORT_NAMED_BIT */

/**
 * @summary Queue_text
 * @constant
 */
export
const Queue_text: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary text
 * @constant
 */
export
const text: number = Queue_text; /* SHORT_NAMED_BIT */

/**
 * @summary Queue_privateData
 * @constant
 */
export
const Queue_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = Queue_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Queue_privateDataInAck
 * @constant
 */
export
const Queue_privateDataInAck: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = Queue_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Queue: $.ASN1Decoder<Queue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Queue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Queue (el: _Element): Queue {
    if (!_cached_decoder_for_Queue) { _cached_decoder_for_Queue = $._decodeBitString; }
    return _cached_decoder_for_Queue(el);
}

let _cached_encoder_for_Queue: $.ASN1Encoder<Queue> | null = null;

/**
 * @summary Encodes a(n) Queue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Queue, encoded as an ASN.1 Element.
 */
export
function _encode_Queue (value: Queue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Queue) { _cached_encoder_for_Queue = $._encodeBitString; }
    return _cached_encoder_for_Queue(value, elGetter);
}


/* eslint-enable */
