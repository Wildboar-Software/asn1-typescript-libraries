/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary NamedDay_bitNamedDays
 * @description
 *
 * BIT STRING; sunday = 0 … saturday = 6 (off-by-one vs intNamedDays
 * sunday = 1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NamedDay-bitNamedDays ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type NamedDay_bitNamedDays = BIT_STRING;

/**
 * @summary NamedDay_bitNamedDays_sunday
 * @description
 *
 * BIT sunday = 0 (`intNamedDays` sunday = 1).
 *
 * @constant
 */
export const NamedDay_bitNamedDays_sunday: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary sunday
 * @description
 *
 * BIT sunday = 0 (`intNamedDays` sunday = 1).
 *
 * @constant
 */
export const sunday: number = NamedDay_bitNamedDays_sunday; /* SHORT_NAMED_BIT */

/**
 * @summary NamedDay_bitNamedDays_monday
 * @constant
 */
export const NamedDay_bitNamedDays_monday: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary monday
 * @constant
 */
export const monday: number = NamedDay_bitNamedDays_monday; /* SHORT_NAMED_BIT */

/**
 * @summary NamedDay_bitNamedDays_tuesday
 * @constant
 */
export const NamedDay_bitNamedDays_tuesday: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary tuesday
 * @constant
 */
export const tuesday: number = NamedDay_bitNamedDays_tuesday; /* SHORT_NAMED_BIT */

/**
 * @summary NamedDay_bitNamedDays_wednesday
 * @constant
 */
export const NamedDay_bitNamedDays_wednesday: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary wednesday
 * @constant
 */
export const wednesday: number = NamedDay_bitNamedDays_wednesday; /* SHORT_NAMED_BIT */

/**
 * @summary NamedDay_bitNamedDays_thursday
 * @constant
 */
export const NamedDay_bitNamedDays_thursday: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary thursday
 * @constant
 */
export const thursday: number = NamedDay_bitNamedDays_thursday; /* SHORT_NAMED_BIT */

/**
 * @summary NamedDay_bitNamedDays_friday
 * @constant
 */
export const NamedDay_bitNamedDays_friday: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary friday
 * @constant
 */
export const friday: number = NamedDay_bitNamedDays_friday; /* SHORT_NAMED_BIT */

/**
 * @summary NamedDay_bitNamedDays_saturday
 * @constant
 */
export const NamedDay_bitNamedDays_saturday: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary saturday
 * @constant
 */
export const saturday: number = NamedDay_bitNamedDays_saturday; /* SHORT_NAMED_BIT */


export const _decode_NamedDay_bitNamedDays = $._decodeBitString;


export const _encode_NamedDay_bitNamedDays = $._encodeBitString;


/* eslint-enable */
