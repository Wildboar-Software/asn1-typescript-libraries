/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary HierarchySelections
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HierarchySelections  ::=  BIT STRING {
 *   self                  (0),
 *   children              (1),
 *   parent                (2),
 *   hierarchy             (3),
 *   top                   (4),
 *   subtree               (5),
 *   siblings              (6),
 *   siblingChildren       (7),
 *   siblingSubtree        (8),
 *   all                   (9) }
 * ```
 */
export type HierarchySelections = BIT_STRING;

/**
 * @summary HierarchySelections_self
 * @constant
 */
export const HierarchySelections_self: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary self
 * @constant
 */
export const self: number = HierarchySelections_self; /* SHORT_NAMED_BIT */

/**
 * @summary HierarchySelections_children
 * @constant
 */
export const HierarchySelections_children: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary children
 * @constant
 */
export const children: number = HierarchySelections_children; /* SHORT_NAMED_BIT */

/**
 * @summary HierarchySelections_parent
 * @constant
 */
export const HierarchySelections_parent: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary parent
 * @constant
 */
export const parent: number = HierarchySelections_parent; /* SHORT_NAMED_BIT */

/**
 * @summary HierarchySelections_hierarchy
 * @constant
 */
export const HierarchySelections_hierarchy: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary hierarchy
 * @constant
 */
export const hierarchy: number = HierarchySelections_hierarchy; /* SHORT_NAMED_BIT */

/**
 * @summary HierarchySelections_top
 * @constant
 */
export const HierarchySelections_top: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary top
 * @constant
 */
export const top: number = HierarchySelections_top; /* SHORT_NAMED_BIT */

/**
 * @summary HierarchySelections_subtree
 * @constant
 */
export const HierarchySelections_subtree: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary subtree
 * @constant
 */
export const subtree: number = HierarchySelections_subtree; /* SHORT_NAMED_BIT */

/**
 * @summary HierarchySelections_siblings
 * @constant
 */
export const HierarchySelections_siblings: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary siblings
 * @constant
 */
export const siblings: number = HierarchySelections_siblings; /* SHORT_NAMED_BIT */

/**
 * @summary HierarchySelections_siblingChildren
 * @constant
 */
export const HierarchySelections_siblingChildren: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary siblingChildren
 * @constant
 */
export const siblingChildren: number = HierarchySelections_siblingChildren; /* SHORT_NAMED_BIT */

/**
 * @summary HierarchySelections_siblingSubtree
 * @constant
 */
export const HierarchySelections_siblingSubtree: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary siblingSubtree
 * @constant
 */
export const siblingSubtree: number = HierarchySelections_siblingSubtree; /* SHORT_NAMED_BIT */

/**
 * @summary HierarchySelections_all
 * @constant
 */
export const HierarchySelections_all: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary all
 * @constant
 */
export const all: number = HierarchySelections_all; /* SHORT_NAMED_BIT */


export const _decode_HierarchySelections = $._decodeBitString;


export const _encode_HierarchySelections = $._encodeBitString;


/* eslint-enable */
