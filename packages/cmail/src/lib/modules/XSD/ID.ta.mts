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
import { NCName, _decode_NCName, _encode_NCName } from '../XSD/NCName.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ID */
/**
 * @summary ID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ID  ::=  NCName
 * ```
 */
export type ID = NCName; // DefinedType
/* END_OF_SYMBOL_DEFINITION ID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ID */
let _cached_decoder_for_ID: $.ASN1Decoder<ID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ID */

/* START_OF_SYMBOL_DEFINITION _decode_ID */
/**
 * @summary Decodes an ASN.1 element into a(n) ID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ID} The decoded data structure.
 */
export function _decode_ID(el: _Element) {
  if (!_cached_decoder_for_ID) {
    _cached_decoder_for_ID = _decode_NCName;
  }
  return _cached_decoder_for_ID(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ID */
let _cached_encoder_for_ID: $.ASN1Encoder<ID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ID */

/* START_OF_SYMBOL_DEFINITION _encode_ID */
/**
 * @summary Encodes a(n) ID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ID, encoded as an ASN.1 Element.
 */
export function _encode_ID(value: ID, elGetter: $.ASN1Encoder<ID>) {
  if (!_cached_encoder_for_ID) {
    _cached_encoder_for_ID = _encode_NCName;
  }
  return _cached_encoder_for_ID(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ID */

/* eslint-enable */
