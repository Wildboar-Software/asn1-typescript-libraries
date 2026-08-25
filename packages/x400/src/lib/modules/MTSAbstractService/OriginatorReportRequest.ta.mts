/* eslint-disable */
import {
    BIT_STRING,
    ASN1Element as _Element,
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
 * @summary OriginatorReportRequest
 * @description
 *
 * Kind of report the originator requests (ITU-T X.411 (1999), §8.2.1.1.1.22). At most one
 * bit shall be one: `report` requests a report; `non-delivery-report` requests a
 * non-delivery report; both zero requests no-report.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatorReportRequest  ::=  BIT STRING {report(3), non-delivery-report(4)
 *
 * -- at most one bit shall be 'one':
 * -- report bit 'one' requests a 'report';
 * -- non-delivery-report bit 'one' requests a 'non-delivery-report';
 * -- both bits 'zero' requests 'no-report' --}(SIZE (0..ub-bit-options))
 * ```
 */
export type OriginatorReportRequest = BIT_STRING;

/**
 * @summary OriginatorReportRequest_report
 * @description
 *
 * Set: request a report. Must not be set together with `non-delivery-report`.
 *
 * @constant
 */
export const OriginatorReportRequest_report: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary report
 * @description
 *
 * Set: request a report. Must not be set together with `non-delivery-report`.
 *
 * @constant
 */
export const report: number = OriginatorReportRequest_report; /* SHORT_NAMED_BIT */

/**
 * @summary OriginatorReportRequest_non_delivery_report
 * @description
 *
 * Set: request a non-delivery-report. Must not be set together with `report`. Both bits
 * unset requests no-report.
 *
 * @constant
 */
export const OriginatorReportRequest_non_delivery_report: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary non_delivery_report
 * @description
 *
 * Set: request a non-delivery-report. Must not be set together with `report`. Both bits
 * unset requests no-report.
 *
 * @constant
 */
export const non_delivery_report: number = OriginatorReportRequest_non_delivery_report; /* SHORT_NAMED_BIT */


export const _decode_OriginatorReportRequest = $._decodeBitString;


export const _encode_OriginatorReportRequest = $._encodeBitString;


/* eslint-enable */
