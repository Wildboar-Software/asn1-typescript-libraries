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
  InvokeId,
  _decode_InvokeId,
  _encode_InvokeId,
} from '../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta.mjs';
import {
  _decode_RejectProblem,
  _encode_RejectProblem,
} from '../Remote-Operations-Generic-ROS-PDUs/RejectProblem.ta.mjs';
/* START_OF_SYMBOL_DEFINITION Invoke_linkedId */
/**
 * @summary Invoke_linkedId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Invoke-linkedId ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Invoke_linkedId =
  | { present: $.Selection<InvokeId, 'present'> } /* CHOICE_ALT_ROOT */
  | { absent: NULL } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Invoke_linkedId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Invoke_linkedId */
let _cached_decoder_for_Invoke_linkedId: $.ASN1Decoder<Invoke_linkedId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Invoke_linkedId */

/* START_OF_SYMBOL_DEFINITION _decode_Invoke_linkedId */
/**
 * @summary Decodes an ASN.1 element into a(n) Invoke_linkedId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Invoke_linkedId} The decoded data structure.
 */
export function _decode_Invoke_linkedId(el: _Element) {
  if (!_cached_decoder_for_Invoke_linkedId) {
    _cached_decoder_for_Invoke_linkedId = $._decode_inextensible_choice<Invoke_linkedId>(
      {
        'CONTEXT 0': [
          'present',
          $._decode_implicit<$.Selection<InvokeId, 'present'>>(
            () => $._decodeInteger
          ),
        ],
        'CONTEXT 1': ['absent', $._decode_implicit<NULL>(() => $._decodeNull)],
      }
    );
  }
  return _cached_decoder_for_Invoke_linkedId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Invoke_linkedId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Invoke_linkedId */
let _cached_encoder_for_Invoke_linkedId: $.ASN1Encoder<Invoke_linkedId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Invoke_linkedId */

/* START_OF_SYMBOL_DEFINITION _encode_Invoke_linkedId */
/**
 * @summary Encodes a(n) Invoke_linkedId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Invoke_linkedId, encoded as an ASN.1 Element.
 */
export function _encode_Invoke_linkedId(
  value: Invoke_linkedId,
  elGetter: $.ASN1Encoder<Invoke_linkedId>
) {
  if (!_cached_encoder_for_Invoke_linkedId) {
    _cached_encoder_for_Invoke_linkedId = $._encode_choice<Invoke_linkedId>(
      {
        present: $._encode_implicit(
          _TagClass.context,
          0,
          () => $._encodeInteger,
          $.BER
        ),
        absent: $._encode_implicit(
          _TagClass.context,
          1,
          () => $._encodeNull,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_Invoke_linkedId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Invoke_linkedId */

/* eslint-enable */
