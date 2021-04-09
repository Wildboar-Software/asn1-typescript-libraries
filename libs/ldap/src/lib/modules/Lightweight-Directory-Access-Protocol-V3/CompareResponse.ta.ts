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
  LDAPResult,
  _decode_LDAPResult,
  _encode_LDAPResult,
} from '../Lightweight-Directory-Access-Protocol-V3/LDAPResult.ta';
export {
  LDAPResult,
  _decode_LDAPResult,
  _encode_LDAPResult,
} from '../Lightweight-Directory-Access-Protocol-V3/LDAPResult.ta';

/* START_OF_SYMBOL_DEFINITION CompareResponse */
/**
 * @summary CompareResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CompareResponse  ::=  [APPLICATION 15]  LDAPResult
 * ```
 */
export type CompareResponse = LDAPResult; // DefinedType
/* END_OF_SYMBOL_DEFINITION CompareResponse */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CompareResponse */
let _cached_decoder_for_CompareResponse: $.ASN1Decoder<CompareResponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CompareResponse */

/* START_OF_SYMBOL_DEFINITION _decode_CompareResponse */
/**
 * @summary Decodes an ASN.1 element into a(n) CompareResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CompareResponse} The decoded data structure.
 */
export function _decode_CompareResponse(el: _Element) {
  if (!_cached_decoder_for_CompareResponse) {
    _cached_decoder_for_CompareResponse = $._decode_implicit<CompareResponse>(
      () => _decode_LDAPResult
    );
  }
  return _cached_decoder_for_CompareResponse(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CompareResponse */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CompareResponse */
let _cached_encoder_for_CompareResponse: $.ASN1Encoder<CompareResponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CompareResponse */

/* START_OF_SYMBOL_DEFINITION _encode_CompareResponse */
/**
 * @summary Encodes a(n) CompareResponse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompareResponse, encoded as an ASN.1 Element.
 */
export function _encode_CompareResponse(
  value: CompareResponse,
  elGetter: $.ASN1Encoder<CompareResponse>
) {
  if (!_cached_encoder_for_CompareResponse) {
    _cached_encoder_for_CompareResponse = $._encode_implicit(
      _TagClass.application,
      15,
      () => _encode_LDAPResult,
      $.BER
    );
  }
  return _cached_encoder_for_CompareResponse(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CompareResponse */

/* eslint-enable */
