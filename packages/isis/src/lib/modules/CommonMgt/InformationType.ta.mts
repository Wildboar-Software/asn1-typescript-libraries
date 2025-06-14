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

/* START_OF_SYMBOL_DEFINITION InformationType */
/**
 * @summary InformationType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InformationType  ::=  OBJECT IDENTIFIER
 * ```
 */
export type InformationType = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION InformationType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InformationType */
let _cached_decoder_for_InformationType: $.ASN1Decoder<InformationType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InformationType */

/* START_OF_SYMBOL_DEFINITION _decode_InformationType */
/**
 * @summary Decodes an ASN.1 element into a(n) InformationType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InformationType} The decoded data structure.
 */
export function _decode_InformationType(el: _Element) {
  if (!_cached_decoder_for_InformationType) {
    _cached_decoder_for_InformationType = $._decodeObjectIdentifier;
  }
  return _cached_decoder_for_InformationType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InformationType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InformationType */
let _cached_encoder_for_InformationType: $.ASN1Encoder<InformationType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InformationType */

/* START_OF_SYMBOL_DEFINITION _encode_InformationType */
/**
 * @summary Encodes a(n) InformationType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InformationType, encoded as an ASN.1 Element.
 */
export function _encode_InformationType(
  value: InformationType,
  elGetter: $.ASN1Encoder<InformationType>
) {
  if (!_cached_encoder_for_InformationType) {
    _cached_encoder_for_InformationType = $._encodeObjectIdentifier;
  }
  return _cached_encoder_for_InformationType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InformationType */

/* eslint-enable */
