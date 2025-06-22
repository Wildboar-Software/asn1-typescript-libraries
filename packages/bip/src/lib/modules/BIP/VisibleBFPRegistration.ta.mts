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
import * as $ from '@wildboar/asn1/functional';
import {
  BioAPI_BFP_SCHEMA,
  _decode_BioAPI_BFP_SCHEMA,
  _encode_BioAPI_BFP_SCHEMA,
} from '../BIP/BioAPI-BFP-SCHEMA.ta.mjs';

/**
 * @summary VisibleBFPRegistration
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VisibleBFPRegistration  ::=  BioAPI-BFP-SCHEMA
 * ```
 */
export type VisibleBFPRegistration = BioAPI_BFP_SCHEMA; // DefinedType


let _cached_decoder_for_VisibleBFPRegistration: $.ASN1Decoder<VisibleBFPRegistration> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) VisibleBFPRegistration
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {VisibleBFPRegistration} The decoded data structure.
 */
export function _decode_VisibleBFPRegistration(el: _Element) {
  if (!_cached_decoder_for_VisibleBFPRegistration) {
    _cached_decoder_for_VisibleBFPRegistration = _decode_BioAPI_BFP_SCHEMA;
  }
  return _cached_decoder_for_VisibleBFPRegistration(el);
}


let _cached_encoder_for_VisibleBFPRegistration: $.ASN1Encoder<VisibleBFPRegistration> | null = null;


/**
 * @summary Encodes a(n) VisibleBFPRegistration into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VisibleBFPRegistration, encoded as an ASN.1 Element.
 */
export function _encode_VisibleBFPRegistration(
  value: VisibleBFPRegistration,
  elGetter: $.ASN1Encoder<VisibleBFPRegistration>
) {
  if (!_cached_encoder_for_VisibleBFPRegistration) {
    _cached_encoder_for_VisibleBFPRegistration = _encode_BioAPI_BFP_SCHEMA;
  }
  return _cached_encoder_for_VisibleBFPRegistration(value, elGetter);
}


/* eslint-enable */
