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
  RDNSequence,
  _decode_RDNSequence,
  _encode_RDNSequence,
} from '../CMIP-1/RDNSequence.ta';
export {
  RDNSequence,
  _decode_RDNSequence,
  _encode_RDNSequence,
} from '../CMIP-1/RDNSequence.ta';

/* START_OF_SYMBOL_DEFINITION DistinguishedName */
/**
 * @summary DistinguishedName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DistinguishedName  ::=  RDNSequence
 * ```
 */
export type DistinguishedName = RDNSequence; // DefinedType
/* END_OF_SYMBOL_DEFINITION DistinguishedName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DistinguishedName */
let _cached_decoder_for_DistinguishedName: $.ASN1Decoder<DistinguishedName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DistinguishedName */

/* START_OF_SYMBOL_DEFINITION _decode_DistinguishedName */
/**
 * @summary Decodes an ASN.1 element into a(n) DistinguishedName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DistinguishedName} The decoded data structure.
 */
export function _decode_DistinguishedName(el: _Element) {
  if (!_cached_decoder_for_DistinguishedName) {
    _cached_decoder_for_DistinguishedName = _decode_RDNSequence;
  }
  return _cached_decoder_for_DistinguishedName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DistinguishedName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DistinguishedName */
let _cached_encoder_for_DistinguishedName: $.ASN1Encoder<DistinguishedName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DistinguishedName */

/* START_OF_SYMBOL_DEFINITION _encode_DistinguishedName */
/**
 * @summary Encodes a(n) DistinguishedName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DistinguishedName, encoded as an ASN.1 Element.
 */
export function _encode_DistinguishedName(
  value: DistinguishedName,
  elGetter: $.ASN1Encoder<DistinguishedName>
) {
  if (!_cached_encoder_for_DistinguishedName) {
    _cached_encoder_for_DistinguishedName = _encode_RDNSequence;
  }
  return _cached_encoder_for_DistinguishedName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DistinguishedName */

/* eslint-enable */
