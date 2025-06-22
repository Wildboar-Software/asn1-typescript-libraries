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
  Type_of_msg_t30_indicator,
  _enum_for_Type_of_msg_t30_indicator,
  _decode_Type_of_msg_t30_indicator,
  _encode_Type_of_msg_t30_indicator,
} from '../T38/Type-of-msg-t30-indicator.ta.mjs';
import {
  Type_of_msg_t30_data,
  _enum_for_Type_of_msg_t30_data,
  _decode_Type_of_msg_t30_data,
  _encode_Type_of_msg_t30_data,
} from '../T38/Type-of-msg-t30-data.ta.mjs';

/**
 * @summary Type_of_msg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Type-of-msg  ::=  CHOICE {
 *   t30-indicator
 *     ENUMERATED {no-signal, cng, ced, v21-preamble, v27-2400-training,
 *                 v27-4800-training, v29-7200-training, v29-9600-training,
 *                 v17-7200-short-training, v17-7200-long-training,
 *                 v17-9600-short-training, v17-9600-long-training,
 *                 v17-12000-short-training, v17-12000-long-training,
 *                 v17-14400-short-training, v17-14400-long-training, ...,
 *                 v8-ansam, v8-signal, v34-cntl-channel-1200, v34-pri-channel,
 *                 v34-CC-retrain, v33-12000-training, v33-14400-training},
 *   t30-data
 *     ENUMERATED {v21, v27-2400, v27-4800, v29-7200, v29-9600, v17-7200,
 *                 v17-9600, v17-12000, v17-14400, ...,
 *                 v8, v34-pri-rate, v34-CC-1200, v34-pri-ch, v33-12000, v33-14400}
 * }
 * ```
 */
export type Type_of_msg =
  | { t30_indicator: Type_of_msg_t30_indicator } /* CHOICE_ALT_ROOT */
  | { t30_data: Type_of_msg_t30_data } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_Type_of_msg: $.ASN1Decoder<Type_of_msg> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Type_of_msg
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Type_of_msg} The decoded data structure.
 */
export function _decode_Type_of_msg(el: _Element) {
  if (!_cached_decoder_for_Type_of_msg) {
    _cached_decoder_for_Type_of_msg = $._decode_inextensible_choice<Type_of_msg>(
      {
        'CONTEXT 0': ['t30_indicator', _decode_Type_of_msg_t30_indicator],
        'CONTEXT 1': ['t30_data', _decode_Type_of_msg_t30_data],
      }
    );
  }
  return _cached_decoder_for_Type_of_msg(el);
}


let _cached_encoder_for_Type_of_msg: $.ASN1Encoder<Type_of_msg> | null = null;


/**
 * @summary Encodes a(n) Type_of_msg into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Type_of_msg, encoded as an ASN.1 Element.
 */
export function _encode_Type_of_msg(
  value: Type_of_msg,
  elGetter: $.ASN1Encoder<Type_of_msg>
) {
  if (!_cached_encoder_for_Type_of_msg) {
    _cached_encoder_for_Type_of_msg = $._encode_choice<Type_of_msg>(
      {
        t30_indicator: _encode_Type_of_msg_t30_indicator,
        t30_data: _encode_Type_of_msg_t30_data,
      },
      $.BER
    );
  }
  return _cached_encoder_for_Type_of_msg(value, elGetter);
}


/* eslint-enable */
