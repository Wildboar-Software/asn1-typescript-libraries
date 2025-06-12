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

/* START_OF_SYMBOL_DEFINITION BioAPI_STRING */
/**
 * @summary BioAPI_STRING
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-STRING  ::=
 *   UTF8String
 *     (CONSTRAINED BY { --The UTF-8 encoding shall not contain any NUL characters
 *     --nd shall be no longer than 268 octets--
 *        })
 * ```
 */
export type BioAPI_STRING = UTF8String; // UTF8String
/* END_OF_SYMBOL_DEFINITION BioAPI_STRING */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_STRING */
let _cached_decoder_for_BioAPI_STRING: $.ASN1Decoder<BioAPI_STRING> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_STRING */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_STRING */
/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_STRING
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_STRING} The decoded data structure.
 */
export function _decode_BioAPI_STRING(el: _Element) {
  if (!_cached_decoder_for_BioAPI_STRING) {
    _cached_decoder_for_BioAPI_STRING = $._decodeUTF8String;
  }
  return _cached_decoder_for_BioAPI_STRING(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_STRING */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_STRING */
let _cached_encoder_for_BioAPI_STRING: $.ASN1Encoder<BioAPI_STRING> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_STRING */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_STRING */
/**
 * @summary Encodes a(n) BioAPI_STRING into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_STRING, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_STRING(
  value: BioAPI_STRING,
  elGetter: $.ASN1Encoder<BioAPI_STRING>
) {
  if (!_cached_encoder_for_BioAPI_STRING) {
    _cached_encoder_for_BioAPI_STRING = $._encodeUTF8String;
  }
  return _cached_encoder_for_BioAPI_STRING(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_STRING */

/* eslint-enable */
