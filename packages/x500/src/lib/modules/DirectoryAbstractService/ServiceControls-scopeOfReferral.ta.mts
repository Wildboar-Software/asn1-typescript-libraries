/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ServiceControls_scopeOfReferral
 * @description
 *
 * Restricts referrals (both referral error and unexplored) to DSAs in
 * that scope.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceControls-scopeOfReferral ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ServiceControls_scopeOfReferral = INTEGER;

/**
 * @summary ServiceControls_scopeOfReferral_dmd
 * @description
 *
 * Referrals only to DSAs in the same DMD.
 *
 * @constant
 * @type {number}
 */
export const ServiceControls_scopeOfReferral_dmd = 0 satisfies ServiceControls_scopeOfReferral; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceControls_scopeOfReferral_dmd
 * @description
 *
 * Referrals only to DSAs in the same DMD.
 *
 * @constant
 * @type {number}
 */
export const dmd = ServiceControls_scopeOfReferral_dmd satisfies ServiceControls_scopeOfReferral; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceControls_scopeOfReferral_country
 * @description
 *
 * Referrals only to DSAs in the same country.
 *
 * @constant
 * @type {number}
 */
export const ServiceControls_scopeOfReferral_country = 1 satisfies ServiceControls_scopeOfReferral; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceControls_scopeOfReferral_country
 * @description
 *
 * Referrals only to DSAs in the same country.
 *
 * @constant
 * @type {number}
 */
export const country = ServiceControls_scopeOfReferral_country satisfies ServiceControls_scopeOfReferral; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ServiceControls_scopeOfReferral = $._decodeInteger;


export const _encode_ServiceControls_scopeOfReferral = $._encodeInteger;


/* eslint-enable */
