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
import { StringIntegerPair, _decode_StringIntegerPair, _encode_StringIntegerPair } from "../EmberPlus-Glow/StringIntegerPair.ta.mjs";
// export { StringIntegerPair, _decode_StringIntegerPair, _encode_StringIntegerPair } from "../EmberPlus-Glow/StringIntegerPair.ta.mjs";


/**
 * @summary StringIntegerCollection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StringIntegerCollection  ::= 
 *     [APPLICATION 8] IMPLICIT
 *         SEQUENCE OF [0] StringIntegerPair
 * ```
 */
export
type StringIntegerCollection = StringIntegerPair[]; // SequenceOfType

let _cached_decoder_for_StringIntegerCollection: $.ASN1Decoder<StringIntegerCollection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StringIntegerCollection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StringIntegerCollection (el: _Element): StringIntegerCollection {
    if (!_cached_decoder_for_StringIntegerCollection) { _cached_decoder_for_StringIntegerCollection = $._decode_implicit<StringIntegerCollection>(() => $._decodeSequenceOf<StringIntegerPair>(() => $._decode_implicit<StringIntegerCollection>(() => _decode_StringIntegerPair))); }
    return _cached_decoder_for_StringIntegerCollection(el);
}

let _cached_encoder_for_StringIntegerCollection: $.ASN1Encoder<StringIntegerCollection> | null = null;

/**
 * @summary Encodes a(n) StringIntegerCollection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StringIntegerCollection, encoded as an ASN.1 Element.
 */
export
function _encode_StringIntegerCollection (value: StringIntegerCollection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StringIntegerCollection) { _cached_encoder_for_StringIntegerCollection = $._encode_implicit(_TagClass.application, 8, () => $._encodeSequenceOf<StringIntegerPair>(() => $._encode_implicit(_TagClass.context, 0, () => _encode_StringIntegerPair, $.BER), $.BER), $.BER); }
    return _cached_encoder_for_StringIntegerCollection(value, elGetter);
}


/* eslint-enable */
