/* eslint-disable */
import {
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
import { Fault, _decode_Fault, _encode_Fault } from '../ASN1SOAP/Fault.ta.mjs';

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


let _cached_decoder_for_Envelope_body_or_fault: $.ASN1Decoder<Envelope_body_or_fault> | null = null;


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


let _cached_encoder_for_Envelope_body_or_fault: $.ASN1Encoder<Envelope_body_or_fault> | null = null;


/**
 * @summary Encodes a(n) Envelope_body_or_fault into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
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


/* eslint-enable */
