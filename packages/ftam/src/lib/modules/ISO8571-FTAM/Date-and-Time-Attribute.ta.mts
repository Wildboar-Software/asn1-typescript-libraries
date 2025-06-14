/* eslint-disable */
import {
  NULL,
  GeneralizedTime,
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

/* START_OF_SYMBOL_DEFINITION Date_and_Time_Attribute */
/**
 * @summary Date_and_Time_Attribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Date-and-Time-Attribute  ::=  CHOICE {
 *   no-value-available  [0] IMPLICIT NULL,
 *   -- Indicates partial support of this attribute.
 *   -- This value shall only appear in response PDUs.
 *   actual-values       [1] IMPLICIT GeneralizedTime
 * }
 * ```
 */
export type Date_and_Time_Attribute =
  | { no_value_available: NULL } /* CHOICE_ALT_ROOT */
  | { actual_values: GeneralizedTime } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Date_and_Time_Attribute */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Date_and_Time_Attribute */
let _cached_decoder_for_Date_and_Time_Attribute: $.ASN1Decoder<Date_and_Time_Attribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Date_and_Time_Attribute */

/* START_OF_SYMBOL_DEFINITION _decode_Date_and_Time_Attribute */
/**
 * @summary Decodes an ASN.1 element into a(n) Date_and_Time_Attribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Date_and_Time_Attribute} The decoded data structure.
 */
export function _decode_Date_and_Time_Attribute(el: _Element) {
  if (!_cached_decoder_for_Date_and_Time_Attribute) {
    _cached_decoder_for_Date_and_Time_Attribute = $._decode_inextensible_choice<Date_and_Time_Attribute>(
      {
        'CONTEXT 0': [
          'no_value_available',
          $._decode_implicit<NULL>(() => $._decodeNull),
        ],
        'CONTEXT 1': [
          'actual_values',
          $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime),
        ],
      }
    );
  }
  return _cached_decoder_for_Date_and_Time_Attribute(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Date_and_Time_Attribute */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Date_and_Time_Attribute */
let _cached_encoder_for_Date_and_Time_Attribute: $.ASN1Encoder<Date_and_Time_Attribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Date_and_Time_Attribute */

/* START_OF_SYMBOL_DEFINITION _encode_Date_and_Time_Attribute */
/**
 * @summary Encodes a(n) Date_and_Time_Attribute into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Date_and_Time_Attribute, encoded as an ASN.1 Element.
 */
export function _encode_Date_and_Time_Attribute(
  value: Date_and_Time_Attribute,
  elGetter: $.ASN1Encoder<Date_and_Time_Attribute>
) {
  if (!_cached_encoder_for_Date_and_Time_Attribute) {
    _cached_encoder_for_Date_and_Time_Attribute = $._encode_choice<Date_and_Time_Attribute>(
      {
        no_value_available: $._encode_implicit(
          _TagClass.context,
          0,
          () => $._encodeNull,
          $.BER
        ),
        actual_values: $._encode_implicit(
          _TagClass.context,
          1,
          () => $._encodeGeneralizedTime,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_Date_and_Time_Attribute(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Date_and_Time_Attribute */

/* eslint-enable */
