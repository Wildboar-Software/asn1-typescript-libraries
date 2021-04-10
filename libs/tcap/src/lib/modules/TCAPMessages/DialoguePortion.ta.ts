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

/* START_OF_SYMBOL_DEFINITION DialoguePortion */
/**
 * @summary DialoguePortion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DialoguePortion  ::=  [APPLICATION 11] EXPLICIT EXTERNAL
 * ```
 */
export type DialoguePortion = EXTERNAL; // ExternalType
/* END_OF_SYMBOL_DEFINITION DialoguePortion */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DialoguePortion */
let _cached_decoder_for_DialoguePortion: $.ASN1Decoder<DialoguePortion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DialoguePortion */

/* START_OF_SYMBOL_DEFINITION _decode_DialoguePortion */
/**
 * @summary Decodes an ASN.1 element into a(n) DialoguePortion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DialoguePortion} The decoded data structure.
 */
export function _decode_DialoguePortion(el: _Element) {
  if (!_cached_decoder_for_DialoguePortion) {
    _cached_decoder_for_DialoguePortion = $._decode_explicit<DialoguePortion>(
      () => $._decodeExternal
    );
  }
  return _cached_decoder_for_DialoguePortion(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DialoguePortion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DialoguePortion */
let _cached_encoder_for_DialoguePortion: $.ASN1Encoder<DialoguePortion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DialoguePortion */

/* START_OF_SYMBOL_DEFINITION _encode_DialoguePortion */
/**
 * @summary Encodes a(n) DialoguePortion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DialoguePortion, encoded as an ASN.1 Element.
 */
export function _encode_DialoguePortion(
  value: DialoguePortion,
  elGetter: $.ASN1Encoder<DialoguePortion>
) {
  if (!_cached_encoder_for_DialoguePortion) {
    _cached_encoder_for_DialoguePortion = $._encode_explicit(
      _TagClass.application,
      11,
      () => $._encodeExternal,
      $.BER
    );
  }
  return _cached_encoder_for_DialoguePortion(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DialoguePortion */

/* eslint-enable */
