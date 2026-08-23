/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary HierarchyLevel
 * @description
 *
 * Distance from this entry to the hierarchical-group top (the
 * `hierarchyParent` chain). The top has level `0`. A compound entry is one
 * vertex: the ancestor holds this operational attribute. An entry belongs
 * to at most one hierarchical group.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HierarchyLevel  ::=  INTEGER
 * ```
 */
export type HierarchyLevel = INTEGER;


export const _decode_HierarchyLevel = $._decodeInteger;


export const _encode_HierarchyLevel = $._encodeInteger;


/* eslint-enable */
