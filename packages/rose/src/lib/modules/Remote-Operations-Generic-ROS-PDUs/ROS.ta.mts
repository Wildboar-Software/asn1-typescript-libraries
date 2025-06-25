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
  _decode_InvokeId,
  _encode_InvokeId,
} from '../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta.mjs';
import {
  Invoke,
  _decode_Invoke,
  _encode_Invoke,
} from '../Remote-Operations-Generic-ROS-PDUs/Invoke.ta.mjs';
import {
  ReturnResult,
  _decode_ReturnResult,
  _encode_ReturnResult,
} from '../Remote-Operations-Generic-ROS-PDUs/ReturnResult.ta.mjs';
import {
  ReturnError,
  _decode_ReturnError,
  _encode_ReturnError,
} from '../Remote-Operations-Generic-ROS-PDUs/ReturnError.ta.mjs';
import {
  Reject,
  _decode_Reject,
  _encode_Reject,
} from '../Remote-Operations-Generic-ROS-PDUs/Reject.ta.mjs';
import {
  _decode_RejectProblem,
  _encode_RejectProblem,
} from '../Remote-Operations-Generic-ROS-PDUs/RejectProblem.ta.mjs';

/**
 * @summary ROS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ROS{InvokeId:InvokeIdSet, OPERATION:Invokable, OPERATION:Returnable}  ::=
 *   CHOICE {
 *   invoke        [1]  Invoke{{InvokeIdSet}, {Invokable}},
 *   returnResult  [2]  ReturnResult{{Returnable}},
 *   returnError   [3]  ReturnError{{Errors  {{Returnable}}}},
 *   reject        [4]  Reject
 * }
 * (CONSTRAINED BY { -- must conform to the above definition --} !
 *  RejectProblem:general-unrecognizedPDU)
 * ```
 */
export type ROS =
  | { invoke: Invoke } /* CHOICE_ALT_ROOT */
  | { returnResult: ReturnResult } /* CHOICE_ALT_ROOT */
  | { returnError: ReturnError } /* CHOICE_ALT_ROOT */
  | { reject: Reject } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_ROS: $.ASN1Decoder<ROS> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ROS
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ROS} The decoded data structure.
 */
export function _decode_ROS(el: _Element): ROS {
  if (!_cached_decoder_for_ROS) {
    _cached_decoder_for_ROS = $._decode_inextensible_choice<ROS>({
      'CONTEXT 1': ['invoke', $._decode_implicit<Invoke>(() => _decode_Invoke)],
      'CONTEXT 2': [
        'returnResult',
        $._decode_implicit<ReturnResult>(() => _decode_ReturnResult),
      ],
      'CONTEXT 3': [
        'returnError',
        $._decode_implicit<ReturnError>(() => _decode_ReturnError),
      ],
      'CONTEXT 4': ['reject', $._decode_implicit<Reject>(() => _decode_Reject)],
    });
  }
  return _cached_decoder_for_ROS(el);
}


let _cached_encoder_for_ROS: $.ASN1Encoder<ROS> | null = null;


/**
 * @summary Encodes a(n) ROS into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ROS, encoded as an ASN.1 Element.
 */
export function _encode_ROS(value: ROS, elGetter: $.ASN1Encoder<ROS>): _Element {
  if (!_cached_encoder_for_ROS) {
    _cached_encoder_for_ROS = $._encode_choice<ROS>(
      {
        invoke: $._encode_implicit(
          _TagClass.context,
          1,
          () => _encode_Invoke,
          $.BER
        ),
        returnResult: $._encode_implicit(
          _TagClass.context,
          2,
          () => _encode_ReturnResult,
          $.BER
        ),
        returnError: $._encode_implicit(
          _TagClass.context,
          3,
          () => _encode_ReturnError,
          $.BER
        ),
        reject: $._encode_implicit(
          _TagClass.context,
          4,
          () => _encode_Reject,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_ROS(value, elGetter);
}


/* eslint-enable */
