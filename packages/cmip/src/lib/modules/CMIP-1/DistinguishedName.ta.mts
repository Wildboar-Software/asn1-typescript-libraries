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
  RDNSequence,
  _decode_RDNSequence,
  _encode_RDNSequence,
} from '../CMIP-1/RDNSequence.ta.mjs';

/**
 * @summary DistinguishedName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DistinguishedName  ::=  RDNSequence
 * ```
 */
export type DistinguishedName = RDNSequence; // DefinedType


let _cached_decoder_for_DistinguishedName: $.ASN1Decoder<DistinguishedName> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DistinguishedName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DistinguishedName} The decoded data structure.
 */
export function _decode_DistinguishedName(el: _Element): DistinguishedName {
  if (!_cached_decoder_for_DistinguishedName) {
    _cached_decoder_for_DistinguishedName = _decode_RDNSequence;
  }
  return _cached_decoder_for_DistinguishedName(el);
}


let _cached_encoder_for_DistinguishedName: $.ASN1Encoder<DistinguishedName> | null = null;


/**
 * @summary Encodes a(n) DistinguishedName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DistinguishedName, encoded as an ASN.1 Element.
 */
export function _encode_DistinguishedName(
  value: DistinguishedName,
  elGetter: $.ASN1Encoder<DistinguishedName>
): _Element {
  if (!_cached_encoder_for_DistinguishedName) {
    _cached_encoder_for_DistinguishedName = _encode_RDNSequence;
  }
  return _cached_encoder_for_DistinguishedName(value, elGetter);
}


/* eslint-enable */
