/* eslint-disable */
import {
  INTEGER,
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
  Pathname,
  _decode_Pathname,
  _encode_Pathname,
} from '../ISO8571-FTAM/Pathname.ta.mjs';

/**
 * @summary Operation_Result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Operation-Result  ::=  [APPLICATION 30]  CHOICE {
 *   success-Object-count  [0] IMPLICIT INTEGER,
 *   success-Object-names  [1] IMPLICIT SEQUENCE OF Pathname
 * }
 * ```
 */
export type Operation_Result =
  | { success_Object_count: INTEGER } /* CHOICE_ALT_ROOT */
  | { success_Object_names: Pathname[] } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_Operation_Result: $.ASN1Decoder<Operation_Result> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Operation_Result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Operation_Result} The decoded data structure.
 */
export function _decode_Operation_Result(el: _Element) {
  if (!_cached_decoder_for_Operation_Result) {
    _cached_decoder_for_Operation_Result = $._decode_explicit<Operation_Result>(
      () =>
        $._decode_inextensible_choice<Operation_Result>({
          'CONTEXT 0': [
            'success_Object_count',
            $._decode_implicit<INTEGER>(() => $._decodeInteger),
          ],
          'CONTEXT 1': [
            'success_Object_names',
            $._decode_implicit<Pathname[]>(() =>
              $._decodeSequenceOf<Pathname>(() => _decode_Pathname)
            ),
          ],
        })
    );
  }
  return _cached_decoder_for_Operation_Result(el);
}


let _cached_encoder_for_Operation_Result: $.ASN1Encoder<Operation_Result> | null = null;


/**
 * @summary Encodes a(n) Operation_Result into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Operation_Result, encoded as an ASN.1 Element.
 */
export function _encode_Operation_Result(
  value: Operation_Result,
  elGetter: $.ASN1Encoder<Operation_Result>
) {
  if (!_cached_encoder_for_Operation_Result) {
    _cached_encoder_for_Operation_Result = $._encode_explicit(
      _TagClass.application,
      30,
      () =>
        $._encode_choice<Operation_Result>(
          {
            success_Object_count: $._encode_implicit(
              _TagClass.context,
              0,
              () => $._encodeInteger,
              $.BER
            ),
            success_Object_names: $._encode_implicit(
              _TagClass.context,
              1,
              () =>
                $._encodeSequenceOf<Pathname>(() => _encode_Pathname, $.BER),
              $.BER
            ),
          },
          $.BER
        ),
      $.BER
    );
  }
  return _cached_encoder_for_Operation_Result(value, elGetter);
}


/* eslint-enable */
