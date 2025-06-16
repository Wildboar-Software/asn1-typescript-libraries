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


/**
 * @summary PropertyList_addRemove
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PropertyList-addRemove ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export enum _enum_for_PropertyList_addRemove {
    aDD = 0,
    rEMOVE = 1,
    aDD_REMOVE = 2,
}


/**
 * @summary PropertyList_addRemove
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PropertyList-addRemove ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export type PropertyList_addRemove = _enum_for_PropertyList_addRemove;


/**
 * @summary PropertyList_addRemove
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PropertyList-addRemove ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export const PropertyList_addRemove = _enum_for_PropertyList_addRemove;


/**
 * @summary PropertyList_addRemove_aDD
 * @constant
 * @type {number}
 */
export const PropertyList_addRemove_aDD: PropertyList_addRemove =
    PropertyList_addRemove.aDD; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary aDD
 * @constant
 * @type {number}
 */
export const aDD: PropertyList_addRemove =
    PropertyList_addRemove.aDD; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary PropertyList_addRemove_rEMOVE
 * @constant
 * @type {number}
 */
export const PropertyList_addRemove_rEMOVE: PropertyList_addRemove =
    PropertyList_addRemove.rEMOVE; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary rEMOVE
 * @constant
 * @type {number}
 */
export const rEMOVE: PropertyList_addRemove =
    PropertyList_addRemove.rEMOVE; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary PropertyList_addRemove_aDD_REMOVE
 * @constant
 * @type {number}
 */
export const PropertyList_addRemove_aDD_REMOVE: PropertyList_addRemove =
    PropertyList_addRemove.aDD_REMOVE; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary aDD_REMOVE
 * @constant
 * @type {number}
 */
export const aDD_REMOVE: PropertyList_addRemove =
    PropertyList_addRemove.aDD_REMOVE; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_PropertyList_addRemove = $._decodeEnumerated;




export const _encode_PropertyList_addRemove = $._encodeEnumerated;


/* eslint-enable */
