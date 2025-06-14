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

/* START_OF_SYMBOL_DEFINITION SNPAPrefix */
/**
 * @summary SNPAPrefix
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SNPAPrefix  ::=  BIT STRING(SIZE (0..120))
 * ```
 */
export type SNPAPrefix = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION SNPAPrefix */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SNPAPrefix */
let _cached_decoder_for_SNPAPrefix: $.ASN1Decoder<SNPAPrefix> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SNPAPrefix */

/* START_OF_SYMBOL_DEFINITION _decode_SNPAPrefix */
/**
 * @summary Decodes an ASN.1 element into a(n) SNPAPrefix
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SNPAPrefix} The decoded data structure.
 */
export function _decode_SNPAPrefix(el: _Element) {
  if (!_cached_decoder_for_SNPAPrefix) {
    _cached_decoder_for_SNPAPrefix = $._decodeBitString;
  }
  return _cached_decoder_for_SNPAPrefix(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SNPAPrefix */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SNPAPrefix */
let _cached_encoder_for_SNPAPrefix: $.ASN1Encoder<SNPAPrefix> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SNPAPrefix */

/* START_OF_SYMBOL_DEFINITION _encode_SNPAPrefix */
/**
 * @summary Encodes a(n) SNPAPrefix into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SNPAPrefix, encoded as an ASN.1 Element.
 */
export function _encode_SNPAPrefix(
  value: SNPAPrefix,
  elGetter: $.ASN1Encoder<SNPAPrefix>
) {
  if (!_cached_encoder_for_SNPAPrefix) {
    _cached_encoder_for_SNPAPrefix = $._encodeBitString;
  }
  return _cached_encoder_for_SNPAPrefix(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SNPAPrefix */

/* eslint-enable */
