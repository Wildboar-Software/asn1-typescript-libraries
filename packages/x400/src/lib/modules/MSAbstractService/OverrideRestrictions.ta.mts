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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION OverrideRestrictions */
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
/* END_OF_SYMBOL_DEFINITION OverrideRestrictions */

/* START_OF_SYMBOL_DEFINITION OverrideRestrictions_override_content_types_restriction */
/**
 * @summary OverrideRestrictions_override_content_types_restriction
 * @constant
 */
export const OverrideRestrictions_override_content_types_restriction: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION OverrideRestrictions_override_content_types_restriction */

/* START_OF_SYMBOL_DEFINITION override_content_types_restriction */
/**
 * @summary override_content_types_restriction
 * @constant
 */
export const override_content_types_restriction: number = OverrideRestrictions_override_content_types_restriction; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION override_content_types_restriction */

/* START_OF_SYMBOL_DEFINITION OverrideRestrictions_override_EITs_restriction */
/**
 * @summary OverrideRestrictions_override_EITs_restriction
 * @constant
 */
export const OverrideRestrictions_override_EITs_restriction: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION OverrideRestrictions_override_EITs_restriction */

/* START_OF_SYMBOL_DEFINITION override_EITs_restriction */
/**
 * @summary override_EITs_restriction
 * @constant
 */
export const override_EITs_restriction: number = OverrideRestrictions_override_EITs_restriction; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION override_EITs_restriction */

/* START_OF_SYMBOL_DEFINITION OverrideRestrictions_override_attribute_length_restriction */
/**
 * @summary OverrideRestrictions_override_attribute_length_restriction
 * @constant
 */
export const OverrideRestrictions_override_attribute_length_restriction: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION OverrideRestrictions_override_attribute_length_restriction */

/* START_OF_SYMBOL_DEFINITION override_attribute_length_restriction */
/**
 * @summary override_attribute_length_restriction
 * @constant
 */
export const override_attribute_length_restriction: number = OverrideRestrictions_override_attribute_length_restriction; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION override_attribute_length_restriction */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OverrideRestrictions */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OverrideRestrictions */

/* START_OF_SYMBOL_DEFINITION _decode_OverrideRestrictions */
export const _decode_OverrideRestrictions = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_OverrideRestrictions */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OverrideRestrictions */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OverrideRestrictions */

/* START_OF_SYMBOL_DEFINITION _encode_OverrideRestrictions */
export const _encode_OverrideRestrictions = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_OverrideRestrictions */

/* eslint-enable */
