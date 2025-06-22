/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary RequestedDeliveryMethod_Item
 * @description
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
export const RequestedDeliveryMethod_Item_any_delivery_method: RequestedDeliveryMethod_Item = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_any_delivery_method
 * @constant
 * @type {number}
 */
export const any_delivery_method: RequestedDeliveryMethod_Item = RequestedDeliveryMethod_Item_any_delivery_method; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_mhs_delivery
 * @constant
 * @type {number}
 */
export const RequestedDeliveryMethod_Item_mhs_delivery: RequestedDeliveryMethod_Item = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_mhs_delivery
 * @constant
 * @type {number}
 */
export const mhs_delivery: RequestedDeliveryMethod_Item = RequestedDeliveryMethod_Item_mhs_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_physical_delivery
 * @constant
 * @type {number}
 */
export const RequestedDeliveryMethod_Item_physical_delivery: RequestedDeliveryMethod_Item = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_physical_delivery
 * @constant
 * @type {number}
 */
export const physical_delivery: RequestedDeliveryMethod_Item = RequestedDeliveryMethod_Item_physical_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_telex_delivery
 * @constant
 * @type {number}
 */
export const RequestedDeliveryMethod_Item_telex_delivery: RequestedDeliveryMethod_Item = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_telex_delivery
 * @constant
 * @type {number}
 */
export const telex_delivery: RequestedDeliveryMethod_Item = RequestedDeliveryMethod_Item_telex_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_teletex_delivery
 * @constant
 * @type {number}
 */
export const RequestedDeliveryMethod_Item_teletex_delivery: RequestedDeliveryMethod_Item = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_teletex_delivery
 * @constant
 * @type {number}
 */
export const teletex_delivery: RequestedDeliveryMethod_Item = RequestedDeliveryMethod_Item_teletex_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_g3_facsimile_delivery
 * @constant
 * @type {number}
 */
export const RequestedDeliveryMethod_Item_g3_facsimile_delivery: RequestedDeliveryMethod_Item = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_g3_facsimile_delivery
 * @constant
 * @type {number}
 */
export const g3_facsimile_delivery: RequestedDeliveryMethod_Item = RequestedDeliveryMethod_Item_g3_facsimile_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_g4_facsimile_delivery
 * @constant
 * @type {number}
 */
export const RequestedDeliveryMethod_Item_g4_facsimile_delivery: RequestedDeliveryMethod_Item = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_g4_facsimile_delivery
 * @constant
 * @type {number}
 */
export const g4_facsimile_delivery: RequestedDeliveryMethod_Item = RequestedDeliveryMethod_Item_g4_facsimile_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_ia5_terminal_delivery
 * @constant
 * @type {number}
 */
export const RequestedDeliveryMethod_Item_ia5_terminal_delivery: RequestedDeliveryMethod_Item = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_ia5_terminal_delivery
 * @constant
 * @type {number}
 */
export const ia5_terminal_delivery: RequestedDeliveryMethod_Item = RequestedDeliveryMethod_Item_ia5_terminal_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_videotex_delivery
 * @constant
 * @type {number}
 */
export const RequestedDeliveryMethod_Item_videotex_delivery: RequestedDeliveryMethod_Item = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_videotex_delivery
 * @constant
 * @type {number}
 */
export const videotex_delivery: RequestedDeliveryMethod_Item = RequestedDeliveryMethod_Item_videotex_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_telephone_delivery
 * @constant
 * @type {number}
 */
export const RequestedDeliveryMethod_Item_telephone_delivery: RequestedDeliveryMethod_Item = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedDeliveryMethod_Item_telephone_delivery
 * @constant
 * @type {number}
 */
export const telephone_delivery: RequestedDeliveryMethod_Item = RequestedDeliveryMethod_Item_telephone_delivery; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_RequestedDeliveryMethod_Item = $._decodeInteger;


export const _encode_RequestedDeliveryMethod_Item = $._encodeInteger;


/* eslint-enable */
