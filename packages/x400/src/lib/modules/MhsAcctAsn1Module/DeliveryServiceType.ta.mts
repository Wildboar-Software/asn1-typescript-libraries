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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary DeliveryServiceType
 * @description
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
export const DeliveryServiceType_mhs_delivery: DeliveryServiceType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryServiceType_mhs_delivery
 * @constant
 * @type {number}
 */
export const mhs_delivery: DeliveryServiceType = DeliveryServiceType_mhs_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryServiceType_physical_delivery
 * @constant
 * @type {number}
 */
export const DeliveryServiceType_physical_delivery: DeliveryServiceType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryServiceType_physical_delivery
 * @constant
 * @type {number}
 */
export const physical_delivery: DeliveryServiceType = DeliveryServiceType_physical_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryServiceType_telex_delivery
 * @constant
 * @type {number}
 */
export const DeliveryServiceType_telex_delivery: DeliveryServiceType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryServiceType_telex_delivery
 * @constant
 * @type {number}
 */
export const telex_delivery: DeliveryServiceType = DeliveryServiceType_telex_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryServiceType_teletex_delivery
 * @constant
 * @type {number}
 */
export const DeliveryServiceType_teletex_delivery: DeliveryServiceType = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryServiceType_teletex_delivery
 * @constant
 * @type {number}
 */
export const teletex_delivery: DeliveryServiceType = DeliveryServiceType_teletex_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryServiceType_g3_facsimile_delivery
 * @constant
 * @type {number}
 */
export const DeliveryServiceType_g3_facsimile_delivery: DeliveryServiceType = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryServiceType_g3_facsimile_delivery
 * @constant
 * @type {number}
 */
export const g3_facsimile_delivery: DeliveryServiceType = DeliveryServiceType_g3_facsimile_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryServiceType_g4_facsimile_delivery
 * @constant
 * @type {number}
 */
export const DeliveryServiceType_g4_facsimile_delivery: DeliveryServiceType = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryServiceType_g4_facsimile_delivery
 * @constant
 * @type {number}
 */
export const g4_facsimile_delivery: DeliveryServiceType = DeliveryServiceType_g4_facsimile_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryServiceType_videotex_delivery
 * @constant
 * @type {number}
 */
export const DeliveryServiceType_videotex_delivery: DeliveryServiceType = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryServiceType_videotex_delivery
 * @constant
 * @type {number}
 */
export const videotex_delivery: DeliveryServiceType = DeliveryServiceType_videotex_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryServiceType_telephone_delivery
 * @constant
 * @type {number}
 */
export const DeliveryServiceType_telephone_delivery: DeliveryServiceType = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryServiceType_telephone_delivery
 * @constant
 * @type {number}
 */
export const telephone_delivery: DeliveryServiceType = DeliveryServiceType_telephone_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryServiceType_other_delivery
 * @constant
 * @type {number}
 */
export const DeliveryServiceType_other_delivery: DeliveryServiceType = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryServiceType_other_delivery
 * @constant
 * @type {number}
 */
export const other_delivery: DeliveryServiceType = DeliveryServiceType_other_delivery; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_DeliveryServiceType = $._decodeInteger;


export const _encode_DeliveryServiceType = $._encodeInteger;


/* eslint-enable */
