/* eslint-disable */
import {
  OCTET_STRING,
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


/**
 * @summary IPAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPAddress  ::=  CHOICE {
 *   ipv4  OCTET STRING(SIZE (4)),
 *   ipv6  OCTET STRING(SIZE (16))
 * }
 * ```
 */
export type IPAddress =
  | { ipv4: OCTET_STRING } /* CHOICE_ALT_ROOT */
  | { ipv6: OCTET_STRING } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_IPAddress: $.ASN1Decoder<IPAddress> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) IPAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IPAddress} The decoded data structure.
 */
export function _decode_IPAddress(el: _Element) {
  if (!_cached_decoder_for_IPAddress) {
    _cached_decoder_for_IPAddress = $._decode_inextensible_choice<IPAddress>({
      'CONTEXT 0': ['ipv4', $._decodeOctetString],
      'CONTEXT 1': ['ipv6', $._decodeOctetString],
    });
  }
  return _cached_decoder_for_IPAddress(el);
}


let _cached_encoder_for_IPAddress: $.ASN1Encoder<IPAddress> | null = null;


/**
 * @summary Encodes a(n) IPAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPAddress, encoded as an ASN.1 Element.
 */
export function _encode_IPAddress(
  value: IPAddress,
  elGetter: $.ASN1Encoder<IPAddress>
) {
  if (!_cached_encoder_for_IPAddress) {
    _cached_encoder_for_IPAddress = $._encode_choice<IPAddress>(
      {
        ipv4: $._encodeOctetString,
        ipv6: $._encodeOctetString,
      },
      $.BER
    );
  }
  return _cached_encoder_for_IPAddress(value, elGetter);
}


/* eslint-enable */
