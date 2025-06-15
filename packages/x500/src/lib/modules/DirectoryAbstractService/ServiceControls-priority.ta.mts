/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION ServiceControls_priority */
/**
 * @summary ServiceControls_priority
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceControls-priority ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ServiceControls_priority = INTEGER;
/* END_OF_SYMBOL_DEFINITION ServiceControls_priority */

/* START_OF_SYMBOL_DEFINITION ServiceControls_priority_low */
/**
 * @summary ServiceControls_priority_low
 * @constant
 * @type {number}
 */
export const ServiceControls_priority_low: ServiceControls_priority = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceControls_priority_low */

/* START_OF_SYMBOL_DEFINITION low */
/**
 * @summary ServiceControls_priority_low
 * @constant
 * @type {number}
 */
export const low: ServiceControls_priority = ServiceControls_priority_low; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION low */

/* START_OF_SYMBOL_DEFINITION ServiceControls_priority_medium */
/**
 * @summary ServiceControls_priority_medium
 * @constant
 * @type {number}
 */
export const ServiceControls_priority_medium: ServiceControls_priority = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceControls_priority_medium */

/* START_OF_SYMBOL_DEFINITION medium */
/**
 * @summary ServiceControls_priority_medium
 * @constant
 * @type {number}
 */
export const medium: ServiceControls_priority = ServiceControls_priority_medium; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION medium */

/* START_OF_SYMBOL_DEFINITION ServiceControls_priority_high */
/**
 * @summary ServiceControls_priority_high
 * @constant
 * @type {number}
 */
export const ServiceControls_priority_high: ServiceControls_priority = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceControls_priority_high */

/* START_OF_SYMBOL_DEFINITION high */
/**
 * @summary ServiceControls_priority_high
 * @constant
 * @type {number}
 */
export const high: ServiceControls_priority = ServiceControls_priority_high; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION high */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceControls_priority */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceControls_priority */

/* START_OF_SYMBOL_DEFINITION _decode_ServiceControls_priority */
export const _decode_ServiceControls_priority = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_ServiceControls_priority */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceControls_priority */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceControls_priority */

/* START_OF_SYMBOL_DEFINITION _encode_ServiceControls_priority */
export const _encode_ServiceControls_priority = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_ServiceControls_priority */

/* eslint-enable */
