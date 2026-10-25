/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary RequestedDeliveryMethod_Item
 * @description
 *
 * Defined in ITU-T X.411 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestedDeliveryMethod-Item ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type RequestedDeliveryMethod_Item = INTEGER;

/**
 * @summary RequestedDeliveryMethod_Item_any_delivery_method
 * @constant
 * @type {number}
 */
export const RequestedDeliveryMethod_Item_any_delivery_method: 0 = 0 satisfies RequestedDeliveryMethod_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_any_delivery_method
 * @constant
 * @type {number}
 */
export const any_delivery_method: 0 = RequestedDeliveryMethod_Item_any_delivery_method; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_mhs_delivery
 * @constant
 * @type {number}
 */
export const RequestedDeliveryMethod_Item_mhs_delivery: 1 = 1 satisfies RequestedDeliveryMethod_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_mhs_delivery
 * @constant
 * @type {number}
 */
export const mhs_delivery: 1 = RequestedDeliveryMethod_Item_mhs_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_physical_delivery
 * @constant
 * @type {number}
 */
export const RequestedDeliveryMethod_Item_physical_delivery: 2 = 2 satisfies RequestedDeliveryMethod_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_physical_delivery
 * @constant
 * @type {number}
 */
export const physical_delivery: 2 = RequestedDeliveryMethod_Item_physical_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_telex_delivery
 * @constant
 * @type {number}
 */
export const RequestedDeliveryMethod_Item_telex_delivery: 3 = 3 satisfies RequestedDeliveryMethod_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_telex_delivery
 * @constant
 * @type {number}
 */
export const telex_delivery: 3 = RequestedDeliveryMethod_Item_telex_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_teletex_delivery
 * @constant
 * @type {number}
 */
export const RequestedDeliveryMethod_Item_teletex_delivery: 4 = 4 satisfies RequestedDeliveryMethod_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_teletex_delivery
 * @constant
 * @type {number}
 */
export const teletex_delivery: 4 = RequestedDeliveryMethod_Item_teletex_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_g3_facsimile_delivery
 * @constant
 * @type {number}
 */
export const RequestedDeliveryMethod_Item_g3_facsimile_delivery: 5 = 5 satisfies RequestedDeliveryMethod_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_g3_facsimile_delivery
 * @constant
 * @type {number}
 */
export const g3_facsimile_delivery: 5 = RequestedDeliveryMethod_Item_g3_facsimile_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_g4_facsimile_delivery
 * @constant
 * @type {number}
 */
export const RequestedDeliveryMethod_Item_g4_facsimile_delivery: 6 = 6 satisfies RequestedDeliveryMethod_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_g4_facsimile_delivery
 * @constant
 * @type {number}
 */
export const g4_facsimile_delivery: 6 = RequestedDeliveryMethod_Item_g4_facsimile_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_ia5_terminal_delivery
 * @constant
 * @type {number}
 */
export const RequestedDeliveryMethod_Item_ia5_terminal_delivery: 7 = 7 satisfies RequestedDeliveryMethod_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_ia5_terminal_delivery
 * @constant
 * @type {number}
 */
export const ia5_terminal_delivery: 7 = RequestedDeliveryMethod_Item_ia5_terminal_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_videotex_delivery
 * @constant
 * @type {number}
 */
export const RequestedDeliveryMethod_Item_videotex_delivery: 8 = 8 satisfies RequestedDeliveryMethod_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_videotex_delivery
 * @constant
 * @type {number}
 */
export const videotex_delivery: 8 = RequestedDeliveryMethod_Item_videotex_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_telephone_delivery
 * @constant
 * @type {number}
 */
export const RequestedDeliveryMethod_Item_telephone_delivery: 9 = 9 satisfies RequestedDeliveryMethod_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_telephone_delivery
 * @constant
 * @type {number}
 */
export const telephone_delivery: 9 = RequestedDeliveryMethod_Item_telephone_delivery; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_RequestedDeliveryMethod_Item: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_RequestedDeliveryMethod_Item: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
