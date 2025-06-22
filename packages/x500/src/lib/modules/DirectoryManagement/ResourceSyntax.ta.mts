/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ResourceSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResourceSyntax  ::=  INTEGER {
 *   insufficientMemory(0), insufficientAssociations(1), insufficientDiskSpace(2),
 *   miscellaneousResourceExhausted(4)}
 * ```
 */
export type ResourceSyntax = INTEGER;

/**
 * @summary ResourceSyntax_insufficientMemory
 * @constant
 * @type {number}
 */
export const ResourceSyntax_insufficientMemory: ResourceSyntax = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceSyntax_insufficientMemory
 * @constant
 * @type {number}
 */
export const insufficientMemory: ResourceSyntax = ResourceSyntax_insufficientMemory; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceSyntax_insufficientAssociations
 * @constant
 * @type {number}
 */
export const ResourceSyntax_insufficientAssociations: ResourceSyntax = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceSyntax_insufficientAssociations
 * @constant
 * @type {number}
 */
export const insufficientAssociations: ResourceSyntax = ResourceSyntax_insufficientAssociations; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceSyntax_insufficientDiskSpace
 * @constant
 * @type {number}
 */
export const ResourceSyntax_insufficientDiskSpace: ResourceSyntax = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceSyntax_insufficientDiskSpace
 * @constant
 * @type {number}
 */
export const insufficientDiskSpace: ResourceSyntax = ResourceSyntax_insufficientDiskSpace; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceSyntax_miscellaneousResourceExhausted
 * @constant
 * @type {number}
 */
export const ResourceSyntax_miscellaneousResourceExhausted: ResourceSyntax = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceSyntax_miscellaneousResourceExhausted
 * @constant
 * @type {number}
 */
export const miscellaneousResourceExhausted: ResourceSyntax = ResourceSyntax_miscellaneousResourceExhausted; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ResourceSyntax = $._decodeInteger;


export const _encode_ResourceSyntax = $._encodeInteger;


/* eslint-enable */
