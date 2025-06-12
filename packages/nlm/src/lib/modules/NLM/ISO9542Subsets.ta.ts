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

/* START_OF_SYMBOL_DEFINITION ISO9542Subsets */
/**
 * @summary ISO9542Subsets
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ISO9542Subsets  ::=  BIT STRING {configuration(0), redirection(1)}
 * ```
 */
export type ISO9542Subsets = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION ISO9542Subsets */

/* START_OF_SYMBOL_DEFINITION ISO9542Subsets_configuration */
/**
 * @summary ISO9542Subsets_configuration
 * @constant
 */
export const ISO9542Subsets_configuration: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ISO9542Subsets_configuration */

/* START_OF_SYMBOL_DEFINITION configuration */
/**
 * @summary configuration
 * @constant
 */
export const configuration: number = ISO9542Subsets_configuration; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION configuration */

/* START_OF_SYMBOL_DEFINITION ISO9542Subsets_redirection */
/**
 * @summary ISO9542Subsets_redirection
 * @constant
 */
export const ISO9542Subsets_redirection: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ISO9542Subsets_redirection */

/* START_OF_SYMBOL_DEFINITION redirection */
/**
 * @summary redirection
 * @constant
 */
export const redirection: number = ISO9542Subsets_redirection; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION redirection */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ISO9542Subsets */
let _cached_decoder_for_ISO9542Subsets: $.ASN1Decoder<ISO9542Subsets> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ISO9542Subsets */

/* START_OF_SYMBOL_DEFINITION _decode_ISO9542Subsets */
/**
 * @summary Decodes an ASN.1 element into a(n) ISO9542Subsets
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ISO9542Subsets} The decoded data structure.
 */
export function _decode_ISO9542Subsets(el: _Element) {
    if (!_cached_decoder_for_ISO9542Subsets) {
        _cached_decoder_for_ISO9542Subsets = $._decodeBitString;
    }
    return _cached_decoder_for_ISO9542Subsets(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ISO9542Subsets */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ISO9542Subsets */
let _cached_encoder_for_ISO9542Subsets: $.ASN1Encoder<ISO9542Subsets> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ISO9542Subsets */

/* START_OF_SYMBOL_DEFINITION _encode_ISO9542Subsets */
/**
 * @summary Encodes a(n) ISO9542Subsets into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ISO9542Subsets, encoded as an ASN.1 Element.
 */
export function _encode_ISO9542Subsets(
    value: ISO9542Subsets,
    elGetter: $.ASN1Encoder<ISO9542Subsets>
) {
    if (!_cached_encoder_for_ISO9542Subsets) {
        _cached_encoder_for_ISO9542Subsets = $._encodeBitString;
    }
    return _cached_encoder_for_ISO9542Subsets(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ISO9542Subsets */

/* eslint-enable */
