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

/* START_OF_SYMBOL_DEFINITION SourceId */
/**
 * @summary SourceId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SourceId  ::=  OCTET STRING(SIZE (1..10))
 * ```
 */
export type SourceId = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION SourceId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SourceId */
let _cached_decoder_for_SourceId: $.ASN1Decoder<SourceId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SourceId */

/* START_OF_SYMBOL_DEFINITION _decode_SourceId */
/**
 * @summary Decodes an ASN.1 element into a(n) SourceId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SourceId} The decoded data structure.
 */
export function _decode_SourceId(el: _Element) {
  if (!_cached_decoder_for_SourceId) {
    _cached_decoder_for_SourceId = $._decodeOctetString;
  }
  return _cached_decoder_for_SourceId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SourceId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SourceId */
let _cached_encoder_for_SourceId: $.ASN1Encoder<SourceId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SourceId */

/* START_OF_SYMBOL_DEFINITION _encode_SourceId */
/**
 * @summary Encodes a(n) SourceId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SourceId, encoded as an ASN.1 Element.
 */
export function _encode_SourceId(
  value: SourceId,
  elGetter: $.ASN1Encoder<SourceId>
) {
  if (!_cached_encoder_for_SourceId) {
    _cached_encoder_for_SourceId = $._encodeOctetString;
  }
  return _cached_encoder_for_SourceId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SourceId */

/* eslint-enable */
