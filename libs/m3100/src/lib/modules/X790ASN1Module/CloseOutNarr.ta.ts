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
import * as $ from 'asn1-ts/dist/node/functional';

/* START_OF_SYMBOL_DEFINITION CloseOutNarr */
/**
 * @summary CloseOutNarr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CloseOutNarr  ::=  GraphicString(SIZE (0..256))
 * ```
 */
export type CloseOutNarr = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION CloseOutNarr */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CloseOutNarr */
let _cached_decoder_for_CloseOutNarr: $.ASN1Decoder<CloseOutNarr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CloseOutNarr */

/* START_OF_SYMBOL_DEFINITION _decode_CloseOutNarr */
/**
 * @summary Decodes an ASN.1 element into a(n) CloseOutNarr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CloseOutNarr} The decoded data structure.
 */
export function _decode_CloseOutNarr(el: _Element) {
    if (!_cached_decoder_for_CloseOutNarr) {
        _cached_decoder_for_CloseOutNarr = $._decodeGraphicString;
    }
    return _cached_decoder_for_CloseOutNarr(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CloseOutNarr */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CloseOutNarr */
let _cached_encoder_for_CloseOutNarr: $.ASN1Encoder<CloseOutNarr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CloseOutNarr */

/* START_OF_SYMBOL_DEFINITION _encode_CloseOutNarr */
/**
 * @summary Encodes a(n) CloseOutNarr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CloseOutNarr, encoded as an ASN.1 Element.
 */
export function _encode_CloseOutNarr(
    value: CloseOutNarr,
    elGetter: $.ASN1Encoder<CloseOutNarr>
) {
    if (!_cached_encoder_for_CloseOutNarr) {
        _cached_encoder_for_CloseOutNarr = $._encodeGraphicString;
    }
    return _cached_encoder_for_CloseOutNarr(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CloseOutNarr */

/* eslint-enable */
