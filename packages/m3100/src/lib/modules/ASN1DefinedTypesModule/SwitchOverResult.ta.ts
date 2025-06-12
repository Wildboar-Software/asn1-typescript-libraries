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
    IndividualResult,
    _decode_IndividualResult,
    _encode_IndividualResult,
} from '../ASN1DefinedTypesModule/IndividualResult.ta.js';
export {
    IndividualResult,
    _decode_IndividualResult,
    _encode_IndividualResult,
} from '../ASN1DefinedTypesModule/IndividualResult.ta.js';

/* START_OF_SYMBOL_DEFINITION SwitchOverResult */
/**
 * @summary SwitchOverResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SwitchOverResult  ::=  SEQUENCE OF IndividualResult
 * ```
 */
export type SwitchOverResult = IndividualResult[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION SwitchOverResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SwitchOverResult */
let _cached_decoder_for_SwitchOverResult: $.ASN1Decoder<SwitchOverResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SwitchOverResult */

/* START_OF_SYMBOL_DEFINITION _decode_SwitchOverResult */
/**
 * @summary Decodes an ASN.1 element into a(n) SwitchOverResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SwitchOverResult} The decoded data structure.
 */
export function _decode_SwitchOverResult(el: _Element) {
    if (!_cached_decoder_for_SwitchOverResult) {
        _cached_decoder_for_SwitchOverResult = $._decodeSequenceOf<IndividualResult>(
            () => _decode_IndividualResult
        );
    }
    return _cached_decoder_for_SwitchOverResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SwitchOverResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SwitchOverResult */
let _cached_encoder_for_SwitchOverResult: $.ASN1Encoder<SwitchOverResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SwitchOverResult */

/* START_OF_SYMBOL_DEFINITION _encode_SwitchOverResult */
/**
 * @summary Encodes a(n) SwitchOverResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SwitchOverResult, encoded as an ASN.1 Element.
 */
export function _encode_SwitchOverResult(
    value: SwitchOverResult,
    elGetter: $.ASN1Encoder<SwitchOverResult>
) {
    if (!_cached_encoder_for_SwitchOverResult) {
        _cached_encoder_for_SwitchOverResult = $._encodeSequenceOf<IndividualResult>(
            () => _encode_IndividualResult,
            $.BER
        );
    }
    return _cached_encoder_for_SwitchOverResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SwitchOverResult */

/* eslint-enable */
