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

/* START_OF_SYMBOL_DEFINITION PKIProtection */
/**
 * @summary PKIProtection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKIProtection  ::=  BIT STRING
 * ```
 */
export type PKIProtection = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION PKIProtection */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PKIProtection */
let _cached_decoder_for_PKIProtection: $.ASN1Decoder<PKIProtection> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PKIProtection */

/* START_OF_SYMBOL_DEFINITION _decode_PKIProtection */
/**
 * @summary Decodes an ASN.1 element into a(n) PKIProtection
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PKIProtection} The decoded data structure.
 */
export function _decode_PKIProtection(el: _Element) {
  if (!_cached_decoder_for_PKIProtection) {
    _cached_decoder_for_PKIProtection = $._decodeBitString;
  }
  return _cached_decoder_for_PKIProtection(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PKIProtection */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PKIProtection */
let _cached_encoder_for_PKIProtection: $.ASN1Encoder<PKIProtection> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PKIProtection */

/* START_OF_SYMBOL_DEFINITION _encode_PKIProtection */
/**
 * @summary Encodes a(n) PKIProtection into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKIProtection, encoded as an ASN.1 Element.
 */
export function _encode_PKIProtection(
  value: PKIProtection,
  elGetter: $.ASN1Encoder<PKIProtection>
) {
  if (!_cached_encoder_for_PKIProtection) {
    _cached_encoder_for_PKIProtection = $._encodeBitString;
  }
  return _cached_encoder_for_PKIProtection(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PKIProtection */

/* eslint-enable */
