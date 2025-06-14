/* eslint-disable */
import {
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

/* START_OF_SYMBOL_DEFINITION _enum_for_PropertyList_getReplace */
/**
 * @summary PropertyList_getReplace
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PropertyList-getReplace ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_PropertyList_getReplace {
    gET = 0,
    rEPLACE = 1,
    gET_REPLACE = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_PropertyList_getReplace */

/* START_OF_SYMBOL_DEFINITION PropertyList_getReplace */
/**
 * @summary PropertyList_getReplace
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PropertyList-getReplace ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type PropertyList_getReplace = _enum_for_PropertyList_getReplace;
/* END_OF_SYMBOL_DEFINITION PropertyList_getReplace */

/* START_OF_SYMBOL_DEFINITION PropertyList_getReplace */
/**
 * @summary PropertyList_getReplace
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PropertyList-getReplace ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const PropertyList_getReplace = _enum_for_PropertyList_getReplace;
/* END_OF_SYMBOL_DEFINITION PropertyList_getReplace */

/* START_OF_SYMBOL_DEFINITION PropertyList_getReplace_gET */
/**
 * @summary PropertyList_getReplace_gET
 * @constant
 * @type {number}
 */
export const PropertyList_getReplace_gET: PropertyList_getReplace =
    PropertyList_getReplace.gET; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PropertyList_getReplace_gET */

/* START_OF_SYMBOL_DEFINITION gET */
/**
 * @summary gET
 * @constant
 * @type {number}
 */
export const gET: PropertyList_getReplace =
    PropertyList_getReplace.gET; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION gET */

/* START_OF_SYMBOL_DEFINITION PropertyList_getReplace_rEPLACE */
/**
 * @summary PropertyList_getReplace_rEPLACE
 * @constant
 * @type {number}
 */
export const PropertyList_getReplace_rEPLACE: PropertyList_getReplace =
    PropertyList_getReplace.rEPLACE; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PropertyList_getReplace_rEPLACE */

/* START_OF_SYMBOL_DEFINITION rEPLACE */
/**
 * @summary rEPLACE
 * @constant
 * @type {number}
 */
export const rEPLACE: PropertyList_getReplace =
    PropertyList_getReplace.rEPLACE; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION rEPLACE */

/* START_OF_SYMBOL_DEFINITION PropertyList_getReplace_gET_REPLACE */
/**
 * @summary PropertyList_getReplace_gET_REPLACE
 * @constant
 * @type {number}
 */
export const PropertyList_getReplace_gET_REPLACE: PropertyList_getReplace =
    PropertyList_getReplace.gET_REPLACE; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PropertyList_getReplace_gET_REPLACE */

/* START_OF_SYMBOL_DEFINITION gET_REPLACE */
/**
 * @summary gET_REPLACE
 * @constant
 * @type {number}
 */
export const gET_REPLACE: PropertyList_getReplace =
    PropertyList_getReplace.gET_REPLACE; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION gET_REPLACE */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PropertyList_getReplace */
let _cached_decoder_for_PropertyList_getReplace: $.ASN1Decoder<PropertyList_getReplace> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PropertyList_getReplace */

/* START_OF_SYMBOL_DEFINITION _decode_PropertyList_getReplace */
/**
 * @summary Decodes an ASN.1 element into a(n) PropertyList_getReplace
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PropertyList_getReplace} The decoded data structure.
 */
export function _decode_PropertyList_getReplace(el: _Element) {
    if (!_cached_decoder_for_PropertyList_getReplace) {
        _cached_decoder_for_PropertyList_getReplace = $._decodeEnumerated;
    }
    return _cached_decoder_for_PropertyList_getReplace(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PropertyList_getReplace */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PropertyList_getReplace */
let _cached_encoder_for_PropertyList_getReplace: $.ASN1Encoder<PropertyList_getReplace> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PropertyList_getReplace */

/* START_OF_SYMBOL_DEFINITION _encode_PropertyList_getReplace */
/**
 * @summary Encodes a(n) PropertyList_getReplace into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PropertyList_getReplace, encoded as an ASN.1 Element.
 */
export function _encode_PropertyList_getReplace(
    value: PropertyList_getReplace,
    elGetter: $.ASN1Encoder<PropertyList_getReplace>
) {
    if (!_cached_encoder_for_PropertyList_getReplace) {
        _cached_encoder_for_PropertyList_getReplace = $._encodeEnumerated;
    }
    return _cached_encoder_for_PropertyList_getReplace(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PropertyList_getReplace */

/* eslint-enable */
