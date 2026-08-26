/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary AllOrFirstTier
 * @description
 *
 * INTEGER formerly named `AllOrNone` ([RFC 2634 §2.7](https://datatracker.ietf.org/doc/html/rfc2634#section-2.7)):
 *
 * - `allReceipts` (0) — every recipient SHOULD create a signed receipt
 * - `firstTierRecipients` (1) — only recipients that are not mailing-list
 *   expanders (no `mlExpansionHistory` on an outer `SignedData`) SHOULD
 *   create a receipt; if `mlExpansionHistory` is present, a receipt MUST
 *   NOT be created ([RFC 2634 §2.3](https://datatracker.ietf.org/doc/html/rfc2634#section-2.3))
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
