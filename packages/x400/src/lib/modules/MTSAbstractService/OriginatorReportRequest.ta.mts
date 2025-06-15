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

/* START_OF_SYMBOL_DEFINITION OriginatorReportRequest */
/**
 * @summary OriginatorReportRequest
 * @description
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
/* END_OF_SYMBOL_DEFINITION OriginatorReportRequest */

/* START_OF_SYMBOL_DEFINITION OriginatorReportRequest_report */
/**
 * @summary OriginatorReportRequest_report
 * @constant
 */
export const OriginatorReportRequest_report: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION OriginatorReportRequest_report */

/* START_OF_SYMBOL_DEFINITION report */
/**
 * @summary report
 * @constant
 */
export const report: number = OriginatorReportRequest_report; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION report */

/* START_OF_SYMBOL_DEFINITION OriginatorReportRequest_non_delivery_report */
/**
 * @summary OriginatorReportRequest_non_delivery_report
 * @constant
 */
export const OriginatorReportRequest_non_delivery_report: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION OriginatorReportRequest_non_delivery_report */

/* START_OF_SYMBOL_DEFINITION non_delivery_report */
/**
 * @summary non_delivery_report
 * @constant
 */
export const non_delivery_report: number = OriginatorReportRequest_non_delivery_report; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION non_delivery_report */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatorReportRequest */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatorReportRequest */

/* START_OF_SYMBOL_DEFINITION _decode_OriginatorReportRequest */
export const _decode_OriginatorReportRequest = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_OriginatorReportRequest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatorReportRequest */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatorReportRequest */

/* START_OF_SYMBOL_DEFINITION _encode_OriginatorReportRequest */
export const _encode_OriginatorReportRequest = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_OriginatorReportRequest */

/* eslint-enable */
