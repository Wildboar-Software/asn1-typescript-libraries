/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary HierarchyLevel
 * @description
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
