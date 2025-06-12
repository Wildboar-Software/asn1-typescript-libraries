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
  ASO_context_name,
  _decode_ASO_context_name,
  _encode_ASO_context_name,
} from '../ACSE-1/ASO-context-name.ta.js';
export {
  ASO_context_name,
  _decode_ASO_context_name,
  _encode_ASO_context_name,
} from '../ACSE-1/ASO-context-name.ta.js';

/* START_OF_SYMBOL_DEFINITION Application_context_name */
/**
 * @summary Application_context_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Application-context-name  ::=  ASO-context-name
 * ```
 */
export type Application_context_name = ASO_context_name; // DefinedType
/* END_OF_SYMBOL_DEFINITION Application_context_name */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Application_context_name */
let _cached_decoder_for_Application_context_name: $.ASN1Decoder<Application_context_name> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Application_context_name */

/* START_OF_SYMBOL_DEFINITION _decode_Application_context_name */
/**
 * @summary Decodes an ASN.1 element into a(n) Application_context_name
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Application_context_name} The decoded data structure.
 */
export function _decode_Application_context_name(el: _Element) {
  if (!_cached_decoder_for_Application_context_name) {
    _cached_decoder_for_Application_context_name = _decode_ASO_context_name;
  }
  return _cached_decoder_for_Application_context_name(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Application_context_name */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Application_context_name */
let _cached_encoder_for_Application_context_name: $.ASN1Encoder<Application_context_name> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Application_context_name */

/* START_OF_SYMBOL_DEFINITION _encode_Application_context_name */
/**
 * @summary Encodes a(n) Application_context_name into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Application_context_name, encoded as an ASN.1 Element.
 */
export function _encode_Application_context_name(
  value: Application_context_name,
  elGetter: $.ASN1Encoder<Application_context_name>
) {
  if (!_cached_encoder_for_Application_context_name) {
    _cached_encoder_for_Application_context_name = _encode_ASO_context_name;
  }
  return _cached_encoder_for_Application_context_name(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Application_context_name */

/* eslint-enable */
