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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EC_Class
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EC-Class  ::=  INTEGER {
 *     network-triggered                   (0),
 *     monitored                           (1)
 * } (0..1)
 * ```
 */
export
type EC_Class = INTEGER;

/**
 * @summary EC_Class_network_triggered
 * @constant
 * @type {number}
 */
export
const EC_Class_network_triggered: EC_Class = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EC_Class_network_triggered
 * @constant
 * @type {number}
 */
export
const network_triggered: EC_Class = EC_Class_network_triggered; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EC_Class_monitored
 * @constant
 * @type {number}
 */
export
const EC_Class_monitored: EC_Class = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EC_Class_monitored
 * @constant
 * @type {number}
 */
export
const monitored: EC_Class = EC_Class_monitored; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_EC_Class: $.ASN1Decoder<EC_Class> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EC_Class
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EC_Class (el: _Element): EC_Class {
    if (!_cached_decoder_for_EC_Class) { _cached_decoder_for_EC_Class = $._decodeInteger; }
    return _cached_decoder_for_EC_Class(el);
}

let _cached_encoder_for_EC_Class: $.ASN1Encoder<EC_Class> | null = null;

/**
 * @summary Encodes a(n) EC_Class into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EC_Class, encoded as an ASN.1 Element.
 */
export
function _encode_EC_Class (value: EC_Class, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EC_Class) { _cached_encoder_for_EC_Class = $._encodeInteger; }
    return _cached_encoder_for_EC_Class(value, elGetter);
}


/* eslint-enable */
