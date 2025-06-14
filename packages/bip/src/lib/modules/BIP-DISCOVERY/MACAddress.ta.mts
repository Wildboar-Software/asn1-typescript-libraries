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
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION MACAddress */
/**
 * @summary MACAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MACAddress  ::=  OCTET STRING(SIZE (6))
 * ```
 */
export type MACAddress = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION MACAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MACAddress */
let _cached_decoder_for_MACAddress: $.ASN1Decoder<MACAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MACAddress */

/* START_OF_SYMBOL_DEFINITION _decode_MACAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) MACAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MACAddress} The decoded data structure.
 */
export function _decode_MACAddress(el: _Element) {
  if (!_cached_decoder_for_MACAddress) {
    _cached_decoder_for_MACAddress = $._decodeOctetString;
  }
  return _cached_decoder_for_MACAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MACAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MACAddress */
let _cached_encoder_for_MACAddress: $.ASN1Encoder<MACAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MACAddress */

/* START_OF_SYMBOL_DEFINITION _encode_MACAddress */
/**
 * @summary Encodes a(n) MACAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MACAddress, encoded as an ASN.1 Element.
 */
export function _encode_MACAddress(
  value: MACAddress,
  elGetter: $.ASN1Encoder<MACAddress>
) {
  if (!_cached_encoder_for_MACAddress) {
    _cached_encoder_for_MACAddress = $._encodeOctetString;
  }
  return _cached_encoder_for_MACAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MACAddress */

/* eslint-enable */
