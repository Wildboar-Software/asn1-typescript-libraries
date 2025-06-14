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

/* START_OF_SYMBOL_DEFINITION SubheaderCount */
/**
 * @summary SubheaderCount
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubheaderCount  ::=  INTEGER(0..255)
 * ```
 */
export type SubheaderCount = INTEGER;
/* END_OF_SYMBOL_DEFINITION SubheaderCount */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubheaderCount */
let _cached_decoder_for_SubheaderCount: $.ASN1Decoder<SubheaderCount> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubheaderCount */

/* START_OF_SYMBOL_DEFINITION _decode_SubheaderCount */
/**
 * @summary Decodes an ASN.1 element into a(n) SubheaderCount
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubheaderCount} The decoded data structure.
 */
export function _decode_SubheaderCount(el: _Element) {
  if (!_cached_decoder_for_SubheaderCount) {
    _cached_decoder_for_SubheaderCount = $._decodeInteger;
  }
  return _cached_decoder_for_SubheaderCount(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubheaderCount */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubheaderCount */
let _cached_encoder_for_SubheaderCount: $.ASN1Encoder<SubheaderCount> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubheaderCount */

/* START_OF_SYMBOL_DEFINITION _encode_SubheaderCount */
/**
 * @summary Encodes a(n) SubheaderCount into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubheaderCount, encoded as an ASN.1 Element.
 */
export function _encode_SubheaderCount(
  value: SubheaderCount,
  elGetter: $.ASN1Encoder<SubheaderCount>
) {
  if (!_cached_encoder_for_SubheaderCount) {
    _cached_encoder_for_SubheaderCount = $._encodeInteger;
  }
  return _cached_encoder_for_SubheaderCount(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubheaderCount */

/* eslint-enable */
