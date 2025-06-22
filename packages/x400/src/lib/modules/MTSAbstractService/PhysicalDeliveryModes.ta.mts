/* eslint-disable */
import {
    BIT_STRING,
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
 * @summary PhysicalDeliveryModes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalDeliveryModes  ::=  BIT STRING {
 *   ordinary-mail(0), special-delivery(1), express-mail(2),
 *   counter-collection(3), counter-collection-with-telephone-advice(4),
 *   counter-collection-with-telex-advice(5),
 *   counter-collection-with-teletex-advice(6), bureau-fax-delivery(7)
 *
 * -- bits 0 to 6 are mutually exclusive
 * -- bit 7 can be set independently of any of bits 0 to 6 --}
 * (SIZE (0..ub-bit-options))
 * ```
 */
export type PhysicalDeliveryModes = BIT_STRING;

/**
 * @summary PhysicalDeliveryModes_ordinary_mail
 * @constant
 */
export const PhysicalDeliveryModes_ordinary_mail: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary ordinary_mail
 * @constant
 */
export const ordinary_mail: number = PhysicalDeliveryModes_ordinary_mail; /* SHORT_NAMED_BIT */

/**
 * @summary PhysicalDeliveryModes_special_delivery
 * @constant
 */
export const PhysicalDeliveryModes_special_delivery: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary special_delivery
 * @constant
 */
export const special_delivery: number = PhysicalDeliveryModes_special_delivery; /* SHORT_NAMED_BIT */

/**
 * @summary PhysicalDeliveryModes_express_mail
 * @constant
 */
export const PhysicalDeliveryModes_express_mail: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary express_mail
 * @constant
 */
export const express_mail: number = PhysicalDeliveryModes_express_mail; /* SHORT_NAMED_BIT */

/**
 * @summary PhysicalDeliveryModes_counter_collection
 * @constant
 */
export const PhysicalDeliveryModes_counter_collection: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary counter_collection
 * @constant
 */
export const counter_collection: number = PhysicalDeliveryModes_counter_collection; /* SHORT_NAMED_BIT */

/**
 * @summary PhysicalDeliveryModes_counter_collection_with_telephone_advice
 * @constant
 */
export const PhysicalDeliveryModes_counter_collection_with_telephone_advice: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary counter_collection_with_telephone_advice
 * @constant
 */
export const counter_collection_with_telephone_advice: number = PhysicalDeliveryModes_counter_collection_with_telephone_advice; /* SHORT_NAMED_BIT */

/**
 * @summary PhysicalDeliveryModes_counter_collection_with_telex_advice
 * @constant
 */
export const PhysicalDeliveryModes_counter_collection_with_telex_advice: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary counter_collection_with_telex_advice
 * @constant
 */
export const counter_collection_with_telex_advice: number = PhysicalDeliveryModes_counter_collection_with_telex_advice; /* SHORT_NAMED_BIT */

/**
 * @summary PhysicalDeliveryModes_counter_collection_with_teletex_advice
 * @constant
 */
export const PhysicalDeliveryModes_counter_collection_with_teletex_advice: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary counter_collection_with_teletex_advice
 * @constant
 */
export const counter_collection_with_teletex_advice: number = PhysicalDeliveryModes_counter_collection_with_teletex_advice; /* SHORT_NAMED_BIT */

/**
 * @summary PhysicalDeliveryModes_bureau_fax_delivery
 * @constant
 */
export const PhysicalDeliveryModes_bureau_fax_delivery: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary bureau_fax_delivery
 * @constant
 */
export const bureau_fax_delivery: number = PhysicalDeliveryModes_bureau_fax_delivery; /* SHORT_NAMED_BIT */


export const _decode_PhysicalDeliveryModes = $._decodeBitString;


export const _encode_PhysicalDeliveryModes = $._encodeBitString;


/* eslint-enable */
