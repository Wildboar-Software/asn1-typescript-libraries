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
  AreaAddress,
  _decode_AreaAddress,
  _encode_AreaAddress,
} from '../ISIS/AreaAddress.ta.mjs';
/**
 * @summary AreaAddresses
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AreaAddresses  ::=  SET OF AreaAddress
 * ```
 */
export type AreaAddresses = AreaAddress[]; // SetOfType

let _cached_decoder_for_AreaAddresses: $.ASN1Decoder<AreaAddresses> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AreaAddresses
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AreaAddresses} The decoded data structure.
 */
export function _decode_AreaAddresses(el: _Element): AreaAddresses {
  if (!_cached_decoder_for_AreaAddresses) {
    _cached_decoder_for_AreaAddresses = $._decodeSetOf<AreaAddress>(
      () => _decode_AreaAddress
    );
  }
  return _cached_decoder_for_AreaAddresses(el);
}

let _cached_encoder_for_AreaAddresses: $.ASN1Encoder<AreaAddresses> | null = null;

/**
 * @summary Encodes a(n) AreaAddresses into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AreaAddresses, encoded as an ASN.1 Element.
 */
export function _encode_AreaAddresses(
  value: AreaAddresses,
  elGetter: $.ASN1Encoder<AreaAddresses>
): _Element {
  if (!_cached_encoder_for_AreaAddresses) {
    _cached_encoder_for_AreaAddresses = $._encodeSetOf<AreaAddress>(
      () => _encode_AreaAddress,
      $.BER
    );
  }
  return _cached_encoder_for_AreaAddresses(value, elGetter);
}


/* eslint-enable */
