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

/* START_OF_SYMBOL_DEFINITION DLPolicy_report_propagation */
/**
 * @summary DLPolicy_report_propagation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLPolicy-report-propagation ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type DLPolicy_report_propagation = INTEGER;
/* END_OF_SYMBOL_DEFINITION DLPolicy_report_propagation */

/* START_OF_SYMBOL_DEFINITION DLPolicy_report_propagation_previous_dl_or_originator */
/**
 * @summary DLPolicy_report_propagation_previous_dl_or_originator
 * @constant
 * @type {number}
 */
export const DLPolicy_report_propagation_previous_dl_or_originator: DLPolicy_report_propagation = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DLPolicy_report_propagation_previous_dl_or_originator */

/* START_OF_SYMBOL_DEFINITION previous_dl_or_originator */
/**
 * @summary DLPolicy_report_propagation_previous_dl_or_originator
 * @constant
 * @type {number}
 */
export const previous_dl_or_originator: DLPolicy_report_propagation = DLPolicy_report_propagation_previous_dl_or_originator; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION previous_dl_or_originator */

/* START_OF_SYMBOL_DEFINITION DLPolicy_report_propagation_dl_owner */
/**
 * @summary DLPolicy_report_propagation_dl_owner
 * @constant
 * @type {number}
 */
export const DLPolicy_report_propagation_dl_owner: DLPolicy_report_propagation = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DLPolicy_report_propagation_dl_owner */

/* START_OF_SYMBOL_DEFINITION dl_owner */
/**
 * @summary DLPolicy_report_propagation_dl_owner
 * @constant
 * @type {number}
 */
export const dl_owner: DLPolicy_report_propagation = DLPolicy_report_propagation_dl_owner; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION dl_owner */

/* START_OF_SYMBOL_DEFINITION DLPolicy_report_propagation_both_previous_and_owner */
/**
 * @summary DLPolicy_report_propagation_both_previous_and_owner
 * @constant
 * @type {number}
 */
export const DLPolicy_report_propagation_both_previous_and_owner: DLPolicy_report_propagation = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DLPolicy_report_propagation_both_previous_and_owner */

/* START_OF_SYMBOL_DEFINITION both_previous_and_owner */
/**
 * @summary DLPolicy_report_propagation_both_previous_and_owner
 * @constant
 * @type {number}
 */
export const both_previous_and_owner: DLPolicy_report_propagation = DLPolicy_report_propagation_both_previous_and_owner; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION both_previous_and_owner */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DLPolicy_report_propagation */
let _cached_decoder_for_DLPolicy_report_propagation: $.ASN1Decoder<DLPolicy_report_propagation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DLPolicy_report_propagation */

/* START_OF_SYMBOL_DEFINITION _decode_DLPolicy_report_propagation */
/**
 * @summary Decodes an ASN.1 element into a(n) DLPolicy_report_propagation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DLPolicy_report_propagation} The decoded data structure.
 */
export function _decode_DLPolicy_report_propagation(el: _Element) {
    if (!_cached_decoder_for_DLPolicy_report_propagation) {
        _cached_decoder_for_DLPolicy_report_propagation = $._decodeInteger;
    }
    return _cached_decoder_for_DLPolicy_report_propagation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DLPolicy_report_propagation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DLPolicy_report_propagation */
let _cached_encoder_for_DLPolicy_report_propagation: $.ASN1Encoder<DLPolicy_report_propagation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DLPolicy_report_propagation */

/* START_OF_SYMBOL_DEFINITION _encode_DLPolicy_report_propagation */
/**
 * @summary Encodes a(n) DLPolicy_report_propagation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DLPolicy_report_propagation, encoded as an ASN.1 Element.
 */
export function _encode_DLPolicy_report_propagation(
    value: DLPolicy_report_propagation,
    elGetter: $.ASN1Encoder<DLPolicy_report_propagation>
) {
    if (!_cached_encoder_for_DLPolicy_report_propagation) {
        _cached_encoder_for_DLPolicy_report_propagation = $._encodeInteger;
    }
    return _cached_encoder_for_DLPolicy_report_propagation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DLPolicy_report_propagation */

/* eslint-enable */
