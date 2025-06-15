/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


/**
 * @summary AllOrFirstTier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AllOrFirstTier  ::=  INTEGER { -- Formerly AllOrNone
 *     allReceipts (0),
 *     firstTierRecipients (1)
 * }
 * ```
 */
export type AllOrFirstTier = INTEGER;


/**
 * @summary AllOrFirstTier_allReceipts
 * @constant
 * @type {number}
 */
export const AllOrFirstTier_allReceipts: AllOrFirstTier = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary AllOrFirstTier_allReceipts
 * @constant
 * @type {number}
 */
export const allReceipts: AllOrFirstTier = AllOrFirstTier_allReceipts; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary AllOrFirstTier_firstTierRecipients
 * @constant
 * @type {number}
 */
export const AllOrFirstTier_firstTierRecipients: AllOrFirstTier = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary AllOrFirstTier_firstTierRecipients
 * @constant
 * @type {number}
 */
export const firstTierRecipients: AllOrFirstTier = AllOrFirstTier_firstTierRecipients; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_AllOrFirstTier = $._decodeInteger;




export const _encode_AllOrFirstTier = $._encodeInteger;


/* eslint-enable */
