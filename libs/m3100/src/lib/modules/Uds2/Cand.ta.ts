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
  Cand_Item,
  _decode_Cand_Item,
  _encode_Cand_Item,
} from '../Uds2/Cand-Item.ta';
export {
  Cand_Item,
  _decode_Cand_Item,
  _encode_Cand_Item,
} from '../Uds2/Cand-Item.ta';

/* START_OF_SYMBOL_DEFINITION Cand */
/**
 * @summary Cand
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Cand  ::=
 *   SEQUENCE (SIZE (1..MAX)) OF
 *     CHOICE {attributeType  AttributeType,
 *             or             Cor,
 *             not            AttributeCombinations}
 * ```
 */
export type Cand = Cand_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION Cand */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Cand */
let _cached_decoder_for_Cand: $.ASN1Decoder<Cand> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Cand */

/* START_OF_SYMBOL_DEFINITION _decode_Cand */
/**
 * @summary Decodes an ASN.1 element into a(n) Cand
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Cand} The decoded data structure.
 */
export function _decode_Cand(el: _Element) {
  if (!_cached_decoder_for_Cand) {
    _cached_decoder_for_Cand = $._decodeSequenceOf<Cand_Item>(
      () => _decode_Cand_Item
    );
  }
  return _cached_decoder_for_Cand(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Cand */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Cand */
let _cached_encoder_for_Cand: $.ASN1Encoder<Cand> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Cand */

/* START_OF_SYMBOL_DEFINITION _encode_Cand */
/**
 * @summary Encodes a(n) Cand into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Cand, encoded as an ASN.1 Element.
 */
export function _encode_Cand(value: Cand, elGetter: $.ASN1Encoder<Cand>) {
  if (!_cached_encoder_for_Cand) {
    _cached_encoder_for_Cand = $._encodeSequenceOf<Cand_Item>(
      () => _encode_Cand_Item,
      $.BER
    );
  }
  return _cached_encoder_for_Cand(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Cand */

/* eslint-enable */
