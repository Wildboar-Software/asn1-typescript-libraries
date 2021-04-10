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
  Cor_Item,
  _decode_Cor_Item,
  _encode_Cor_Item,
} from '../Uds2/Cor-Item.ta';
export {
  Cor_Item,
  _decode_Cor_Item,
  _encode_Cor_Item,
} from '../Uds2/Cor-Item.ta';

/* START_OF_SYMBOL_DEFINITION Cor */
/**
 * @summary Cor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Cor  ::=
 *   SEQUENCE (SIZE (1..MAX)) OF
 *     CHOICE {attributeType  AttributeType,
 *             and            Cand,
 *             not            AttributeCombinations}
 * ```
 */
export type Cor = Cor_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION Cor */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Cor */
let _cached_decoder_for_Cor: $.ASN1Decoder<Cor> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Cor */

/* START_OF_SYMBOL_DEFINITION _decode_Cor */
/**
 * @summary Decodes an ASN.1 element into a(n) Cor
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Cor} The decoded data structure.
 */
export function _decode_Cor(el: _Element) {
  if (!_cached_decoder_for_Cor) {
    _cached_decoder_for_Cor = $._decodeSequenceOf<Cor_Item>(
      () => _decode_Cor_Item
    );
  }
  return _cached_decoder_for_Cor(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Cor */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Cor */
let _cached_encoder_for_Cor: $.ASN1Encoder<Cor> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Cor */

/* START_OF_SYMBOL_DEFINITION _encode_Cor */
/**
 * @summary Encodes a(n) Cor into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Cor, encoded as an ASN.1 Element.
 */
export function _encode_Cor(value: Cor, elGetter: $.ASN1Encoder<Cor>) {
  if (!_cached_encoder_for_Cor) {
    _cached_encoder_for_Cor = $._encodeSequenceOf<Cor_Item>(
      () => _encode_Cor_Item,
      $.BER
    );
  }
  return _cached_encoder_for_Cor(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Cor */

/* eslint-enable */
