/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
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
export const ObjectClassKind_abstract =
    ObjectClassKind.abstract; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abstract
 * @constant
 * @type {number}
 */
export const abstract =
    ObjectClassKind.abstract; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ObjectClassKind_structural
 * @constant
 * @type {number}
 */
export const ObjectClassKind_structural =
    ObjectClassKind.structural; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary structural
 * @constant
 * @type {number}
 */
export const structural =
    ObjectClassKind.structural; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ObjectClassKind_auxiliary
 * @constant
 * @type {number}
 */
export const ObjectClassKind_auxiliary =
    ObjectClassKind.auxiliary; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary auxiliary
 * @constant
 * @type {number}
 */
export const auxiliary =
    ObjectClassKind.auxiliary; /* SHORT_NAMED_ENUMERATED_VALUE */


export function _decode_ObjectClassKind(el: _Element): ObjectClassKind {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case ObjectClassKind.abstract: return ObjectClassKind.abstract;
        case ObjectClassKind.structural: return ObjectClassKind.structural;
        case ObjectClassKind.auxiliary: return ObjectClassKind.auxiliary;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for ObjectClassKind.",
                el,
            );
    }
}


export const _encode_ObjectClassKind: $.ASN1Encoder<ObjectClassKind> = $._encodeEnumerated as $.ASN1Encoder<ObjectClassKind>;


/* eslint-enable */
