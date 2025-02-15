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

/* START_OF_SYMBOL_DEFINITION AutoForwardComment */
/**
 * @summary AutoForwardComment
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoForwardComment  ::=  PrintableString(SIZE (0..ub-auto-forward-comment))
 * ```
 */
export type AutoForwardComment = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION AutoForwardComment */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoForwardComment */
let _cached_decoder_for_AutoForwardComment: $.ASN1Decoder<AutoForwardComment> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoForwardComment */

/* START_OF_SYMBOL_DEFINITION _decode_AutoForwardComment */
/**
 * @summary Decodes an ASN.1 element into a(n) AutoForwardComment
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AutoForwardComment} The decoded data structure.
 */
export function _decode_AutoForwardComment(el: _Element) {
    if (!_cached_decoder_for_AutoForwardComment) {
        _cached_decoder_for_AutoForwardComment = $._decodePrintableString;
    }
    return _cached_decoder_for_AutoForwardComment(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AutoForwardComment */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoForwardComment */
let _cached_encoder_for_AutoForwardComment: $.ASN1Encoder<AutoForwardComment> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoForwardComment */

/* START_OF_SYMBOL_DEFINITION _encode_AutoForwardComment */
/**
 * @summary Encodes a(n) AutoForwardComment into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AutoForwardComment, encoded as an ASN.1 Element.
 */
export function _encode_AutoForwardComment(
    value: AutoForwardComment,
    elGetter: $.ASN1Encoder<AutoForwardComment>
) {
    if (!_cached_encoder_for_AutoForwardComment) {
        _cached_encoder_for_AutoForwardComment = $._encodePrintableString;
    }
    return _cached_encoder_for_AutoForwardComment(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AutoForwardComment */

/* eslint-enable */
