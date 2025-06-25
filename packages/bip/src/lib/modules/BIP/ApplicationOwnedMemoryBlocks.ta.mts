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
  ApplicationOwnedMemoryBlock,
  _decode_ApplicationOwnedMemoryBlock,
  _encode_ApplicationOwnedMemoryBlock,
} from '../BIP/ApplicationOwnedMemoryBlock.ta.mjs';

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


let _cached_decoder_for_ApplicationOwnedMemoryBlocks: $.ASN1Decoder<ApplicationOwnedMemoryBlocks> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ApplicationOwnedMemoryBlocks
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ApplicationOwnedMemoryBlocks} The decoded data structure.
 */
export function _decode_ApplicationOwnedMemoryBlocks(el: _Element): ApplicationOwnedMemoryBlocks {
  if (!_cached_decoder_for_ApplicationOwnedMemoryBlocks) {
    _cached_decoder_for_ApplicationOwnedMemoryBlocks = $._decodeSetOf<ApplicationOwnedMemoryBlock>(
      () => _decode_ApplicationOwnedMemoryBlock
    );
  }
  return _cached_decoder_for_ApplicationOwnedMemoryBlocks(el);
}


let _cached_encoder_for_ApplicationOwnedMemoryBlocks: $.ASN1Encoder<ApplicationOwnedMemoryBlocks> | null = null;


/**
 * @summary Encodes a(n) ApplicationOwnedMemoryBlocks into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplicationOwnedMemoryBlocks, encoded as an ASN.1 Element.
 */
export function _encode_ApplicationOwnedMemoryBlocks(
  value: ApplicationOwnedMemoryBlocks,
  elGetter: $.ASN1Encoder<ApplicationOwnedMemoryBlocks>
): _Element {
  if (!_cached_encoder_for_ApplicationOwnedMemoryBlocks) {
    _cached_encoder_for_ApplicationOwnedMemoryBlocks = $._encodeSetOf<ApplicationOwnedMemoryBlock>(
      () => _encode_ApplicationOwnedMemoryBlock,
      $.BER
    );
  }
  return _cached_encoder_for_ApplicationOwnedMemoryBlocks(value, elGetter);
}


/* eslint-enable */
