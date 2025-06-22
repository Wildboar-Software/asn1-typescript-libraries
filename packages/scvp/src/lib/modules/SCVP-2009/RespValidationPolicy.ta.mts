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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  ValidationPolicy,
  _decode_ValidationPolicy,
  _encode_ValidationPolicy,
} from '../SCVP-2009/ValidationPolicy.ta.mjs';
/**
 * @summary RespValidationPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RespValidationPolicy  ::=  ValidationPolicy
 * ```
 */
export type RespValidationPolicy = ValidationPolicy; // DefinedType

let _cached_decoder_for_RespValidationPolicy: $.ASN1Decoder<RespValidationPolicy> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RespValidationPolicy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RespValidationPolicy} The decoded data structure.
 */
export function _decode_RespValidationPolicy(el: _Element) {
  if (!_cached_decoder_for_RespValidationPolicy) {
    _cached_decoder_for_RespValidationPolicy = _decode_ValidationPolicy;
  }
  return _cached_decoder_for_RespValidationPolicy(el);
}

let _cached_encoder_for_RespValidationPolicy: $.ASN1Encoder<RespValidationPolicy> | null = null;

/**
 * @summary Encodes a(n) RespValidationPolicy into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RespValidationPolicy, encoded as an ASN.1 Element.
 */
export function _encode_RespValidationPolicy(
  value: RespValidationPolicy,
  elGetter: $.ASN1Encoder<RespValidationPolicy>
) {
  if (!_cached_encoder_for_RespValidationPolicy) {
    _cached_encoder_for_RespValidationPolicy = _encode_ValidationPolicy;
  }
  return _cached_encoder_for_RespValidationPolicy(value, elGetter);
}


/* eslint-enable */
