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
    DistributionCode,
    _decode_DistributionCode,
    _encode_DistributionCode,
} from '../IPMSHeadingExtensions/DistributionCode.ta';
export {
    DistributionCode,
    _decode_DistributionCode,
    _encode_DistributionCode,
} from '../IPMSHeadingExtensions/DistributionCode.ta';

/* START_OF_SYMBOL_DEFINITION DistributionCodes */
/**
 * @summary DistributionCodes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DistributionCodes  ::=
 *   SEQUENCE (SIZE (1..ub-distribution-codes)) OF DistributionCode
 * ```
 */
export type DistributionCodes = DistributionCode[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION DistributionCodes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DistributionCodes */
let _cached_decoder_for_DistributionCodes: $.ASN1Decoder<DistributionCodes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DistributionCodes */

/* START_OF_SYMBOL_DEFINITION _decode_DistributionCodes */
/**
 * @summary Decodes an ASN.1 element into a(n) DistributionCodes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DistributionCodes} The decoded data structure.
 */
export function _decode_DistributionCodes(el: _Element) {
    if (!_cached_decoder_for_DistributionCodes) {
        _cached_decoder_for_DistributionCodes = $._decodeSequenceOf<DistributionCode>(
            () => _decode_DistributionCode
        );
    }
    return _cached_decoder_for_DistributionCodes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DistributionCodes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DistributionCodes */
let _cached_encoder_for_DistributionCodes: $.ASN1Encoder<DistributionCodes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DistributionCodes */

/* START_OF_SYMBOL_DEFINITION _encode_DistributionCodes */
/**
 * @summary Encodes a(n) DistributionCodes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DistributionCodes, encoded as an ASN.1 Element.
 */
export function _encode_DistributionCodes(
    value: DistributionCodes,
    elGetter: $.ASN1Encoder<DistributionCodes>
) {
    if (!_cached_encoder_for_DistributionCodes) {
        _cached_encoder_for_DistributionCodes = $._encodeSequenceOf<DistributionCode>(
            () => _encode_DistributionCode,
            $.BER
        );
    }
    return _cached_encoder_for_DistributionCodes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DistributionCodes */

/* eslint-enable */
