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
 * @summary SubmittedIPNStatus
 * @description
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
export const SubmittedIPNStatus_no_ipn_requested: SubmittedIPNStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_no_ipn_requested
 * @constant
 * @type {number}
 */
export const no_ipn_requested: SubmittedIPNStatus = SubmittedIPNStatus_no_ipn_requested; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_nrn_requested
 * @constant
 * @type {number}
 */
export const SubmittedIPNStatus_nrn_requested: SubmittedIPNStatus = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_nrn_requested
 * @constant
 * @type {number}
 */
export const nrn_requested: SubmittedIPNStatus = SubmittedIPNStatus_nrn_requested; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_nrn_with_ipm_return_requested
 * @constant
 * @type {number}
 */
export const SubmittedIPNStatus_nrn_with_ipm_return_requested: SubmittedIPNStatus = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_nrn_with_ipm_return_requested
 * @constant
 * @type {number}
 */
export const nrn_with_ipm_return_requested: SubmittedIPNStatus = SubmittedIPNStatus_nrn_with_ipm_return_requested; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_rn_requested
 * @constant
 * @type {number}
 */
export const SubmittedIPNStatus_rn_requested: SubmittedIPNStatus = 15; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_rn_requested
 * @constant
 * @type {number}
 */
export const rn_requested: SubmittedIPNStatus = SubmittedIPNStatus_rn_requested; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_rn_with_ipm_return_requested
 * @constant
 * @type {number}
 */
export const SubmittedIPNStatus_rn_with_ipm_return_requested: SubmittedIPNStatus = 20; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_rn_with_ipm_return_requested
 * @constant
 * @type {number}
 */
export const rn_with_ipm_return_requested: SubmittedIPNStatus = SubmittedIPNStatus_rn_with_ipm_return_requested; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_ipm_auto_forwarded
 * @constant
 * @type {number}
 */
export const SubmittedIPNStatus_ipm_auto_forwarded: SubmittedIPNStatus = 25; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_ipm_auto_forwarded
 * @constant
 * @type {number}
 */
export const ipm_auto_forwarded: SubmittedIPNStatus = SubmittedIPNStatus_ipm_auto_forwarded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_ipm_discarded
 * @constant
 * @type {number}
 */
export const SubmittedIPNStatus_ipm_discarded: SubmittedIPNStatus = 30; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_ipm_discarded
 * @constant
 * @type {number}
 */
export const ipm_discarded: SubmittedIPNStatus = SubmittedIPNStatus_ipm_discarded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_rn_sent
 * @constant
 * @type {number}
 */
export const SubmittedIPNStatus_rn_sent: SubmittedIPNStatus = 35; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedIPNStatus_rn_sent
 * @constant
 * @type {number}
 */
export const rn_sent: SubmittedIPNStatus = SubmittedIPNStatus_rn_sent; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_SubmittedIPNStatus = $._decodeInteger;


export const _encode_SubmittedIPNStatus = $._encodeInteger;


/* eslint-enable */
