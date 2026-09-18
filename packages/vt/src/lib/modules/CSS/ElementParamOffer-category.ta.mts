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
 * @summary ElementParamOffer_category
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ElementParamOffer-category ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ElementParamOffer_category = BIT_STRING;

/**
 * @summary ElementParamOffer_category_character
 * @constant
 */
export
const ElementParamOffer_category_character: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary character
 * @constant
 */
export
const character: number = ElementParamOffer_category_character; /* SHORT_NAMED_BIT */

/**
 * @summary ElementParamOffer_category_boolean_
 * @constant
 */
export
const ElementParamOffer_category_boolean_: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary boolean_
 * @constant
 */
export
const boolean_: number = ElementParamOffer_category_boolean_; /* SHORT_NAMED_BIT */

/**
 * @summary ElementParamOffer_category_symbolic
 * @constant
 */
export
const ElementParamOffer_category_symbolic: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary symbolic
 * @constant
 */
export
const symbolic: number = ElementParamOffer_category_symbolic; /* SHORT_NAMED_BIT */

/**
 * @summary ElementParamOffer_category_integer
 * @constant
 */
export
const ElementParamOffer_category_integer: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary integer
 * @constant
 */
export
const integer: number = ElementParamOffer_category_integer; /* SHORT_NAMED_BIT */

/**
 * @summary ElementParamOffer_category_transparent
 * @constant
 */
export
const ElementParamOffer_category_transparent: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary transparent
 * @constant
 */
export
const transparent: number = ElementParamOffer_category_transparent; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ElementParamOffer_category: $.ASN1Decoder<ElementParamOffer_category> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ElementParamOffer_category
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ElementParamOffer_category (el: _Element): ElementParamOffer_category {
    if (!_cached_decoder_for_ElementParamOffer_category) { _cached_decoder_for_ElementParamOffer_category = $._decodeBitString; }
    return _cached_decoder_for_ElementParamOffer_category(el);
}

let _cached_encoder_for_ElementParamOffer_category: $.ASN1Encoder<ElementParamOffer_category> | null = null;

/**
 * @summary Encodes a(n) ElementParamOffer_category into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ElementParamOffer_category, encoded as an ASN.1 Element.
 */
export
function _encode_ElementParamOffer_category (value: ElementParamOffer_category, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ElementParamOffer_category) { _cached_encoder_for_ElementParamOffer_category = $._encodeBitString; }
    return _cached_encoder_for_ElementParamOffer_category(value, elGetter);
}


/* eslint-enable */
