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


/**
 * @summary GenericTimeTypeChoice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GenericTimeTypeChoice {BasicType, Alternative}  ::=  CHOICE {
 *            asn1supportedvalue    BasicType,
 *         othervalues            Alternative}
 *         (CONSTRAINED BY
 *              {/ * The "othervalues" alternative shall not be used for abstract
 *                  values in the "asn1supportedvalue" alternative * /})
 * ```
 */
export type GenericTimeTypeChoice<BasicType, Alternative> =
  | { asn1supportedvalue: BasicType } /* CHOICE_ALT_ROOT */
  | { othervalues: Alternative } /* CHOICE_ALT_ROOT */;


/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) GenericTimeTypeChoice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_GenericTimeTypeChoice<BasicType, Alternative>(
  _decode_BasicType: $.ASN1Decoder<BasicType>,
  _decode_Alternative: $.ASN1Decoder<Alternative>
): $.ASN1Decoder<GenericTimeTypeChoice<BasicType, Alternative>> {
  return $._decode_inextensible_choice<
    GenericTimeTypeChoice<BasicType, Alternative>
  >({
    'CONTEXT 0': ['asn1supportedvalue', _decode_BasicType],
    'CONTEXT 1': ['othervalues', _decode_Alternative],
  });
}


/**
 * @summary Returns a function that will encode a(n) GenericTimeTypeChoice into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) GenericTimeTypeChoice as an ASN.1 element.
 */
export function _get_encoder_for_GenericTimeTypeChoice<BasicType, Alternative>(
  _encode_BasicType: $.ASN1Encoder<BasicType>,
  _encode_Alternative: $.ASN1Encoder<Alternative>
): $.ASN1Encoder<GenericTimeTypeChoice<BasicType, Alternative>> {
  return $._encode_choice<GenericTimeTypeChoice<BasicType, Alternative>>(
    {
      asn1supportedvalue: _encode_BasicType,
      othervalues: _encode_Alternative,
    },
    $.BER
  );
}

/* eslint-enable */
