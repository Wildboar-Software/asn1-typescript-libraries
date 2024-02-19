/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import { OPERATION } from '../Remote-Operations-Information-Objects/OPERATION.oca';
export { OPERATION } from '../Remote-Operations-Information-Objects/OPERATION.oca';

/* START_OF_SYMBOL_DEFINITION Bind */
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
/* END_OF_SYMBOL_DEFINITION Bind */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Bind */
let _cached_decoder_for_Bind: $.ASN1Decoder<Bind> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Bind */

/* START_OF_SYMBOL_DEFINITION _decode_Bind */
/**
 * @summary Decodes an ASN.1 element into a(n) Bind
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Bind} The decoded data structure.
 */
export function _decode_Bind(el: _Element) {
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
/* END_OF_SYMBOL_DEFINITION _decode_Bind */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Bind */
let _cached_encoder_for_Bind: $.ASN1Encoder<Bind> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Bind */

/* START_OF_SYMBOL_DEFINITION _encode_Bind */
/**
 * @summary Encodes a(n) Bind into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Bind, encoded as an ASN.1 Element.
 */
export function _encode_Bind(value: Bind, elGetter: $.ASN1Encoder<Bind>) {
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

/* END_OF_SYMBOL_DEFINITION _encode_Bind */

/* eslint-enable */
