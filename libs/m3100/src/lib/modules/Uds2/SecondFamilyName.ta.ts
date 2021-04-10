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

/* START_OF_SYMBOL_DEFINITION SecondFamilyName */
/**
 * @summary SecondFamilyName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecondFamilyName  ::=  Ub128
 * ```
 */
export type SecondFamilyName = Ub128; // DefinedType
/* END_OF_SYMBOL_DEFINITION SecondFamilyName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecondFamilyName */
let _cached_decoder_for_SecondFamilyName: $.ASN1Decoder<SecondFamilyName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecondFamilyName */

/* START_OF_SYMBOL_DEFINITION _decode_SecondFamilyName */
/**
 * @summary Decodes an ASN.1 element into a(n) SecondFamilyName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecondFamilyName} The decoded data structure.
 */
export function _decode_SecondFamilyName(el: _Element) {
  if (!_cached_decoder_for_SecondFamilyName) {
    _cached_decoder_for_SecondFamilyName = _decode_Ub128;
  }
  return _cached_decoder_for_SecondFamilyName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SecondFamilyName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecondFamilyName */
let _cached_encoder_for_SecondFamilyName: $.ASN1Encoder<SecondFamilyName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecondFamilyName */

/* START_OF_SYMBOL_DEFINITION _encode_SecondFamilyName */
/**
 * @summary Encodes a(n) SecondFamilyName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecondFamilyName, encoded as an ASN.1 Element.
 */
export function _encode_SecondFamilyName(
  value: SecondFamilyName,
  elGetter: $.ASN1Encoder<SecondFamilyName>
) {
  if (!_cached_encoder_for_SecondFamilyName) {
    _cached_encoder_for_SecondFamilyName = _encode_Ub128;
  }
  return _cached_encoder_for_SecondFamilyName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SecondFamilyName */

/* eslint-enable */
