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
/* START_OF_SYMBOL_DEFINITION Unbind */
/**
 * @summary Unbind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Unbind{OPERATION:operation}  ::=  CHOICE {
 *   unbind-invoke  [19]  OPERATION.&ArgumentType({operation}),
 *   unbind-result  [20]  OPERATION.&ResultType({operation}),
 *   unbind-error   [21]  OPERATION.&Errors.&ParameterType({operation})
 * }
 * ```
 */
export type Unbind =
  | { unbind_invoke: _Element } /* CHOICE_ALT_ROOT */
  | { unbind_result: _Element } /* CHOICE_ALT_ROOT */
  | { unbind_error: _Element } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Unbind */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Unbind */
let _cached_decoder_for_Unbind: $.ASN1Decoder<Unbind> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Unbind */

/* START_OF_SYMBOL_DEFINITION _decode_Unbind */
/**
 * @summary Decodes an ASN.1 element into a(n) Unbind
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Unbind} The decoded data structure.
 */
export function _decode_Unbind(el: _Element) {
  if (!_cached_decoder_for_Unbind) {
    _cached_decoder_for_Unbind = $._decode_inextensible_choice<Unbind>({
      'CONTEXT 19': [
        'unbind_invoke',
        $._decode_explicit<_Element>(() => $._decodeAny),
      ],
      'CONTEXT 20': [
        'unbind_result',
        $._decode_explicit<_Element>(() => $._decodeAny),
      ],
      'CONTEXT 21': [
        'unbind_error',
        $._decode_explicit<_Element>(() => $._decodeAny),
      ],
    });
  }
  return _cached_decoder_for_Unbind(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Unbind */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Unbind */
let _cached_encoder_for_Unbind: $.ASN1Encoder<Unbind> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Unbind */

/* START_OF_SYMBOL_DEFINITION _encode_Unbind */
/**
 * @summary Encodes a(n) Unbind into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Unbind, encoded as an ASN.1 Element.
 */
export function _encode_Unbind(value: Unbind, elGetter: $.ASN1Encoder<Unbind>) {
  if (!_cached_encoder_for_Unbind) {
    _cached_encoder_for_Unbind = $._encode_choice<Unbind>(
      {
        unbind_invoke: $._encode_explicit(
          _TagClass.context,
          19,
          () => $._encodeAny,
          $.BER
        ),
        unbind_result: $._encode_explicit(
          _TagClass.context,
          20,
          () => $._encodeAny,
          $.BER
        ),
        unbind_error: $._encode_explicit(
          _TagClass.context,
          21,
          () => $._encodeAny,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_Unbind(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Unbind */

/* eslint-enable */
