/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary DLPolicy_report_propagation
 * @description
 *
 * Defined in ITU-T X.402 (1999) (§17 / Annex A).
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
export const DLPolicy_report_propagation_previous_dl_or_originator: 0 = 0 satisfies DLPolicy_report_propagation; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_report_propagation_previous_dl_or_originator
 * @constant
 * @type {number}
 */
export const previous_dl_or_originator: 0 = DLPolicy_report_propagation_previous_dl_or_originator; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_report_propagation_dl_owner
 * @constant
 * @type {number}
 */
export const DLPolicy_report_propagation_dl_owner: 1 = 1 satisfies DLPolicy_report_propagation; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_report_propagation_dl_owner
 * @constant
 * @type {number}
 */
export const dl_owner: 1 = DLPolicy_report_propagation_dl_owner; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_report_propagation_both_previous_and_owner
 * @constant
 * @type {number}
 */
export const DLPolicy_report_propagation_both_previous_and_owner: 2 = 2 satisfies DLPolicy_report_propagation; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_report_propagation_both_previous_and_owner
 * @constant
 * @type {number}
 */
export const both_previous_and_owner: 2 = DLPolicy_report_propagation_both_previous_and_owner; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_DLPolicy_report_propagation: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_DLPolicy_report_propagation: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
