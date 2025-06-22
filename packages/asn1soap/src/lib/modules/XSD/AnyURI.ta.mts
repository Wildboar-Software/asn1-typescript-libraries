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
  XMLStringWithNoCRLFHT,
  _decode_XMLStringWithNoCRLFHT,
  _encode_XMLStringWithNoCRLFHT,
} from '../XSD/XMLStringWithNoCRLFHT.ta.mjs';

/**
 * @summary AnyURI
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AnyURI  ::=  XMLStringWithNoCRLFHT
 * (CONSTRAINED BY {
 *     / * The XMLStringWithNoCRLFHT shall be a valid URI as defined in IETF RFC
 *      2396.  Note that 2396 allows any valid IRI format without escaping
 *       non-ASCII characters.  Use of the IANA oid: URI/IRI scheme should be
 *       considered. * / } )
 * ```
 */
export type AnyURI = XMLStringWithNoCRLFHT; // DefinedType


let _cached_decoder_for_AnyURI: $.ASN1Decoder<AnyURI> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AnyURI
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AnyURI} The decoded data structure.
 */
export function _decode_AnyURI(el: _Element) {
  if (!_cached_decoder_for_AnyURI) {
    _cached_decoder_for_AnyURI = _decode_XMLStringWithNoCRLFHT;
  }
  return _cached_decoder_for_AnyURI(el);
}


let _cached_encoder_for_AnyURI: $.ASN1Encoder<AnyURI> | null = null;


/**
 * @summary Encodes a(n) AnyURI into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AnyURI, encoded as an ASN.1 Element.
 */
export function _encode_AnyURI(value: AnyURI, elGetter: $.ASN1Encoder<AnyURI>) {
  if (!_cached_encoder_for_AnyURI) {
    _cached_encoder_for_AnyURI = _encode_XMLStringWithNoCRLFHT;
  }
  return _cached_encoder_for_AnyURI(value, elGetter);
}


/* eslint-enable */
