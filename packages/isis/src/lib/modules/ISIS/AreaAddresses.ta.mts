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
  AreaAddress,
  _decode_AreaAddress,
  _encode_AreaAddress,
} from '../ISIS/AreaAddress.ta.mjs';
/* START_OF_SYMBOL_DEFINITION AreaAddresses */
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
/* END_OF_SYMBOL_DEFINITION AreaAddresses */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AreaAddresses */
let _cached_decoder_for_AreaAddresses: $.ASN1Decoder<AreaAddresses> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AreaAddresses */

/* START_OF_SYMBOL_DEFINITION _decode_AreaAddresses */
/**
 * @summary Decodes an ASN.1 element into a(n) AreaAddresses
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AreaAddresses} The decoded data structure.
 */
export function _decode_AreaAddresses(el: _Element) {
  if (!_cached_decoder_for_AreaAddresses) {
    _cached_decoder_for_AreaAddresses = $._decodeSetOf<AreaAddress>(
      () => _decode_AreaAddress
    );
  }
  return _cached_decoder_for_AreaAddresses(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AreaAddresses */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AreaAddresses */
let _cached_encoder_for_AreaAddresses: $.ASN1Encoder<AreaAddresses> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AreaAddresses */

/* START_OF_SYMBOL_DEFINITION _encode_AreaAddresses */
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
) {
  if (!_cached_encoder_for_AreaAddresses) {
    _cached_encoder_for_AreaAddresses = $._encodeSetOf<AreaAddress>(
      () => _encode_AreaAddress,
      $.BER
    );
  }
  return _cached_encoder_for_AreaAddresses(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AreaAddresses */

/* eslint-enable */
