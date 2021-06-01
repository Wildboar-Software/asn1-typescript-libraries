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

/* START_OF_SYMBOL_DEFINITION dl_administrator_annotation_Type */
/**
 * @summary dl_administrator_annotation_Type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dl-administrator-annotation-Type ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type dl_administrator_annotation_Type =
    | { bmpstring: BMPString } /* CHOICE_ALT_ROOT */
    | { universalstring: UniversalString } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION dl_administrator_annotation_Type */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_dl_administrator_annotation_Type */
let _cached_decoder_for_dl_administrator_annotation_Type: $.ASN1Decoder<dl_administrator_annotation_Type> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_dl_administrator_annotation_Type */

/* START_OF_SYMBOL_DEFINITION _decode_dl_administrator_annotation_Type */
/**
 * @summary Decodes an ASN.1 element into a(n) dl_administrator_annotation_Type
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {dl_administrator_annotation_Type} The decoded data structure.
 */
export function _decode_dl_administrator_annotation_Type(el: _Element) {
    if (!_cached_decoder_for_dl_administrator_annotation_Type) {
        _cached_decoder_for_dl_administrator_annotation_Type = $._decode_inextensible_choice<dl_administrator_annotation_Type>(
            {
                'UNIVERSAL 30': ['bmpstring', $._decodeBMPString],
                'UNIVERSAL 28': ['universalstring', $._decodeUniversalString],
            }
        );
    }
    return _cached_decoder_for_dl_administrator_annotation_Type(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_dl_administrator_annotation_Type */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_dl_administrator_annotation_Type */
let _cached_encoder_for_dl_administrator_annotation_Type: $.ASN1Encoder<dl_administrator_annotation_Type> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_dl_administrator_annotation_Type */

/* START_OF_SYMBOL_DEFINITION _encode_dl_administrator_annotation_Type */
/**
 * @summary Encodes a(n) dl_administrator_annotation_Type into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The dl_administrator_annotation_Type, encoded as an ASN.1 Element.
 */
export function _encode_dl_administrator_annotation_Type(
    value: dl_administrator_annotation_Type,
    elGetter: $.ASN1Encoder<dl_administrator_annotation_Type>
) {
    if (!_cached_encoder_for_dl_administrator_annotation_Type) {
        _cached_encoder_for_dl_administrator_annotation_Type = $._encode_choice<dl_administrator_annotation_Type>(
            {
                bmpstring: $._encodeBMPString,
                universalstring: $._encodeUniversalString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_dl_administrator_annotation_Type(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_dl_administrator_annotation_Type */

/* eslint-enable */
