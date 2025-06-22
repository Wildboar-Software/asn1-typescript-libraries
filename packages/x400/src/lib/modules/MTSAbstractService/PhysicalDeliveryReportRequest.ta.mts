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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary PhysicalDeliveryReportRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalDeliveryReportRequest  ::=  INTEGER {
 *   return-of-undeliverable-mail-by-PDS(0), return-of-notification-by-PDS(1),
 *   return-of-notification-by-MHS(2), return-of-notification-by-MHS-and-PDS(3)
 * }(0..ub-integer-options)
 * ```
 */
export type PhysicalDeliveryReportRequest = INTEGER;

/**
 * @summary PhysicalDeliveryReportRequest_return_of_undeliverable_mail_by_PDS
 * @constant
 * @type {number}
 */
export const PhysicalDeliveryReportRequest_return_of_undeliverable_mail_by_PDS: PhysicalDeliveryReportRequest = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PhysicalDeliveryReportRequest_return_of_undeliverable_mail_by_PDS
 * @constant
 * @type {number}
 */
export const return_of_undeliverable_mail_by_PDS: PhysicalDeliveryReportRequest = PhysicalDeliveryReportRequest_return_of_undeliverable_mail_by_PDS; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PhysicalDeliveryReportRequest_return_of_notification_by_PDS
 * @constant
 * @type {number}
 */
export const PhysicalDeliveryReportRequest_return_of_notification_by_PDS: PhysicalDeliveryReportRequest = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PhysicalDeliveryReportRequest_return_of_notification_by_PDS
 * @constant
 * @type {number}
 */
export const return_of_notification_by_PDS: PhysicalDeliveryReportRequest = PhysicalDeliveryReportRequest_return_of_notification_by_PDS; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PhysicalDeliveryReportRequest_return_of_notification_by_MHS
 * @constant
 * @type {number}
 */
export const PhysicalDeliveryReportRequest_return_of_notification_by_MHS: PhysicalDeliveryReportRequest = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PhysicalDeliveryReportRequest_return_of_notification_by_MHS
 * @constant
 * @type {number}
 */
export const return_of_notification_by_MHS: PhysicalDeliveryReportRequest = PhysicalDeliveryReportRequest_return_of_notification_by_MHS; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PhysicalDeliveryReportRequest_return_of_notification_by_MHS_and_PDS
 * @constant
 * @type {number}
 */
export const PhysicalDeliveryReportRequest_return_of_notification_by_MHS_and_PDS: PhysicalDeliveryReportRequest = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PhysicalDeliveryReportRequest_return_of_notification_by_MHS_and_PDS
 * @constant
 * @type {number}
 */
export const return_of_notification_by_MHS_and_PDS: PhysicalDeliveryReportRequest = PhysicalDeliveryReportRequest_return_of_notification_by_MHS_and_PDS; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_PhysicalDeliveryReportRequest = $._decodeInteger;


export const _encode_PhysicalDeliveryReportRequest = $._encodeInteger;


/* eslint-enable */
