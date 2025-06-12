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
import { ENTITY, _decode_ENTITY, _encode_ENTITY } from '../XSD/ENTITY.ta.js';
export { ENTITY, _decode_ENTITY, _encode_ENTITY } from '../XSD/ENTITY.ta.js';

/* START_OF_SYMBOL_DEFINITION ENTITIES */
/**
 * @summary ENTITIES
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ENTITIES  ::=  SEQUENCE (SIZE(1..MAX)) OF ENTITY
 * ```
 */
export type ENTITIES = ENTITY[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION ENTITIES */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ENTITIES */
let _cached_decoder_for_ENTITIES: $.ASN1Decoder<ENTITIES> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ENTITIES */

/* START_OF_SYMBOL_DEFINITION _decode_ENTITIES */
/**
 * @summary Decodes an ASN.1 element into a(n) ENTITIES
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ENTITIES} The decoded data structure.
 */
export function _decode_ENTITIES(el: _Element) {
  if (!_cached_decoder_for_ENTITIES) {
    _cached_decoder_for_ENTITIES = $._decodeSequenceOf<ENTITY>(
      () => _decode_ENTITY
    );
  }
  return _cached_decoder_for_ENTITIES(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ENTITIES */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ENTITIES */
let _cached_encoder_for_ENTITIES: $.ASN1Encoder<ENTITIES> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ENTITIES */

/* START_OF_SYMBOL_DEFINITION _encode_ENTITIES */
/**
 * @summary Encodes a(n) ENTITIES into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ENTITIES, encoded as an ASN.1 Element.
 */
export function _encode_ENTITIES(
  value: ENTITIES,
  elGetter: $.ASN1Encoder<ENTITIES>
) {
  if (!_cached_encoder_for_ENTITIES) {
    _cached_encoder_for_ENTITIES = $._encodeSequenceOf<ENTITY>(
      () => _encode_ENTITY,
      $.BER
    );
  }
  return _cached_encoder_for_ENTITIES(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ENTITIES */

/* eslint-enable */
