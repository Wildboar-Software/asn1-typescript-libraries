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
import { Ub128, _decode_Ub128, _encode_Ub128 } from '../Uds/Ub128.ta';
export { Ub128, _decode_Ub128, _encode_Ub128 } from '../Uds/Ub128.ta';

/* START_OF_SYMBOL_DEFINITION StateOrProvince */
/**
 * @summary StateOrProvince
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * StateOrProvince  ::=  Ub128
 * ```
 */
export type StateOrProvince = Ub128; // DefinedType
/* END_OF_SYMBOL_DEFINITION StateOrProvince */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_StateOrProvince */
let _cached_decoder_for_StateOrProvince: $.ASN1Decoder<StateOrProvince> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_StateOrProvince */

/* START_OF_SYMBOL_DEFINITION _decode_StateOrProvince */
/**
 * @summary Decodes an ASN.1 element into a(n) StateOrProvince
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {StateOrProvince} The decoded data structure.
 */
export function _decode_StateOrProvince(el: _Element) {
  if (!_cached_decoder_for_StateOrProvince) {
    _cached_decoder_for_StateOrProvince = _decode_Ub128;
  }
  return _cached_decoder_for_StateOrProvince(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_StateOrProvince */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_StateOrProvince */
let _cached_encoder_for_StateOrProvince: $.ASN1Encoder<StateOrProvince> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_StateOrProvince */

/* START_OF_SYMBOL_DEFINITION _encode_StateOrProvince */
/**
 * @summary Encodes a(n) StateOrProvince into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StateOrProvince, encoded as an ASN.1 Element.
 */
export function _encode_StateOrProvince(
  value: StateOrProvince,
  elGetter: $.ASN1Encoder<StateOrProvince>
) {
  if (!_cached_encoder_for_StateOrProvince) {
    _cached_encoder_for_StateOrProvince = _encode_Ub128;
  }
  return _cached_encoder_for_StateOrProvince(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_StateOrProvince */

/* eslint-enable */
