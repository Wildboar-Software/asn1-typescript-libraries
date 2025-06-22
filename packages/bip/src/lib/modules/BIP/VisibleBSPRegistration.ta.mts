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
  BioAPI_BSP_SCHEMA,
  _decode_BioAPI_BSP_SCHEMA,
  _encode_BioAPI_BSP_SCHEMA,
} from '../BIP/BioAPI-BSP-SCHEMA.ta.mjs';

/**
 * @summary VisibleBSPRegistration
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VisibleBSPRegistration  ::=  BioAPI-BSP-SCHEMA
 * ```
 */
export type VisibleBSPRegistration = BioAPI_BSP_SCHEMA; // DefinedType


let _cached_decoder_for_VisibleBSPRegistration: $.ASN1Decoder<VisibleBSPRegistration> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) VisibleBSPRegistration
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {VisibleBSPRegistration} The decoded data structure.
 */
export function _decode_VisibleBSPRegistration(el: _Element) {
  if (!_cached_decoder_for_VisibleBSPRegistration) {
    _cached_decoder_for_VisibleBSPRegistration = _decode_BioAPI_BSP_SCHEMA;
  }
  return _cached_decoder_for_VisibleBSPRegistration(el);
}


let _cached_encoder_for_VisibleBSPRegistration: $.ASN1Encoder<VisibleBSPRegistration> | null = null;


/**
 * @summary Encodes a(n) VisibleBSPRegistration into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VisibleBSPRegistration, encoded as an ASN.1 Element.
 */
export function _encode_VisibleBSPRegistration(
  value: VisibleBSPRegistration,
  elGetter: $.ASN1Encoder<VisibleBSPRegistration>
) {
  if (!_cached_encoder_for_VisibleBSPRegistration) {
    _cached_encoder_for_VisibleBSPRegistration = _encode_BioAPI_BSP_SCHEMA;
  }
  return _cached_encoder_for_VisibleBSPRegistration(value, elGetter);
}


/* eslint-enable */
