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
 * @summary NotificationRequests
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NotificationRequests  ::=  BIT STRING {
 *   rn(0), nrn(1), ipm-return(2), an-supported(3), suppress-an(4)}
 * ```
 */
export type NotificationRequests = BIT_STRING;

/**
 * @summary NotificationRequests_rn
 * @constant
 */
export const NotificationRequests_rn: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary rn
 * @constant
 */
export const rn: number = NotificationRequests_rn; /* SHORT_NAMED_BIT */

/**
 * @summary NotificationRequests_nrn
 * @constant
 */
export const NotificationRequests_nrn: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary nrn
 * @constant
 */
export const nrn: number = NotificationRequests_nrn; /* SHORT_NAMED_BIT */

/**
 * @summary NotificationRequests_ipm_return
 * @constant
 */
export const NotificationRequests_ipm_return: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary ipm_return
 * @constant
 */
export const ipm_return: number = NotificationRequests_ipm_return; /* SHORT_NAMED_BIT */

/**
 * @summary NotificationRequests_an_supported
 * @constant
 */
export const NotificationRequests_an_supported: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary an_supported
 * @constant
 */
export const an_supported: number = NotificationRequests_an_supported; /* SHORT_NAMED_BIT */

/**
 * @summary NotificationRequests_suppress_an
 * @constant
 */
export const NotificationRequests_suppress_an: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary suppress_an
 * @constant
 */
export const suppress_an: number = NotificationRequests_suppress_an; /* SHORT_NAMED_BIT */


export const _decode_NotificationRequests = $._decodeBitString;


export const _encode_NotificationRequests = $._encodeBitString;


/* eslint-enable */
