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

/* START_OF_SYMBOL_DEFINITION _enum_for_Direction */
/**
 * @summary Direction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Direction  ::=  ENUMERATED {incoming(0), outgoing(1)}
 * ```@enum {number}
 */
export enum _enum_for_Direction {
  incoming = 0,
  outgoing = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_Direction */

/* START_OF_SYMBOL_DEFINITION Direction */
/**
 * @summary Direction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Direction  ::=  ENUMERATED {incoming(0), outgoing(1)}
 * ```@enum {number}
 */
export type Direction = _enum_for_Direction;
/* END_OF_SYMBOL_DEFINITION Direction */

/* START_OF_SYMBOL_DEFINITION Direction */
/**
 * @summary Direction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Direction  ::=  ENUMERATED {incoming(0), outgoing(1)}
 * ```@enum {number}
 */
export const Direction = _enum_for_Direction;
/* END_OF_SYMBOL_DEFINITION Direction */

/* START_OF_SYMBOL_DEFINITION Direction_incoming */
/**
 * @summary Direction_incoming
 * @constant
 * @type {number}
 */
export const Direction_incoming: Direction =
  Direction.incoming; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Direction_incoming */

/* START_OF_SYMBOL_DEFINITION incoming */
/**
 * @summary incoming
 * @constant
 * @type {number}
 */
export const incoming: Direction =
  Direction.incoming; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION incoming */

/* START_OF_SYMBOL_DEFINITION Direction_outgoing */
/**
 * @summary Direction_outgoing
 * @constant
 * @type {number}
 */
export const Direction_outgoing: Direction =
  Direction.outgoing; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Direction_outgoing */

/* START_OF_SYMBOL_DEFINITION outgoing */
/**
 * @summary outgoing
 * @constant
 * @type {number}
 */
export const outgoing: Direction =
  Direction.outgoing; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION outgoing */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Direction */
let _cached_decoder_for_Direction: $.ASN1Decoder<Direction> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Direction */

/* START_OF_SYMBOL_DEFINITION _decode_Direction */
/**
 * @summary Decodes an ASN.1 element into a(n) Direction
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Direction} The decoded data structure.
 */
export function _decode_Direction(el: _Element) {
  if (!_cached_decoder_for_Direction) {
    _cached_decoder_for_Direction = $._decodeEnumerated;
  }
  return _cached_decoder_for_Direction(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Direction */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Direction */
let _cached_encoder_for_Direction: $.ASN1Encoder<Direction> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Direction */

/* START_OF_SYMBOL_DEFINITION _encode_Direction */
/**
 * @summary Encodes a(n) Direction into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Direction, encoded as an ASN.1 Element.
 */
export function _encode_Direction(
  value: Direction,
  elGetter: $.ASN1Encoder<Direction>
) {
  if (!_cached_encoder_for_Direction) {
    _cached_encoder_for_Direction = $._encodeEnumerated;
  }
  return _cached_encoder_for_Direction(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Direction */

/* eslint-enable */
