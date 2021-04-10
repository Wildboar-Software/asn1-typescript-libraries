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
  SplitXCReply_Item,
  _decode_SplitXCReply_Item,
  _encode_SplitXCReply_Item,
} from '../M3100ASN1TypeModule6/SplitXCReply-Item.ta';
export {
  SplitXCReply_Item,
  _decode_SplitXCReply_Item,
  _encode_SplitXCReply_Item,
} from '../M3100ASN1TypeModule6/SplitXCReply-Item.ta';

/* START_OF_SYMBOL_DEFINITION SplitXCReply */
/**
 * @summary SplitXCReply
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SplitXCReply  ::=
 *   SEQUENCE OF
 *     CHOICE {failed   Failed,
 *             success  CoincidentUnidirectionalConnections}
 * ```
 */
export type SplitXCReply = SplitXCReply_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION SplitXCReply */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SplitXCReply */
let _cached_decoder_for_SplitXCReply: $.ASN1Decoder<SplitXCReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SplitXCReply */

/* START_OF_SYMBOL_DEFINITION _decode_SplitXCReply */
/**
 * @summary Decodes an ASN.1 element into a(n) SplitXCReply
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SplitXCReply} The decoded data structure.
 */
export function _decode_SplitXCReply(el: _Element) {
  if (!_cached_decoder_for_SplitXCReply) {
    _cached_decoder_for_SplitXCReply = $._decodeSequenceOf<SplitXCReply_Item>(
      () => _decode_SplitXCReply_Item
    );
  }
  return _cached_decoder_for_SplitXCReply(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SplitXCReply */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SplitXCReply */
let _cached_encoder_for_SplitXCReply: $.ASN1Encoder<SplitXCReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SplitXCReply */

/* START_OF_SYMBOL_DEFINITION _encode_SplitXCReply */
/**
 * @summary Encodes a(n) SplitXCReply into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SplitXCReply, encoded as an ASN.1 Element.
 */
export function _encode_SplitXCReply(
  value: SplitXCReply,
  elGetter: $.ASN1Encoder<SplitXCReply>
) {
  if (!_cached_encoder_for_SplitXCReply) {
    _cached_encoder_for_SplitXCReply = $._encodeSequenceOf<SplitXCReply_Item>(
      () => _encode_SplitXCReply_Item,
      $.BER
    );
  }
  return _cached_encoder_for_SplitXCReply(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SplitXCReply */

/* eslint-enable */
