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
    OriginatorAndDLExpansion,
    _decode_OriginatorAndDLExpansion,
    _encode_OriginatorAndDLExpansion,
} from '../MTSAbstractService/OriginatorAndDLExpansion.ta.mjs';
export {
    OriginatorAndDLExpansion,
    _decode_OriginatorAndDLExpansion,
    _encode_OriginatorAndDLExpansion,
} from '../MTSAbstractService/OriginatorAndDLExpansion.ta.mjs';

/* START_OF_SYMBOL_DEFINITION OriginatorAndDLExpansionHistory */
/**
 * @summary OriginatorAndDLExpansionHistory
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatorAndDLExpansionHistory  ::=
 *   SEQUENCE SIZE (2..ub-orig-and-dl-expansions) OF OriginatorAndDLExpansion
 * ```
 */
export type OriginatorAndDLExpansionHistory = OriginatorAndDLExpansion[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION OriginatorAndDLExpansionHistory */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatorAndDLExpansionHistory */
let _cached_decoder_for_OriginatorAndDLExpansionHistory: $.ASN1Decoder<OriginatorAndDLExpansionHistory> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatorAndDLExpansionHistory */

/* START_OF_SYMBOL_DEFINITION _decode_OriginatorAndDLExpansionHistory */
/**
 * @summary Decodes an ASN.1 element into a(n) OriginatorAndDLExpansionHistory
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginatorAndDLExpansionHistory} The decoded data structure.
 */
export function _decode_OriginatorAndDLExpansionHistory(el: _Element) {
    if (!_cached_decoder_for_OriginatorAndDLExpansionHistory) {
        _cached_decoder_for_OriginatorAndDLExpansionHistory = $._decodeSequenceOf<OriginatorAndDLExpansion>(
            () => _decode_OriginatorAndDLExpansion
        );
    }
    return _cached_decoder_for_OriginatorAndDLExpansionHistory(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OriginatorAndDLExpansionHistory */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatorAndDLExpansionHistory */
let _cached_encoder_for_OriginatorAndDLExpansionHistory: $.ASN1Encoder<OriginatorAndDLExpansionHistory> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatorAndDLExpansionHistory */

/* START_OF_SYMBOL_DEFINITION _encode_OriginatorAndDLExpansionHistory */
/**
 * @summary Encodes a(n) OriginatorAndDLExpansionHistory into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatorAndDLExpansionHistory, encoded as an ASN.1 Element.
 */
export function _encode_OriginatorAndDLExpansionHistory(
    value: OriginatorAndDLExpansionHistory,
    elGetter: $.ASN1Encoder<OriginatorAndDLExpansionHistory>
) {
    if (!_cached_encoder_for_OriginatorAndDLExpansionHistory) {
        _cached_encoder_for_OriginatorAndDLExpansionHistory = $._encodeSequenceOf<OriginatorAndDLExpansion>(
            () => _encode_OriginatorAndDLExpansion,
            $.BER
        );
    }
    return _cached_encoder_for_OriginatorAndDLExpansionHistory(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OriginatorAndDLExpansionHistory */

/* eslint-enable */
