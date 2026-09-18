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
 * @summary ParameterValues_priority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterValues-priority ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ParameterValues_priority = INTEGER;

/**
 * @summary ParameterValues_priority_normal
 * @constant
 * @type {number}
 */
export
const ParameterValues_priority_normal: ParameterValues_priority = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_priority_normal
 * @constant
 * @type {number}
 */
export
const normal: ParameterValues_priority = ParameterValues_priority_normal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_priority_high
 * @constant
 * @type {number}
 */
export
const ParameterValues_priority_high: ParameterValues_priority = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_priority_high
 * @constant
 * @type {number}
 */
export
const high: ParameterValues_priority = ParameterValues_priority_high; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_priority_urgent
 * @constant
 * @type {number}
 */
export
const ParameterValues_priority_urgent: ParameterValues_priority = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_priority_urgent
 * @constant
 * @type {number}
 */
export
const urgent: ParameterValues_priority = ParameterValues_priority_urgent; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ParameterValues_priority: $.ASN1Decoder<ParameterValues_priority> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterValues_priority
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterValues_priority (el: _Element): ParameterValues_priority {
    if (!_cached_decoder_for_ParameterValues_priority) { _cached_decoder_for_ParameterValues_priority = $._decodeInteger; }
    return _cached_decoder_for_ParameterValues_priority(el);
}

let _cached_encoder_for_ParameterValues_priority: $.ASN1Encoder<ParameterValues_priority> | null = null;

/**
 * @summary Encodes a(n) ParameterValues_priority into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterValues_priority, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterValues_priority (value: ParameterValues_priority, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterValues_priority) { _cached_encoder_for_ParameterValues_priority = $._encodeInteger; }
    return _cached_encoder_for_ParameterValues_priority(value, elGetter);
}


/* eslint-enable */
