/* eslint-disable */
import {
    INTEGER,
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
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DLPolicy_report_propagation */

/* START_OF_SYMBOL_DEFINITION _decode_DLPolicy_report_propagation */
export const _decode_DLPolicy_report_propagation = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_DLPolicy_report_propagation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DLPolicy_report_propagation */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DLPolicy_report_propagation */

/* START_OF_SYMBOL_DEFINITION _encode_DLPolicy_report_propagation */
export const _encode_DLPolicy_report_propagation = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_DLPolicy_report_propagation */

/* eslint-enable */
