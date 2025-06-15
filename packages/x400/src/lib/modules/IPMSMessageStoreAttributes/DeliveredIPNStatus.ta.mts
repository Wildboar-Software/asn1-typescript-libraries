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
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary DeliveredIPNStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliveredIPNStatus  ::=  INTEGER {
 *   no-ipn-requested(0), an-requested(3), nrn-requested(5), rn-requested(10),
 *   an-received(13), ipm-auto-forwarded(15), ipm-discarded(20), rn-received(25)
 * }
 * ```
 */
export type DeliveredIPNStatus = INTEGER;

/**
 * @summary DeliveredIPNStatus_no_ipn_requested
 * @constant
 * @type {number}
 */
export const DeliveredIPNStatus_no_ipn_requested: DeliveredIPNStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveredIPNStatus_no_ipn_requested
 * @constant
 * @type {number}
 */
export const no_ipn_requested: DeliveredIPNStatus = DeliveredIPNStatus_no_ipn_requested; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveredIPNStatus_an_requested
 * @constant
 * @type {number}
 */
export const DeliveredIPNStatus_an_requested: DeliveredIPNStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveredIPNStatus_an_requested
 * @constant
 * @type {number}
 */
export const an_requested: DeliveredIPNStatus = DeliveredIPNStatus_an_requested; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveredIPNStatus_nrn_requested
 * @constant
 * @type {number}
 */
export const DeliveredIPNStatus_nrn_requested: DeliveredIPNStatus = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveredIPNStatus_nrn_requested
 * @constant
 * @type {number}
 */
export const nrn_requested: DeliveredIPNStatus = DeliveredIPNStatus_nrn_requested; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveredIPNStatus_rn_requested
 * @constant
 * @type {number}
 */
export const DeliveredIPNStatus_rn_requested: DeliveredIPNStatus = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveredIPNStatus_rn_requested
 * @constant
 * @type {number}
 */
export const rn_requested: DeliveredIPNStatus = DeliveredIPNStatus_rn_requested; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveredIPNStatus_an_received
 * @constant
 * @type {number}
 */
export const DeliveredIPNStatus_an_received: DeliveredIPNStatus = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveredIPNStatus_an_received
 * @constant
 * @type {number}
 */
export const an_received: DeliveredIPNStatus = DeliveredIPNStatus_an_received; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveredIPNStatus_ipm_auto_forwarded
 * @constant
 * @type {number}
 */
export const DeliveredIPNStatus_ipm_auto_forwarded: DeliveredIPNStatus = 15; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveredIPNStatus_ipm_auto_forwarded
 * @constant
 * @type {number}
 */
export const ipm_auto_forwarded: DeliveredIPNStatus = DeliveredIPNStatus_ipm_auto_forwarded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveredIPNStatus_ipm_discarded
 * @constant
 * @type {number}
 */
export const DeliveredIPNStatus_ipm_discarded: DeliveredIPNStatus = 20; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveredIPNStatus_ipm_discarded
 * @constant
 * @type {number}
 */
export const ipm_discarded: DeliveredIPNStatus = DeliveredIPNStatus_ipm_discarded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveredIPNStatus_rn_received
 * @constant
 * @type {number}
 */
export const DeliveredIPNStatus_rn_received: DeliveredIPNStatus = 25; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveredIPNStatus_rn_received
 * @constant
 * @type {number}
 */
export const rn_received: DeliveredIPNStatus = DeliveredIPNStatus_rn_received; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_DeliveredIPNStatus = $._decodeInteger;


export const _encode_DeliveredIPNStatus = $._encodeInteger;


/* eslint-enable */
