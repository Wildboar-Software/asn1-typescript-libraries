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
    ExpressionMatch,
    _decode_ExpressionMatch,
    _encode_ExpressionMatch,
} from '../MHSRoutingORAddressSubtree/ExpressionMatch.ta';
export {
    ExpressionMatch,
    _decode_ExpressionMatch,
    _encode_ExpressionMatch,
} from '../MHSRoutingORAddressSubtree/ExpressionMatch.ta';

/* START_OF_SYMBOL_DEFINITION ExpressionMatches */
/**
 * @summary ExpressionMatches
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExpressionMatches  ::=  SEQUENCE OF ExpressionMatch
 * ```
 */
export type ExpressionMatches = ExpressionMatch[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION ExpressionMatches */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExpressionMatches */
let _cached_decoder_for_ExpressionMatches: $.ASN1Decoder<ExpressionMatches> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExpressionMatches */

/* START_OF_SYMBOL_DEFINITION _decode_ExpressionMatches */
/**
 * @summary Decodes an ASN.1 element into a(n) ExpressionMatches
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExpressionMatches} The decoded data structure.
 */
export function _decode_ExpressionMatches(el: _Element) {
    if (!_cached_decoder_for_ExpressionMatches) {
        _cached_decoder_for_ExpressionMatches = $._decodeSequenceOf<ExpressionMatch>(
            () => _decode_ExpressionMatch
        );
    }
    return _cached_decoder_for_ExpressionMatches(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExpressionMatches */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExpressionMatches */
let _cached_encoder_for_ExpressionMatches: $.ASN1Encoder<ExpressionMatches> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExpressionMatches */

/* START_OF_SYMBOL_DEFINITION _encode_ExpressionMatches */
/**
 * @summary Encodes a(n) ExpressionMatches into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExpressionMatches, encoded as an ASN.1 Element.
 */
export function _encode_ExpressionMatches(
    value: ExpressionMatches,
    elGetter: $.ASN1Encoder<ExpressionMatches>
) {
    if (!_cached_encoder_for_ExpressionMatches) {
        _cached_encoder_for_ExpressionMatches = $._encodeSequenceOf<ExpressionMatch>(
            () => _encode_ExpressionMatch,
            $.BER
        );
    }
    return _cached_encoder_for_ExpressionMatches(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExpressionMatches */

/* eslint-enable */
