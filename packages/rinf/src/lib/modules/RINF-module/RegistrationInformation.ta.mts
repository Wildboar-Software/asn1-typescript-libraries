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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  Information,
  _decode_Information,
  _encode_Information,
} from '../RINF-module/Information.ta.mjs';
/* START_OF_SYMBOL_DEFINITION RegistrationInformation */
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
/* END_OF_SYMBOL_DEFINITION RegistrationInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RegistrationInformation */
let _cached_decoder_for_RegistrationInformation: $.ASN1Decoder<RegistrationInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RegistrationInformation */

/* START_OF_SYMBOL_DEFINITION _decode_RegistrationInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) RegistrationInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RegistrationInformation} The decoded data structure.
 */
export function _decode_RegistrationInformation(el: _Element) {
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
/* END_OF_SYMBOL_DEFINITION _decode_RegistrationInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RegistrationInformation */
let _cached_encoder_for_RegistrationInformation: $.ASN1Encoder<RegistrationInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RegistrationInformation */

/* START_OF_SYMBOL_DEFINITION _encode_RegistrationInformation */
/**
 * @summary Encodes a(n) RegistrationInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegistrationInformation, encoded as an ASN.1 Element.
 */
export function _encode_RegistrationInformation(
  value: RegistrationInformation,
  elGetter: $.ASN1Encoder<RegistrationInformation>
) {
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

/* END_OF_SYMBOL_DEFINITION _encode_RegistrationInformation */

/* eslint-enable */
