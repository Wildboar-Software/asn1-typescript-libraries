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
import * as $ from '@wildboar/asn1/functional';
import {
  ActionInfo,
  _decode_ActionInfo,
  _encode_ActionInfo,
} from '../CMIP-1/ActionInfo.ta.mjs';
import {
  InvalidArgumentValue_eventValue,
  _decode_InvalidArgumentValue_eventValue,
  _encode_InvalidArgumentValue_eventValue,
} from '../CMIP-1/InvalidArgumentValue-eventValue.ta.mjs';

/**
 * @summary InvalidArgumentValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvalidArgumentValue  ::=  CHOICE {
 *   actionValue  [0] IMPLICIT ActionInfo,
 *   eventValue
 *     [1] IMPLICIT SEQUENCE {eventType  CMIP-EVENT.&id({EventSet}),
 *                            eventInfo
 *                              [8]  CMIP-EVENT.&Value
 *                                     ({EventSet}{@.eventType}) OPTIONAL
 *   }
 * }
 * ```
 */
export type InvalidArgumentValue =
  | { actionValue: ActionInfo } /* CHOICE_ALT_ROOT */
  | { eventValue: InvalidArgumentValue_eventValue } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_InvalidArgumentValue: $.ASN1Decoder<InvalidArgumentValue> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) InvalidArgumentValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InvalidArgumentValue} The decoded data structure.
 */
export function _decode_InvalidArgumentValue(el: _Element) {
  if (!_cached_decoder_for_InvalidArgumentValue) {
    _cached_decoder_for_InvalidArgumentValue = $._decode_inextensible_choice<InvalidArgumentValue>(
      {
        'CONTEXT 0': [
          'actionValue',
          $._decode_implicit<ActionInfo>(() => _decode_ActionInfo),
        ],
        'CONTEXT 1': [
          'eventValue',
          $._decode_implicit<InvalidArgumentValue_eventValue>(
            () => _decode_InvalidArgumentValue_eventValue
          ),
        ],
      }
    );
  }
  return _cached_decoder_for_InvalidArgumentValue(el);
}


let _cached_encoder_for_InvalidArgumentValue: $.ASN1Encoder<InvalidArgumentValue> | null = null;


/**
 * @summary Encodes a(n) InvalidArgumentValue into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvalidArgumentValue, encoded as an ASN.1 Element.
 */
export function _encode_InvalidArgumentValue(
  value: InvalidArgumentValue,
  elGetter: $.ASN1Encoder<InvalidArgumentValue>
) {
  if (!_cached_encoder_for_InvalidArgumentValue) {
    _cached_encoder_for_InvalidArgumentValue = $._encode_choice<InvalidArgumentValue>(
      {
        actionValue: $._encode_implicit(
          _TagClass.context,
          0,
          () => _encode_ActionInfo,
          $.BER
        ),
        eventValue: $._encode_implicit(
          _TagClass.context,
          1,
          () => _encode_InvalidArgumentValue_eventValue,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_InvalidArgumentValue(value, elGetter);
}


/* eslint-enable */
