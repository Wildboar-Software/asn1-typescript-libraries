/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary DSAScopeOfChainingValue
 * @description
 *
 * Single INTEGER limitation on how far this DSA may chain: `dmd`(0),
 * `country`(1), or `global`(2). Not a BIT STRING (one value, not a set).
 * `dmd`(0) is the most restrictive named value, not "unset". INTEGER, not
 * ENUMERATED. MATCHES FOR EQUALITY only (no ORDERING match despite the scale).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DSAScopeOfChainingValue  ::=  INTEGER {dmd(0), country(1), global(2)}
 * ```
 */
export type DSAScopeOfChainingValue = INTEGER;

/**
 * @summary DSAScopeOfChainingValue_dmd
 * @description
 *
 * Most restrictive: chain/refer only within this Directory Management
 * Domain. Named `0`, not unset.
 *
 * @constant
 * @type {number}
 */
export const DSAScopeOfChainingValue_dmd: DSAScopeOfChainingValue = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DSAScopeOfChainingValue_dmd
 * @description
 *
 * Most restrictive: chain/refer only within this Directory Management
 * Domain. Named `0`, not unset.
 *
 * @constant
 * @type {number}
 */
export const dmd: DSAScopeOfChainingValue = DSAScopeOfChainingValue_dmd; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DSAScopeOfChainingValue_country
 * @description
 *
 * Limit to the country.
 *
 * @constant
 * @type {number}
 */
export const DSAScopeOfChainingValue_country: DSAScopeOfChainingValue = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DSAScopeOfChainingValue_country
 * @description
 *
 * Limit to the country.
 *
 * @constant
 * @type {number}
 */
export const country: DSAScopeOfChainingValue = DSAScopeOfChainingValue_country; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DSAScopeOfChainingValue_global
 * @description
 *
 * No DMD/country limitation.
 *
 * @constant
 * @type {number}
 */
export const DSAScopeOfChainingValue_global: DSAScopeOfChainingValue = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DSAScopeOfChainingValue_global
 * @description
 *
 * No DMD/country limitation.
 *
 * @constant
 * @type {number}
 */
export const global: DSAScopeOfChainingValue = DSAScopeOfChainingValue_global; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_DSAScopeOfChainingValue = $._decodeInteger;


export const _encode_DSAScopeOfChainingValue = $._encodeInteger;


/* eslint-enable */
