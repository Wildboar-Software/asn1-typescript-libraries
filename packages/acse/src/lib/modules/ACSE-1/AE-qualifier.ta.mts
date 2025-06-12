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
  ASO_qualifier,
  _decode_ASO_qualifier,
  _encode_ASO_qualifier,
} from '../ACSE-1/ASO-qualifier.ta.mjs';
export {
  ASO_qualifier,
  _decode_ASO_qualifier,
  _encode_ASO_qualifier,
} from '../ACSE-1/ASO-qualifier.ta.mjs';

/* START_OF_SYMBOL_DEFINITION AE_qualifier */
/**
 * @summary AE_qualifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AE-qualifier  ::=  ASO-qualifier
 * ```
 */
export type AE_qualifier = ASO_qualifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION AE_qualifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AE_qualifier */
let _cached_decoder_for_AE_qualifier: $.ASN1Decoder<AE_qualifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AE_qualifier */

/* START_OF_SYMBOL_DEFINITION _decode_AE_qualifier */
/**
 * @summary Decodes an ASN.1 element into a(n) AE_qualifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AE_qualifier} The decoded data structure.
 */
export function _decode_AE_qualifier(el: _Element) {
  if (!_cached_decoder_for_AE_qualifier) {
    _cached_decoder_for_AE_qualifier = _decode_ASO_qualifier;
  }
  return _cached_decoder_for_AE_qualifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AE_qualifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AE_qualifier */
let _cached_encoder_for_AE_qualifier: $.ASN1Encoder<AE_qualifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AE_qualifier */

/* START_OF_SYMBOL_DEFINITION _encode_AE_qualifier */
/**
 * @summary Encodes a(n) AE_qualifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AE_qualifier, encoded as an ASN.1 Element.
 */
export function _encode_AE_qualifier(
  value: AE_qualifier,
  elGetter: $.ASN1Encoder<AE_qualifier>
) {
  if (!_cached_encoder_for_AE_qualifier) {
    _cached_encoder_for_AE_qualifier = _encode_ASO_qualifier;
  }
  return _cached_encoder_for_AE_qualifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AE_qualifier */

/* eslint-enable */
