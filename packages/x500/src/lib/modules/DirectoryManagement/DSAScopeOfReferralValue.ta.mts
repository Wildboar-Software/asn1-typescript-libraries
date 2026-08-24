/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary DSAScopeOfReferralValue
 * @description
 *
 * Single INTEGER limitation on referrals this DSA may return: `dmd`(0),
 * `country`(1), or `global`(2). Not a BIT STRING. `dmd`(0) is the most
 * restrictive named value, not "unset". INTEGER, not ENUMERATED. MATCHES FOR
 * EQUALITY only.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DSAScopeOfReferralValue  ::=  INTEGER {dmd(0), country(1), global(2)}
 * ```
 */
export type DSAScopeOfReferralValue = INTEGER;

/**
 * @summary DSAScopeOfReferralValue_dmd
 * @description
 *
 * Most restrictive: only within this Directory Management Domain.
 * Named `0`, not unset.
 *
 * @constant
 * @type {number}
 */
export const DSAScopeOfReferralValue_dmd: DSAScopeOfReferralValue = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DSAScopeOfReferralValue_dmd
 * @description
 *
 * Most restrictive: only within this Directory Management Domain.
 * Named `0`, not unset.
 *
 * @constant
 * @type {number}
 */
export const dmd: DSAScopeOfReferralValue = DSAScopeOfReferralValue_dmd; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DSAScopeOfReferralValue_country
 * @description
 *
 * Limit to the country.
 *
 * @constant
 * @type {number}
 */
export const DSAScopeOfReferralValue_country: DSAScopeOfReferralValue = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DSAScopeOfReferralValue_country
 * @description
 *
 * Limit to the country.
 *
 * @constant
 * @type {number}
 */
export const country: DSAScopeOfReferralValue = DSAScopeOfReferralValue_country; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DSAScopeOfReferralValue_global
 * @description
 *
 * No DMD/country limitation.
 *
 * @constant
 * @type {number}
 */
export const DSAScopeOfReferralValue_global: DSAScopeOfReferralValue = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DSAScopeOfReferralValue_global
 * @description
 *
 * No DMD/country limitation.
 *
 * @constant
 * @type {number}
 */
export const global: DSAScopeOfReferralValue = DSAScopeOfReferralValue_global; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_DSAScopeOfReferralValue = $._decodeInteger;


export const _encode_DSAScopeOfReferralValue = $._encodeInteger;


/* eslint-enable */
