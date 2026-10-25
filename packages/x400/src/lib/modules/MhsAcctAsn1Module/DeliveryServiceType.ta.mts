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
 * @summary DeliveryServiceType
 * @description
 *
 * Defined in ITU-T X.411 (1999) (accounting objects).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliveryServiceType  ::=  INTEGER {
 *   mhs-delivery(0), physical-delivery(1), telex-delivery(2),
 *   teletex-delivery(3), g3-facsimile-delivery(4), g4-facsimile-delivery(5),
 *   videotex-delivery(6), telephone-delivery(7), other-delivery(8)}
 * ```
 */
export type DeliveryServiceType = INTEGER;

/**
 * @summary DeliveryServiceType_mhs_delivery
 * @constant
 * @type {number}
 */
export const DeliveryServiceType_mhs_delivery: 0 = 0 satisfies DeliveryServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryServiceType_mhs_delivery
 * @constant
 * @type {number}
 */
export const mhs_delivery: 0 = DeliveryServiceType_mhs_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryServiceType_physical_delivery
 * @constant
 * @type {number}
 */
export const DeliveryServiceType_physical_delivery: 1 = 1 satisfies DeliveryServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryServiceType_physical_delivery
 * @constant
 * @type {number}
 */
export const physical_delivery: 1 = DeliveryServiceType_physical_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryServiceType_telex_delivery
 * @constant
 * @type {number}
 */
export const DeliveryServiceType_telex_delivery: 2 = 2 satisfies DeliveryServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryServiceType_telex_delivery
 * @constant
 * @type {number}
 */
export const telex_delivery: 2 = DeliveryServiceType_telex_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryServiceType_teletex_delivery
 * @constant
 * @type {number}
 */
export const DeliveryServiceType_teletex_delivery: 3 = 3 satisfies DeliveryServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryServiceType_teletex_delivery
 * @constant
 * @type {number}
 */
export const teletex_delivery: 3 = DeliveryServiceType_teletex_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryServiceType_g3_facsimile_delivery
 * @constant
 * @type {number}
 */
export const DeliveryServiceType_g3_facsimile_delivery: 4 = 4 satisfies DeliveryServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryServiceType_g3_facsimile_delivery
 * @constant
 * @type {number}
 */
export const g3_facsimile_delivery: 4 = DeliveryServiceType_g3_facsimile_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryServiceType_g4_facsimile_delivery
 * @constant
 * @type {number}
 */
export const DeliveryServiceType_g4_facsimile_delivery: 5 = 5 satisfies DeliveryServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryServiceType_g4_facsimile_delivery
 * @constant
 * @type {number}
 */
export const g4_facsimile_delivery: 5 = DeliveryServiceType_g4_facsimile_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryServiceType_videotex_delivery
 * @constant
 * @type {number}
 */
export const DeliveryServiceType_videotex_delivery: 6 = 6 satisfies DeliveryServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryServiceType_videotex_delivery
 * @constant
 * @type {number}
 */
export const videotex_delivery: 6 = DeliveryServiceType_videotex_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryServiceType_telephone_delivery
 * @constant
 * @type {number}
 */
export const DeliveryServiceType_telephone_delivery: 7 = 7 satisfies DeliveryServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryServiceType_telephone_delivery
 * @constant
 * @type {number}
 */
export const telephone_delivery: 7 = DeliveryServiceType_telephone_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryServiceType_other_delivery
 * @constant
 * @type {number}
 */
export const DeliveryServiceType_other_delivery: 8 = 8 satisfies DeliveryServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryServiceType_other_delivery
 * @constant
 * @type {number}
 */
export const other_delivery: 8 = DeliveryServiceType_other_delivery; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_DeliveryServiceType: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_DeliveryServiceType: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
