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
  LDAPResult,
  _decode_LDAPResult,
  _encode_LDAPResult,
} from '../Lightweight-Directory-Access-Protocol-V3/LDAPResult.ta.mjs';
export {
  LDAPResult,
  _decode_LDAPResult,
  _encode_LDAPResult,
} from '../Lightweight-Directory-Access-Protocol-V3/LDAPResult.ta.mjs';

/* START_OF_SYMBOL_DEFINITION AddResponse */
/**
 * @summary AddResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddResponse  ::=  [APPLICATION 9]  LDAPResult
 * ```
 */
export type AddResponse = LDAPResult; // DefinedType
/* END_OF_SYMBOL_DEFINITION AddResponse */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddResponse */
let _cached_decoder_for_AddResponse: $.ASN1Decoder<AddResponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddResponse */

/* START_OF_SYMBOL_DEFINITION _decode_AddResponse */
/**
 * @summary Decodes an ASN.1 element into a(n) AddResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddResponse} The decoded data structure.
 */
export function _decode_AddResponse(el: _Element) {
  if (!_cached_decoder_for_AddResponse) {
    _cached_decoder_for_AddResponse = $._decode_implicit<AddResponse>(
      () => _decode_LDAPResult
    );
  }
  return _cached_decoder_for_AddResponse(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AddResponse */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddResponse */
let _cached_encoder_for_AddResponse: $.ASN1Encoder<AddResponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddResponse */

/* START_OF_SYMBOL_DEFINITION _encode_AddResponse */
/**
 * @summary Encodes a(n) AddResponse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddResponse, encoded as an ASN.1 Element.
 */
export function _encode_AddResponse(
  value: AddResponse,
  elGetter: $.ASN1Encoder<AddResponse>
) {
  if (!_cached_encoder_for_AddResponse) {
    _cached_encoder_for_AddResponse = $._encode_implicit(
      _TagClass.application,
      9,
      () => _encode_LDAPResult,
      $.BER
    );
  }
  return _cached_encoder_for_AddResponse(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AddResponse */

/* eslint-enable */
