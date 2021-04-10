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

/* START_OF_SYMBOL_DEFINITION Shared_ASE_Information */
/**
 * @summary Shared_ASE_Information
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Shared-ASE-Information  ::=  [APPLICATION 20] IMPLICIT EXTERNAL
 * ```
 */
export type Shared_ASE_Information = EXTERNAL; // ExternalType
/* END_OF_SYMBOL_DEFINITION Shared_ASE_Information */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Shared_ASE_Information */
let _cached_decoder_for_Shared_ASE_Information: $.ASN1Decoder<Shared_ASE_Information> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Shared_ASE_Information */

/* START_OF_SYMBOL_DEFINITION _decode_Shared_ASE_Information */
/**
 * @summary Decodes an ASN.1 element into a(n) Shared_ASE_Information
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Shared_ASE_Information} The decoded data structure.
 */
export function _decode_Shared_ASE_Information(el: _Element) {
  if (!_cached_decoder_for_Shared_ASE_Information) {
    _cached_decoder_for_Shared_ASE_Information = $._decode_implicit<Shared_ASE_Information>(
      () => $._decodeExternal
    );
  }
  return _cached_decoder_for_Shared_ASE_Information(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Shared_ASE_Information */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Shared_ASE_Information */
let _cached_encoder_for_Shared_ASE_Information: $.ASN1Encoder<Shared_ASE_Information> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Shared_ASE_Information */

/* START_OF_SYMBOL_DEFINITION _encode_Shared_ASE_Information */
/**
 * @summary Encodes a(n) Shared_ASE_Information into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Shared_ASE_Information, encoded as an ASN.1 Element.
 */
export function _encode_Shared_ASE_Information(
  value: Shared_ASE_Information,
  elGetter: $.ASN1Encoder<Shared_ASE_Information>
) {
  if (!_cached_encoder_for_Shared_ASE_Information) {
    _cached_encoder_for_Shared_ASE_Information = $._encode_implicit(
      _TagClass.application,
      20,
      () => $._encodeExternal,
      $.BER
    );
  }
  return _cached_encoder_for_Shared_ASE_Information(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Shared_ASE_Information */

/* eslint-enable */
