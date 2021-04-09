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
  ASO_context_name,
  _decode_ASO_context_name,
  _encode_ASO_context_name,
} from '../ACSE-1/ASO-context-name.ta';
export {
  ASO_context_name,
  _decode_ASO_context_name,
  _encode_ASO_context_name,
} from '../ACSE-1/ASO-context-name.ta';

/* START_OF_SYMBOL_DEFINITION ASO_context_name_list */
/**
 * @summary ASO_context_name_list
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ASO-context-name-list  ::=  SEQUENCE OF ASO-context-name
 * ```
 */
export type ASO_context_name_list = ASO_context_name[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION ASO_context_name_list */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ASO_context_name_list */
let _cached_decoder_for_ASO_context_name_list: $.ASN1Decoder<ASO_context_name_list> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ASO_context_name_list */

/* START_OF_SYMBOL_DEFINITION _decode_ASO_context_name_list */
/**
 * @summary Decodes an ASN.1 element into a(n) ASO_context_name_list
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ASO_context_name_list} The decoded data structure.
 */
export function _decode_ASO_context_name_list(el: _Element) {
  if (!_cached_decoder_for_ASO_context_name_list) {
    _cached_decoder_for_ASO_context_name_list = $._decodeSequenceOf<ASO_context_name>(
      () => _decode_ASO_context_name
    );
  }
  return _cached_decoder_for_ASO_context_name_list(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ASO_context_name_list */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ASO_context_name_list */
let _cached_encoder_for_ASO_context_name_list: $.ASN1Encoder<ASO_context_name_list> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ASO_context_name_list */

/* START_OF_SYMBOL_DEFINITION _encode_ASO_context_name_list */
/**
 * @summary Encodes a(n) ASO_context_name_list into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ASO_context_name_list, encoded as an ASN.1 Element.
 */
export function _encode_ASO_context_name_list(
  value: ASO_context_name_list,
  elGetter: $.ASN1Encoder<ASO_context_name_list>
) {
  if (!_cached_encoder_for_ASO_context_name_list) {
    _cached_encoder_for_ASO_context_name_list = $._encodeSequenceOf<ASO_context_name>(
      () => _encode_ASO_context_name,
      $.BER
    );
  }
  return _cached_encoder_for_ASO_context_name_list(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ASO_context_name_list */

/* eslint-enable */
