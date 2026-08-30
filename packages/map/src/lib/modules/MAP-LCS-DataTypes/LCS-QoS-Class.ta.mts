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



export
enum _enum_for_LCS_QoS_Class {
    bestEffort = 0,
    assured = 1,
}

/**
 * @summary LCS_QoS_Class
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCS-QoS-Class  ::=  ENUMERATED {
 *     bestEffort  (0),
 *     assured  (1),
 *     ... }
 * ```
 * 
 * @enum {number}
 */
export
type LCS_QoS_Class = _enum_for_LCS_QoS_Class | ENUMERATED;

/**
 * @summary LCS_QoS_Class_bestEffort
 * @constant
 * @type {number}
 */
export
const LCS_QoS_Class_bestEffort: LCS_QoS_Class = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bestEffort
 * @constant
 * @type {number}
 */
export
const bestEffort: LCS_QoS_Class = LCS_QoS_Class_bestEffort; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCS_QoS_Class_assured
 * @constant
 * @type {number}
 */
export
const LCS_QoS_Class_assured: LCS_QoS_Class = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary assured
 * @constant
 * @type {number}
 */
export
const assured: LCS_QoS_Class = LCS_QoS_Class_assured; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_LCS_QoS_Class: $.ASN1Decoder<LCS_QoS_Class> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LCS_QoS_Class
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LCS_QoS_Class (el: _Element): LCS_QoS_Class {
    if (!_cached_decoder_for_LCS_QoS_Class) { _cached_decoder_for_LCS_QoS_Class = $._decodeEnumerated; }
    return _cached_decoder_for_LCS_QoS_Class(el);
}

let _cached_encoder_for_LCS_QoS_Class: $.ASN1Encoder<LCS_QoS_Class> | null = null;

/**
 * @summary Encodes a(n) LCS_QoS_Class into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LCS_QoS_Class, encoded as an ASN.1 Element.
 */
export
function _encode_LCS_QoS_Class (value: LCS_QoS_Class, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LCS_QoS_Class) { _cached_encoder_for_LCS_QoS_Class = $._encodeEnumerated; }
    return _cached_encoder_for_LCS_QoS_Class(value, elGetter);
}


/* eslint-enable */
