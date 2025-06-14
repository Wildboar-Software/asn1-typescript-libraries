/* eslint-disable */
import {
  INTEGER,
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

/* START_OF_SYMBOL_DEFINITION MemoryAddress */
/**
 * @summary MemoryAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MemoryAddress  ::=  INTEGER
 * ```
 */
export type MemoryAddress = INTEGER;
/* END_OF_SYMBOL_DEFINITION MemoryAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MemoryAddress */
let _cached_decoder_for_MemoryAddress: $.ASN1Decoder<MemoryAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MemoryAddress */

/* START_OF_SYMBOL_DEFINITION _decode_MemoryAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) MemoryAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MemoryAddress} The decoded data structure.
 */
export function _decode_MemoryAddress(el: _Element) {
  if (!_cached_decoder_for_MemoryAddress) {
    _cached_decoder_for_MemoryAddress = $._decodeInteger;
  }
  return _cached_decoder_for_MemoryAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MemoryAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MemoryAddress */
let _cached_encoder_for_MemoryAddress: $.ASN1Encoder<MemoryAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MemoryAddress */

/* START_OF_SYMBOL_DEFINITION _encode_MemoryAddress */
/**
 * @summary Encodes a(n) MemoryAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MemoryAddress, encoded as an ASN.1 Element.
 */
export function _encode_MemoryAddress(
  value: MemoryAddress,
  elGetter: $.ASN1Encoder<MemoryAddress>
) {
  if (!_cached_encoder_for_MemoryAddress) {
    _cached_encoder_for_MemoryAddress = $._encodeInteger;
  }
  return _cached_encoder_for_MemoryAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MemoryAddress */

/* eslint-enable */
