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
import { Body, _decode_Body, _encode_Body } from '../ASN1SOAP/Body.ta.mjs';
export { Body, _decode_Body, _encode_Body } from '../ASN1SOAP/Body.ta.mjs';
import { Fault, _decode_Fault, _encode_Fault } from '../ASN1SOAP/Fault.ta.mjs';
export { Fault, _decode_Fault, _encode_Fault } from '../ASN1SOAP/Fault.ta.mjs';

/* START_OF_SYMBOL_DEFINITION Envelope_body_or_fault */
/**
 * @summary Envelope_body_or_fault
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Envelope-body-or-fault ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Envelope_body_or_fault =
  | { body: Body } /* CHOICE_ALT_ROOT */
  | { fault: Fault } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Envelope_body_or_fault */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Envelope_body_or_fault */
let _cached_decoder_for_Envelope_body_or_fault: $.ASN1Decoder<Envelope_body_or_fault> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Envelope_body_or_fault */

/* START_OF_SYMBOL_DEFINITION _decode_Envelope_body_or_fault */
/**
 * @summary Decodes an ASN.1 element into a(n) Envelope_body_or_fault
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Envelope_body_or_fault} The decoded data structure.
 */
export function _decode_Envelope_body_or_fault(el: _Element) {
  if (!_cached_decoder_for_Envelope_body_or_fault) {
    _cached_decoder_for_Envelope_body_or_fault = $._decode_inextensible_choice<Envelope_body_or_fault>(
      {
        'CONTEXT 0': ['body', _decode_Body],
        'CONTEXT 1': ['fault', _decode_Fault],
      }
    );
  }
  return _cached_decoder_for_Envelope_body_or_fault(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Envelope_body_or_fault */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Envelope_body_or_fault */
let _cached_encoder_for_Envelope_body_or_fault: $.ASN1Encoder<Envelope_body_or_fault> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Envelope_body_or_fault */

/* START_OF_SYMBOL_DEFINITION _encode_Envelope_body_or_fault */
/**
 * @summary Encodes a(n) Envelope_body_or_fault into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Envelope_body_or_fault, encoded as an ASN.1 Element.
 */
export function _encode_Envelope_body_or_fault(
  value: Envelope_body_or_fault,
  elGetter: $.ASN1Encoder<Envelope_body_or_fault>
) {
  if (!_cached_encoder_for_Envelope_body_or_fault) {
    _cached_encoder_for_Envelope_body_or_fault = $._encode_choice<Envelope_body_or_fault>(
      {
        body: _encode_Body,
        fault: _encode_Fault,
      },
      $.BER
    );
  }
  return _cached_encoder_for_Envelope_body_or_fault(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Envelope_body_or_fault */

/* eslint-enable */
