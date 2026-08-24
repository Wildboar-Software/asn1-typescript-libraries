/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary HierarchySelections
 * @description
 *
 * Bits combinable. DEFAULT `{self}` on Search. Ignored if the matched
 * entry is not in a hierarchical group. Never return the same entry
 * twice. `self`-only ≡ no extra hierarchy. `children`/`parent`/
 * `hierarchy`/`top`/`subtree`/`siblings`/`siblingChildren`/
 * `siblingSubtree` without `self` ⇒ do not return the matched entry
 * (except `top` if the matched entry is the top). `all` = whole group.
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
 * @description
 *
 * (0) Return the matched entry. Alone ≡ no extra hierarchy.
 *
 * @constant
 */
export const HierarchySelections_self: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary self
 * @description
 *
 * (0) Return the matched entry. Alone ≡ no extra hierarchy.
 *
 * @constant
 */
export const self: number = HierarchySelections_self; /* SHORT_NAMED_BIT */

/**
 * @summary HierarchySelections_children
 * @description
 *
 * (1) Immediately hierarchical children. Without `self` ⇒ do not return
 * the matched entry.
 *
 * @constant
 */
export const HierarchySelections_children: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary children
 * @description
 *
 * (1) Immediately hierarchical children. Without `self` ⇒ do not return
 * the matched entry.
 *
 * @constant
 */
export const children: number = HierarchySelections_children; /* SHORT_NAMED_BIT */

/**
 * @summary HierarchySelections_parent
 * @description
 *
 * (2) Immediate hierarchical parent. Without `self` ⇒ do not return the
 * matched entry.
 *
 * @constant
 */
export const HierarchySelections_parent: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary parent
 * @description
 *
 * (2) Immediate hierarchical parent. Without `self` ⇒ do not return the
 * matched entry.
 *
 * @constant
 */
export const parent: number = HierarchySelections_parent; /* SHORT_NAMED_BIT */

/**
 * @summary HierarchySelections_hierarchy
 * @description
 *
 * (3) All hierarchical parents. Without `self` ⇒ do not return the
 * matched entry.
 *
 * @constant
 */
export const HierarchySelections_hierarchy: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary hierarchy
 * @description
 *
 * (3) All hierarchical parents. Without `self` ⇒ do not return the
 * matched entry.
 *
 * @constant
 */
export const hierarchy: number = HierarchySelections_hierarchy; /* SHORT_NAMED_BIT */

/**
 * @summary HierarchySelections_top
 * @description
 *
 * (4) Hierarchical top. Without `self` ⇒ do not return the matched
 * entry unless it is the top.
 *
 * @constant
 */
export const HierarchySelections_top: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary top
 * @description
 *
 * (4) Hierarchical top. Without `self` ⇒ do not return the matched
 * entry unless it is the top.
 *
 * @constant
 */
export const top: number = HierarchySelections_top; /* SHORT_NAMED_BIT */

/**
 * @summary HierarchySelections_subtree
 * @description
 *
 * (5) All hierarchical children. Without `self` ⇒ do not return the
 * matched entry.
 *
 * @constant
 */
export const HierarchySelections_subtree: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary subtree
 * @description
 *
 * (5) All hierarchical children. Without `self` ⇒ do not return the
 * matched entry.
 *
 * @constant
 */
export const subtree: number = HierarchySelections_subtree; /* SHORT_NAMED_BIT */

/**
 * @summary HierarchySelections_siblings
 * @description
 *
 * (6) All hierarchical siblings. Without `self` ⇒ do not return the
 * matched entry.
 *
 * @constant
 */
export const HierarchySelections_siblings: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary siblings
 * @description
 *
 * (6) All hierarchical siblings. Without `self` ⇒ do not return the
 * matched entry.
 *
 * @constant
 */
export const siblings: number = HierarchySelections_siblings; /* SHORT_NAMED_BIT */

/**
 * @summary HierarchySelections_siblingChildren
 * @description
 *
 * (7) Immediate children of hierarchical siblings. Alone ⇒ do not
 * return the matched entry or its siblings.
 *
 * @constant
 */
export const HierarchySelections_siblingChildren: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary siblingChildren
 * @description
 *
 * (7) Immediate children of hierarchical siblings. Alone ⇒ do not
 * return the matched entry or its siblings.
 *
 * @constant
 */
export const siblingChildren: number = HierarchySelections_siblingChildren; /* SHORT_NAMED_BIT */

/**
 * @summary HierarchySelections_siblingSubtree
 * @description
 *
 * (8) All children of hierarchical siblings. Alone ⇒ do not return the
 * matched entry or its siblings.
 *
 * @constant
 */
export const HierarchySelections_siblingSubtree: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary siblingSubtree
 * @description
 *
 * (8) All children of hierarchical siblings. Alone ⇒ do not return the
 * matched entry or its siblings.
 *
 * @constant
 */
export const siblingSubtree: number = HierarchySelections_siblingSubtree; /* SHORT_NAMED_BIT */

/**
 * @summary HierarchySelections_all
 * @description
 *
 * (9) Whole hierarchical group.
 *
 * @constant
 */
export const HierarchySelections_all: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary all
 * @description
 *
 * (9) Whole hierarchical group.
 *
 * @constant
 */
export const all: number = HierarchySelections_all; /* SHORT_NAMED_BIT */


export const _decode_HierarchySelections = $._decodeBitString;


export const _encode_HierarchySelections = $._encodeBitString;


/* eslint-enable */
