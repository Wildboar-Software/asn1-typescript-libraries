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

/* START_OF_SYMBOL_DEFINITION _enum_for_ResultReportIndicator */
/**
 * @summary ResultReportIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResultReportIndicator  ::=  ENUMERATED {
 *   resultReportForPassedSequences(0), noResultReportForPassedSequences(1)
 * }
 * ```@enum {number}
 */
export enum _enum_for_ResultReportIndicator {
    resultReportForPassedSequences = 0,
    noResultReportForPassedSequences = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ResultReportIndicator */

/* START_OF_SYMBOL_DEFINITION ResultReportIndicator */
/**
 * @summary ResultReportIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResultReportIndicator  ::=  ENUMERATED {
 *   resultReportForPassedSequences(0), noResultReportForPassedSequences(1)
 * }
 * ```@enum {number}
 */
export type ResultReportIndicator = _enum_for_ResultReportIndicator;
/* END_OF_SYMBOL_DEFINITION ResultReportIndicator */

/* START_OF_SYMBOL_DEFINITION ResultReportIndicator */
/**
 * @summary ResultReportIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResultReportIndicator  ::=  ENUMERATED {
 *   resultReportForPassedSequences(0), noResultReportForPassedSequences(1)
 * }
 * ```@enum {number}
 */
export const ResultReportIndicator = _enum_for_ResultReportIndicator;
/* END_OF_SYMBOL_DEFINITION ResultReportIndicator */

/* START_OF_SYMBOL_DEFINITION ResultReportIndicator_resultReportForPassedSequences */
/**
 * @summary ResultReportIndicator_resultReportForPassedSequences
 * @constant
 * @type {number}
 */
export const ResultReportIndicator_resultReportForPassedSequences: ResultReportIndicator =
    ResultReportIndicator.resultReportForPassedSequences; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ResultReportIndicator_resultReportForPassedSequences */

/* START_OF_SYMBOL_DEFINITION resultReportForPassedSequences */
/**
 * @summary resultReportForPassedSequences
 * @constant
 * @type {number}
 */
export const resultReportForPassedSequences: ResultReportIndicator =
    ResultReportIndicator.resultReportForPassedSequences; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION resultReportForPassedSequences */

/* START_OF_SYMBOL_DEFINITION ResultReportIndicator_noResultReportForPassedSequences */
/**
 * @summary ResultReportIndicator_noResultReportForPassedSequences
 * @constant
 * @type {number}
 */
export const ResultReportIndicator_noResultReportForPassedSequences: ResultReportIndicator =
    ResultReportIndicator.noResultReportForPassedSequences; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ResultReportIndicator_noResultReportForPassedSequences */

/* START_OF_SYMBOL_DEFINITION noResultReportForPassedSequences */
/**
 * @summary noResultReportForPassedSequences
 * @constant
 * @type {number}
 */
export const noResultReportForPassedSequences: ResultReportIndicator =
    ResultReportIndicator.noResultReportForPassedSequences; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION noResultReportForPassedSequences */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ResultReportIndicator */
let _cached_decoder_for_ResultReportIndicator: $.ASN1Decoder<ResultReportIndicator> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ResultReportIndicator */

/* START_OF_SYMBOL_DEFINITION _decode_ResultReportIndicator */
/**
 * @summary Decodes an ASN.1 element into a(n) ResultReportIndicator
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResultReportIndicator} The decoded data structure.
 */
export function _decode_ResultReportIndicator(el: _Element) {
    if (!_cached_decoder_for_ResultReportIndicator) {
        _cached_decoder_for_ResultReportIndicator = $._decodeEnumerated;
    }
    return _cached_decoder_for_ResultReportIndicator(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ResultReportIndicator */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ResultReportIndicator */
let _cached_encoder_for_ResultReportIndicator: $.ASN1Encoder<ResultReportIndicator> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ResultReportIndicator */

/* START_OF_SYMBOL_DEFINITION _encode_ResultReportIndicator */
/**
 * @summary Encodes a(n) ResultReportIndicator into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResultReportIndicator, encoded as an ASN.1 Element.
 */
export function _encode_ResultReportIndicator(
    value: ResultReportIndicator,
    elGetter: $.ASN1Encoder<ResultReportIndicator>
) {
    if (!_cached_encoder_for_ResultReportIndicator) {
        _cached_encoder_for_ResultReportIndicator = $._encodeEnumerated;
    }
    return _cached_encoder_for_ResultReportIndicator(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ResultReportIndicator */

/* eslint-enable */
