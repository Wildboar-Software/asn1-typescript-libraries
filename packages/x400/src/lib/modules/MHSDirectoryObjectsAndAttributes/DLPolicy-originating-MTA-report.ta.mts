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
 * @summary DLPolicy_originating_MTA_report
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLPolicy-originating-MTA-report ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type DLPolicy_originating_MTA_report = INTEGER;

/**
 * @summary DLPolicy_originating_MTA_report_unchanged
 * @constant
 * @type {number}
 */
export const DLPolicy_originating_MTA_report_unchanged: DLPolicy_originating_MTA_report = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_originating_MTA_report_unchanged
 * @constant
 * @type {number}
 */
export const unchanged: DLPolicy_originating_MTA_report = DLPolicy_originating_MTA_report_unchanged; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_originating_MTA_report_report
 * @constant
 * @type {number}
 */
export const DLPolicy_originating_MTA_report_report: DLPolicy_originating_MTA_report = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_originating_MTA_report_report
 * @constant
 * @type {number}
 */
export const report: DLPolicy_originating_MTA_report = DLPolicy_originating_MTA_report_report; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_originating_MTA_report_non_delivery_report
 * @constant
 * @type {number}
 */
export const DLPolicy_originating_MTA_report_non_delivery_report: DLPolicy_originating_MTA_report = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_originating_MTA_report_non_delivery_report
 * @constant
 * @type {number}
 */
export const non_delivery_report: DLPolicy_originating_MTA_report = DLPolicy_originating_MTA_report_non_delivery_report; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_originating_MTA_report_audited_report
 * @constant
 * @type {number}
 */
export const DLPolicy_originating_MTA_report_audited_report: DLPolicy_originating_MTA_report = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_originating_MTA_report_audited_report
 * @constant
 * @type {number}
 */
export const audited_report: DLPolicy_originating_MTA_report = DLPolicy_originating_MTA_report_audited_report; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_DLPolicy_originating_MTA_report = $._decodeInteger;


export const _encode_DLPolicy_originating_MTA_report = $._encodeInteger;


/* eslint-enable */
