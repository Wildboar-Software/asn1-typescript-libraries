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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  BioAPI_FRAMEWORK_SCHEMA,
  _decode_BioAPI_FRAMEWORK_SCHEMA,
  _encode_BioAPI_FRAMEWORK_SCHEMA,
} from '../BIP/BioAPI-FRAMEWORK-SCHEMA.ta.mjs';

/**
 * @summary VisibleEndpoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VisibleEndpoint  ::=  BioAPI-FRAMEWORK-SCHEMA
 * ```
 */
export type VisibleEndpoint = BioAPI_FRAMEWORK_SCHEMA; // DefinedType


let _cached_decoder_for_VisibleEndpoint: $.ASN1Decoder<VisibleEndpoint> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) VisibleEndpoint
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {VisibleEndpoint} The decoded data structure.
 */
export function _decode_VisibleEndpoint(el: _Element) {
  if (!_cached_decoder_for_VisibleEndpoint) {
    _cached_decoder_for_VisibleEndpoint = _decode_BioAPI_FRAMEWORK_SCHEMA;
  }
  return _cached_decoder_for_VisibleEndpoint(el);
}


let _cached_encoder_for_VisibleEndpoint: $.ASN1Encoder<VisibleEndpoint> | null = null;


/**
 * @summary Encodes a(n) VisibleEndpoint into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VisibleEndpoint, encoded as an ASN.1 Element.
 */
export function _encode_VisibleEndpoint(
  value: VisibleEndpoint,
  elGetter: $.ASN1Encoder<VisibleEndpoint>
) {
  if (!_cached_encoder_for_VisibleEndpoint) {
    _cached_encoder_for_VisibleEndpoint = _encode_BioAPI_FRAMEWORK_SCHEMA;
  }
  return _cached_encoder_for_VisibleEndpoint(value, elGetter);
}


/* eslint-enable */
