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
 * @summary NotRecognized
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotRecognized  ::=  BIT STRING
 * {     resource                 ( 0),     -- optional parameters
 *     result                    ( 1),     -- optional parameters
 *     cause                    ( 2),     -- optional parameters
 *     servicesPermitted             ( 3),     -- optional parameters
 *     privateData                 ( 4) }
 * ```
 */
export
type NotRecognized = BIT_STRING;

/**
 * @summary NotRecognized_resource
 * @constant
 */
export
const NotRecognized_resource: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 */
export
const resource: number = NotRecognized_resource; /* SHORT_NAMED_BIT */

/**
 * @summary NotRecognized_result
 * @constant
 */
export
const NotRecognized_result: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary result
 * @constant
 */
export
const result: number = NotRecognized_result; /* SHORT_NAMED_BIT */

/**
 * @summary NotRecognized_cause
 * @constant
 */
export
const NotRecognized_cause: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 */
export
const cause: number = NotRecognized_cause; /* SHORT_NAMED_BIT */

/**
 * @summary NotRecognized_servicesPermitted
 * @constant
 */
export
const NotRecognized_servicesPermitted: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 */
export
const servicesPermitted: number = NotRecognized_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary NotRecognized_privateData
 * @constant
 */
export
const NotRecognized_privateData: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = NotRecognized_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_NotRecognized: $.ASN1Decoder<NotRecognized> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NotRecognized
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NotRecognized (el: _Element): NotRecognized {
    if (!_cached_decoder_for_NotRecognized) { _cached_decoder_for_NotRecognized = $._decodeBitString; }
    return _cached_decoder_for_NotRecognized(el);
}

let _cached_encoder_for_NotRecognized: $.ASN1Encoder<NotRecognized> | null = null;

/**
 * @summary Encodes a(n) NotRecognized into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotRecognized, encoded as an ASN.1 Element.
 */
export
function _encode_NotRecognized (value: NotRecognized, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NotRecognized) { _cached_encoder_for_NotRecognized = $._encodeBitString; }
    return _cached_encoder_for_NotRecognized(value, elGetter);
}


/* eslint-enable */
