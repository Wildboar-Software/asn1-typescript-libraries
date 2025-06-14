/* eslint-disable */
import {
  BIT_STRING,
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

/* START_OF_SYMBOL_DEFINITION AddressPrefix */
/**
 * @summary AddressPrefix
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddressPrefix  ::=
 *   BIT STRING
 *     (SIZE (0..160))
 * ```
 */
export type AddressPrefix = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION AddressPrefix */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddressPrefix */
let _cached_decoder_for_AddressPrefix: $.ASN1Decoder<AddressPrefix> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddressPrefix */

/* START_OF_SYMBOL_DEFINITION _decode_AddressPrefix */
/**
 * @summary Decodes an ASN.1 element into a(n) AddressPrefix
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddressPrefix} The decoded data structure.
 */
export function _decode_AddressPrefix(el: _Element) {
  if (!_cached_decoder_for_AddressPrefix) {
    _cached_decoder_for_AddressPrefix = $._decodeBitString;
  }
  return _cached_decoder_for_AddressPrefix(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AddressPrefix */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddressPrefix */
let _cached_encoder_for_AddressPrefix: $.ASN1Encoder<AddressPrefix> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddressPrefix */

/* START_OF_SYMBOL_DEFINITION _encode_AddressPrefix */
/**
 * @summary Encodes a(n) AddressPrefix into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddressPrefix, encoded as an ASN.1 Element.
 */
export function _encode_AddressPrefix(
  value: AddressPrefix,
  elGetter: $.ASN1Encoder<AddressPrefix>
) {
  if (!_cached_encoder_for_AddressPrefix) {
    _cached_encoder_for_AddressPrefix = $._encodeBitString;
  }
  return _cached_encoder_for_AddressPrefix(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AddressPrefix */

/* eslint-enable */
