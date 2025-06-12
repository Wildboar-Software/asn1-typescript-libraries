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

/* START_OF_SYMBOL_DEFINITION AutoDiscardProblem */
/**
 * @summary AutoDiscardProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoDiscardProblem  ::=  INTEGER {not-obsoleted-by-originator(0)}
 * ```
 */
export type AutoDiscardProblem = INTEGER;
/* END_OF_SYMBOL_DEFINITION AutoDiscardProblem */

/* START_OF_SYMBOL_DEFINITION AutoDiscardProblem_not_obsoleted_by_originator */
/**
 * @summary AutoDiscardProblem_not_obsoleted_by_originator
 * @constant
 * @type {number}
 */
export const AutoDiscardProblem_not_obsoleted_by_originator: AutoDiscardProblem = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AutoDiscardProblem_not_obsoleted_by_originator */

/* START_OF_SYMBOL_DEFINITION not_obsoleted_by_originator */
/**
 * @summary AutoDiscardProblem_not_obsoleted_by_originator
 * @constant
 * @type {number}
 */
export const not_obsoleted_by_originator: AutoDiscardProblem = AutoDiscardProblem_not_obsoleted_by_originator; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION not_obsoleted_by_originator */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoDiscardProblem */
let _cached_decoder_for_AutoDiscardProblem: $.ASN1Decoder<AutoDiscardProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoDiscardProblem */

/* START_OF_SYMBOL_DEFINITION _decode_AutoDiscardProblem */
/**
 * @summary Decodes an ASN.1 element into a(n) AutoDiscardProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AutoDiscardProblem} The decoded data structure.
 */
export function _decode_AutoDiscardProblem(el: _Element) {
    if (!_cached_decoder_for_AutoDiscardProblem) {
        _cached_decoder_for_AutoDiscardProblem = $._decodeInteger;
    }
    return _cached_decoder_for_AutoDiscardProblem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AutoDiscardProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoDiscardProblem */
let _cached_encoder_for_AutoDiscardProblem: $.ASN1Encoder<AutoDiscardProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoDiscardProblem */

/* START_OF_SYMBOL_DEFINITION _encode_AutoDiscardProblem */
/**
 * @summary Encodes a(n) AutoDiscardProblem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AutoDiscardProblem, encoded as an ASN.1 Element.
 */
export function _encode_AutoDiscardProblem(
    value: AutoDiscardProblem,
    elGetter: $.ASN1Encoder<AutoDiscardProblem>
) {
    if (!_cached_encoder_for_AutoDiscardProblem) {
        _cached_encoder_for_AutoDiscardProblem = $._encodeInteger;
    }
    return _cached_encoder_for_AutoDiscardProblem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AutoDiscardProblem */

/* eslint-enable */
