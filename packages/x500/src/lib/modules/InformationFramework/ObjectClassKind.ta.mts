/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary ObjectClassKind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectClassKind  ::=  ENUMERATED {
 *   abstract   (0),
 *   structural (1),
 *   auxiliary  (2)}
 * ```
 * 
 * @enum {number}
 */
export enum _enum_for_ObjectClassKind {
    abstract = 0,
    structural = 1,
    auxiliary = 2,
}

/**
 * @summary ObjectClassKind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectClassKind  ::=  ENUMERATED {
 *   abstract   (0),
 *   structural (1),
 *   auxiliary  (2)}
 * ```
 * 
 * @enum {number}
 */
export type ObjectClassKind = _enum_for_ObjectClassKind;

/**
 * @summary ObjectClassKind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectClassKind  ::=  ENUMERATED {
 *   abstract   (0),
 *   structural (1),
 *   auxiliary  (2)}
 * ```
 * 
 * @enum {number}
 */
export const ObjectClassKind = _enum_for_ObjectClassKind;

/**
 * @summary ObjectClassKind_abstract
 * @constant
 * @type {number}
 */
export const ObjectClassKind_abstract: ObjectClassKind =
    ObjectClassKind.abstract; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abstract
 * @constant
 * @type {number}
 */
export const abstract: ObjectClassKind =
    ObjectClassKind.abstract; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ObjectClassKind_structural
 * @constant
 * @type {number}
 */
export const ObjectClassKind_structural: ObjectClassKind =
    ObjectClassKind.structural; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary structural
 * @constant
 * @type {number}
 */
export const structural: ObjectClassKind =
    ObjectClassKind.structural; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ObjectClassKind_auxiliary
 * @constant
 * @type {number}
 */
export const ObjectClassKind_auxiliary: ObjectClassKind =
    ObjectClassKind.auxiliary; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary auxiliary
 * @constant
 * @type {number}
 */
export const auxiliary: ObjectClassKind =
    ObjectClassKind.auxiliary; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_ObjectClassKind = $._decodeEnumerated;


export const _encode_ObjectClassKind = $._encodeEnumerated;


/* eslint-enable */
