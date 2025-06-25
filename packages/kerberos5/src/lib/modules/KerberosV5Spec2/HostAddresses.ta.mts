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
  HostAddress,
  _decode_HostAddress,
  _encode_HostAddress,
} from '../KerberosV5Spec2/HostAddress.ta.mjs';

/**
 * @summary HostAddresses
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HostAddresses   -- NOTE: subtly different from rfc1510,
 *
 *                -- but has a value mapping and encodes the same
 *          ::=  SEQUENCE OF HostAddress
 * ```
 */
export type HostAddresses = HostAddress[]; // SequenceOfType


let _cached_decoder_for_HostAddresses: $.ASN1Decoder<HostAddresses> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) HostAddresses
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HostAddresses} The decoded data structure.
 */
export function _decode_HostAddresses(el: _Element): HostAddresses {
  if (!_cached_decoder_for_HostAddresses) {
    _cached_decoder_for_HostAddresses = $._decodeSequenceOf<HostAddress>(
      () => _decode_HostAddress
    );
  }
  return _cached_decoder_for_HostAddresses(el);
}


let _cached_encoder_for_HostAddresses: $.ASN1Encoder<HostAddresses> | null = null;


/**
 * @summary Encodes a(n) HostAddresses into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HostAddresses, encoded as an ASN.1 Element.
 */
export function _encode_HostAddresses(
  value: HostAddresses,
  elGetter: $.ASN1Encoder<HostAddresses>
): _Element {
  if (!_cached_encoder_for_HostAddresses) {
    _cached_encoder_for_HostAddresses = $._encodeSequenceOf<HostAddress>(
      () => _encode_HostAddress,
      $.DER
    );
  }
  return _cached_encoder_for_HostAddresses(value, elGetter);
}


/* eslint-enable */
