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
  AttributeValueAssertion,
  _decode_AttributeValueAssertion,
  _encode_AttributeValueAssertion,
} from '../CMIP-1/AttributeValueAssertion.ta';
export {
  AttributeValueAssertion,
  _decode_AttributeValueAssertion,
  _encode_AttributeValueAssertion,
} from '../CMIP-1/AttributeValueAssertion.ta';

/* START_OF_SYMBOL_DEFINITION RelativeDistinguishedName */
/**
 * @summary RelativeDistinguishedName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RelativeDistinguishedName  ::=  SET OF AttributeValueAssertion
 * ```
 */
export type RelativeDistinguishedName = AttributeValueAssertion[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION RelativeDistinguishedName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RelativeDistinguishedName */
let _cached_decoder_for_RelativeDistinguishedName: $.ASN1Decoder<RelativeDistinguishedName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RelativeDistinguishedName */

/* START_OF_SYMBOL_DEFINITION _decode_RelativeDistinguishedName */
/**
 * @summary Decodes an ASN.1 element into a(n) RelativeDistinguishedName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RelativeDistinguishedName} The decoded data structure.
 */
export function _decode_RelativeDistinguishedName(el: _Element) {
  if (!_cached_decoder_for_RelativeDistinguishedName) {
    _cached_decoder_for_RelativeDistinguishedName = $._decodeSetOf<AttributeValueAssertion>(
      () => _decode_AttributeValueAssertion
    );
  }
  return _cached_decoder_for_RelativeDistinguishedName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RelativeDistinguishedName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RelativeDistinguishedName */
let _cached_encoder_for_RelativeDistinguishedName: $.ASN1Encoder<RelativeDistinguishedName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RelativeDistinguishedName */

/* START_OF_SYMBOL_DEFINITION _encode_RelativeDistinguishedName */
/**
 * @summary Encodes a(n) RelativeDistinguishedName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelativeDistinguishedName, encoded as an ASN.1 Element.
 */
export function _encode_RelativeDistinguishedName(
  value: RelativeDistinguishedName,
  elGetter: $.ASN1Encoder<RelativeDistinguishedName>
) {
  if (!_cached_encoder_for_RelativeDistinguishedName) {
    _cached_encoder_for_RelativeDistinguishedName = $._encodeSetOf<AttributeValueAssertion>(
      () => _encode_AttributeValueAssertion,
      $.BER
    );
  }
  return _cached_encoder_for_RelativeDistinguishedName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RelativeDistinguishedName */

/* eslint-enable */
