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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary PerRecipientIndicators
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerRecipientIndicators  ::=  BIT STRING {
 *   responsibility(0),
 *   -- responsible 'one', not-responsible 'zero'
 *   originating-MTA-report(1),
 *   originating-MTA-non-delivery-report(2),
 *   -- either originating-MTA-report, or originating-MTA-non-delivery-report,
 *   -- or both, shall be 'one':
 *   -- originating-MTA-report bit 'one' requests a 'report';
 *   -- originating-MTA-non-delivery-report bit 'one' requests a 'non-delivery-report';
 *   -- both bits 'one' requests an 'audited-report';
 *   -- bits 0 - 2 'don't care' for Report Transfer Content
 *   originator-report(3),
 *   originator-non-delivery-report(4),
 *   -- at most one bit shall be 'one':
 *   -- originator-report bit 'one' requests a 'report';
 *   -- originator-non-delivery-report bit 'one' requests a 'non-delivery-report';
 *   -- both bits 'zero' requests 'no-report'
 *   reserved-5(5), reserved-6(6), reserved-7(7)
 *
 * -- reserved- bits 5 - 7 shall be 'zero' --}(SIZE (8..ub-bit-options))
 * ```
 */
export type PerRecipientIndicators = BIT_STRING;

/**
 * @summary PerRecipientIndicators_responsibility
 * @constant
 */
export const PerRecipientIndicators_responsibility: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary responsibility
 * @constant
 */
export const responsibility: number = PerRecipientIndicators_responsibility; /* SHORT_NAMED_BIT */

/**
 * @summary PerRecipientIndicators_originating_MTA_report
 * @constant
 */
export const PerRecipientIndicators_originating_MTA_report: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary originating_MTA_report
 * @constant
 */
export const originating_MTA_report: number = PerRecipientIndicators_originating_MTA_report; /* SHORT_NAMED_BIT */

/**
 * @summary PerRecipientIndicators_originating_MTA_non_delivery_report
 * @constant
 */
export const PerRecipientIndicators_originating_MTA_non_delivery_report: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary originating_MTA_non_delivery_report
 * @constant
 */
export const originating_MTA_non_delivery_report: number = PerRecipientIndicators_originating_MTA_non_delivery_report; /* SHORT_NAMED_BIT */

/**
 * @summary PerRecipientIndicators_originator_report
 * @constant
 */
export const PerRecipientIndicators_originator_report: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary originator_report
 * @constant
 */
export const originator_report: number = PerRecipientIndicators_originator_report; /* SHORT_NAMED_BIT */

/**
 * @summary PerRecipientIndicators_originator_non_delivery_report
 * @constant
 */
export const PerRecipientIndicators_originator_non_delivery_report: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary originator_non_delivery_report
 * @constant
 */
export const originator_non_delivery_report: number = PerRecipientIndicators_originator_non_delivery_report; /* SHORT_NAMED_BIT */

/**
 * @summary PerRecipientIndicators_reserved_5
 * @constant
 */
export const PerRecipientIndicators_reserved_5: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary reserved_5
 * @constant
 */
export const reserved_5: number = PerRecipientIndicators_reserved_5; /* SHORT_NAMED_BIT */

/**
 * @summary PerRecipientIndicators_reserved_6
 * @constant
 */
export const PerRecipientIndicators_reserved_6: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary reserved_6
 * @constant
 */
export const reserved_6: number = PerRecipientIndicators_reserved_6; /* SHORT_NAMED_BIT */

/**
 * @summary PerRecipientIndicators_reserved_7
 * @constant
 */
export const PerRecipientIndicators_reserved_7: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary reserved_7
 * @constant
 */
export const reserved_7: number = PerRecipientIndicators_reserved_7; /* SHORT_NAMED_BIT */


export const _decode_PerRecipientIndicators = $._decodeBitString;


export const _encode_PerRecipientIndicators = $._encodeBitString;


/* eslint-enable */
