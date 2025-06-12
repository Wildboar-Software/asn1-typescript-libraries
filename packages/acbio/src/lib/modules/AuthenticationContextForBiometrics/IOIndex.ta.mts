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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION IOIndex */
/**
 * @summary IOIndex
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IOIndex  ::=  INTEGER (0..65535)
 * ```
 */
export type IOIndex = INTEGER;
/* END_OF_SYMBOL_DEFINITION IOIndex */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IOIndex */
let _cached_decoder_for_IOIndex: $.ASN1Decoder<IOIndex> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IOIndex */

/* START_OF_SYMBOL_DEFINITION _decode_IOIndex */
/**
 * @summary Decodes an ASN.1 element into a(n) IOIndex
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IOIndex} The decoded data structure.
 */
export function _decode_IOIndex(el: _Element) {
    if (!_cached_decoder_for_IOIndex) {
        _cached_decoder_for_IOIndex = $._decodeInteger;
    }
    return _cached_decoder_for_IOIndex(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IOIndex */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IOIndex */
let _cached_encoder_for_IOIndex: $.ASN1Encoder<IOIndex> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IOIndex */

/* START_OF_SYMBOL_DEFINITION _encode_IOIndex */
/**
 * @summary Encodes a(n) IOIndex into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IOIndex, encoded as an ASN.1 Element.
 */
export function _encode_IOIndex(
    value: IOIndex,
    elGetter: $.ASN1Encoder<IOIndex>
) {
    if (!_cached_encoder_for_IOIndex) {
        _cached_encoder_for_IOIndex = $._encodeInteger;
    }
    return _cached_encoder_for_IOIndex(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IOIndex */

/* eslint-enable */
