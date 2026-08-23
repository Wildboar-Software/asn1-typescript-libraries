/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ObjectClassKind
 * @description
 *
 * Kind of object class. Default in {@link OBJECT_CLASS} is `structural`.
 * - `abstract` (0): cannot itself be an entry's structural class (`top` is
 *   abstract). Used only as a superclass.
 * - `structural` (1): exactly one structural class (plus its superclasses)
 *   per entry; it determines name form and DIT structure rules.
 * - `auxiliary` (2): extra attributes; an entry may have several. Auxiliary
 *   classes do not participate in naming.
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
 * Kind of object class. Default in {@link OBJECT_CLASS} is `structural`.
 * - `abstract` (0): cannot itself be an entry's structural class (`top` is
 *   abstract). Used only as a superclass.
 * - `structural` (1): exactly one structural class (plus its superclasses)
 *   per entry; it determines name form and DIT structure rules.
 * - `auxiliary` (2): extra attributes; an entry may have several. Auxiliary
 *   classes do not participate in naming.
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
 * Kind of object class. Default in {@link OBJECT_CLASS} is `structural`.
 * See {@link _enum_for_ObjectClassKind}.
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
