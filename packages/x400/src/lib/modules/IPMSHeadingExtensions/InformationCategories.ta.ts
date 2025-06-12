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
import {
    InformationCategory,
    _decode_InformationCategory,
    _encode_InformationCategory,
} from '../IPMSHeadingExtensions/InformationCategory.ta.js';
export {
    InformationCategory,
    _decode_InformationCategory,
    _encode_InformationCategory,
} from '../IPMSHeadingExtensions/InformationCategory.ta.js';

/* START_OF_SYMBOL_DEFINITION InformationCategories */
/**
 * @summary InformationCategories
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InformationCategories  ::=
 *   SEQUENCE (SIZE (1..ub-information-categories)) OF InformationCategory
 * ```
 */
export type InformationCategories = InformationCategory[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION InformationCategories */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InformationCategories */
let _cached_decoder_for_InformationCategories: $.ASN1Decoder<InformationCategories> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InformationCategories */

/* START_OF_SYMBOL_DEFINITION _decode_InformationCategories */
/**
 * @summary Decodes an ASN.1 element into a(n) InformationCategories
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InformationCategories} The decoded data structure.
 */
export function _decode_InformationCategories(el: _Element) {
    if (!_cached_decoder_for_InformationCategories) {
        _cached_decoder_for_InformationCategories = $._decodeSequenceOf<InformationCategory>(
            () => _decode_InformationCategory
        );
    }
    return _cached_decoder_for_InformationCategories(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InformationCategories */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InformationCategories */
let _cached_encoder_for_InformationCategories: $.ASN1Encoder<InformationCategories> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InformationCategories */

/* START_OF_SYMBOL_DEFINITION _encode_InformationCategories */
/**
 * @summary Encodes a(n) InformationCategories into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InformationCategories, encoded as an ASN.1 Element.
 */
export function _encode_InformationCategories(
    value: InformationCategories,
    elGetter: $.ASN1Encoder<InformationCategories>
) {
    if (!_cached_encoder_for_InformationCategories) {
        _cached_encoder_for_InformationCategories = $._encodeSequenceOf<InformationCategory>(
            () => _encode_InformationCategory,
            $.BER
        );
    }
    return _cached_encoder_for_InformationCategories(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InformationCategories */

/* eslint-enable */
