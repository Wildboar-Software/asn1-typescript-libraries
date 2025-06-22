/* eslint-disable */
import {
  BIT_STRING,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary Any_sub_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Any-sub-type  ::=  BIT STRING {
 *   left(6), right(5), thumb(4), pointer-finger(3), middle-finger(2),
 *   ring-finger(1), little-finger(0)}(SIZE (7))
 * ```
 */
export type Any_sub_type = BIT_STRING;

/**
 * @summary Any_sub_type_left
 * @constant
 */
export const Any_sub_type_left: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary left
 * @constant
 */
export const left: number = Any_sub_type_left; /* SHORT_NAMED_BIT */

/**
 * @summary Any_sub_type_right
 * @constant
 */
export const Any_sub_type_right: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary right
 * @constant
 */
export const right: number = Any_sub_type_right; /* SHORT_NAMED_BIT */

/**
 * @summary Any_sub_type_thumb
 * @constant
 */
export const Any_sub_type_thumb: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary thumb
 * @constant
 */
export const thumb: number = Any_sub_type_thumb; /* SHORT_NAMED_BIT */

/**
 * @summary Any_sub_type_pointer_finger
 * @constant
 */
export const Any_sub_type_pointer_finger: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary pointer_finger
 * @constant
 */
export const pointer_finger: number = Any_sub_type_pointer_finger; /* SHORT_NAMED_BIT */

/**
 * @summary Any_sub_type_middle_finger
 * @constant
 */
export const Any_sub_type_middle_finger: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary middle_finger
 * @constant
 */
export const middle_finger: number = Any_sub_type_middle_finger; /* SHORT_NAMED_BIT */

/**
 * @summary Any_sub_type_ring_finger
 * @constant
 */
export const Any_sub_type_ring_finger: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary ring_finger
 * @constant
 */
export const ring_finger: number = Any_sub_type_ring_finger; /* SHORT_NAMED_BIT */

/**
 * @summary Any_sub_type_little_finger
 * @constant
 */
export const Any_sub_type_little_finger: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary little_finger
 * @constant
 */
export const little_finger: number = Any_sub_type_little_finger; /* SHORT_NAMED_BIT */


export const _decode_Any_sub_type = $._decodeBitString;


export const _encode_Any_sub_type = $._encodeBitString;


/* eslint-enable */
