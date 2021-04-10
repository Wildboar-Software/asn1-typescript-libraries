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
import { Options, _decode_Options, _encode_Options } from '../Uds2/Options.ta';
export { Options, _decode_Options, _encode_Options } from '../Uds2/Options.ta';

/* START_OF_SYMBOL_DEFINITION NotSupported */
/**
 * @summary NotSupported
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NotSupported  ::=  Options
 * ```
 */
export type NotSupported = Options; // DefinedType
/* END_OF_SYMBOL_DEFINITION NotSupported */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NotSupported */
let _cached_decoder_for_NotSupported: $.ASN1Decoder<NotSupported> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NotSupported */

/* START_OF_SYMBOL_DEFINITION _decode_NotSupported */
/**
 * @summary Decodes an ASN.1 element into a(n) NotSupported
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NotSupported} The decoded data structure.
 */
export function _decode_NotSupported(el: _Element) {
  if (!_cached_decoder_for_NotSupported) {
    _cached_decoder_for_NotSupported = _decode_Options;
  }
  return _cached_decoder_for_NotSupported(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NotSupported */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NotSupported */
let _cached_encoder_for_NotSupported: $.ASN1Encoder<NotSupported> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NotSupported */

/* START_OF_SYMBOL_DEFINITION _encode_NotSupported */
/**
 * @summary Encodes a(n) NotSupported into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotSupported, encoded as an ASN.1 Element.
 */
export function _encode_NotSupported(
  value: NotSupported,
  elGetter: $.ASN1Encoder<NotSupported>
) {
  if (!_cached_encoder_for_NotSupported) {
    _cached_encoder_for_NotSupported = _encode_Options;
  }
  return _cached_encoder_for_NotSupported(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NotSupported */

/* eslint-enable */
