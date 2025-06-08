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
  GenericTimeTypeChoice,
  _get_decoder_for_GenericTimeTypeChoice,
  _get_encoder_for_GenericTimeTypeChoice,
} from '../XSD/GenericTimeTypeChoice.ta';
export {
  GenericTimeTypeChoice,
  _get_decoder_for_GenericTimeTypeChoice,
  _get_encoder_for_GenericTimeTypeChoice,
} from '../XSD/GenericTimeTypeChoice.ta';

/* START_OF_SYMBOL_DEFINITION GYear */
/**
 * @summary GYear
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GYear  ::=  GenericTimeTypeChoice {
 *             TIME (SETTINGS "Basic=Date Date=Y"),
 *             VisibleString
 *                       (FROM ("0".."9" | "Z:+-"))
 *                 (CONSTRAINED BY {/ * W3C XML Schema 1.0 Part 2, 3.2.11
 *                                    and used if a time-zone is present * /})}
 * ```
 */
export type GYear = GenericTimeTypeChoice<TIME, VisibleString>; // DefinedType
/* END_OF_SYMBOL_DEFINITION GYear */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GYear */
let _cached_decoder_for_GYear: $.ASN1Decoder<GYear> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GYear */

/* START_OF_SYMBOL_DEFINITION _decode_GYear */
/**
 * @summary Decodes an ASN.1 element into a(n) GYear
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GYear} The decoded data structure.
 */
export function _decode_GYear(el: _Element) {
  if (!_cached_decoder_for_GYear) {
    _cached_decoder_for_GYear = _get_decoder_for_GenericTimeTypeChoice<
      TIME,
      VisibleString
    >($._decodeTime, $._decodeVisibleString);
  }
  return _cached_decoder_for_GYear(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GYear */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GYear */
let _cached_encoder_for_GYear: $.ASN1Encoder<GYear> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GYear */

/* START_OF_SYMBOL_DEFINITION _encode_GYear */
/**
 * @summary Encodes a(n) GYear into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GYear, encoded as an ASN.1 Element.
 */
export function _encode_GYear(value: GYear, elGetter: $.ASN1Encoder<GYear>) {
  if (!_cached_encoder_for_GYear) {
    _cached_encoder_for_GYear = _get_encoder_for_GenericTimeTypeChoice<
      TIME,
      VisibleString
    >($._encodeTime, $._encodeVisibleString);
  }
  return _cached_encoder_for_GYear(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GYear */

/* eslint-enable */
