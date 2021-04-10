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
import { Filter, _decode_Filter, _encode_Filter } from '../Uds/Filter.ta';
export { Filter, _decode_Filter, _encode_Filter } from '../Uds/Filter.ta';

/* START_OF_SYMBOL_DEFINITION FilterNot */
/**
 * @summary FilterNot
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FilterNot  ::=  Filter
 * ```
 */
export type FilterNot = Filter; // DefinedType
/* END_OF_SYMBOL_DEFINITION FilterNot */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FilterNot */
let _cached_decoder_for_FilterNot: $.ASN1Decoder<FilterNot> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FilterNot */

/* START_OF_SYMBOL_DEFINITION _decode_FilterNot */
/**
 * @summary Decodes an ASN.1 element into a(n) FilterNot
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FilterNot} The decoded data structure.
 */
export function _decode_FilterNot(el: _Element) {
  if (!_cached_decoder_for_FilterNot) {
    _cached_decoder_for_FilterNot = _decode_Filter;
  }
  return _cached_decoder_for_FilterNot(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FilterNot */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FilterNot */
let _cached_encoder_for_FilterNot: $.ASN1Encoder<FilterNot> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FilterNot */

/* START_OF_SYMBOL_DEFINITION _encode_FilterNot */
/**
 * @summary Encodes a(n) FilterNot into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FilterNot, encoded as an ASN.1 Element.
 */
export function _encode_FilterNot(
  value: FilterNot,
  elGetter: $.ASN1Encoder<FilterNot>
) {
  if (!_cached_encoder_for_FilterNot) {
    _cached_encoder_for_FilterNot = _encode_Filter;
  }
  return _cached_encoder_for_FilterNot(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FilterNot */

/* eslint-enable */
