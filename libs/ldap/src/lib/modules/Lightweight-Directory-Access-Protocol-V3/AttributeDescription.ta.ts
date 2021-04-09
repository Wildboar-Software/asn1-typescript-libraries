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
  LDAPString,
  _decode_LDAPString,
  _encode_LDAPString,
} from '../Lightweight-Directory-Access-Protocol-V3/LDAPString.ta';
export {
  LDAPString,
  _decode_LDAPString,
  _encode_LDAPString,
} from '../Lightweight-Directory-Access-Protocol-V3/LDAPString.ta';

/* START_OF_SYMBOL_DEFINITION AttributeDescription */
/**
 * @summary AttributeDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeDescription  ::=  LDAPString
 * ```
 */
export type AttributeDescription = LDAPString; // DefinedType
/* END_OF_SYMBOL_DEFINITION AttributeDescription */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeDescription */
let _cached_decoder_for_AttributeDescription: $.ASN1Decoder<AttributeDescription> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeDescription */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeDescription */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeDescription
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeDescription} The decoded data structure.
 */
export function _decode_AttributeDescription(el: _Element) {
  if (!_cached_decoder_for_AttributeDescription) {
    _cached_decoder_for_AttributeDescription = _decode_LDAPString;
  }
  return _cached_decoder_for_AttributeDescription(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeDescription */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeDescription */
let _cached_encoder_for_AttributeDescription: $.ASN1Encoder<AttributeDescription> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeDescription */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeDescription */
/**
 * @summary Encodes a(n) AttributeDescription into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeDescription, encoded as an ASN.1 Element.
 */
export function _encode_AttributeDescription(
  value: AttributeDescription,
  elGetter: $.ASN1Encoder<AttributeDescription>
) {
  if (!_cached_encoder_for_AttributeDescription) {
    _cached_encoder_for_AttributeDescription = _encode_LDAPString;
  }
  return _cached_encoder_for_AttributeDescription(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeDescription */

/* eslint-enable */
