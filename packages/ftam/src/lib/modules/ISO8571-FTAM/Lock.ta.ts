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
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION Lock */
/**
 * @summary Lock
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Lock  ::=  INTEGER {not-required(0), shared(1), exclusive(2), no-access(3)}
 * ```
 */
export type Lock = INTEGER;
/* END_OF_SYMBOL_DEFINITION Lock */

/* START_OF_SYMBOL_DEFINITION Lock_not_required */
/**
 * @summary Lock_not_required
 * @constant
 * @type {number}
 */
export const Lock_not_required: Lock = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Lock_not_required */

/* START_OF_SYMBOL_DEFINITION not_required */
/**
 * @summary Lock_not_required
 * @constant
 * @type {number}
 */
export const not_required: Lock = Lock_not_required; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION not_required */

/* START_OF_SYMBOL_DEFINITION Lock_shared */
/**
 * @summary Lock_shared
 * @constant
 * @type {number}
 */
export const Lock_shared: Lock = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Lock_shared */

/* START_OF_SYMBOL_DEFINITION shared */
/**
 * @summary Lock_shared
 * @constant
 * @type {number}
 */
export const shared: Lock = Lock_shared; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION shared */

/* START_OF_SYMBOL_DEFINITION Lock_exclusive */
/**
 * @summary Lock_exclusive
 * @constant
 * @type {number}
 */
export const Lock_exclusive: Lock = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Lock_exclusive */

/* START_OF_SYMBOL_DEFINITION exclusive */
/**
 * @summary Lock_exclusive
 * @constant
 * @type {number}
 */
export const exclusive: Lock = Lock_exclusive; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION exclusive */

/* START_OF_SYMBOL_DEFINITION Lock_no_access */
/**
 * @summary Lock_no_access
 * @constant
 * @type {number}
 */
export const Lock_no_access: Lock = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Lock_no_access */

/* START_OF_SYMBOL_DEFINITION no_access */
/**
 * @summary Lock_no_access
 * @constant
 * @type {number}
 */
export const no_access: Lock = Lock_no_access; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION no_access */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Lock */
let _cached_decoder_for_Lock: $.ASN1Decoder<Lock> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Lock */

/* START_OF_SYMBOL_DEFINITION _decode_Lock */
/**
 * @summary Decodes an ASN.1 element into a(n) Lock
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Lock} The decoded data structure.
 */
export function _decode_Lock(el: _Element) {
  if (!_cached_decoder_for_Lock) {
    _cached_decoder_for_Lock = $._decodeInteger;
  }
  return _cached_decoder_for_Lock(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Lock */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Lock */
let _cached_encoder_for_Lock: $.ASN1Encoder<Lock> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Lock */

/* START_OF_SYMBOL_DEFINITION _encode_Lock */
/**
 * @summary Encodes a(n) Lock into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Lock, encoded as an ASN.1 Element.
 */
export function _encode_Lock(value: Lock, elGetter: $.ASN1Encoder<Lock>) {
  if (!_cached_encoder_for_Lock) {
    _cached_encoder_for_Lock = $._encodeInteger;
  }
  return _cached_encoder_for_Lock(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Lock */

/* eslint-enable */
