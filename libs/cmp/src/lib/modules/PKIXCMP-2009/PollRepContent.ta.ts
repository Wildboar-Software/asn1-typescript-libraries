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
  PollRepContent_Item,
  _decode_PollRepContent_Item,
  _encode_PollRepContent_Item,
} from '../PKIXCMP-2009/PollRepContent-Item.ta';
export {
  PollRepContent_Item,
  _decode_PollRepContent_Item,
  _encode_PollRepContent_Item,
} from '../PKIXCMP-2009/PollRepContent-Item.ta';

/* START_OF_SYMBOL_DEFINITION PollRepContent */
/**
 * @summary PollRepContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PollRepContent  ::=  SEQUENCE OF SEQUENCE {
 *     certReqId              INTEGER,
 *     checkAfter             INTEGER,  -- time in seconds
 *     reason                 PKIFreeText OPTIONAL }
 * ```
 */
export type PollRepContent = PollRepContent_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION PollRepContent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PollRepContent */
let _cached_decoder_for_PollRepContent: $.ASN1Decoder<PollRepContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PollRepContent */

/* START_OF_SYMBOL_DEFINITION _decode_PollRepContent */
/**
 * @summary Decodes an ASN.1 element into a(n) PollRepContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PollRepContent} The decoded data structure.
 */
export function _decode_PollRepContent(el: _Element) {
  if (!_cached_decoder_for_PollRepContent) {
    _cached_decoder_for_PollRepContent = $._decodeSequenceOf<PollRepContent_Item>(
      () => _decode_PollRepContent_Item
    );
  }
  return _cached_decoder_for_PollRepContent(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PollRepContent */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PollRepContent */
let _cached_encoder_for_PollRepContent: $.ASN1Encoder<PollRepContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PollRepContent */

/* START_OF_SYMBOL_DEFINITION _encode_PollRepContent */
/**
 * @summary Encodes a(n) PollRepContent into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PollRepContent, encoded as an ASN.1 Element.
 */
export function _encode_PollRepContent(
  value: PollRepContent,
  elGetter: $.ASN1Encoder<PollRepContent>
) {
  if (!_cached_encoder_for_PollRepContent) {
    _cached_encoder_for_PollRepContent = $._encodeSequenceOf<PollRepContent_Item>(
      () => _encode_PollRepContent_Item,
      $.BER
    );
  }
  return _cached_encoder_for_PollRepContent(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PollRepContent */

/* eslint-enable */
