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
 * @summary FieldParamValues_accessOutside
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FieldParamValues-accessOutside ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type FieldParamValues_accessOutside = INTEGER;

/**
 * @summary FieldParamValues_accessOutside_allowed
 * @constant
 * @type {number}
 */
export
const FieldParamValues_accessOutside_allowed: FieldParamValues_accessOutside = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FieldParamValues_accessOutside_allowed
 * @constant
 * @type {number}
 */
export
const allowed: FieldParamValues_accessOutside = FieldParamValues_accessOutside_allowed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FieldParamValues_accessOutside_notAllowed
 * @constant
 * @type {number}
 */
export
const FieldParamValues_accessOutside_notAllowed: FieldParamValues_accessOutside = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FieldParamValues_accessOutside_notAllowed
 * @constant
 * @type {number}
 */
export
const notAllowed: FieldParamValues_accessOutside = FieldParamValues_accessOutside_notAllowed; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_FieldParamValues_accessOutside: $.ASN1Decoder<FieldParamValues_accessOutside> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FieldParamValues_accessOutside
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FieldParamValues_accessOutside (el: _Element): FieldParamValues_accessOutside {
    if (!_cached_decoder_for_FieldParamValues_accessOutside) { _cached_decoder_for_FieldParamValues_accessOutside = $._decodeInteger; }
    return _cached_decoder_for_FieldParamValues_accessOutside(el);
}

let _cached_encoder_for_FieldParamValues_accessOutside: $.ASN1Encoder<FieldParamValues_accessOutside> | null = null;

/**
 * @summary Encodes a(n) FieldParamValues_accessOutside into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FieldParamValues_accessOutside, encoded as an ASN.1 Element.
 */
export
function _encode_FieldParamValues_accessOutside (value: FieldParamValues_accessOutside, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FieldParamValues_accessOutside) { _cached_encoder_for_FieldParamValues_accessOutside = $._encodeInteger; }
    return _cached_encoder_for_FieldParamValues_accessOutside(value, elGetter);
}


/* eslint-enable */
