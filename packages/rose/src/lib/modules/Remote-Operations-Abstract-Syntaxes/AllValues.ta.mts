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
  Bind,
  _decode_Bind,
  _encode_Bind,
} from '../Remote-Operations-Generic-ROS-PDUs/Bind.ta.mjs';
import {
  Unbind,
  _decode_Unbind,
  _encode_Unbind,
} from '../Remote-Operations-Generic-ROS-PDUs/Unbind.ta.mjs';
import {
  ROS_SingleAS,
  _decode_ROS_SingleAS,
  _encode_ROS_SingleAS,
} from '../Remote-Operations-Abstract-Syntaxes/ROS-SingleAS.ta.mjs';
/* START_OF_SYMBOL_DEFINITION AllValues */
/**
 * @summary AllValues
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AllValues{APPLICATION-CONTEXT:ac}  ::=  CHOICE {
 *   bind          Bind{ac.&associationContract.&connection.&bind},
 *   unbind        Unbind{ac.&associationContract.&connection.&unbind},
 *   ros-singleAS
 *     ROS-SingleAS{{ROSEInvokeIds},
 *                 combine{{ac.&associationContract.&OperationsOf |
 *                        ac.&associationContract.&InitiatorConsumerOf |
 *                        ac.&associationContract.&ResponderConsumerOf},
 *                        {...},
 *                        {ID
 *                           {1 2--OID to be provided -- }-- Information Object of class OPERATION-PACKAGE to be defined -- }}}
 * }
 * ```
 */
export type AllValues =
  | { bind: Bind } /* CHOICE_ALT_ROOT */
  | { unbind: Unbind } /* CHOICE_ALT_ROOT */
  | { ros_singleAS: ROS_SingleAS } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION AllValues */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AllValues */
let _cached_decoder_for_AllValues: $.ASN1Decoder<AllValues> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AllValues */

/* START_OF_SYMBOL_DEFINITION _decode_AllValues */
/**
 * @summary Decodes an ASN.1 element into a(n) AllValues
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AllValues} The decoded data structure.
 */
export function _decode_AllValues(el: _Element) {
  if (!_cached_decoder_for_AllValues) {
    _cached_decoder_for_AllValues = $._decode_inextensible_choice<AllValues>({
      'CONTEXT 16': ['bind', _decode_Bind],
      'CONTEXT 17': ['bind', _decode_Bind],
      'CONTEXT 18': ['bind', _decode_Bind],
      'CONTEXT 19': ['unbind', _decode_Unbind],
      'CONTEXT 20': ['unbind', _decode_Unbind],
      'CONTEXT 21': ['unbind', _decode_Unbind],
      'CONTEXT 1': ['ros_singleAS', _decode_ROS_SingleAS],
      'CONTEXT 2': ['ros_singleAS', _decode_ROS_SingleAS],
      'CONTEXT 3': ['ros_singleAS', _decode_ROS_SingleAS],
      'CONTEXT 4': ['ros_singleAS', _decode_ROS_SingleAS],
    });
  }
  return _cached_decoder_for_AllValues(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AllValues */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AllValues */
let _cached_encoder_for_AllValues: $.ASN1Encoder<AllValues> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AllValues */

/* START_OF_SYMBOL_DEFINITION _encode_AllValues */
/**
 * @summary Encodes a(n) AllValues into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AllValues, encoded as an ASN.1 Element.
 */
export function _encode_AllValues(
  value: AllValues,
  elGetter: $.ASN1Encoder<AllValues>
) {
  if (!_cached_encoder_for_AllValues) {
    _cached_encoder_for_AllValues = $._encode_choice<AllValues>(
      {
        bind: _encode_Bind,
        unbind: _encode_Unbind,
        ros_singleAS: _encode_ROS_SingleAS,
      },
      $.BER
    );
  }
  return _cached_encoder_for_AllValues(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AllValues */

/* eslint-enable */
