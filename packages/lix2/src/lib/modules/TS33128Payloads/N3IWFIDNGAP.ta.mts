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
 * @summary N3IWFIDNGAP
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * N3IWFIDNGAP  ::=  BIT STRING (SIZE(16))
 * ```
 */
export
type N3IWFIDNGAP = BIT_STRING;

let _cached_decoder_for_N3IWFIDNGAP: $.ASN1Decoder<N3IWFIDNGAP> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) N3IWFIDNGAP
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_N3IWFIDNGAP (el: _Element): N3IWFIDNGAP {
    if (!_cached_decoder_for_N3IWFIDNGAP) { _cached_decoder_for_N3IWFIDNGAP = $._decodeBitString; }
    return _cached_decoder_for_N3IWFIDNGAP(el);
}

let _cached_encoder_for_N3IWFIDNGAP: $.ASN1Encoder<N3IWFIDNGAP> | null = null;

/**
 * @summary Encodes a(n) N3IWFIDNGAP into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The N3IWFIDNGAP, encoded as an ASN.1 Element.
 */
export
function _encode_N3IWFIDNGAP (value: N3IWFIDNGAP, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_N3IWFIDNGAP) { _cached_encoder_for_N3IWFIDNGAP = $._encodeBitString; }
    return _cached_encoder_for_N3IWFIDNGAP(value, elGetter);
}


/* eslint-enable */
