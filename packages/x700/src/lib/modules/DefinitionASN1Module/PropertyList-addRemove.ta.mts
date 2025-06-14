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

/* START_OF_SYMBOL_DEFINITION _enum_for_PropertyList_addRemove */
/**
 * @summary PropertyList_addRemove
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PropertyList-addRemove ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_PropertyList_addRemove {
    aDD = 0,
    rEMOVE = 1,
    aDD_REMOVE = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_PropertyList_addRemove */

/* START_OF_SYMBOL_DEFINITION PropertyList_addRemove */
/**
 * @summary PropertyList_addRemove
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PropertyList-addRemove ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type PropertyList_addRemove = _enum_for_PropertyList_addRemove;
/* END_OF_SYMBOL_DEFINITION PropertyList_addRemove */

/* START_OF_SYMBOL_DEFINITION PropertyList_addRemove */
/**
 * @summary PropertyList_addRemove
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PropertyList-addRemove ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const PropertyList_addRemove = _enum_for_PropertyList_addRemove;
/* END_OF_SYMBOL_DEFINITION PropertyList_addRemove */

/* START_OF_SYMBOL_DEFINITION PropertyList_addRemove_aDD */
/**
 * @summary PropertyList_addRemove_aDD
 * @constant
 * @type {number}
 */
export const PropertyList_addRemove_aDD: PropertyList_addRemove =
    PropertyList_addRemove.aDD; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PropertyList_addRemove_aDD */

/* START_OF_SYMBOL_DEFINITION aDD */
/**
 * @summary aDD
 * @constant
 * @type {number}
 */
export const aDD: PropertyList_addRemove =
    PropertyList_addRemove.aDD; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION aDD */

/* START_OF_SYMBOL_DEFINITION PropertyList_addRemove_rEMOVE */
/**
 * @summary PropertyList_addRemove_rEMOVE
 * @constant
 * @type {number}
 */
export const PropertyList_addRemove_rEMOVE: PropertyList_addRemove =
    PropertyList_addRemove.rEMOVE; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PropertyList_addRemove_rEMOVE */

/* START_OF_SYMBOL_DEFINITION rEMOVE */
/**
 * @summary rEMOVE
 * @constant
 * @type {number}
 */
export const rEMOVE: PropertyList_addRemove =
    PropertyList_addRemove.rEMOVE; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION rEMOVE */

/* START_OF_SYMBOL_DEFINITION PropertyList_addRemove_aDD_REMOVE */
/**
 * @summary PropertyList_addRemove_aDD_REMOVE
 * @constant
 * @type {number}
 */
export const PropertyList_addRemove_aDD_REMOVE: PropertyList_addRemove =
    PropertyList_addRemove.aDD_REMOVE; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PropertyList_addRemove_aDD_REMOVE */

/* START_OF_SYMBOL_DEFINITION aDD_REMOVE */
/**
 * @summary aDD_REMOVE
 * @constant
 * @type {number}
 */
export const aDD_REMOVE: PropertyList_addRemove =
    PropertyList_addRemove.aDD_REMOVE; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION aDD_REMOVE */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PropertyList_addRemove */
let _cached_decoder_for_PropertyList_addRemove: $.ASN1Decoder<PropertyList_addRemove> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PropertyList_addRemove */

/* START_OF_SYMBOL_DEFINITION _decode_PropertyList_addRemove */
/**
 * @summary Decodes an ASN.1 element into a(n) PropertyList_addRemove
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PropertyList_addRemove} The decoded data structure.
 */
export function _decode_PropertyList_addRemove(el: _Element) {
    if (!_cached_decoder_for_PropertyList_addRemove) {
        _cached_decoder_for_PropertyList_addRemove = $._decodeEnumerated;
    }
    return _cached_decoder_for_PropertyList_addRemove(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PropertyList_addRemove */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PropertyList_addRemove */
let _cached_encoder_for_PropertyList_addRemove: $.ASN1Encoder<PropertyList_addRemove> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PropertyList_addRemove */

/* START_OF_SYMBOL_DEFINITION _encode_PropertyList_addRemove */
/**
 * @summary Encodes a(n) PropertyList_addRemove into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PropertyList_addRemove, encoded as an ASN.1 Element.
 */
export function _encode_PropertyList_addRemove(
    value: PropertyList_addRemove,
    elGetter: $.ASN1Encoder<PropertyList_addRemove>
) {
    if (!_cached_encoder_for_PropertyList_addRemove) {
        _cached_encoder_for_PropertyList_addRemove = $._encodeEnumerated;
    }
    return _cached_encoder_for_PropertyList_addRemove(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PropertyList_addRemove */

/* eslint-enable */
