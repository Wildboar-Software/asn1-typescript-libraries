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
 * @summary DimensionParamValues_window
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DimensionParamValues-window ::= CHOICE { unbounded NULL, limit INTEGER }
 * ```
 */
export
type DimensionParamValues_window =
    { unbounded: NULL } /* CHOICE_ALT_ROOT */
    | { limit: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DimensionParamValues_window: $.ASN1Decoder<DimensionParamValues_window> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DimensionParamValues_window
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DimensionParamValues_window (el: _Element): DimensionParamValues_window {
    if (!_cached_decoder_for_DimensionParamValues_window) { _cached_decoder_for_DimensionParamValues_window = $._decode_inextensible_choice<DimensionParamValues_window>({
    "UNIVERSAL 5": [ "unbounded", $._decodeNull ],
    "UNIVERSAL 2": [ "limit", $._decodeInteger ]
}); }
    return _cached_decoder_for_DimensionParamValues_window(el);
}

let _cached_encoder_for_DimensionParamValues_window: $.ASN1Encoder<DimensionParamValues_window> | null = null;

/**
 * @summary Encodes a(n) DimensionParamValues_window into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DimensionParamValues_window, encoded as an ASN.1 Element.
 */
export
function _encode_DimensionParamValues_window (value: DimensionParamValues_window, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DimensionParamValues_window) { _cached_encoder_for_DimensionParamValues_window = $._encode_choice<DimensionParamValues_window>({
    "unbounded": $._encodeNull,
    "limit": $._encodeInteger,
}, $.BER); }
    return _cached_encoder_for_DimensionParamValues_window(value, elGetter);
}


/* eslint-enable */
