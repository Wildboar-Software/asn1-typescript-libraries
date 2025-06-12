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
import {
  PollReqContent_Item,
  _decode_PollReqContent_Item,
  _encode_PollReqContent_Item,
} from '../PKIXCMP-2009/PollReqContent-Item.ta.js';
export {
  PollReqContent_Item,
  _decode_PollReqContent_Item,
  _encode_PollReqContent_Item,
} from '../PKIXCMP-2009/PollReqContent-Item.ta.js';

/* START_OF_SYMBOL_DEFINITION PollReqContent */
/**
 * @summary PollReqContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PollReqContent  ::=  SEQUENCE OF SEQUENCE {
 *     certReqId              INTEGER }
 * ```
 */
export type PollReqContent = PollReqContent_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION PollReqContent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PollReqContent */
let _cached_decoder_for_PollReqContent: $.ASN1Decoder<PollReqContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PollReqContent */

/* START_OF_SYMBOL_DEFINITION _decode_PollReqContent */
/**
 * @summary Decodes an ASN.1 element into a(n) PollReqContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PollReqContent} The decoded data structure.
 */
export function _decode_PollReqContent(el: _Element) {
  if (!_cached_decoder_for_PollReqContent) {
    _cached_decoder_for_PollReqContent = $._decodeSequenceOf<PollReqContent_Item>(
      () => _decode_PollReqContent_Item
    );
  }
  return _cached_decoder_for_PollReqContent(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PollReqContent */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PollReqContent */
let _cached_encoder_for_PollReqContent: $.ASN1Encoder<PollReqContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PollReqContent */

/* START_OF_SYMBOL_DEFINITION _encode_PollReqContent */
/**
 * @summary Encodes a(n) PollReqContent into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PollReqContent, encoded as an ASN.1 Element.
 */
export function _encode_PollReqContent(
  value: PollReqContent,
  elGetter: $.ASN1Encoder<PollReqContent>
) {
  if (!_cached_encoder_for_PollReqContent) {
    _cached_encoder_for_PollReqContent = $._encodeSequenceOf<PollReqContent_Item>(
      () => _encode_PollReqContent_Item,
      $.BER
    );
  }
  return _cached_encoder_for_PollReqContent(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PollReqContent */

/* eslint-enable */
