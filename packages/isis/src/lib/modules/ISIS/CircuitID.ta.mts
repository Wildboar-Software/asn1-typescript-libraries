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

/* START_OF_SYMBOL_DEFINITION CircuitID */
/**
 * @summary CircuitID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CircuitID  ::=  OCTET STRING(SIZE (2..9))
 * ```
 */
export type CircuitID = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION CircuitID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CircuitID */
let _cached_decoder_for_CircuitID: $.ASN1Decoder<CircuitID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CircuitID */

/* START_OF_SYMBOL_DEFINITION _decode_CircuitID */
/**
 * @summary Decodes an ASN.1 element into a(n) CircuitID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CircuitID} The decoded data structure.
 */
export function _decode_CircuitID(el: _Element) {
  if (!_cached_decoder_for_CircuitID) {
    _cached_decoder_for_CircuitID = $._decodeOctetString;
  }
  return _cached_decoder_for_CircuitID(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CircuitID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CircuitID */
let _cached_encoder_for_CircuitID: $.ASN1Encoder<CircuitID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CircuitID */

/* START_OF_SYMBOL_DEFINITION _encode_CircuitID */
/**
 * @summary Encodes a(n) CircuitID into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CircuitID, encoded as an ASN.1 Element.
 */
export function _encode_CircuitID(
  value: CircuitID,
  elGetter: $.ASN1Encoder<CircuitID>
) {
  if (!_cached_encoder_for_CircuitID) {
    _cached_encoder_for_CircuitID = $._encodeOctetString;
  }
  return _cached_encoder_for_CircuitID(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CircuitID */

/* eslint-enable */
