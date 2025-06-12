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

/* START_OF_SYMBOL_DEFINITION ASO_qualifier_form4 */
/**
 * @summary ASO_qualifier_form4
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ASO-qualifier-form4  ::=
 *   [0] IMPLICIT RELATIVE-OID
 * ```
 */
export type ASO_qualifier_form4 = RELATIVE_OID; // RelativeOIDType
/* END_OF_SYMBOL_DEFINITION ASO_qualifier_form4 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ASO_qualifier_form4 */
let _cached_decoder_for_ASO_qualifier_form4: $.ASN1Decoder<ASO_qualifier_form4> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ASO_qualifier_form4 */

/* START_OF_SYMBOL_DEFINITION _decode_ASO_qualifier_form4 */
/**
 * @summary Decodes an ASN.1 element into a(n) ASO_qualifier_form4
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ASO_qualifier_form4} The decoded data structure.
 */
export function _decode_ASO_qualifier_form4(el: _Element) {
  if (!_cached_decoder_for_ASO_qualifier_form4) {
    _cached_decoder_for_ASO_qualifier_form4 = $._decode_implicit<ASO_qualifier_form4>(
      () => $._decodeRelativeOID
    );
  }
  return _cached_decoder_for_ASO_qualifier_form4(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ASO_qualifier_form4 */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ASO_qualifier_form4 */
let _cached_encoder_for_ASO_qualifier_form4: $.ASN1Encoder<ASO_qualifier_form4> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ASO_qualifier_form4 */

/* START_OF_SYMBOL_DEFINITION _encode_ASO_qualifier_form4 */
/**
 * @summary Encodes a(n) ASO_qualifier_form4 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ASO_qualifier_form4, encoded as an ASN.1 Element.
 */
export function _encode_ASO_qualifier_form4(
  value: ASO_qualifier_form4,
  elGetter: $.ASN1Encoder<ASO_qualifier_form4>
) {
  if (!_cached_encoder_for_ASO_qualifier_form4) {
    _cached_encoder_for_ASO_qualifier_form4 = $._encode_implicit(
      _TagClass.context,
      0,
      () => $._encodeRelativeOID,
      $.BER
    );
  }
  return _cached_encoder_for_ASO_qualifier_form4(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ASO_qualifier_form4 */

/* eslint-enable */
