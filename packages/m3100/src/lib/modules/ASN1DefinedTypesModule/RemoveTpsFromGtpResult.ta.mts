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
    RemoveTpsFromGtpResult_Item,
    _decode_RemoveTpsFromGtpResult_Item,
    _encode_RemoveTpsFromGtpResult_Item,
} from '../ASN1DefinedTypesModule/RemoveTpsFromGtpResult-Item.ta.mjs';
export {
    RemoveTpsFromGtpResult_Item,
    _decode_RemoveTpsFromGtpResult_Item,
    _encode_RemoveTpsFromGtpResult_Item,
} from '../ASN1DefinedTypesModule/RemoveTpsFromGtpResult-Item.ta.mjs';

/* START_OF_SYMBOL_DEFINITION RemoveTpsFromGtpResult */
/**
 * @summary RemoveTpsFromGtpResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RemoveTpsFromGtpResult  ::=
 *   SEQUENCE OF
 *     CHOICE {failed   [0]  Failed,
 *             removed  [1]  RemoveTpsResultInformation}
 * ```
 */
export type RemoveTpsFromGtpResult = RemoveTpsFromGtpResult_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION RemoveTpsFromGtpResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RemoveTpsFromGtpResult */
let _cached_decoder_for_RemoveTpsFromGtpResult: $.ASN1Decoder<RemoveTpsFromGtpResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RemoveTpsFromGtpResult */

/* START_OF_SYMBOL_DEFINITION _decode_RemoveTpsFromGtpResult */
/**
 * @summary Decodes an ASN.1 element into a(n) RemoveTpsFromGtpResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RemoveTpsFromGtpResult} The decoded data structure.
 */
export function _decode_RemoveTpsFromGtpResult(el: _Element) {
    if (!_cached_decoder_for_RemoveTpsFromGtpResult) {
        _cached_decoder_for_RemoveTpsFromGtpResult = $._decodeSequenceOf<RemoveTpsFromGtpResult_Item>(
            () => _decode_RemoveTpsFromGtpResult_Item
        );
    }
    return _cached_decoder_for_RemoveTpsFromGtpResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RemoveTpsFromGtpResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RemoveTpsFromGtpResult */
let _cached_encoder_for_RemoveTpsFromGtpResult: $.ASN1Encoder<RemoveTpsFromGtpResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RemoveTpsFromGtpResult */

/* START_OF_SYMBOL_DEFINITION _encode_RemoveTpsFromGtpResult */
/**
 * @summary Encodes a(n) RemoveTpsFromGtpResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoveTpsFromGtpResult, encoded as an ASN.1 Element.
 */
export function _encode_RemoveTpsFromGtpResult(
    value: RemoveTpsFromGtpResult,
    elGetter: $.ASN1Encoder<RemoveTpsFromGtpResult>
) {
    if (!_cached_encoder_for_RemoveTpsFromGtpResult) {
        _cached_encoder_for_RemoveTpsFromGtpResult = $._encodeSequenceOf<RemoveTpsFromGtpResult_Item>(
            () => _encode_RemoveTpsFromGtpResult_Item,
            $.BER
        );
    }
    return _cached_encoder_for_RemoveTpsFromGtpResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RemoveTpsFromGtpResult */

/* eslint-enable */
