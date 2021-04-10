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
import { Ub128, _decode_Ub128, _encode_Ub128 } from '../Uds2/Ub128.ta';
export { Ub128, _decode_Ub128, _encode_Ub128 } from '../Uds2/Ub128.ta';

/* START_OF_SYMBOL_DEFINITION Locality */
/**
 * @summary Locality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Locality  ::=  Ub128
 * ```
 */
export type Locality = Ub128; // DefinedType
/* END_OF_SYMBOL_DEFINITION Locality */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Locality */
let _cached_decoder_for_Locality: $.ASN1Decoder<Locality> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Locality */

/* START_OF_SYMBOL_DEFINITION _decode_Locality */
/**
 * @summary Decodes an ASN.1 element into a(n) Locality
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Locality} The decoded data structure.
 */
export function _decode_Locality(el: _Element) {
  if (!_cached_decoder_for_Locality) {
    _cached_decoder_for_Locality = _decode_Ub128;
  }
  return _cached_decoder_for_Locality(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Locality */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Locality */
let _cached_encoder_for_Locality: $.ASN1Encoder<Locality> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Locality */

/* START_OF_SYMBOL_DEFINITION _encode_Locality */
/**
 * @summary Encodes a(n) Locality into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Locality, encoded as an ASN.1 Element.
 */
export function _encode_Locality(
  value: Locality,
  elGetter: $.ASN1Encoder<Locality>
) {
  if (!_cached_encoder_for_Locality) {
    _cached_encoder_for_Locality = _encode_Ub128;
  }
  return _cached_encoder_for_Locality(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Locality */

/* eslint-enable */
