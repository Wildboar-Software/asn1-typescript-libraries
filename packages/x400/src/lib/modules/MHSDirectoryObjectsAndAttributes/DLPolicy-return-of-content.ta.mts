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

/* START_OF_SYMBOL_DEFINITION _enum_for_DLPolicy_return_of_content */
/**
 * @summary DLPolicy_return_of_content
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLPolicy-return-of-content ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_DLPolicy_return_of_content {
    unchanged = 0,
    content_return_not_requested = 1,
    content_return_requested = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_DLPolicy_return_of_content */

/* START_OF_SYMBOL_DEFINITION DLPolicy_return_of_content */
/**
 * @summary DLPolicy_return_of_content
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLPolicy-return-of-content ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type DLPolicy_return_of_content = _enum_for_DLPolicy_return_of_content;
/* END_OF_SYMBOL_DEFINITION DLPolicy_return_of_content */

/* START_OF_SYMBOL_DEFINITION DLPolicy_return_of_content */
/**
 * @summary DLPolicy_return_of_content
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLPolicy-return-of-content ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const DLPolicy_return_of_content = _enum_for_DLPolicy_return_of_content;
/* END_OF_SYMBOL_DEFINITION DLPolicy_return_of_content */

/* START_OF_SYMBOL_DEFINITION DLPolicy_return_of_content_unchanged */
/**
 * @summary DLPolicy_return_of_content_unchanged
 * @constant
 * @type {number}
 */
export const DLPolicy_return_of_content_unchanged: DLPolicy_return_of_content =
    DLPolicy_return_of_content.unchanged; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DLPolicy_return_of_content_unchanged */

/* START_OF_SYMBOL_DEFINITION unchanged */
/**
 * @summary unchanged
 * @constant
 * @type {number}
 */
export const unchanged: DLPolicy_return_of_content =
    DLPolicy_return_of_content.unchanged; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unchanged */

/* START_OF_SYMBOL_DEFINITION DLPolicy_return_of_content_content_return_not_requested */
/**
 * @summary DLPolicy_return_of_content_content_return_not_requested
 * @constant
 * @type {number}
 */
export const DLPolicy_return_of_content_content_return_not_requested: DLPolicy_return_of_content =
    DLPolicy_return_of_content.content_return_not_requested; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DLPolicy_return_of_content_content_return_not_requested */

/* START_OF_SYMBOL_DEFINITION content_return_not_requested */
/**
 * @summary content_return_not_requested
 * @constant
 * @type {number}
 */
export const content_return_not_requested: DLPolicy_return_of_content =
    DLPolicy_return_of_content.content_return_not_requested; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION content_return_not_requested */

/* START_OF_SYMBOL_DEFINITION DLPolicy_return_of_content_content_return_requested */
/**
 * @summary DLPolicy_return_of_content_content_return_requested
 * @constant
 * @type {number}
 */
export const DLPolicy_return_of_content_content_return_requested: DLPolicy_return_of_content =
    DLPolicy_return_of_content.content_return_requested; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DLPolicy_return_of_content_content_return_requested */

/* START_OF_SYMBOL_DEFINITION content_return_requested */
/**
 * @summary content_return_requested
 * @constant
 * @type {number}
 */
export const content_return_requested: DLPolicy_return_of_content =
    DLPolicy_return_of_content.content_return_requested; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION content_return_requested */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DLPolicy_return_of_content */
let _cached_decoder_for_DLPolicy_return_of_content: $.ASN1Decoder<DLPolicy_return_of_content> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DLPolicy_return_of_content */

/* START_OF_SYMBOL_DEFINITION _decode_DLPolicy_return_of_content */
/**
 * @summary Decodes an ASN.1 element into a(n) DLPolicy_return_of_content
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DLPolicy_return_of_content} The decoded data structure.
 */
export function _decode_DLPolicy_return_of_content(el: _Element) {
    if (!_cached_decoder_for_DLPolicy_return_of_content) {
        _cached_decoder_for_DLPolicy_return_of_content = $._decodeEnumerated;
    }
    return _cached_decoder_for_DLPolicy_return_of_content(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DLPolicy_return_of_content */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DLPolicy_return_of_content */
let _cached_encoder_for_DLPolicy_return_of_content: $.ASN1Encoder<DLPolicy_return_of_content> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DLPolicy_return_of_content */

/* START_OF_SYMBOL_DEFINITION _encode_DLPolicy_return_of_content */
/**
 * @summary Encodes a(n) DLPolicy_return_of_content into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DLPolicy_return_of_content, encoded as an ASN.1 Element.
 */
export function _encode_DLPolicy_return_of_content(
    value: DLPolicy_return_of_content,
    elGetter: $.ASN1Encoder<DLPolicy_return_of_content>
) {
    if (!_cached_encoder_for_DLPolicy_return_of_content) {
        _cached_encoder_for_DLPolicy_return_of_content = $._encodeEnumerated;
    }
    return _cached_encoder_for_DLPolicy_return_of_content(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DLPolicy_return_of_content */

/* eslint-enable */
