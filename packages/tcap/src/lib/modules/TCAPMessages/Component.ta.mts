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
  ROS,
  _decode_ROS,
  _encode_ROS,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Generic-ROS-PDUs/ROS.ta.mjs';
import {
    _decode_ReturnResult,
    _encode_ReturnResult,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Generic-ROS-PDUs/ReturnResult.ta.mjs';

/**
 * @summary Component
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Component{OPERATION:Invokable, OPERATION:Returnable}  ::=  CHOICE {
 *   basicROS             ROS{{TCInvokeIdSet}, {Invokable}, {Returnable}},
 *   returnResultNotLast
 *     [7]  returnResult < ROS{{TCInvokeIdSet}, {Invokable}, {Returnable}}
 * }
 * ```
 */
export type Component =
  | { basicROS: ROS } /* CHOICE_ALT_ROOT */
  | {
      returnResultNotLast: $.Selection<ROS, 'returnResult'>;
    } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Component: $.ASN1Decoder<Component> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Component
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Component} The decoded data structure.
 */
export function _decode_Component(el: _Element) {
  if (!_cached_decoder_for_Component) {
    _cached_decoder_for_Component = $._decode_inextensible_choice<Component>({
      'CONTEXT 1': ['basicROS', _decode_ROS],
      'CONTEXT 2': ['basicROS', _decode_ROS],
      'CONTEXT 3': ['basicROS', _decode_ROS],
      'CONTEXT 4': ['basicROS', _decode_ROS],
      'CONTEXT 7': [
        'returnResultNotLast',
        $._decode_implicit<$.Selection<ROS, 'returnResult'>>(() =>
          $._decode_implicit<$.Selection<ROS, 'returnResult'>>(() => _decode_ReturnResult)
        ),
      ],
    });
  }
  return _cached_decoder_for_Component(el);
}

let _cached_encoder_for_Component: $.ASN1Encoder<Component> | null = null;

/**
 * @summary Encodes a(n) Component into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Component, encoded as an ASN.1 Element.
 */
export function _encode_Component(
  value: Component,
  elGetter: $.ASN1Encoder<Component>
) {
  if (!_cached_encoder_for_Component) {
    _cached_encoder_for_Component = $._encode_choice<Component>(
      {
        basicROS: _encode_ROS,
        returnResultNotLast: $._encode_implicit(
          _TagClass.context,
          7,
          () =>
            $._encode_implicit(
              _TagClass.context,
              2,
              () => _encode_ReturnResult,
              $.BER
            ),
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_Component(value, elGetter);
}


/* eslint-enable */
