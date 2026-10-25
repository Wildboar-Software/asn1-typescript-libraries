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
export const SubmittedIPNStatus_no_ipn_requested: 0 = 0 satisfies SubmittedIPNStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_no_ipn_requested
 * @constant
 * @type {number}
 */
export const no_ipn_requested: 0 = SubmittedIPNStatus_no_ipn_requested; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_nrn_requested
 * @constant
 * @type {number}
 */
export const SubmittedIPNStatus_nrn_requested: 5 = 5 satisfies SubmittedIPNStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_nrn_requested
 * @constant
 * @type {number}
 */
export const nrn_requested: 5 = SubmittedIPNStatus_nrn_requested; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_nrn_with_ipm_return_requested
 * @constant
 * @type {number}
 */
export const SubmittedIPNStatus_nrn_with_ipm_return_requested: 10 = 10 satisfies SubmittedIPNStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_nrn_with_ipm_return_requested
 * @constant
 * @type {number}
 */
export const nrn_with_ipm_return_requested: 10 = SubmittedIPNStatus_nrn_with_ipm_return_requested; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_rn_requested
 * @constant
 * @type {number}
 */
export const SubmittedIPNStatus_rn_requested: 15 = 15 satisfies SubmittedIPNStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_rn_requested
 * @constant
 * @type {number}
 */
export const rn_requested: 15 = SubmittedIPNStatus_rn_requested; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_rn_with_ipm_return_requested
 * @constant
 * @type {number}
 */
export const SubmittedIPNStatus_rn_with_ipm_return_requested: 20 = 20 satisfies SubmittedIPNStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_rn_with_ipm_return_requested
 * @constant
 * @type {number}
 */
export const rn_with_ipm_return_requested: 20 = SubmittedIPNStatus_rn_with_ipm_return_requested; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_ipm_auto_forwarded
 * @constant
 * @type {number}
 */
export const SubmittedIPNStatus_ipm_auto_forwarded: 25 = 25 satisfies SubmittedIPNStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_ipm_auto_forwarded
 * @constant
 * @type {number}
 */
export const ipm_auto_forwarded: 25 = SubmittedIPNStatus_ipm_auto_forwarded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_ipm_discarded
 * @constant
 * @type {number}
 */
export const SubmittedIPNStatus_ipm_discarded: 30 = 30 satisfies SubmittedIPNStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_ipm_discarded
 * @constant
 * @type {number}
 */
export const ipm_discarded: 30 = SubmittedIPNStatus_ipm_discarded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_rn_sent
 * @constant
 * @type {number}
 */
export const SubmittedIPNStatus_rn_sent: 35 = 35 satisfies SubmittedIPNStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_rn_sent
 * @constant
 * @type {number}
 */
export const rn_sent: 35 = SubmittedIPNStatus_rn_sent; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_SubmittedIPNStatus: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_SubmittedIPNStatus: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
