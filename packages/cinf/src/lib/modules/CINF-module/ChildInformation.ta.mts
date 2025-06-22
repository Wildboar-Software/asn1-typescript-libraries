/* eslint-disable */
import {
  NULL,
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
  Information,
  _decode_Information,
  _encode_Information,
} from '../CINF-module/Information.ta.mjs';

/**
 * @summary ChildInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChildInformation  ::=  CHOICE {
 *     noDisclosure    NULL / * No information is provided * /,
 *     disclosure    Information
 * }
 * ```
 */
export type ChildInformation =
  | { noDisclosure: NULL } /* CHOICE_ALT_ROOT */
  | { disclosure: Information } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_ChildInformation: $.ASN1Decoder<ChildInformation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ChildInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ChildInformation} The decoded data structure.
 */
export function _decode_ChildInformation(el: _Element) {
  if (!_cached_decoder_for_ChildInformation) {
    _cached_decoder_for_ChildInformation = $._decode_inextensible_choice<ChildInformation>(
      {
        'CONTEXT 0': ['noDisclosure', $._decodeNull],
        'CONTEXT 1': ['disclosure', _decode_Information],
      }
    );
  }
  return _cached_decoder_for_ChildInformation(el);
}


let _cached_encoder_for_ChildInformation: $.ASN1Encoder<ChildInformation> | null = null;


/**
 * @summary Encodes a(n) ChildInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChildInformation, encoded as an ASN.1 Element.
 */
export function _encode_ChildInformation(
  value: ChildInformation,
  elGetter: $.ASN1Encoder<ChildInformation>
) {
  if (!_cached_encoder_for_ChildInformation) {
    _cached_encoder_for_ChildInformation = $._encode_choice<ChildInformation>(
      {
        noDisclosure: $._encodeNull,
        disclosure: _encode_Information,
      },
      $.BER
    );
  }
  return _cached_encoder_for_ChildInformation(value, elGetter);
}


/* eslint-enable */
