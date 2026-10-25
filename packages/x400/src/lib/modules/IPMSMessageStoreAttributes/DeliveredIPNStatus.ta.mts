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
 * @summary DeliveredIPNStatus
 * @description
 *
 * Defined in ITU-T X.420 (1999) (§20).
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
export const DeliveredIPNStatus_no_ipn_requested = 0 satisfies DeliveredIPNStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveredIPNStatus_no_ipn_requested
 * @constant
 * @type {number}
 */
export const no_ipn_requested = DeliveredIPNStatus_no_ipn_requested; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveredIPNStatus_an_requested
 * @constant
 * @type {number}
 */
export const DeliveredIPNStatus_an_requested = 3 satisfies DeliveredIPNStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveredIPNStatus_an_requested
 * @constant
 * @type {number}
 */
export const an_requested = DeliveredIPNStatus_an_requested; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveredIPNStatus_nrn_requested
 * @constant
 * @type {number}
 */
export const DeliveredIPNStatus_nrn_requested = 5 satisfies DeliveredIPNStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveredIPNStatus_nrn_requested
 * @constant
 * @type {number}
 */
export const nrn_requested = DeliveredIPNStatus_nrn_requested; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveredIPNStatus_rn_requested
 * @constant
 * @type {number}
 */
export const DeliveredIPNStatus_rn_requested = 10 satisfies DeliveredIPNStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveredIPNStatus_rn_requested
 * @constant
 * @type {number}
 */
export const rn_requested = DeliveredIPNStatus_rn_requested; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveredIPNStatus_an_received
 * @constant
 * @type {number}
 */
export const DeliveredIPNStatus_an_received = 13 satisfies DeliveredIPNStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveredIPNStatus_an_received
 * @constant
 * @type {number}
 */
export const an_received = DeliveredIPNStatus_an_received; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveredIPNStatus_ipm_auto_forwarded
 * @constant
 * @type {number}
 */
export const DeliveredIPNStatus_ipm_auto_forwarded = 15 satisfies DeliveredIPNStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveredIPNStatus_ipm_auto_forwarded
 * @constant
 * @type {number}
 */
export const ipm_auto_forwarded = DeliveredIPNStatus_ipm_auto_forwarded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveredIPNStatus_ipm_discarded
 * @constant
 * @type {number}
 */
export const DeliveredIPNStatus_ipm_discarded = 20 satisfies DeliveredIPNStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveredIPNStatus_ipm_discarded
 * @constant
 * @type {number}
 */
export const ipm_discarded = DeliveredIPNStatus_ipm_discarded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveredIPNStatus_rn_received
 * @constant
 * @type {number}
 */
export const DeliveredIPNStatus_rn_received = 25 satisfies DeliveredIPNStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveredIPNStatus_rn_received
 * @constant
 * @type {number}
 */
export const rn_received = DeliveredIPNStatus_rn_received; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_DeliveredIPNStatus = $._decodeInteger;


export const _encode_DeliveredIPNStatus = $._encodeInteger;


/* eslint-enable */
