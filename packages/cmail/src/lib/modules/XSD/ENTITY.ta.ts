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
import { NCName, _decode_NCName, _encode_NCName } from '../XSD/NCName.ta.js';
export { NCName, _decode_NCName, _encode_NCName } from '../XSD/NCName.ta.js';

/* START_OF_SYMBOL_DEFINITION ENTITY */
/**
 * @summary ENTITY
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ENTITY  ::=  NCName
 * ```
 */
export type ENTITY = NCName; // DefinedType
/* END_OF_SYMBOL_DEFINITION ENTITY */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ENTITY */
let _cached_decoder_for_ENTITY: $.ASN1Decoder<ENTITY> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ENTITY */

/* START_OF_SYMBOL_DEFINITION _decode_ENTITY */
/**
 * @summary Decodes an ASN.1 element into a(n) ENTITY
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ENTITY} The decoded data structure.
 */
export function _decode_ENTITY(el: _Element) {
  if (!_cached_decoder_for_ENTITY) {
    _cached_decoder_for_ENTITY = _decode_NCName;
  }
  return _cached_decoder_for_ENTITY(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ENTITY */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ENTITY */
let _cached_encoder_for_ENTITY: $.ASN1Encoder<ENTITY> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ENTITY */

/* START_OF_SYMBOL_DEFINITION _encode_ENTITY */
/**
 * @summary Encodes a(n) ENTITY into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ENTITY, encoded as an ASN.1 Element.
 */
export function _encode_ENTITY(value: ENTITY, elGetter: $.ASN1Encoder<ENTITY>) {
  if (!_cached_encoder_for_ENTITY) {
    _cached_encoder_for_ENTITY = _encode_NCName;
  }
  return _cached_encoder_for_ENTITY(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ENTITY */

/* eslint-enable */
