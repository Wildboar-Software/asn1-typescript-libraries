/* eslint-disable */
import {
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
 * @summary PropertyList_getReplace
 * @description
 *
 * GDMO `GET` / `REPLACE` / `GET-REPLACE`. `gET(0)` — Get attribute
 * value; `rEPLACE(1)` — Replace attribute value and Create (if the
 * name binding supports Create); `gET-REPLACE(2)` — both. ITU-T Rec. X.750 (10/96) [A.3.5](https://www.itu.int/rec/T-REC-X.750-199610-I). X.722
 * Amd.1 (11/95)
 * [item 6](https://www.itu.int/rec/T-REC-X.722-199511-I).
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
export const PropertyList_getReplace: typeof _enum_for_PropertyList_getReplace = _enum_for_PropertyList_getReplace;


/**
 * @summary PropertyList_getReplace_gET
 * @description
 *
 * GET: attribute value may be read. X.722 Amd.1 item 6.
 * @constant
 * @type {number}
 */
export const PropertyList_getReplace_gET: _enum_for_PropertyList_getReplace.gET =
    PropertyList_getReplace.gET; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary gET
 * @description
 *
 * GET. Same as `PropertyList_getReplace_gET`.
 * @constant
 * @type {number}
 */
export const gET: _enum_for_PropertyList_getReplace.gET =
    PropertyList_getReplace.gET; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary PropertyList_getReplace_rEPLACE
 * @description
 *
 * REPLACE: attribute may be replaced and set by Create. X.722 Amd.1 item 6.
 * @constant
 * @type {number}
 */
export const PropertyList_getReplace_rEPLACE: _enum_for_PropertyList_getReplace.rEPLACE =
    PropertyList_getReplace.rEPLACE; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary rEPLACE
 * @description
 *
 * REPLACE. Same as `PropertyList_getReplace_rEPLACE`.
 * @constant
 * @type {number}
 */
export const rEPLACE: _enum_for_PropertyList_getReplace.rEPLACE =
    PropertyList_getReplace.rEPLACE; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary PropertyList_getReplace_gET_REPLACE
 * @description
 *
 * GET-REPLACE: both GET and REPLACE. X.722 Amd.1 item 6.
 * @constant
 * @type {number}
 */
export const PropertyList_getReplace_gET_REPLACE: _enum_for_PropertyList_getReplace.gET_REPLACE =
    PropertyList_getReplace.gET_REPLACE; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary gET_REPLACE
 * @description
 *
 * GET-REPLACE. Same as `PropertyList_getReplace_gET_REPLACE`.
 * @constant
 * @type {number}
 */
export const gET_REPLACE: _enum_for_PropertyList_getReplace.gET_REPLACE =
    PropertyList_getReplace.gET_REPLACE; /* SHORT_NAMED_ENUMERATED_VALUE */




export function _decode_PropertyList_getReplace(el: _Element): PropertyList_getReplace {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case PropertyList_getReplace.gET: return PropertyList_getReplace.gET;
        case PropertyList_getReplace.rEPLACE: return PropertyList_getReplace.rEPLACE;
        case PropertyList_getReplace.gET_REPLACE: return PropertyList_getReplace.gET_REPLACE;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for PropertyList_getReplace.',
                el,
            );
    }
}




export const _encode_PropertyList_getReplace: $.ASN1Encoder<PropertyList_getReplace> = $._encodeEnumerated as $.ASN1Encoder<PropertyList_getReplace>;


/* eslint-enable */
