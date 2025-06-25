/* eslint-disable */
import {
  RELATIVE_OID,
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

/**
 * @summary ASO_qualifier_form4
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ASO-qualifier-form4  ::=
 *   [0] IMPLICIT RELATIVE-OID
 * ```
 */
export type ASO_qualifier_form4 = RELATIVE_OID; // RelativeOIDType

let _cached_decoder_for_ASO_qualifier_form4: $.ASN1Decoder<ASO_qualifier_form4> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ASO_qualifier_form4
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ASO_qualifier_form4} The decoded data structure.
 */
export function _decode_ASO_qualifier_form4(el: _Element): ASO_qualifier_form4 {
  if (!_cached_decoder_for_ASO_qualifier_form4) {
    _cached_decoder_for_ASO_qualifier_form4 = $._decode_implicit<ASO_qualifier_form4>(
      () => $._decodeRelativeOID
    );
  }
  return _cached_decoder_for_ASO_qualifier_form4(el);
}

let _cached_encoder_for_ASO_qualifier_form4: $.ASN1Encoder<ASO_qualifier_form4> | null = null;

/**
 * @summary Encodes a(n) ASO_qualifier_form4 into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ASO_qualifier_form4, encoded as an ASN.1 Element.
 */
export function _encode_ASO_qualifier_form4(
  value: ASO_qualifier_form4,
  elGetter: $.ASN1Encoder<ASO_qualifier_form4>
): _Element {
  if (!_cached_encoder_for_ASO_qualifier_form4) {
    _cached_encoder_for_ASO_qualifier_form4 = $._encode_implicit(
      _TagClass.context,
      0,
      () => $._encodeRelativeOID,
      $.BER
    );
  }
  return _cached_encoder_for_ASO_qualifier_form4(value, elGetter);
}


/* eslint-enable */
