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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  RelativeDistinguishedName,
  _decode_RelativeDistinguishedName,
  _encode_RelativeDistinguishedName,
} from '../InformationFramework/RelativeDistinguishedName.ta.mjs';
/**
 * @summary ASO_qualifier_form1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ASO-qualifier-form1  ::=
 *   RelativeDistinguishedName
 * ```
 */
export type ASO_qualifier_form1 = RelativeDistinguishedName; // DefinedType

let _cached_decoder_for_ASO_qualifier_form1: $.ASN1Decoder<ASO_qualifier_form1> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ASO_qualifier_form1
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ASO_qualifier_form1} The decoded data structure.
 */
export function _decode_ASO_qualifier_form1(el: _Element) {
  if (!_cached_decoder_for_ASO_qualifier_form1) {
    _cached_decoder_for_ASO_qualifier_form1 = _decode_RelativeDistinguishedName;
  }
  return _cached_decoder_for_ASO_qualifier_form1(el);
}

let _cached_encoder_for_ASO_qualifier_form1: $.ASN1Encoder<ASO_qualifier_form1> | null = null;

/**
 * @summary Encodes a(n) ASO_qualifier_form1 into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ASO_qualifier_form1, encoded as an ASN.1 Element.
 */
export function _encode_ASO_qualifier_form1(
  value: ASO_qualifier_form1,
  elGetter: $.ASN1Encoder<ASO_qualifier_form1>
) {
  if (!_cached_encoder_for_ASO_qualifier_form1) {
    _cached_encoder_for_ASO_qualifier_form1 = _encode_RelativeDistinguishedName;
  }
  return _cached_encoder_for_ASO_qualifier_form1(value, elGetter);
}


/* eslint-enable */
