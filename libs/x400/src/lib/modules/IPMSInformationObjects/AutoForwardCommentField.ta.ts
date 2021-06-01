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
import {
    AutoForwardComment,
    _decode_AutoForwardComment,
    _encode_AutoForwardComment,
} from '../IPMSInformationObjects/AutoForwardComment.ta';
export {
    AutoForwardComment,
    _decode_AutoForwardComment,
    _encode_AutoForwardComment,
} from '../IPMSInformationObjects/AutoForwardComment.ta';

/* START_OF_SYMBOL_DEFINITION AutoForwardCommentField */
/**
 * @summary AutoForwardCommentField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoForwardCommentField  ::=
 *   AutoForwardComment
 * ```
 */
export type AutoForwardCommentField = AutoForwardComment; // DefinedType
/* END_OF_SYMBOL_DEFINITION AutoForwardCommentField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoForwardCommentField */
let _cached_decoder_for_AutoForwardCommentField: $.ASN1Decoder<AutoForwardCommentField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoForwardCommentField */

/* START_OF_SYMBOL_DEFINITION _decode_AutoForwardCommentField */
/**
 * @summary Decodes an ASN.1 element into a(n) AutoForwardCommentField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AutoForwardCommentField} The decoded data structure.
 */
export function _decode_AutoForwardCommentField(el: _Element) {
    if (!_cached_decoder_for_AutoForwardCommentField) {
        _cached_decoder_for_AutoForwardCommentField = _decode_AutoForwardComment;
    }
    return _cached_decoder_for_AutoForwardCommentField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AutoForwardCommentField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoForwardCommentField */
let _cached_encoder_for_AutoForwardCommentField: $.ASN1Encoder<AutoForwardCommentField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoForwardCommentField */

/* START_OF_SYMBOL_DEFINITION _encode_AutoForwardCommentField */
/**
 * @summary Encodes a(n) AutoForwardCommentField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AutoForwardCommentField, encoded as an ASN.1 Element.
 */
export function _encode_AutoForwardCommentField(
    value: AutoForwardCommentField,
    elGetter: $.ASN1Encoder<AutoForwardCommentField>
) {
    if (!_cached_encoder_for_AutoForwardCommentField) {
        _cached_encoder_for_AutoForwardCommentField = _encode_AutoForwardComment;
    }
    return _cached_encoder_for_AutoForwardCommentField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AutoForwardCommentField */

/* eslint-enable */
