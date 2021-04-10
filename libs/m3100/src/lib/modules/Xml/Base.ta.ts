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
import { AnyURI, _decode_AnyURI, _encode_AnyURI } from '../XSD/AnyURI.ta';
export { AnyURI, _decode_AnyURI, _encode_AnyURI } from '../XSD/AnyURI.ta';

/* START_OF_SYMBOL_DEFINITION Base */
/**
 * @summary Base
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Base  ::=  AnyURI
 * ```
 */
export type Base = AnyURI; // DefinedType
/* END_OF_SYMBOL_DEFINITION Base */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Base */
let _cached_decoder_for_Base: $.ASN1Decoder<Base> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Base */

/* START_OF_SYMBOL_DEFINITION _decode_Base */
/**
 * @summary Decodes an ASN.1 element into a(n) Base
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Base} The decoded data structure.
 */
export function _decode_Base(el: _Element) {
  if (!_cached_decoder_for_Base) {
    _cached_decoder_for_Base = _decode_AnyURI;
  }
  return _cached_decoder_for_Base(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Base */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Base */
let _cached_encoder_for_Base: $.ASN1Encoder<Base> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Base */

/* START_OF_SYMBOL_DEFINITION _encode_Base */
/**
 * @summary Encodes a(n) Base into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Base, encoded as an ASN.1 Element.
 */
export function _encode_Base(value: Base, elGetter: $.ASN1Encoder<Base>) {
  if (!_cached_encoder_for_Base) {
    _cached_encoder_for_Base = _encode_AnyURI;
  }
  return _cached_encoder_for_Base(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Base */

/* eslint-enable */
