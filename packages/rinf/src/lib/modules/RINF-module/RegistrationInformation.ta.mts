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
} from '../RINF-module/Information.ta.mjs';
/**
 * @summary RegistrationInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RegistrationInformation  ::=  CHOICE {
 *     noDisclosure    NULL / * No information is provided * /,
 *     disclosure        Information
 * }
 * ```
 */
export type RegistrationInformation =
  | { noDisclosure: NULL } /* CHOICE_ALT_ROOT */
  | { disclosure: Information } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RegistrationInformation: $.ASN1Decoder<RegistrationInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RegistrationInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RegistrationInformation} The decoded data structure.
 */
export function _decode_RegistrationInformation(el: _Element): RegistrationInformation {
  if (!_cached_decoder_for_RegistrationInformation) {
    _cached_decoder_for_RegistrationInformation = $._decode_inextensible_choice<RegistrationInformation>(
      {
        'CONTEXT 0': ['noDisclosure', $._decodeNull],
        'CONTEXT 1': ['disclosure', _decode_Information],
      }
    );
  }
  return _cached_decoder_for_RegistrationInformation(el);
}

let _cached_encoder_for_RegistrationInformation: $.ASN1Encoder<RegistrationInformation> | null = null;

/**
 * @summary Encodes a(n) RegistrationInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegistrationInformation, encoded as an ASN.1 Element.
 */
export function _encode_RegistrationInformation(
  value: RegistrationInformation,
  elGetter: $.ASN1Encoder<RegistrationInformation>
): _Element {
  if (!_cached_encoder_for_RegistrationInformation) {
    _cached_encoder_for_RegistrationInformation = $._encode_choice<RegistrationInformation>(
      {
        noDisclosure: $._encodeNull,
        disclosure: _encode_Information,
      },
      $.BER
    );
  }
  return _cached_encoder_for_RegistrationInformation(value, elGetter);
}


/* eslint-enable */
