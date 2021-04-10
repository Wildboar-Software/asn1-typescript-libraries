/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';

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
let _cached_decoder_for_Any_sub_type: $.ASN1Decoder<Any_sub_type> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Any_sub_type */

/* START_OF_SYMBOL_DEFINITION _decode_Any_sub_type */
/**
 * @summary Decodes an ASN.1 element into a(n) Any_sub_type
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Any_sub_type} The decoded data structure.
 */
export function _decode_Any_sub_type(el: _Element) {
  if (!_cached_decoder_for_Any_sub_type) {
    _cached_decoder_for_Any_sub_type = $._decodeBitString;
  }
  return _cached_decoder_for_Any_sub_type(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Any_sub_type */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Any_sub_type */
let _cached_encoder_for_Any_sub_type: $.ASN1Encoder<Any_sub_type> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Any_sub_type */

/* START_OF_SYMBOL_DEFINITION _encode_Any_sub_type */
/**
 * @summary Encodes a(n) Any_sub_type into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Any_sub_type, encoded as an ASN.1 Element.
 */
export function _encode_Any_sub_type(
  value: Any_sub_type,
  elGetter: $.ASN1Encoder<Any_sub_type>
) {
  if (!_cached_encoder_for_Any_sub_type) {
    _cached_encoder_for_Any_sub_type = $._encodeBitString;
  }
  return _cached_encoder_for_Any_sub_type(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Any_sub_type */

/* eslint-enable */
