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
  URI,
  _decode_URI,
  _encode_URI,
} from '../Lightweight-Directory-Access-Protocol-V3/URI.ta.mjs';

/**
 * @summary Referral
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Referral  ::=  SEQUENCE SIZE (1..MAX) OF uri URI
 * ```
 */
export type Referral = URI[]; // SequenceOfType


let _cached_decoder_for_Referral: $.ASN1Decoder<Referral> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Referral
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Referral} The decoded data structure.
 */
export function _decode_Referral(el: _Element): Referral {
  if (!_cached_decoder_for_Referral) {
    _cached_decoder_for_Referral = $._decodeSequenceOf<URI>(() => _decode_URI);
  }
  return _cached_decoder_for_Referral(el);
}


let _cached_encoder_for_Referral: $.ASN1Encoder<Referral> | null = null;


/**
 * @summary Encodes a(n) Referral into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Referral, encoded as an ASN.1 Element.
 */
export function _encode_Referral(
  value: Referral,
  elGetter: $.ASN1Encoder<Referral>
): _Element {
  if (!_cached_encoder_for_Referral) {
    _cached_encoder_for_Referral = $._encodeSequenceOf<URI>(
      () => _encode_URI,
      $.BER
    );
  }
  return _cached_encoder_for_Referral(value, elGetter);
}


/* eslint-enable */
