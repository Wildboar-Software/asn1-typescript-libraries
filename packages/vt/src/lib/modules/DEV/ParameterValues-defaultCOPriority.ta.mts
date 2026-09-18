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
 * @summary ParameterValues_defaultCOPriority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterValues-defaultCOPriority ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ParameterValues_defaultCOPriority = INTEGER;

/**
 * @summary ParameterValues_defaultCOPriority_normal
 * @constant
 * @type {number}
 */
export
const ParameterValues_defaultCOPriority_normal: ParameterValues_defaultCOPriority = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_defaultCOPriority_normal
 * @constant
 * @type {number}
 */
export
const normal: ParameterValues_defaultCOPriority = ParameterValues_defaultCOPriority_normal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_defaultCOPriority_high
 * @constant
 * @type {number}
 */
export
const ParameterValues_defaultCOPriority_high: ParameterValues_defaultCOPriority = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_defaultCOPriority_high
 * @constant
 * @type {number}
 */
export
const high: ParameterValues_defaultCOPriority = ParameterValues_defaultCOPriority_high; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_defaultCOPriority_urgent
 * @constant
 * @type {number}
 */
export
const ParameterValues_defaultCOPriority_urgent: ParameterValues_defaultCOPriority = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_defaultCOPriority_urgent
 * @constant
 * @type {number}
 */
export
const urgent: ParameterValues_defaultCOPriority = ParameterValues_defaultCOPriority_urgent; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ParameterValues_defaultCOPriority: $.ASN1Decoder<ParameterValues_defaultCOPriority> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterValues_defaultCOPriority
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterValues_defaultCOPriority (el: _Element): ParameterValues_defaultCOPriority {
    if (!_cached_decoder_for_ParameterValues_defaultCOPriority) { _cached_decoder_for_ParameterValues_defaultCOPriority = $._decodeInteger; }
    return _cached_decoder_for_ParameterValues_defaultCOPriority(el);
}

let _cached_encoder_for_ParameterValues_defaultCOPriority: $.ASN1Encoder<ParameterValues_defaultCOPriority> | null = null;

/**
 * @summary Encodes a(n) ParameterValues_defaultCOPriority into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterValues_defaultCOPriority, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterValues_defaultCOPriority (value: ParameterValues_defaultCOPriority, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterValues_defaultCOPriority) { _cached_encoder_for_ParameterValues_defaultCOPriority = $._encodeInteger; }
    return _cached_encoder_for_ParameterValues_defaultCOPriority(value, elGetter);
}


/* eslint-enable */
