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

/* START_OF_SYMBOL_DEFINITION ASOI_identifier */
/**
 * @summary ASOI_identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ASOI-identifier  ::=  INTEGER(1..128, ...)
 * ```
 */
export type ASOI_identifier = INTEGER;
/* END_OF_SYMBOL_DEFINITION ASOI_identifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ASOI_identifier */
let _cached_decoder_for_ASOI_identifier: $.ASN1Decoder<ASOI_identifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ASOI_identifier */

/* START_OF_SYMBOL_DEFINITION _decode_ASOI_identifier */
/**
 * @summary Decodes an ASN.1 element into a(n) ASOI_identifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ASOI_identifier} The decoded data structure.
 */
export function _decode_ASOI_identifier(el: _Element) {
  if (!_cached_decoder_for_ASOI_identifier) {
    _cached_decoder_for_ASOI_identifier = $._decodeInteger;
  }
  return _cached_decoder_for_ASOI_identifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ASOI_identifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ASOI_identifier */
let _cached_encoder_for_ASOI_identifier: $.ASN1Encoder<ASOI_identifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ASOI_identifier */

/* START_OF_SYMBOL_DEFINITION _encode_ASOI_identifier */
/**
 * @summary Encodes a(n) ASOI_identifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ASOI_identifier, encoded as an ASN.1 Element.
 */
export function _encode_ASOI_identifier(
  value: ASOI_identifier,
  elGetter: $.ASN1Encoder<ASOI_identifier>
) {
  if (!_cached_encoder_for_ASOI_identifier) {
    _cached_encoder_for_ASOI_identifier = $._encodeInteger;
  }
  return _cached_encoder_for_ASOI_identifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ASOI_identifier */

/* eslint-enable */
