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
  AE_title_form1,
  _decode_AE_title_form1,
  _encode_AE_title_form1,
} from '../ACSE-1/AE-title-form1.ta.mjs';
export {
  AE_title_form1,
  _decode_AE_title_form1,
  _encode_AE_title_form1,
} from '../ACSE-1/AE-title-form1.ta.mjs';
import {
  AE_title_form2,
  _decode_AE_title_form2,
  _encode_AE_title_form2,
} from '../ACSE-1/AE-title-form2.ta.mjs';
export {
  AE_title_form2,
  _decode_AE_title_form2,
  _encode_AE_title_form2,
} from '../ACSE-1/AE-title-form2.ta.mjs';

/* START_OF_SYMBOL_DEFINITION AE_title */
/**
 * @summary AE_title
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AE-title  ::=  CHOICE {
 *   ae-title-form1  AE-title-form1,
 *   ae-title-form2  AE-title-form2,
 *   ...
 * }
 * ```
 */
export type AE_title =
  | { ae_title_form1: AE_title_form1 } /* CHOICE_ALT_ROOT */
  | { ae_title_form2: AE_title_form2 } /* CHOICE_ALT_ROOT */
  | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION AE_title */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AE_title */
let _cached_decoder_for_AE_title: $.ASN1Decoder<AE_title> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AE_title */

/* START_OF_SYMBOL_DEFINITION _decode_AE_title */
/**
 * @summary Decodes an ASN.1 element into a(n) AE_title
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AE_title} The decoded data structure.
 */
export function _decode_AE_title(el: _Element) {
  if (!_cached_decoder_for_AE_title) {
    _cached_decoder_for_AE_title = $._decode_extensible_choice<AE_title>({
      'UNIVERSAL 16': ['ae_title_form1', _decode_AE_title_form1],
      'UNIVERSAL 6': ['ae_title_form2', _decode_AE_title_form2],
    });
  }
  return _cached_decoder_for_AE_title(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AE_title */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AE_title */
let _cached_encoder_for_AE_title: $.ASN1Encoder<AE_title> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AE_title */

/* START_OF_SYMBOL_DEFINITION _encode_AE_title */
/**
 * @summary Encodes a(n) AE_title into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AE_title, encoded as an ASN.1 Element.
 */
export function _encode_AE_title(
  value: AE_title,
  elGetter: $.ASN1Encoder<AE_title>
) {
  if (!_cached_encoder_for_AE_title) {
    _cached_encoder_for_AE_title = $._encode_choice<AE_title>(
      {
        ae_title_form1: _encode_AE_title_form1,
        ae_title_form2: _encode_AE_title_form2,
      },
      $.BER
    );
  }
  return _cached_encoder_for_AE_title(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AE_title */

/* eslint-enable */
