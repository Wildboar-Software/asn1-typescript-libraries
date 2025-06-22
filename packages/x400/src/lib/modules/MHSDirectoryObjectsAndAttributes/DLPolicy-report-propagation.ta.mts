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
import * as $ from '@wildboar/asn1/functional';

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

/**
 * @summary DLPolicy_report_propagation_previous_dl_or_originator
 * @constant
 * @type {number}
 */
export const DLPolicy_report_propagation_previous_dl_or_originator: DLPolicy_report_propagation = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_report_propagation_previous_dl_or_originator
 * @constant
 * @type {number}
 */
export const previous_dl_or_originator: DLPolicy_report_propagation = DLPolicy_report_propagation_previous_dl_or_originator; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_report_propagation_dl_owner
 * @constant
 * @type {number}
 */
export const DLPolicy_report_propagation_dl_owner: DLPolicy_report_propagation = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_report_propagation_dl_owner
 * @constant
 * @type {number}
 */
export const dl_owner: DLPolicy_report_propagation = DLPolicy_report_propagation_dl_owner; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_report_propagation_both_previous_and_owner
 * @constant
 * @type {number}
 */
export const DLPolicy_report_propagation_both_previous_and_owner: DLPolicy_report_propagation = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_report_propagation_both_previous_and_owner
 * @constant
 * @type {number}
 */
export const both_previous_and_owner: DLPolicy_report_propagation = DLPolicy_report_propagation_both_previous_and_owner; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_DLPolicy_report_propagation = $._decodeInteger;


export const _encode_DLPolicy_report_propagation = $._encodeInteger;


/* eslint-enable */
