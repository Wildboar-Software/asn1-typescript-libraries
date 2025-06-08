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
  PKIMessage,
  _decode_PKIMessage,
  _encode_PKIMessage,
} from '../PKIXCMP-2009/PKIMessage.ta';
export {
  PKIMessage,
  _decode_PKIMessage,
  _encode_PKIMessage,
} from '../PKIXCMP-2009/PKIMessage.ta';

/* START_OF_SYMBOL_DEFINITION PKIMessages */
/**
 * @summary PKIMessages
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKIMessages  ::=  SEQUENCE SIZE (1..MAX) OF PKIMessage
 * ```
 */
export type PKIMessages = PKIMessage[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION PKIMessages */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PKIMessages */
let _cached_decoder_for_PKIMessages: $.ASN1Decoder<PKIMessages> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PKIMessages */

/* START_OF_SYMBOL_DEFINITION _decode_PKIMessages */
/**
 * @summary Decodes an ASN.1 element into a(n) PKIMessages
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PKIMessages} The decoded data structure.
 */
export function _decode_PKIMessages(el: _Element) {
  if (!_cached_decoder_for_PKIMessages) {
    _cached_decoder_for_PKIMessages = $._decodeSequenceOf<PKIMessage>(
      () => _decode_PKIMessage
    );
  }
  return _cached_decoder_for_PKIMessages(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PKIMessages */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PKIMessages */
let _cached_encoder_for_PKIMessages: $.ASN1Encoder<PKIMessages> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PKIMessages */

/* START_OF_SYMBOL_DEFINITION _encode_PKIMessages */
/**
 * @summary Encodes a(n) PKIMessages into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKIMessages, encoded as an ASN.1 Element.
 */
export function _encode_PKIMessages(
  value: PKIMessages,
  elGetter: $.ASN1Encoder<PKIMessages>
) {
  if (!_cached_encoder_for_PKIMessages) {
    _cached_encoder_for_PKIMessages = $._encodeSequenceOf<PKIMessage>(
      () => _encode_PKIMessage,
      $.BER
    );
  }
  return _cached_encoder_for_PKIMessages(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PKIMessages */

/* eslint-enable */
