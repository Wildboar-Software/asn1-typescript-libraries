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

/* START_OF_SYMBOL_DEFINITION _enum_for_Space */
/**
 * @summary Space
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Space  ::=  ENUMERATED {default, preserve}
 * ```@enum {number}
 */
export enum _enum_for_Space {
  default_ = 0,
  preserve = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_Space */

/* START_OF_SYMBOL_DEFINITION Space */
/**
 * @summary Space
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Space  ::=  ENUMERATED {default, preserve}
 * ```@enum {number}
 */
export type Space = _enum_for_Space;
/* END_OF_SYMBOL_DEFINITION Space */

/* START_OF_SYMBOL_DEFINITION Space */
/**
 * @summary Space
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Space  ::=  ENUMERATED {default, preserve}
 * ```@enum {number}
 */
export const Space = _enum_for_Space;
/* END_OF_SYMBOL_DEFINITION Space */

/* START_OF_SYMBOL_DEFINITION Space_default_ */
/**
 * @summary Space_default_
 * @constant
 * @type {number}
 */
export const Space_default_: Space =
  Space.default_; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Space_default_ */

/* START_OF_SYMBOL_DEFINITION default_ */
/**
 * @summary default_
 * @constant
 * @type {number}
 */
export const default_: Space =
  Space.default_; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION default_ */

/* START_OF_SYMBOL_DEFINITION Space_preserve */
/**
 * @summary Space_preserve
 * @constant
 * @type {number}
 */
export const Space_preserve: Space =
  Space.preserve; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Space_preserve */

/* START_OF_SYMBOL_DEFINITION preserve */
/**
 * @summary preserve
 * @constant
 * @type {number}
 */
export const preserve: Space =
  Space.preserve; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION preserve */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Space */
let _cached_decoder_for_Space: $.ASN1Decoder<Space> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Space */

/* START_OF_SYMBOL_DEFINITION _decode_Space */
/**
 * @summary Decodes an ASN.1 element into a(n) Space
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Space} The decoded data structure.
 */
export function _decode_Space(el: _Element) {
  if (!_cached_decoder_for_Space) {
    _cached_decoder_for_Space = $._decodeEnumerated;
  }
  return _cached_decoder_for_Space(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Space */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Space */
let _cached_encoder_for_Space: $.ASN1Encoder<Space> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Space */

/* START_OF_SYMBOL_DEFINITION _encode_Space */
/**
 * @summary Encodes a(n) Space into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Space, encoded as an ASN.1 Element.
 */
export function _encode_Space(value: Space, elGetter: $.ASN1Encoder<Space>) {
  if (!_cached_encoder_for_Space) {
    _cached_encoder_for_Space = $._encodeEnumerated;
  }
  return _cached_encoder_for_Space(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Space */

/* eslint-enable */
