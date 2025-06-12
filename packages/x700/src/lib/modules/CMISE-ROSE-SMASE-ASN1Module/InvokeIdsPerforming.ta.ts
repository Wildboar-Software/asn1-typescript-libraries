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

/* START_OF_SYMBOL_DEFINITION InvokeIdsPerforming */
/**
 * @summary InvokeIdsPerforming
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeIdsPerforming  ::=  SET OF INTEGER
 * ```
 */
export type InvokeIdsPerforming = INTEGER[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION InvokeIdsPerforming */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InvokeIdsPerforming */
let _cached_decoder_for_InvokeIdsPerforming: $.ASN1Decoder<InvokeIdsPerforming> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InvokeIdsPerforming */

/* START_OF_SYMBOL_DEFINITION _decode_InvokeIdsPerforming */
/**
 * @summary Decodes an ASN.1 element into a(n) InvokeIdsPerforming
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InvokeIdsPerforming} The decoded data structure.
 */
export function _decode_InvokeIdsPerforming(el: _Element) {
    if (!_cached_decoder_for_InvokeIdsPerforming) {
        _cached_decoder_for_InvokeIdsPerforming = $._decodeSetOf<INTEGER>(
            () => $._decodeInteger
        );
    }
    return _cached_decoder_for_InvokeIdsPerforming(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InvokeIdsPerforming */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InvokeIdsPerforming */
let _cached_encoder_for_InvokeIdsPerforming: $.ASN1Encoder<InvokeIdsPerforming> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InvokeIdsPerforming */

/* START_OF_SYMBOL_DEFINITION _encode_InvokeIdsPerforming */
/**
 * @summary Encodes a(n) InvokeIdsPerforming into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvokeIdsPerforming, encoded as an ASN.1 Element.
 */
export function _encode_InvokeIdsPerforming(
    value: InvokeIdsPerforming,
    elGetter: $.ASN1Encoder<InvokeIdsPerforming>
) {
    if (!_cached_encoder_for_InvokeIdsPerforming) {
        _cached_encoder_for_InvokeIdsPerforming = $._encodeSetOf<INTEGER>(
            () => $._encodeInteger,
            $.BER
        );
    }
    return _cached_encoder_for_InvokeIdsPerforming(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InvokeIdsPerforming */

/* eslint-enable */
