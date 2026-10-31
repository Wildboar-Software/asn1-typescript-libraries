/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PreferredDeliveryMethod_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PreferredDeliveryMethod-Item ::= INTEGER {
 *   any-delivery-method   (0),
 *   mhs-delivery          (1),
 *   physical-delivery     (2),
 *   telex-delivery        (3),
 *   teletex-delivery      (4),
 *   g3-facsimile-delivery (5),
 *   g4-facsimile-delivery (6),
 *   ia5-terminal-delivery (7),
 *   videotex-delivery     (8),
 *   telephone-delivery    (9) }
 * ```
 */
export
type PreferredDeliveryMethod_Item = INTEGER;

/**
 * @summary PreferredDeliveryMethod_Item_any_delivery_method
 * @constant
 * @type {number}
 */
export
const PreferredDeliveryMethod_Item_any_delivery_method: number = 0 satisfies PreferredDeliveryMethod_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_any_delivery_method
 * @constant
 * @type {number}
 */
export
const any_delivery_method: number = PreferredDeliveryMethod_Item_any_delivery_method; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_mhs_delivery
 * @constant
 * @type {number}
 */
export
const PreferredDeliveryMethod_Item_mhs_delivery: number = 1 satisfies PreferredDeliveryMethod_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_mhs_delivery
 * @constant
 * @type {number}
 */
export
const mhs_delivery: number = PreferredDeliveryMethod_Item_mhs_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_physical_delivery
 * @constant
 * @type {number}
 */
export
const PreferredDeliveryMethod_Item_physical_delivery: number = 2 satisfies PreferredDeliveryMethod_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_physical_delivery
 * @constant
 * @type {number}
 */
export
const physical_delivery: number = PreferredDeliveryMethod_Item_physical_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_telex_delivery
 * @constant
 * @type {number}
 */
export
const PreferredDeliveryMethod_Item_telex_delivery: number = 3 satisfies PreferredDeliveryMethod_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_telex_delivery
 * @constant
 * @type {number}
 */
export
const telex_delivery: number = PreferredDeliveryMethod_Item_telex_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_teletex_delivery
 * @constant
 * @type {number}
 */
export
const PreferredDeliveryMethod_Item_teletex_delivery: number = 4 satisfies PreferredDeliveryMethod_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_teletex_delivery
 * @constant
 * @type {number}
 */
export
const teletex_delivery: number = PreferredDeliveryMethod_Item_teletex_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_g3_facsimile_delivery
 * @constant
 * @type {number}
 */
export
const PreferredDeliveryMethod_Item_g3_facsimile_delivery: number = 5 satisfies PreferredDeliveryMethod_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_g3_facsimile_delivery
 * @constant
 * @type {number}
 */
export
const g3_facsimile_delivery: number = PreferredDeliveryMethod_Item_g3_facsimile_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_g4_facsimile_delivery
 * @constant
 * @type {number}
 */
export
const PreferredDeliveryMethod_Item_g4_facsimile_delivery: number = 6 satisfies PreferredDeliveryMethod_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_g4_facsimile_delivery
 * @constant
 * @type {number}
 */
export
const g4_facsimile_delivery: number = PreferredDeliveryMethod_Item_g4_facsimile_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_ia5_terminal_delivery
 * @constant
 * @type {number}
 */
export
const PreferredDeliveryMethod_Item_ia5_terminal_delivery: number = 7 satisfies PreferredDeliveryMethod_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_ia5_terminal_delivery
 * @constant
 * @type {number}
 */
export
const ia5_terminal_delivery: number = PreferredDeliveryMethod_Item_ia5_terminal_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_videotex_delivery
 * @constant
 * @type {number}
 */
export
const PreferredDeliveryMethod_Item_videotex_delivery: number = 8 satisfies PreferredDeliveryMethod_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_videotex_delivery
 * @constant
 * @type {number}
 */
export
const videotex_delivery: number = PreferredDeliveryMethod_Item_videotex_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_telephone_delivery
 * @constant
 * @type {number}
 */
export
const PreferredDeliveryMethod_Item_telephone_delivery: number = 9 satisfies PreferredDeliveryMethod_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PreferredDeliveryMethod_Item_telephone_delivery
 * @constant
 * @type {number}
 */
export
const telephone_delivery: number = PreferredDeliveryMethod_Item_telephone_delivery; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_PreferredDeliveryMethod_Item: $.ASN1Decoder<PreferredDeliveryMethod_Item> = $._decodeInteger;

export
const _encode_PreferredDeliveryMethod_Item: $.ASN1Encoder<PreferredDeliveryMethod_Item> = $._encodeInteger;

/* eslint-enable */
