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

/* START_OF_SYMBOL_DEFINITION TeletexData */
/**
 * @summary TeletexData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TeletexData  ::=  SEQUENCE OF TeletexString
 * ```
 */
export type TeletexData = TeletexString[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION TeletexData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TeletexData */
let _cached_decoder_for_TeletexData: $.ASN1Decoder<TeletexData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TeletexData */

/* START_OF_SYMBOL_DEFINITION _decode_TeletexData */
/**
 * @summary Decodes an ASN.1 element into a(n) TeletexData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TeletexData} The decoded data structure.
 */
export function _decode_TeletexData(el: _Element) {
    if (!_cached_decoder_for_TeletexData) {
        _cached_decoder_for_TeletexData = $._decodeSequenceOf<TeletexString>(
            () => $._decodeTeletexString
        );
    }
    return _cached_decoder_for_TeletexData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TeletexData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TeletexData */
let _cached_encoder_for_TeletexData: $.ASN1Encoder<TeletexData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TeletexData */

/* START_OF_SYMBOL_DEFINITION _encode_TeletexData */
/**
 * @summary Encodes a(n) TeletexData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TeletexData, encoded as an ASN.1 Element.
 */
export function _encode_TeletexData(
    value: TeletexData,
    elGetter: $.ASN1Encoder<TeletexData>
) {
    if (!_cached_encoder_for_TeletexData) {
        _cached_encoder_for_TeletexData = $._encodeSequenceOf<TeletexString>(
            () => $._encodeTeletexString,
            $.BER
        );
    }
    return _cached_encoder_for_TeletexData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TeletexData */

/* eslint-enable */
