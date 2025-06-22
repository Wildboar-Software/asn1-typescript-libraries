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
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary Negotiation_SEI
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Negotiation-SEI  ::=  SEQUENCE OF OBJECT IDENTIFIER
 * ```
 */
export type Negotiation_SEI = OBJECT_IDENTIFIER[]; // SequenceOfType


let _cached_decoder_for_Negotiation_SEI: $.ASN1Decoder<Negotiation_SEI> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Negotiation_SEI
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Negotiation_SEI} The decoded data structure.
 */
export function _decode_Negotiation_SEI(el: _Element) {
  if (!_cached_decoder_for_Negotiation_SEI) {
    _cached_decoder_for_Negotiation_SEI = $._decodeSequenceOf<OBJECT_IDENTIFIER>(
      () => $._decodeObjectIdentifier
    );
  }
  return _cached_decoder_for_Negotiation_SEI(el);
}


let _cached_encoder_for_Negotiation_SEI: $.ASN1Encoder<Negotiation_SEI> | null = null;


/**
 * @summary Encodes a(n) Negotiation_SEI into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Negotiation_SEI, encoded as an ASN.1 Element.
 */
export function _encode_Negotiation_SEI(
  value: Negotiation_SEI,
  elGetter: $.ASN1Encoder<Negotiation_SEI>
) {
  if (!_cached_encoder_for_Negotiation_SEI) {
    _cached_encoder_for_Negotiation_SEI = $._encodeSequenceOf<OBJECT_IDENTIFIER>(
      () => $._encodeObjectIdentifier,
      $.BER
    );
  }
  return _cached_encoder_for_Negotiation_SEI(value, elGetter);
}


/* eslint-enable */
