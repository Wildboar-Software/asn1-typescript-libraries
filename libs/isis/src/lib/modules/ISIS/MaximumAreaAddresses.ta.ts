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

/* START_OF_SYMBOL_DEFINITION MaximumAreaAddresses */
/**
 * @summary MaximumAreaAddresses
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MaximumAreaAddresses  ::=  INTEGER(0..254)
 * ```
 */
export type MaximumAreaAddresses = INTEGER;
/* END_OF_SYMBOL_DEFINITION MaximumAreaAddresses */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MaximumAreaAddresses */
let _cached_decoder_for_MaximumAreaAddresses: $.ASN1Decoder<MaximumAreaAddresses> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MaximumAreaAddresses */

/* START_OF_SYMBOL_DEFINITION _decode_MaximumAreaAddresses */
/**
 * @summary Decodes an ASN.1 element into a(n) MaximumAreaAddresses
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MaximumAreaAddresses} The decoded data structure.
 */
export function _decode_MaximumAreaAddresses(el: _Element) {
  if (!_cached_decoder_for_MaximumAreaAddresses) {
    _cached_decoder_for_MaximumAreaAddresses = $._decodeInteger;
  }
  return _cached_decoder_for_MaximumAreaAddresses(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MaximumAreaAddresses */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MaximumAreaAddresses */
let _cached_encoder_for_MaximumAreaAddresses: $.ASN1Encoder<MaximumAreaAddresses> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MaximumAreaAddresses */

/* START_OF_SYMBOL_DEFINITION _encode_MaximumAreaAddresses */
/**
 * @summary Encodes a(n) MaximumAreaAddresses into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MaximumAreaAddresses, encoded as an ASN.1 Element.
 */
export function _encode_MaximumAreaAddresses(
  value: MaximumAreaAddresses,
  elGetter: $.ASN1Encoder<MaximumAreaAddresses>
) {
  if (!_cached_encoder_for_MaximumAreaAddresses) {
    _cached_encoder_for_MaximumAreaAddresses = $._encodeInteger;
  }
  return _cached_encoder_for_MaximumAreaAddresses(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MaximumAreaAddresses */

/* eslint-enable */
