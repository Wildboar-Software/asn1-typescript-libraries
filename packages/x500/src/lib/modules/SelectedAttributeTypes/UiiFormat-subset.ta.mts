/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary UiiFormat_subset
 * @description
 *
 * Recommended Search subset. DEFAULT in UiiFormat is baseObject(0)
 * (unlike EnhancedGuide's oneLevel).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UiiFormat-subset ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_UiiFormat_subset {
    baseObject = 0,
    oneLevel = 1,
    wholeSubtree = 2,
}

/**
 * @summary UiiFormat_subset
 * @description
 *
 * Recommended Search subset. DEFAULT in UiiFormat is baseObject(0)
 * (unlike EnhancedGuide's oneLevel).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UiiFormat-subset ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type UiiFormat_subset = _enum_for_UiiFormat_subset;

/**
 * @summary UiiFormat_subset
 * @description
 *
 * Recommended Search subset. DEFAULT in UiiFormat is baseObject(0)
 * (unlike EnhancedGuide's oneLevel).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UiiFormat-subset ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export const UiiFormat_subset = _enum_for_UiiFormat_subset;

/**
 * @summary UiiFormat_subset_baseObject
 * @description
 *
 * DEFAULT in UiiFormat (unlike EnhancedGuide DEFAULT oneLevel).
 *
 * @constant
 * @type {number}
 */
export const UiiFormat_subset_baseObject: UiiFormat_subset =
    UiiFormat_subset.baseObject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary baseObject
 * @description
 *
 * DEFAULT in UiiFormat (unlike EnhancedGuide DEFAULT oneLevel).
 *
 * @constant
 * @type {number}
 */
export const baseObject: UiiFormat_subset =
    UiiFormat_subset.baseObject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UiiFormat_subset_oneLevel
 * @constant
 * @type {number}
 */
export const UiiFormat_subset_oneLevel: UiiFormat_subset =
    UiiFormat_subset.oneLevel; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneLevel
 * @constant
 * @type {number}
 */
export const oneLevel: UiiFormat_subset =
    UiiFormat_subset.oneLevel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UiiFormat_subset_wholeSubtree
 * @constant
 * @type {number}
 */
export const UiiFormat_subset_wholeSubtree: UiiFormat_subset =
    UiiFormat_subset.wholeSubtree; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wholeSubtree
 * @constant
 * @type {number}
 */
export const wholeSubtree: UiiFormat_subset =
    UiiFormat_subset.wholeSubtree; /* SHORT_NAMED_ENUMERATED_VALUE */


export function _decode_UiiFormat_subset(el: _Element): UiiFormat_subset {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case UiiFormat_subset.baseObject: return UiiFormat_subset.baseObject;
        case UiiFormat_subset.oneLevel: return UiiFormat_subset.oneLevel;
        case UiiFormat_subset.wholeSubtree: return UiiFormat_subset.wholeSubtree;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for UiiFormat_subset.",
                el,
            );
    }
}


export const _encode_UiiFormat_subset: $.ASN1Encoder<UiiFormat_subset> = $._encodeEnumerated as $.ASN1Encoder<UiiFormat_subset>;


/* eslint-enable */
