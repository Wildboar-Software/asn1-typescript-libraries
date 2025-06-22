/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ServiceControls_scopeOfReferral
 * @description
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
 * @constant
 * @type {number}
 */
export const ServiceControls_scopeOfReferral_dmd: ServiceControls_scopeOfReferral = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceControls_scopeOfReferral_dmd
 * @constant
 * @type {number}
 */
export const dmd: ServiceControls_scopeOfReferral = ServiceControls_scopeOfReferral_dmd; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceControls_scopeOfReferral_country
 * @constant
 * @type {number}
 */
export const ServiceControls_scopeOfReferral_country: ServiceControls_scopeOfReferral = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceControls_scopeOfReferral_country
 * @constant
 * @type {number}
 */
export const country: ServiceControls_scopeOfReferral = ServiceControls_scopeOfReferral_country; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ServiceControls_scopeOfReferral = $._decodeInteger;


export const _encode_ServiceControls_scopeOfReferral = $._encodeInteger;


/* eslint-enable */
