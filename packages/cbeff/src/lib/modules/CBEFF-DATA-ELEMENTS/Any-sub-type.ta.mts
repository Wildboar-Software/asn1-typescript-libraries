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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION Any_sub_type */
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
/* END_OF_SYMBOL_DEFINITION Any_sub_type */

/* START_OF_SYMBOL_DEFINITION Any_sub_type_left */
/**
 * @summary Any_sub_type_left
 * @constant
 */
export const Any_sub_type_left: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Any_sub_type_left */

/* START_OF_SYMBOL_DEFINITION left */
/**
 * @summary left
 * @constant
 */
export const left: number = Any_sub_type_left; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION left */

/* START_OF_SYMBOL_DEFINITION Any_sub_type_right */
/**
 * @summary Any_sub_type_right
 * @constant
 */
export const Any_sub_type_right: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Any_sub_type_right */

/* START_OF_SYMBOL_DEFINITION right */
/**
 * @summary right
 * @constant
 */
export const right: number = Any_sub_type_right; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION right */

/* START_OF_SYMBOL_DEFINITION Any_sub_type_thumb */
/**
 * @summary Any_sub_type_thumb
 * @constant
 */
export const Any_sub_type_thumb: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Any_sub_type_thumb */

/* START_OF_SYMBOL_DEFINITION thumb */
/**
 * @summary thumb
 * @constant
 */
export const thumb: number = Any_sub_type_thumb; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION thumb */

/* START_OF_SYMBOL_DEFINITION Any_sub_type_pointer_finger */
/**
 * @summary Any_sub_type_pointer_finger
 * @constant
 */
export const Any_sub_type_pointer_finger: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Any_sub_type_pointer_finger */

/* START_OF_SYMBOL_DEFINITION pointer_finger */
/**
 * @summary pointer_finger
 * @constant
 */
export const pointer_finger: number = Any_sub_type_pointer_finger; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION pointer_finger */

/* START_OF_SYMBOL_DEFINITION Any_sub_type_middle_finger */
/**
 * @summary Any_sub_type_middle_finger
 * @constant
 */
export const Any_sub_type_middle_finger: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Any_sub_type_middle_finger */

/* START_OF_SYMBOL_DEFINITION middle_finger */
/**
 * @summary middle_finger
 * @constant
 */
export const middle_finger: number = Any_sub_type_middle_finger; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION middle_finger */

/* START_OF_SYMBOL_DEFINITION Any_sub_type_ring_finger */
/**
 * @summary Any_sub_type_ring_finger
 * @constant
 */
export const Any_sub_type_ring_finger: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Any_sub_type_ring_finger */

/* START_OF_SYMBOL_DEFINITION ring_finger */
/**
 * @summary ring_finger
 * @constant
 */
export const ring_finger: number = Any_sub_type_ring_finger; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ring_finger */

/* START_OF_SYMBOL_DEFINITION Any_sub_type_little_finger */
/**
 * @summary Any_sub_type_little_finger
 * @constant
 */
export const Any_sub_type_little_finger: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Any_sub_type_little_finger */

/* START_OF_SYMBOL_DEFINITION little_finger */
/**
 * @summary little_finger
 * @constant
 */
export const little_finger: number = Any_sub_type_little_finger; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION little_finger */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Any_sub_type */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Any_sub_type */

/* START_OF_SYMBOL_DEFINITION _decode_Any_sub_type */
export const _decode_Any_sub_type = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_Any_sub_type */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Any_sub_type */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Any_sub_type */

/* START_OF_SYMBOL_DEFINITION _encode_Any_sub_type */
export const _encode_Any_sub_type = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_Any_sub_type */

/* eslint-enable */
