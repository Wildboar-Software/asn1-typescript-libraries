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
  SNPAAddress,
  _decode_SNPAAddress,
  _encode_SNPAAddress,
} from '@wildboar/nlm/src/lib/modules/NLM/SNPAAddress.ta.mjs';

/* START_OF_SYMBOL_DEFINITION SNPAAddresses */
/**
 * @summary SNPAAddresses
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SNPAAddresses  ::=  SET OF SNPAAddress
 * ```
 */
export type SNPAAddresses = SNPAAddress[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION SNPAAddresses */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SNPAAddresses */
let _cached_decoder_for_SNPAAddresses: $.ASN1Decoder<SNPAAddresses> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SNPAAddresses */

/* START_OF_SYMBOL_DEFINITION _decode_SNPAAddresses */
/**
 * @summary Decodes an ASN.1 element into a(n) SNPAAddresses
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SNPAAddresses} The decoded data structure.
 */
export function _decode_SNPAAddresses(el: _Element) {
  if (!_cached_decoder_for_SNPAAddresses) {
    _cached_decoder_for_SNPAAddresses = $._decodeSetOf<SNPAAddress>(
      () => _decode_SNPAAddress
    );
  }
  return _cached_decoder_for_SNPAAddresses(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SNPAAddresses */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SNPAAddresses */
let _cached_encoder_for_SNPAAddresses: $.ASN1Encoder<SNPAAddresses> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SNPAAddresses */

/* START_OF_SYMBOL_DEFINITION _encode_SNPAAddresses */
/**
 * @summary Encodes a(n) SNPAAddresses into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SNPAAddresses, encoded as an ASN.1 Element.
 */
export function _encode_SNPAAddresses(
  value: SNPAAddresses,
  elGetter: $.ASN1Encoder<SNPAAddresses>
) {
  if (!_cached_encoder_for_SNPAAddresses) {
    _cached_encoder_for_SNPAAddresses = $._encodeSetOf<SNPAAddress>(
      () => _encode_SNPAAddress,
      $.BER
    );
  }
  return _cached_encoder_for_SNPAAddresses(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SNPAAddresses */

/* eslint-enable */
