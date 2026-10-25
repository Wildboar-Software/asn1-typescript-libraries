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
 * @summary DLPolicy_report_from_dl
 * @description
 *
 * Defined in ITU-T X.402 (1999) (§17 / Annex A).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLPolicy-report-from-dl ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type DLPolicy_report_from_dl = INTEGER;

/**
 * @summary DLPolicy_report_from_dl_whenever_requested
 * @constant
 * @type {number}
 */
export const DLPolicy_report_from_dl_whenever_requested: 0 = 0 satisfies DLPolicy_report_from_dl; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_report_from_dl_whenever_requested
 * @constant
 * @type {number}
 */
export const whenever_requested: 0 = DLPolicy_report_from_dl_whenever_requested; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_report_from_dl_when_no_propagation
 * @constant
 * @type {number}
 */
export const DLPolicy_report_from_dl_when_no_propagation: 1 = 1 satisfies DLPolicy_report_from_dl; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_report_from_dl_when_no_propagation
 * @constant
 * @type {number}
 */
export const when_no_propagation: 1 = DLPolicy_report_from_dl_when_no_propagation; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_DLPolicy_report_from_dl: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_DLPolicy_report_from_dl: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
