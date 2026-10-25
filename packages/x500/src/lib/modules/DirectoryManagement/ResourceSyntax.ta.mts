/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ResourceSyntax
 * @description
 *
 * INTEGER, not ENUMERATED. Notification parameter identifying an exhausted
 * resource. Named values are 0, 1, 2, and 4; there is no `3`.
 * `insufficientMemory`(0) is a named reason, not "unspecified".
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
 * @description
 *
 * Named reason `0`, not "unspecified".
 *
 * @constant
 * @type {number}
 */
export const ResourceSyntax_insufficientMemory: 0 = 0 satisfies ResourceSyntax; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceSyntax_insufficientMemory
 * @description
 *
 * Named reason `0`, not "unspecified".
 *
 * @constant
 * @type {number}
 */
export const insufficientMemory: 0 = ResourceSyntax_insufficientMemory; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceSyntax_insufficientAssociations
 * @constant
 * @type {number}
 */
export const ResourceSyntax_insufficientAssociations: 1 = 1 satisfies ResourceSyntax; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceSyntax_insufficientAssociations
 * @constant
 * @type {number}
 */
export const insufficientAssociations: 1 = ResourceSyntax_insufficientAssociations; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceSyntax_insufficientDiskSpace
 * @constant
 * @type {number}
 */
export const ResourceSyntax_insufficientDiskSpace: 2 = 2 satisfies ResourceSyntax; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceSyntax_insufficientDiskSpace
 * @constant
 * @type {number}
 */
export const insufficientDiskSpace: 2 = ResourceSyntax_insufficientDiskSpace; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceSyntax_miscellaneousResourceExhausted
 * @description
 *
 * Value 4; there is no ResourceSyntax 3.
 *
 * @constant
 * @type {number}
 */
export const ResourceSyntax_miscellaneousResourceExhausted: 4 = 4 satisfies ResourceSyntax; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceSyntax_miscellaneousResourceExhausted
 * @description
 *
 * Value 4; there is no ResourceSyntax 3.
 *
 * @constant
 * @type {number}
 */
export const miscellaneousResourceExhausted: 4 = ResourceSyntax_miscellaneousResourceExhausted; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ResourceSyntax: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_ResourceSyntax: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
