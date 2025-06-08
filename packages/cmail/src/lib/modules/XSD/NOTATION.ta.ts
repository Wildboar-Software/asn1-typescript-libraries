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
import { QName, _decode_QName, _encode_QName } from '../XSD/QName.ta';
export { QName, _decode_QName, _encode_QName } from '../XSD/QName.ta';

/* START_OF_SYMBOL_DEFINITION NOTATION */
/**
 * @summary NOTATION
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NOTATION  ::=  QName
 * ```
 */
export type NOTATION = QName; // DefinedType
/* END_OF_SYMBOL_DEFINITION NOTATION */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NOTATION */
let _cached_decoder_for_NOTATION: $.ASN1Decoder<NOTATION> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NOTATION */

/* START_OF_SYMBOL_DEFINITION _decode_NOTATION */
/**
 * @summary Decodes an ASN.1 element into a(n) NOTATION
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NOTATION} The decoded data structure.
 */
export function _decode_NOTATION(el: _Element) {
  if (!_cached_decoder_for_NOTATION) {
    _cached_decoder_for_NOTATION = _decode_QName;
  }
  return _cached_decoder_for_NOTATION(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NOTATION */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NOTATION */
let _cached_encoder_for_NOTATION: $.ASN1Encoder<NOTATION> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NOTATION */

/* START_OF_SYMBOL_DEFINITION _encode_NOTATION */
/**
 * @summary Encodes a(n) NOTATION into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NOTATION, encoded as an ASN.1 Element.
 */
export function _encode_NOTATION(
  value: NOTATION,
  elGetter: $.ASN1Encoder<NOTATION>
) {
  if (!_cached_encoder_for_NOTATION) {
    _cached_encoder_for_NOTATION = _encode_QName;
  }
  return _cached_encoder_for_NOTATION(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NOTATION */

/* eslint-enable */
