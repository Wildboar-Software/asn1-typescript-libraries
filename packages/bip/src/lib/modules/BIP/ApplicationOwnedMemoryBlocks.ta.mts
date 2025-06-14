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
import {
  ApplicationOwnedMemoryBlock,
  _decode_ApplicationOwnedMemoryBlock,
  _encode_ApplicationOwnedMemoryBlock,
} from '../BIP/ApplicationOwnedMemoryBlock.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ApplicationOwnedMemoryBlocks */
/**
 * @summary ApplicationOwnedMemoryBlocks
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ApplicationOwnedMemoryBlocks  ::=  SET OF memoryBlock ApplicationOwnedMemoryBlock
 * ```
 */
export type ApplicationOwnedMemoryBlocks = ApplicationOwnedMemoryBlock[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ApplicationOwnedMemoryBlocks */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ApplicationOwnedMemoryBlocks */
let _cached_decoder_for_ApplicationOwnedMemoryBlocks: $.ASN1Decoder<ApplicationOwnedMemoryBlocks> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ApplicationOwnedMemoryBlocks */

/* START_OF_SYMBOL_DEFINITION _decode_ApplicationOwnedMemoryBlocks */
/**
 * @summary Decodes an ASN.1 element into a(n) ApplicationOwnedMemoryBlocks
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ApplicationOwnedMemoryBlocks} The decoded data structure.
 */
export function _decode_ApplicationOwnedMemoryBlocks(el: _Element) {
  if (!_cached_decoder_for_ApplicationOwnedMemoryBlocks) {
    _cached_decoder_for_ApplicationOwnedMemoryBlocks = $._decodeSetOf<ApplicationOwnedMemoryBlock>(
      () => _decode_ApplicationOwnedMemoryBlock
    );
  }
  return _cached_decoder_for_ApplicationOwnedMemoryBlocks(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ApplicationOwnedMemoryBlocks */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ApplicationOwnedMemoryBlocks */
let _cached_encoder_for_ApplicationOwnedMemoryBlocks: $.ASN1Encoder<ApplicationOwnedMemoryBlocks> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ApplicationOwnedMemoryBlocks */

/* START_OF_SYMBOL_DEFINITION _encode_ApplicationOwnedMemoryBlocks */
/**
 * @summary Encodes a(n) ApplicationOwnedMemoryBlocks into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplicationOwnedMemoryBlocks, encoded as an ASN.1 Element.
 */
export function _encode_ApplicationOwnedMemoryBlocks(
  value: ApplicationOwnedMemoryBlocks,
  elGetter: $.ASN1Encoder<ApplicationOwnedMemoryBlocks>
) {
  if (!_cached_encoder_for_ApplicationOwnedMemoryBlocks) {
    _cached_encoder_for_ApplicationOwnedMemoryBlocks = $._encodeSetOf<ApplicationOwnedMemoryBlock>(
      () => _encode_ApplicationOwnedMemoryBlock,
      $.BER
    );
  }
  return _cached_encoder_for_ApplicationOwnedMemoryBlocks(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ApplicationOwnedMemoryBlocks */

/* eslint-enable */
