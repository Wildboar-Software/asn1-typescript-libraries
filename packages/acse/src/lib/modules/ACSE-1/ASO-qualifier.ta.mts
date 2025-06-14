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
  ASO_qualifier_form1,
  _decode_ASO_qualifier_form1,
  _encode_ASO_qualifier_form1,
} from '../ACSE-1/ASO-qualifier-form1.ta.mjs';
import {
  ASO_qualifier_form2,
  _decode_ASO_qualifier_form2,
  _encode_ASO_qualifier_form2,
} from '../ACSE-1/ASO-qualifier-form2.ta.mjs';
import {
  ASO_qualifier_form3,
  _decode_ASO_qualifier_form3,
  _encode_ASO_qualifier_form3,
} from '../ACSE-1/ASO-qualifier-form3.ta.mjs';
import {
  ASO_qualifier_form4,
  _decode_ASO_qualifier_form4,
  _encode_ASO_qualifier_form4,
} from '../ACSE-1/ASO-qualifier-form4.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ASO_qualifier */
/**
 * @summary ASO_qualifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ASO-qualifier  ::=  CHOICE {
 *   aso-qualifier-form1  ASO-qualifier-form1,
 *   aso-qualifier-form2  ASO-qualifier-form2,
 *   ...,
 *   aso-qualifier-form3  ASO-qualifier-form3,
 *   aso-qualifier-form4  ASO-qualifier-form4
 * }
 * ```
 */
export type ASO_qualifier =
  | { aso_qualifier_form1: ASO_qualifier_form1 } /* CHOICE_ALT_ROOT */
  | { aso_qualifier_form2: ASO_qualifier_form2 } /* CHOICE_ALT_ROOT */
  | { aso_qualifier_form3: ASO_qualifier_form3 } /* CHOICE_ALT_EXT */
  | { aso_qualifier_form4: ASO_qualifier_form4 } /* CHOICE_ALT_EXT */
  | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION ASO_qualifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ASO_qualifier */
let _cached_decoder_for_ASO_qualifier: $.ASN1Decoder<ASO_qualifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ASO_qualifier */

/* START_OF_SYMBOL_DEFINITION _decode_ASO_qualifier */
/**
 * @summary Decodes an ASN.1 element into a(n) ASO_qualifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ASO_qualifier} The decoded data structure.
 */
export function _decode_ASO_qualifier(el: _Element) {
  if (!_cached_decoder_for_ASO_qualifier) {
    _cached_decoder_for_ASO_qualifier = $._decode_extensible_choice<ASO_qualifier>(
      {
        'UNIVERSAL 17': ['aso_qualifier_form1', _decode_ASO_qualifier_form1],
        'UNIVERSAL 2': ['aso_qualifier_form2', _decode_ASO_qualifier_form2],
        'UNIVERSAL 19': ['aso_qualifier_form3', _decode_ASO_qualifier_form3],
        'CONTEXT 0': ['aso_qualifier_form4', _decode_ASO_qualifier_form4],
      }
    );
  }
  return _cached_decoder_for_ASO_qualifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ASO_qualifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ASO_qualifier */
let _cached_encoder_for_ASO_qualifier: $.ASN1Encoder<ASO_qualifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ASO_qualifier */

/* START_OF_SYMBOL_DEFINITION _encode_ASO_qualifier */
/**
 * @summary Encodes a(n) ASO_qualifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ASO_qualifier, encoded as an ASN.1 Element.
 */
export function _encode_ASO_qualifier(
  value: ASO_qualifier,
  elGetter: $.ASN1Encoder<ASO_qualifier>
) {
  if (!_cached_encoder_for_ASO_qualifier) {
    _cached_encoder_for_ASO_qualifier = $._encode_choice<ASO_qualifier>(
      {
        aso_qualifier_form1: _encode_ASO_qualifier_form1,
        aso_qualifier_form2: _encode_ASO_qualifier_form2,
        aso_qualifier_form3: _encode_ASO_qualifier_form3,
        aso_qualifier_form4: _encode_ASO_qualifier_form4,
      },
      $.BER
    );
  }
  return _cached_encoder_for_ASO_qualifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ASO_qualifier */

/* eslint-enable */
