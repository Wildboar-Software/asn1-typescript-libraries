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
 * @summary UINT24
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UINT24     ::=     INTEGER(0..16777215)
 * ```
 */
export
type UINT24 = INTEGER;

let _cached_decoder_for_UINT24: $.ASN1Decoder<UINT24> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UINT24
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UINT24 (el: _Element): UINT24 {
    if (!_cached_decoder_for_UINT24) { _cached_decoder_for_UINT24 = $._decodeInteger; }
    return _cached_decoder_for_UINT24(el);
}

let _cached_encoder_for_UINT24: $.ASN1Encoder<UINT24> | null = null;

/**
 * @summary Encodes a(n) UINT24 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UINT24, encoded as an ASN.1 Element.
 */
export
function _encode_UINT24 (value: UINT24, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UINT24) { _cached_encoder_for_UINT24 = $._encodeInteger; }
    return _cached_encoder_for_UINT24(value, elGetter);
}


/* eslint-enable */
