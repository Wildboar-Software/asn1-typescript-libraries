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
 * @summary PropertyList_addRemove
 * @description
 *
 * GDMO `ADD` / `REMOVE` / `ADD-REMOVE` for set-valued attributes.
 * `aDD(0)` — Add member; `rEMOVE(1)` — Remove member;
 * `aDD-REMOVE(2)` — both. ITU-T Rec. X.750 (10/96)
 * [A.3.5](https://www.itu.int/rec/T-REC-X.750-199610-I). X.722 Amd.1 (11/95)
 * [item 6](https://www.itu.int/rec/T-REC-X.722-199511-I).
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
 * @description
 *
 * ADD: Add member. X.722 Amd.1 item 6.
 * @constant
 * @type {number}
 */
export const PropertyList_addRemove_aDD =
    PropertyList_addRemove.aDD satisfies PropertyList_addRemove; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary aDD
 * @description
 *
 * ADD. Same as `PropertyList_addRemove_aDD`.
 * @constant
 * @type {number}
 */
export const aDD =
    PropertyList_addRemove.aDD satisfies PropertyList_addRemove; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary PropertyList_addRemove_rEMOVE
 * @description
 *
 * REMOVE: Remove member. X.722 Amd.1 item 6.
 * @constant
 * @type {number}
 */
export const PropertyList_addRemove_rEMOVE =
    PropertyList_addRemove.rEMOVE satisfies PropertyList_addRemove; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary rEMOVE
 * @description
 *
 * REMOVE. Same as `PropertyList_addRemove_rEMOVE`.
 * @constant
 * @type {number}
 */
export const rEMOVE =
    PropertyList_addRemove.rEMOVE satisfies PropertyList_addRemove; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary PropertyList_addRemove_aDD_REMOVE
 * @description
 *
 * ADD-REMOVE: both ADD and REMOVE. X.722 Amd.1 item 6.
 * @constant
 * @type {number}
 */
export const PropertyList_addRemove_aDD_REMOVE =
    PropertyList_addRemove.aDD_REMOVE satisfies PropertyList_addRemove; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary aDD_REMOVE
 * @description
 *
 * ADD-REMOVE. Same as `PropertyList_addRemove_aDD_REMOVE`.
 * @constant
 * @type {number}
 */
export const aDD_REMOVE =
    PropertyList_addRemove.aDD_REMOVE satisfies PropertyList_addRemove; /* SHORT_NAMED_ENUMERATED_VALUE */




export function _decode_PropertyList_addRemove(el: _Element): PropertyList_addRemove {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case PropertyList_addRemove.aDD: return PropertyList_addRemove.aDD;
        case PropertyList_addRemove.rEMOVE: return PropertyList_addRemove.rEMOVE;
        case PropertyList_addRemove.aDD_REMOVE: return PropertyList_addRemove.aDD_REMOVE;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for PropertyList_addRemove.',
                el,
            );
    }
}




export const _encode_PropertyList_addRemove: $.ASN1Encoder<PropertyList_addRemove> = $._encodeEnumerated as $.ASN1Encoder<PropertyList_addRemove>;


/* eslint-enable */
