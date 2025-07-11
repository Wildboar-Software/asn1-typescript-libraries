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
import { NMTOKEN, _decode_NMTOKEN, _encode_NMTOKEN } from '../XSD/NMTOKEN.ta.mjs';

/**
 * @summary NMTOKENS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NMTOKENS  ::=  SEQUENCE (SIZE(1..MAX)) OF NMTOKEN
 * ```
 */
export type NMTOKENS = NMTOKEN[]; // SequenceOfType


let _cached_decoder_for_NMTOKENS: $.ASN1Decoder<NMTOKENS> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) NMTOKENS
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NMTOKENS} The decoded data structure.
 */
export function _decode_NMTOKENS(el: _Element): NMTOKENS {
  if (!_cached_decoder_for_NMTOKENS) {
    _cached_decoder_for_NMTOKENS = $._decodeSequenceOf<NMTOKEN>(
      () => _decode_NMTOKEN
    );
  }
  return _cached_decoder_for_NMTOKENS(el);
}


let _cached_encoder_for_NMTOKENS: $.ASN1Encoder<NMTOKENS> | null = null;


/**
 * @summary Encodes a(n) NMTOKENS into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NMTOKENS, encoded as an ASN.1 Element.
 */
export function _encode_NMTOKENS(
  value: NMTOKENS,
  elGetter: $.ASN1Encoder<NMTOKENS>
): _Element {
  if (!_cached_encoder_for_NMTOKENS) {
    _cached_encoder_for_NMTOKENS = $._encodeSequenceOf<NMTOKEN>(
      () => _encode_NMTOKEN,
      $.BER
    );
  }
  return _cached_encoder_for_NMTOKENS(value, elGetter);
}


/* eslint-enable */
