/* eslint-disable */
import {
  EXTERNAL,
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

/* START_OF_SYMBOL_DEFINITION Node_Name */
/**
 * @summary Node_Name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Node-Name  ::=  EXTERNAL
 * ```
 */
export type Node_Name = EXTERNAL; // ExternalType
/* END_OF_SYMBOL_DEFINITION Node_Name */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Node_Name */
let _cached_decoder_for_Node_Name: $.ASN1Decoder<Node_Name> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Node_Name */

/* START_OF_SYMBOL_DEFINITION _decode_Node_Name */
/**
 * @summary Decodes an ASN.1 element into a(n) Node_Name
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Node_Name} The decoded data structure.
 */
export function _decode_Node_Name(el: _Element) {
  if (!_cached_decoder_for_Node_Name) {
    _cached_decoder_for_Node_Name = $._decodeExternal;
  }
  return _cached_decoder_for_Node_Name(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Node_Name */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Node_Name */
let _cached_encoder_for_Node_Name: $.ASN1Encoder<Node_Name> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Node_Name */

/* START_OF_SYMBOL_DEFINITION _encode_Node_Name */
/**
 * @summary Encodes a(n) Node_Name into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Node_Name, encoded as an ASN.1 Element.
 */
export function _encode_Node_Name(
  value: Node_Name,
  elGetter: $.ASN1Encoder<Node_Name>
) {
  if (!_cached_encoder_for_Node_Name) {
    _cached_encoder_for_Node_Name = $._encodeExternal;
  }
  return _cached_encoder_for_Node_Name(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Node_Name */

/* eslint-enable */
