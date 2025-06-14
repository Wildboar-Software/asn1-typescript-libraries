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
let _cached_decoder_for_OverrideRestrictions: $.ASN1Decoder<OverrideRestrictions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OverrideRestrictions */

/* START_OF_SYMBOL_DEFINITION _decode_OverrideRestrictions */
/**
 * @summary Decodes an ASN.1 element into a(n) OverrideRestrictions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OverrideRestrictions} The decoded data structure.
 */
export function _decode_OverrideRestrictions(el: _Element) {
    if (!_cached_decoder_for_OverrideRestrictions) {
        _cached_decoder_for_OverrideRestrictions = $._decodeBitString;
    }
    return _cached_decoder_for_OverrideRestrictions(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OverrideRestrictions */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OverrideRestrictions */
let _cached_encoder_for_OverrideRestrictions: $.ASN1Encoder<OverrideRestrictions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OverrideRestrictions */

/* START_OF_SYMBOL_DEFINITION _encode_OverrideRestrictions */
/**
 * @summary Encodes a(n) OverrideRestrictions into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OverrideRestrictions, encoded as an ASN.1 Element.
 */
export function _encode_OverrideRestrictions(
    value: OverrideRestrictions,
    elGetter: $.ASN1Encoder<OverrideRestrictions>
) {
    if (!_cached_encoder_for_OverrideRestrictions) {
        _cached_encoder_for_OverrideRestrictions = $._encodeBitString;
    }
    return _cached_encoder_for_OverrideRestrictions(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OverrideRestrictions */

/* eslint-enable */
