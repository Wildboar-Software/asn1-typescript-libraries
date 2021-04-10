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
import {
  AttributeCombinations_Item,
  _decode_AttributeCombinations_Item,
  _encode_AttributeCombinations_Item,
} from '../Uds/AttributeCombinations-Item.ta';
export {
  AttributeCombinations_Item,
  _decode_AttributeCombinations_Item,
  _encode_AttributeCombinations_Item,
} from '../Uds/AttributeCombinations-Item.ta';

/* START_OF_SYMBOL_DEFINITION AttributeCombinations */
/**
 * @summary AttributeCombinations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeCombinations  ::=
 *   SEQUENCE (SIZE (1..MAX)) OF
 *     CHOICE {attributeType  AttributeType,
 *             or             Cor,
 *             not            AttributeCombinations}
 * ```
 */
export type AttributeCombinations = AttributeCombinations_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION AttributeCombinations */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeCombinations */
let _cached_decoder_for_AttributeCombinations: $.ASN1Decoder<AttributeCombinations> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeCombinations */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeCombinations */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeCombinations
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeCombinations} The decoded data structure.
 */
export function _decode_AttributeCombinations(el: _Element) {
  if (!_cached_decoder_for_AttributeCombinations) {
    _cached_decoder_for_AttributeCombinations = $._decodeSequenceOf<AttributeCombinations_Item>(
      () => _decode_AttributeCombinations_Item
    );
  }
  return _cached_decoder_for_AttributeCombinations(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeCombinations */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeCombinations */
let _cached_encoder_for_AttributeCombinations: $.ASN1Encoder<AttributeCombinations> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeCombinations */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeCombinations */
/**
 * @summary Encodes a(n) AttributeCombinations into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeCombinations, encoded as an ASN.1 Element.
 */
export function _encode_AttributeCombinations(
  value: AttributeCombinations,
  elGetter: $.ASN1Encoder<AttributeCombinations>
) {
  if (!_cached_encoder_for_AttributeCombinations) {
    _cached_encoder_for_AttributeCombinations = $._encodeSequenceOf<AttributeCombinations_Item>(
      () => _encode_AttributeCombinations_Item,
      $.BER
    );
  }
  return _cached_encoder_for_AttributeCombinations(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeCombinations */

/* eslint-enable */
