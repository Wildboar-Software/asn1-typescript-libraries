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
import * as $ from '@wildboar/asn1/functional';
import {
  VisibleBSPRegistration,
  _decode_VisibleBSPRegistration,
  _encode_VisibleBSPRegistration,
} from '../BIP/VisibleBSPRegistration.ta.mjs';

/**
 * @summary VisibleBSPRegistrations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VisibleBSPRegistrations  ::=  SET OF registration VisibleBSPRegistration
 * ```
 */
export type VisibleBSPRegistrations = VisibleBSPRegistration[]; // SetOfType


let _cached_decoder_for_VisibleBSPRegistrations: $.ASN1Decoder<VisibleBSPRegistrations> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) VisibleBSPRegistrations
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {VisibleBSPRegistrations} The decoded data structure.
 */
export function _decode_VisibleBSPRegistrations(el: _Element) {
  if (!_cached_decoder_for_VisibleBSPRegistrations) {
    _cached_decoder_for_VisibleBSPRegistrations = $._decodeSetOf<VisibleBSPRegistration>(
      () => _decode_VisibleBSPRegistration
    );
  }
  return _cached_decoder_for_VisibleBSPRegistrations(el);
}


let _cached_encoder_for_VisibleBSPRegistrations: $.ASN1Encoder<VisibleBSPRegistrations> | null = null;


/**
 * @summary Encodes a(n) VisibleBSPRegistrations into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VisibleBSPRegistrations, encoded as an ASN.1 Element.
 */
export function _encode_VisibleBSPRegistrations(
  value: VisibleBSPRegistrations,
  elGetter: $.ASN1Encoder<VisibleBSPRegistrations>
) {
  if (!_cached_encoder_for_VisibleBSPRegistrations) {
    _cached_encoder_for_VisibleBSPRegistrations = $._encodeSetOf<VisibleBSPRegistration>(
      () => _encode_VisibleBSPRegistration,
      $.BER
    );
  }
  return _cached_encoder_for_VisibleBSPRegistrations(value, elGetter);
}


/* eslint-enable */
