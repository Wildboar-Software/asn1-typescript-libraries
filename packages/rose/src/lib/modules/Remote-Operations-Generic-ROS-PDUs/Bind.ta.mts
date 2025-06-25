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

/**
 * @summary Bind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Bind{OPERATION:operation}  ::=  CHOICE {
 *   bind-invoke  [16]  OPERATION.&ArgumentType({operation}),
 *   bind-result  [17]  OPERATION.&ResultType({operation}),
 *   bind-error   [18]  OPERATION.&Errors.&ParameterType({operation})
 * }
 * ```
 */
export type Bind =
  | { bind_invoke: _Element } /* CHOICE_ALT_ROOT */
  | { bind_result: _Element } /* CHOICE_ALT_ROOT */
  | { bind_error: _Element } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_Bind: $.ASN1Decoder<Bind> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Bind
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Bind} The decoded data structure.
 */
export function _decode_Bind(el: _Element): Bind {
  if (!_cached_decoder_for_Bind) {
    _cached_decoder_for_Bind = $._decode_inextensible_choice<Bind>({
      'CONTEXT 16': [
        'bind_invoke',
        $._decode_explicit<_Element>(() => $._decodeAny),
      ],
      'CONTEXT 17': [
        'bind_result',
        $._decode_explicit<_Element>(() => $._decodeAny),
      ],
      'CONTEXT 18': [
        'bind_error',
        $._decode_explicit<_Element>(() => $._decodeAny),
      ],
    });
  }
  return _cached_decoder_for_Bind(el);
}


let _cached_encoder_for_Bind: $.ASN1Encoder<Bind> | null = null;


/**
 * @summary Encodes a(n) Bind into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Bind, encoded as an ASN.1 Element.
 */
export function _encode_Bind(value: Bind, elGetter: $.ASN1Encoder<Bind>): _Element {
  if (!_cached_encoder_for_Bind) {
    _cached_encoder_for_Bind = $._encode_choice<Bind>(
      {
        bind_invoke: $._encode_explicit(
          _TagClass.context,
          16,
          () => $._encodeAny,
          $.BER
        ),
        bind_result: $._encode_explicit(
          _TagClass.context,
          17,
          () => $._encodeAny,
          $.BER
        ),
        bind_error: $._encode_explicit(
          _TagClass.context,
          18,
          () => $._encodeAny,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_Bind(value, elGetter);
}


/* eslint-enable */
