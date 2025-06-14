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

/* START_OF_SYMBOL_DEFINITION Port */
/**
 * @summary Port
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Port  ::=  INTEGER(0..65535)
 * ```
 */
export type Port = INTEGER;
/* END_OF_SYMBOL_DEFINITION Port */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Port */
let _cached_decoder_for_Port: $.ASN1Decoder<Port> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Port */

/* START_OF_SYMBOL_DEFINITION _decode_Port */
/**
 * @summary Decodes an ASN.1 element into a(n) Port
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Port} The decoded data structure.
 */
export function _decode_Port(el: _Element) {
  if (!_cached_decoder_for_Port) {
    _cached_decoder_for_Port = $._decodeInteger;
  }
  return _cached_decoder_for_Port(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Port */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Port */
let _cached_encoder_for_Port: $.ASN1Encoder<Port> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Port */

/* START_OF_SYMBOL_DEFINITION _encode_Port */
/**
 * @summary Encodes a(n) Port into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Port, encoded as an ASN.1 Element.
 */
export function _encode_Port(value: Port, elGetter: $.ASN1Encoder<Port>) {
  if (!_cached_encoder_for_Port) {
    _cached_encoder_for_Port = $._encodeInteger;
  }
  return _cached_encoder_for_Port(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Port */

/* eslint-enable */
