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
  MessageID,
  _decode_MessageID,
  _encode_MessageID,
} from '../Lightweight-Directory-Access-Protocol-V3/MessageID.ta.js';
export {
  MessageID,
  _decode_MessageID,
  _encode_MessageID,
} from '../Lightweight-Directory-Access-Protocol-V3/MessageID.ta.js';

/* START_OF_SYMBOL_DEFINITION AbandonRequest */
/**
 * @summary AbandonRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AbandonRequest  ::=  [APPLICATION 16]  MessageID
 * ```
 */
export type AbandonRequest = MessageID; // DefinedType
/* END_OF_SYMBOL_DEFINITION AbandonRequest */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AbandonRequest */
let _cached_decoder_for_AbandonRequest: $.ASN1Decoder<AbandonRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AbandonRequest */

/* START_OF_SYMBOL_DEFINITION _decode_AbandonRequest */
/**
 * @summary Decodes an ASN.1 element into a(n) AbandonRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AbandonRequest} The decoded data structure.
 */
export function _decode_AbandonRequest(el: _Element) {
  if (!_cached_decoder_for_AbandonRequest) {
    _cached_decoder_for_AbandonRequest = $._decode_implicit<AbandonRequest>(
      () => _decode_MessageID
    );
  }
  return _cached_decoder_for_AbandonRequest(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AbandonRequest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AbandonRequest */
let _cached_encoder_for_AbandonRequest: $.ASN1Encoder<AbandonRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AbandonRequest */

/* START_OF_SYMBOL_DEFINITION _encode_AbandonRequest */
/**
 * @summary Encodes a(n) AbandonRequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AbandonRequest, encoded as an ASN.1 Element.
 */
export function _encode_AbandonRequest(
  value: AbandonRequest,
  elGetter: $.ASN1Encoder<AbandonRequest>
) {
  if (!_cached_encoder_for_AbandonRequest) {
    _cached_encoder_for_AbandonRequest = $._encode_implicit(
      _TagClass.application,
      16,
      () => _encode_MessageID,
      $.BER
    );
  }
  return _cached_encoder_for_AbandonRequest(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AbandonRequest */

/* eslint-enable */
