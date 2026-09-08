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
 * @summary V8bisSignalType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V8bisSignalType  ::=  CHOICE {
 *   nONE  INTEGER(0),
 *   e     INTEGER(1),
 *   d     INTEGER(2)
 * }
 * ```
 */
export
type V8bisSignalType =
    { nONE: INTEGER } /* CHOICE_ALT_ROOT */
    | { e: INTEGER } /* CHOICE_ALT_ROOT */
    | { d: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_V8bisSignalType: $.ASN1Decoder<V8bisSignalType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V8bisSignalType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V8bisSignalType (el: _Element): V8bisSignalType {
    if (!_cached_decoder_for_V8bisSignalType) { _cached_decoder_for_V8bisSignalType = $._decode_inextensible_choice<V8bisSignalType>({
    "CONTEXT 0": [ "nONE", $._decodeInteger ],
    "CONTEXT 1": [ "e", $._decodeInteger ],
    "CONTEXT 2": [ "d", $._decodeInteger ]
}); }
    return _cached_decoder_for_V8bisSignalType(el);
}

let _cached_encoder_for_V8bisSignalType: $.ASN1Encoder<V8bisSignalType> | null = null;

/**
 * @summary Encodes a(n) V8bisSignalType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V8bisSignalType, encoded as an ASN.1 Element.
 */
export
function _encode_V8bisSignalType (value: V8bisSignalType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V8bisSignalType) { _cached_encoder_for_V8bisSignalType = $._encode_choice<V8bisSignalType>({
    "nONE": $._encodeInteger,
    "e": $._encodeInteger,
    "d": $._encodeInteger,
}, $.BER); }
    return _cached_encoder_for_V8bisSignalType(value, elGetter);
}


/* eslint-enable */
