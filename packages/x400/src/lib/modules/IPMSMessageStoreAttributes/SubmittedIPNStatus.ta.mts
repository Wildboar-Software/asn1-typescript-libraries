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
 * @summary SubmittedIPNStatus
 * @description
 *
 * The AC Submitted IPN Status attribute indicates whether an interpersonal notification
 * for a delivered message was requested and whether one has been sent.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubmittedIPNStatus  ::=  INTEGER {
 *   no-ipn-requested(0), nrn-requested(5), nrn-with-ipm-return-requested(10),
 *   rn-requested(15), rn-with-ipm-return-requested(20), ipm-auto-forwarded(25),
 *   ipm-discarded(30), rn-sent(35)}
 * ```
 */
export type SubmittedIPNStatus = INTEGER;

/**
 * @summary SubmittedIPNStatus_no_ipn_requested
 * @constant
 * @type {number}
 */
export const SubmittedIPNStatus_no_ipn_requested = 0 satisfies SubmittedIPNStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_no_ipn_requested
 * @constant
 * @type {number}
 */
export const no_ipn_requested = SubmittedIPNStatus_no_ipn_requested satisfies SubmittedIPNStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_nrn_requested
 * @constant
 * @type {number}
 */
export const SubmittedIPNStatus_nrn_requested = 5 satisfies SubmittedIPNStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_nrn_requested
 * @constant
 * @type {number}
 */
export const nrn_requested = SubmittedIPNStatus_nrn_requested satisfies SubmittedIPNStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_nrn_with_ipm_return_requested
 * @constant
 * @type {number}
 */
export const SubmittedIPNStatus_nrn_with_ipm_return_requested = 10 satisfies SubmittedIPNStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_nrn_with_ipm_return_requested
 * @constant
 * @type {number}
 */
export const nrn_with_ipm_return_requested = SubmittedIPNStatus_nrn_with_ipm_return_requested satisfies SubmittedIPNStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_rn_requested
 * @constant
 * @type {number}
 */
export const SubmittedIPNStatus_rn_requested = 15 satisfies SubmittedIPNStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_rn_requested
 * @constant
 * @type {number}
 */
export const rn_requested = SubmittedIPNStatus_rn_requested satisfies SubmittedIPNStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_rn_with_ipm_return_requested
 * @constant
 * @type {number}
 */
export const SubmittedIPNStatus_rn_with_ipm_return_requested = 20 satisfies SubmittedIPNStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_rn_with_ipm_return_requested
 * @constant
 * @type {number}
 */
export const rn_with_ipm_return_requested = SubmittedIPNStatus_rn_with_ipm_return_requested satisfies SubmittedIPNStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_ipm_auto_forwarded
 * @constant
 * @type {number}
 */
export const SubmittedIPNStatus_ipm_auto_forwarded = 25 satisfies SubmittedIPNStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_ipm_auto_forwarded
 * @constant
 * @type {number}
 */
export const ipm_auto_forwarded = SubmittedIPNStatus_ipm_auto_forwarded satisfies SubmittedIPNStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_ipm_discarded
 * @constant
 * @type {number}
 */
export const SubmittedIPNStatus_ipm_discarded = 30 satisfies SubmittedIPNStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_ipm_discarded
 * @constant
 * @type {number}
 */
export const ipm_discarded = SubmittedIPNStatus_ipm_discarded satisfies SubmittedIPNStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_rn_sent
 * @constant
 * @type {number}
 */
export const SubmittedIPNStatus_rn_sent = 35 satisfies SubmittedIPNStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_rn_sent
 * @constant
 * @type {number}
 */
export const rn_sent = SubmittedIPNStatus_rn_sent satisfies SubmittedIPNStatus; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_SubmittedIPNStatus = $._decodeInteger;


export const _encode_SubmittedIPNStatus = $._encodeInteger;


/* eslint-enable */
