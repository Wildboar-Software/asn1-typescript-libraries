/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION DSAScopeOfReferralValue */
/**
 * @summary DSAScopeOfReferralValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DSAScopeOfReferralValue  ::=  INTEGER {dmd(0), country(1), global(2)}
 * ```
 */
export type DSAScopeOfReferralValue = INTEGER;
/* END_OF_SYMBOL_DEFINITION DSAScopeOfReferralValue */

/* START_OF_SYMBOL_DEFINITION DSAScopeOfReferralValue_dmd */
/**
 * @summary DSAScopeOfReferralValue_dmd
 * @constant
 * @type {number}
 */
export const DSAScopeOfReferralValue_dmd: DSAScopeOfReferralValue = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DSAScopeOfReferralValue_dmd */

/* START_OF_SYMBOL_DEFINITION dmd */
/**
 * @summary DSAScopeOfReferralValue_dmd
 * @constant
 * @type {number}
 */
export const dmd: DSAScopeOfReferralValue = DSAScopeOfReferralValue_dmd; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION dmd */

/* START_OF_SYMBOL_DEFINITION DSAScopeOfReferralValue_country */
/**
 * @summary DSAScopeOfReferralValue_country
 * @constant
 * @type {number}
 */
export const DSAScopeOfReferralValue_country: DSAScopeOfReferralValue = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DSAScopeOfReferralValue_country */

/* START_OF_SYMBOL_DEFINITION country */
/**
 * @summary DSAScopeOfReferralValue_country
 * @constant
 * @type {number}
 */
export const country: DSAScopeOfReferralValue = DSAScopeOfReferralValue_country; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION country */

/* START_OF_SYMBOL_DEFINITION DSAScopeOfReferralValue_global */
/**
 * @summary DSAScopeOfReferralValue_global
 * @constant
 * @type {number}
 */
export const DSAScopeOfReferralValue_global: DSAScopeOfReferralValue = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DSAScopeOfReferralValue_global */

/* START_OF_SYMBOL_DEFINITION global */
/**
 * @summary DSAScopeOfReferralValue_global
 * @constant
 * @type {number}
 */
export const global: DSAScopeOfReferralValue = DSAScopeOfReferralValue_global; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION global */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DSAScopeOfReferralValue */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DSAScopeOfReferralValue */

/* START_OF_SYMBOL_DEFINITION _decode_DSAScopeOfReferralValue */
export const _decode_DSAScopeOfReferralValue = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_DSAScopeOfReferralValue */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DSAScopeOfReferralValue */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DSAScopeOfReferralValue */

/* START_OF_SYMBOL_DEFINITION _encode_DSAScopeOfReferralValue */
export const _encode_DSAScopeOfReferralValue = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_DSAScopeOfReferralValue */

/* eslint-enable */
