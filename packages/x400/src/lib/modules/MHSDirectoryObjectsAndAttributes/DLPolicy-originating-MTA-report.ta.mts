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
 * @summary DLPolicy_originating_MTA_report
 * @description
 *
 * Defined in ITU-T X.402 (1999) (§17 / Annex A).
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
export const DLPolicy_originating_MTA_report_unchanged: 0 = 0 satisfies DLPolicy_originating_MTA_report; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_originating_MTA_report_unchanged
 * @constant
 * @type {number}
 */
export const unchanged: 0 = DLPolicy_originating_MTA_report_unchanged; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_originating_MTA_report_report
 * @constant
 * @type {number}
 */
export const DLPolicy_originating_MTA_report_report: 2 = 2 satisfies DLPolicy_originating_MTA_report; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_originating_MTA_report_report
 * @constant
 * @type {number}
 */
export const report: 2 = DLPolicy_originating_MTA_report_report; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_originating_MTA_report_non_delivery_report
 * @constant
 * @type {number}
 */
export const DLPolicy_originating_MTA_report_non_delivery_report: 3 = 3 satisfies DLPolicy_originating_MTA_report; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_originating_MTA_report_non_delivery_report
 * @constant
 * @type {number}
 */
export const non_delivery_report: 3 = DLPolicy_originating_MTA_report_non_delivery_report; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_originating_MTA_report_audited_report
 * @constant
 * @type {number}
 */
export const DLPolicy_originating_MTA_report_audited_report: 4 = 4 satisfies DLPolicy_originating_MTA_report; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_originating_MTA_report_audited_report
 * @constant
 * @type {number}
 */
export const audited_report: 4 = DLPolicy_originating_MTA_report_audited_report; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_DLPolicy_originating_MTA_report: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_DLPolicy_originating_MTA_report: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
