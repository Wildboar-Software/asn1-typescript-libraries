/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary PreferredDeliveryMethod_Item
 * @description
 *
 * INTEGER (not ENUMERATED). Position in PreferredDeliveryMethod is
 * preference order. `any_delivery_method` (0) means any method.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PreferredDeliveryMethod-Item ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type PreferredDeliveryMethod_Item = INTEGER;

/**
 * @summary PreferredDeliveryMethod_Item_any_delivery_method
 * @description
 *
 * Any delivery method (0).
 *
 * @constant
 * @type {number}
 */
export const PreferredDeliveryMethod_Item_any_delivery_method: 0 = 0 satisfies PreferredDeliveryMethod_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_any_delivery_method
 * @description
 *
 * Any delivery method (0).
 *
 * @constant
 * @type {number}
 */
export const any_delivery_method: 0 = PreferredDeliveryMethod_Item_any_delivery_method; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_mhs_delivery
 * @constant
 * @type {number}
 */
export const PreferredDeliveryMethod_Item_mhs_delivery: 1 = 1 satisfies PreferredDeliveryMethod_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_mhs_delivery
 * @constant
 * @type {number}
 */
export const mhs_delivery: 1 = PreferredDeliveryMethod_Item_mhs_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_physical_delivery
 * @constant
 * @type {number}
 */
export const PreferredDeliveryMethod_Item_physical_delivery: 2 = 2 satisfies PreferredDeliveryMethod_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_physical_delivery
 * @constant
 * @type {number}
 */
export const physical_delivery: 2 = PreferredDeliveryMethod_Item_physical_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_telex_delivery
 * @constant
 * @type {number}
 */
export const PreferredDeliveryMethod_Item_telex_delivery: 3 = 3 satisfies PreferredDeliveryMethod_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_telex_delivery
 * @constant
 * @type {number}
 */
export const telex_delivery: 3 = PreferredDeliveryMethod_Item_telex_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_teletex_delivery
 * @constant
 * @type {number}
 */
export const PreferredDeliveryMethod_Item_teletex_delivery: 4 = 4 satisfies PreferredDeliveryMethod_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_teletex_delivery
 * @constant
 * @type {number}
 */
export const teletex_delivery: 4 = PreferredDeliveryMethod_Item_teletex_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_g3_facsimile_delivery
 * @constant
 * @type {number}
 */
export const PreferredDeliveryMethod_Item_g3_facsimile_delivery: 5 = 5 satisfies PreferredDeliveryMethod_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_g3_facsimile_delivery
 * @constant
 * @type {number}
 */
export const g3_facsimile_delivery: 5 = PreferredDeliveryMethod_Item_g3_facsimile_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_g4_facsimile_delivery
 * @constant
 * @type {number}
 */
export const PreferredDeliveryMethod_Item_g4_facsimile_delivery: 6 = 6 satisfies PreferredDeliveryMethod_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_g4_facsimile_delivery
 * @constant
 * @type {number}
 */
export const g4_facsimile_delivery: 6 = PreferredDeliveryMethod_Item_g4_facsimile_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_ia5_terminal_delivery
 * @constant
 * @type {number}
 */
export const PreferredDeliveryMethod_Item_ia5_terminal_delivery: 7 = 7 satisfies PreferredDeliveryMethod_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_ia5_terminal_delivery
 * @constant
 * @type {number}
 */
export const ia5_terminal_delivery: 7 = PreferredDeliveryMethod_Item_ia5_terminal_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_videotex_delivery
 * @constant
 * @type {number}
 */
export const PreferredDeliveryMethod_Item_videotex_delivery: 8 = 8 satisfies PreferredDeliveryMethod_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_videotex_delivery
 * @constant
 * @type {number}
 */
export const videotex_delivery: 8 = PreferredDeliveryMethod_Item_videotex_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_telephone_delivery
 * @constant
 * @type {number}
 */
export const PreferredDeliveryMethod_Item_telephone_delivery: 9 = 9 satisfies PreferredDeliveryMethod_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_telephone_delivery
 * @constant
 * @type {number}
 */
export const telephone_delivery: 9 = PreferredDeliveryMethod_Item_telephone_delivery; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_PreferredDeliveryMethod_Item: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_PreferredDeliveryMethod_Item: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
