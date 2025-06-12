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
  Name,
  _decode_Name,
  _encode_Name,
} from '../InformationFramework/Name.ta.js';
export {
  Name,
  _decode_Name,
  _encode_Name,
} from '../InformationFramework/Name.ta.js';

/* START_OF_SYMBOL_DEFINITION AP_title_form1 */
/**
 * @summary AP_title_form1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AP-title-form1  ::=
 *   Name
 * ```
 */
export type AP_title_form1 = Name; // DefinedType
/* END_OF_SYMBOL_DEFINITION AP_title_form1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AP_title_form1 */
let _cached_decoder_for_AP_title_form1: $.ASN1Decoder<AP_title_form1> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AP_title_form1 */

/* START_OF_SYMBOL_DEFINITION _decode_AP_title_form1 */
/**
 * @summary Decodes an ASN.1 element into a(n) AP_title_form1
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AP_title_form1} The decoded data structure.
 */
export function _decode_AP_title_form1(el: _Element) {
  if (!_cached_decoder_for_AP_title_form1) {
    _cached_decoder_for_AP_title_form1 = _decode_Name;
  }
  return _cached_decoder_for_AP_title_form1(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AP_title_form1 */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AP_title_form1 */
let _cached_encoder_for_AP_title_form1: $.ASN1Encoder<AP_title_form1> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AP_title_form1 */

/* START_OF_SYMBOL_DEFINITION _encode_AP_title_form1 */
/**
 * @summary Encodes a(n) AP_title_form1 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AP_title_form1, encoded as an ASN.1 Element.
 */
export function _encode_AP_title_form1(
  value: AP_title_form1,
  elGetter: $.ASN1Encoder<AP_title_form1>
) {
  if (!_cached_encoder_for_AP_title_form1) {
    _cached_encoder_for_AP_title_form1 = _encode_Name;
  }
  return _cached_encoder_for_AP_title_form1(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AP_title_form1 */

/* eslint-enable */
