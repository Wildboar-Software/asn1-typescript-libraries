/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION AllOrFirstTier */
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
/* END_OF_SYMBOL_DEFINITION AllOrFirstTier */

/* START_OF_SYMBOL_DEFINITION AllOrFirstTier_allReceipts */
/**
 * @summary AllOrFirstTier_allReceipts
 * @constant
 * @type {number}
 */
export const AllOrFirstTier_allReceipts: AllOrFirstTier = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AllOrFirstTier_allReceipts */

/* START_OF_SYMBOL_DEFINITION allReceipts */
/**
 * @summary AllOrFirstTier_allReceipts
 * @constant
 * @type {number}
 */
export const allReceipts: AllOrFirstTier = AllOrFirstTier_allReceipts; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION allReceipts */

/* START_OF_SYMBOL_DEFINITION AllOrFirstTier_firstTierRecipients */
/**
 * @summary AllOrFirstTier_firstTierRecipients
 * @constant
 * @type {number}
 */
export const AllOrFirstTier_firstTierRecipients: AllOrFirstTier = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AllOrFirstTier_firstTierRecipients */

/* START_OF_SYMBOL_DEFINITION firstTierRecipients */
/**
 * @summary AllOrFirstTier_firstTierRecipients
 * @constant
 * @type {number}
 */
export const firstTierRecipients: AllOrFirstTier = AllOrFirstTier_firstTierRecipients; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION firstTierRecipients */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AllOrFirstTier */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AllOrFirstTier */

/* START_OF_SYMBOL_DEFINITION _decode_AllOrFirstTier */
export const _decode_AllOrFirstTier = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_AllOrFirstTier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AllOrFirstTier */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AllOrFirstTier */

/* START_OF_SYMBOL_DEFINITION _encode_AllOrFirstTier */
export const _encode_AllOrFirstTier = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_AllOrFirstTier */

/* eslint-enable */
