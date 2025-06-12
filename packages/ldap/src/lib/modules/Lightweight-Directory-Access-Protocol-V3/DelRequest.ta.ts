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
  LDAPDN,
  _decode_LDAPDN,
  _encode_LDAPDN,
} from '../Lightweight-Directory-Access-Protocol-V3/LDAPDN.ta.js';
export {
  LDAPDN,
  _decode_LDAPDN,
  _encode_LDAPDN,
} from '../Lightweight-Directory-Access-Protocol-V3/LDAPDN.ta.js';

/* START_OF_SYMBOL_DEFINITION DelRequest */
/**
 * @summary DelRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DelRequest  ::=  [APPLICATION 10]  LDAPDN
 * ```
 */
export type DelRequest = LDAPDN; // DefinedType
/* END_OF_SYMBOL_DEFINITION DelRequest */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DelRequest */
let _cached_decoder_for_DelRequest: $.ASN1Decoder<DelRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DelRequest */

/* START_OF_SYMBOL_DEFINITION _decode_DelRequest */
/**
 * @summary Decodes an ASN.1 element into a(n) DelRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DelRequest} The decoded data structure.
 */
export function _decode_DelRequest(el: _Element) {
  if (!_cached_decoder_for_DelRequest) {
    _cached_decoder_for_DelRequest = $._decode_implicit<DelRequest>(
      () => _decode_LDAPDN
    );
  }
  return _cached_decoder_for_DelRequest(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DelRequest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DelRequest */
let _cached_encoder_for_DelRequest: $.ASN1Encoder<DelRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DelRequest */

/* START_OF_SYMBOL_DEFINITION _encode_DelRequest */
/**
 * @summary Encodes a(n) DelRequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DelRequest, encoded as an ASN.1 Element.
 */
export function _encode_DelRequest(
  value: DelRequest,
  elGetter: $.ASN1Encoder<DelRequest>
) {
  if (!_cached_encoder_for_DelRequest) {
    _cached_encoder_for_DelRequest = $._encode_implicit(
      _TagClass.application,
      10,
      () => _encode_LDAPDN,
      $.BER
    );
  }
  return _cached_encoder_for_DelRequest(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DelRequest */

/* eslint-enable */
