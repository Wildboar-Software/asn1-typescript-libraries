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
 * @summary PropertyList_getReplace
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PropertyList-getReplace ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_PropertyList_getReplace {
    gET = 0,
    rEPLACE = 1,
    gET_REPLACE = 2,
}


/**
 * @summary PropertyList_getReplace
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PropertyList-getReplace ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type PropertyList_getReplace = _enum_for_PropertyList_getReplace;


/**
 * @summary PropertyList_getReplace
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PropertyList-getReplace ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export const PropertyList_getReplace = _enum_for_PropertyList_getReplace;


/**
 * @summary PropertyList_getReplace_gET
 * @constant
 * @type {number}
 */
export const PropertyList_getReplace_gET: PropertyList_getReplace =
    PropertyList_getReplace.gET; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary gET
 * @constant
 * @type {number}
 */
export const gET: PropertyList_getReplace =
    PropertyList_getReplace.gET; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary PropertyList_getReplace_rEPLACE
 * @constant
 * @type {number}
 */
export const PropertyList_getReplace_rEPLACE: PropertyList_getReplace =
    PropertyList_getReplace.rEPLACE; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary rEPLACE
 * @constant
 * @type {number}
 */
export const rEPLACE: PropertyList_getReplace =
    PropertyList_getReplace.rEPLACE; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary PropertyList_getReplace_gET_REPLACE
 * @constant
 * @type {number}
 */
export const PropertyList_getReplace_gET_REPLACE: PropertyList_getReplace =
    PropertyList_getReplace.gET_REPLACE; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary gET_REPLACE
 * @constant
 * @type {number}
 */
export const gET_REPLACE: PropertyList_getReplace =
    PropertyList_getReplace.gET_REPLACE; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_PropertyList_getReplace = $._decodeEnumerated;




export const _encode_PropertyList_getReplace = $._encodeEnumerated;


/* eslint-enable */
