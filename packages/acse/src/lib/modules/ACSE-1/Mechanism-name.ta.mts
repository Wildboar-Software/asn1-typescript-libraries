/* eslint-disable */
import {
  OBJECT_IDENTIFIER,
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

/* START_OF_SYMBOL_DEFINITION Mechanism_name */
/**
 * @summary Mechanism_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Mechanism-name  ::=  OBJECT IDENTIFIER
 * ```
 */
export type Mechanism_name = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION Mechanism_name */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Mechanism_name */
let _cached_decoder_for_Mechanism_name: $.ASN1Decoder<Mechanism_name> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Mechanism_name */

/* START_OF_SYMBOL_DEFINITION _decode_Mechanism_name */
/**
 * @summary Decodes an ASN.1 element into a(n) Mechanism_name
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Mechanism_name} The decoded data structure.
 */
export function _decode_Mechanism_name(el: _Element) {
  if (!_cached_decoder_for_Mechanism_name) {
    _cached_decoder_for_Mechanism_name = $._decodeObjectIdentifier;
  }
  return _cached_decoder_for_Mechanism_name(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Mechanism_name */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Mechanism_name */
let _cached_encoder_for_Mechanism_name: $.ASN1Encoder<Mechanism_name> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Mechanism_name */

/* START_OF_SYMBOL_DEFINITION _encode_Mechanism_name */
/**
 * @summary Encodes a(n) Mechanism_name into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Mechanism_name, encoded as an ASN.1 Element.
 */
export function _encode_Mechanism_name(
  value: Mechanism_name,
  elGetter: $.ASN1Encoder<Mechanism_name>
) {
  if (!_cached_encoder_for_Mechanism_name) {
    _cached_encoder_for_Mechanism_name = $._encodeObjectIdentifier;
  }
  return _cached_encoder_for_Mechanism_name(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Mechanism_name */

/* eslint-enable */
