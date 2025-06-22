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
 * @summary OverrideRestrictions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OverrideRestrictions  ::=  BIT STRING {
 *   override-content-types-restriction(0), override-EITs-restriction(1),
 *   override-attribute-length-restriction(2)}(SIZE (1..ub-restrictions))
 * ```
 */
export type OverrideRestrictions = BIT_STRING;

/**
 * @summary OverrideRestrictions_override_content_types_restriction
 * @constant
 */
export const OverrideRestrictions_override_content_types_restriction: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary override_content_types_restriction
 * @constant
 */
export const override_content_types_restriction: number = OverrideRestrictions_override_content_types_restriction; /* SHORT_NAMED_BIT */

/**
 * @summary OverrideRestrictions_override_EITs_restriction
 * @constant
 */
export const OverrideRestrictions_override_EITs_restriction: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary override_EITs_restriction
 * @constant
 */
export const override_EITs_restriction: number = OverrideRestrictions_override_EITs_restriction; /* SHORT_NAMED_BIT */

/**
 * @summary OverrideRestrictions_override_attribute_length_restriction
 * @constant
 */
export const OverrideRestrictions_override_attribute_length_restriction: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary override_attribute_length_restriction
 * @constant
 */
export const override_attribute_length_restriction: number = OverrideRestrictions_override_attribute_length_restriction; /* SHORT_NAMED_BIT */


export const _decode_OverrideRestrictions = $._decodeBitString;


export const _encode_OverrideRestrictions = $._encodeBitString;


/* eslint-enable */
