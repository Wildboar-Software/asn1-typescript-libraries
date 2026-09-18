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
 * @summary ParameterValues_category
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterValues-category ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ParameterValues_category = INTEGER;

/**
 * @summary ParameterValues_category_character
 * @constant
 * @type {number}
 */
export
const ParameterValues_category_character: ParameterValues_category = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_category_character
 * @constant
 * @type {number}
 */
export
const character: ParameterValues_category = ParameterValues_category_character; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_category_boolean_
 * @constant
 * @type {number}
 */
export
const ParameterValues_category_boolean_: ParameterValues_category = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_category_boolean_
 * @constant
 * @type {number}
 */
export
const boolean_: ParameterValues_category = ParameterValues_category_boolean_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_category_symbolic
 * @constant
 * @type {number}
 */
export
const ParameterValues_category_symbolic: ParameterValues_category = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_category_symbolic
 * @constant
 * @type {number}
 */
export
const symbolic: ParameterValues_category = ParameterValues_category_symbolic; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_category_integer
 * @constant
 * @type {number}
 */
export
const ParameterValues_category_integer: ParameterValues_category = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_category_integer
 * @constant
 * @type {number}
 */
export
const integer: ParameterValues_category = ParameterValues_category_integer; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_category_transparent
 * @constant
 * @type {number}
 */
export
const ParameterValues_category_transparent: ParameterValues_category = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_category_transparent
 * @constant
 * @type {number}
 */
export
const transparent: ParameterValues_category = ParameterValues_category_transparent; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ParameterValues_category: $.ASN1Decoder<ParameterValues_category> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterValues_category
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterValues_category (el: _Element): ParameterValues_category {
    if (!_cached_decoder_for_ParameterValues_category) { _cached_decoder_for_ParameterValues_category = $._decodeInteger; }
    return _cached_decoder_for_ParameterValues_category(el);
}

let _cached_encoder_for_ParameterValues_category: $.ASN1Encoder<ParameterValues_category> | null = null;

/**
 * @summary Encodes a(n) ParameterValues_category into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterValues_category, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterValues_category (value: ParameterValues_category, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterValues_category) { _cached_encoder_for_ParameterValues_category = $._encodeInteger; }
    return _cached_encoder_for_ParameterValues_category(value, elGetter);
}


/* eslint-enable */
