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
import { Ub1024, _decode_Ub1024, _encode_Ub1024 } from '../Uds/Ub1024.ta';
export { Ub1024, _decode_Ub1024, _encode_Ub1024 } from '../Uds/Ub1024.ta';

/* START_OF_SYMBOL_DEFINITION Url */
/**
 * @summary Url
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Url  ::=  Ub1024
 * ```
 */
export type Url = Ub1024; // DefinedType
/* END_OF_SYMBOL_DEFINITION Url */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Url */
let _cached_decoder_for_Url: $.ASN1Decoder<Url> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Url */

/* START_OF_SYMBOL_DEFINITION _decode_Url */
/**
 * @summary Decodes an ASN.1 element into a(n) Url
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Url} The decoded data structure.
 */
export function _decode_Url(el: _Element) {
  if (!_cached_decoder_for_Url) {
    _cached_decoder_for_Url = _decode_Ub1024;
  }
  return _cached_decoder_for_Url(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Url */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Url */
let _cached_encoder_for_Url: $.ASN1Encoder<Url> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Url */

/* START_OF_SYMBOL_DEFINITION _encode_Url */
/**
 * @summary Encodes a(n) Url into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Url, encoded as an ASN.1 Element.
 */
export function _encode_Url(value: Url, elGetter: $.ASN1Encoder<Url>) {
  if (!_cached_encoder_for_Url) {
    _cached_encoder_for_Url = _encode_Ub1024;
  }
  return _cached_encoder_for_Url(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Url */

/* eslint-enable */
