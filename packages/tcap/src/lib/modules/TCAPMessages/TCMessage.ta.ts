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
import {
  Unidirectional,
  _decode_Unidirectional,
  _encode_Unidirectional,
} from '../TCAPMessages/Unidirectional.ta';
export {
  Unidirectional,
  _decode_Unidirectional,
  _encode_Unidirectional,
} from '../TCAPMessages/Unidirectional.ta';
import { Begin, _decode_Begin, _encode_Begin } from '../TCAPMessages/Begin.ta';
export { Begin, _decode_Begin, _encode_Begin } from '../TCAPMessages/Begin.ta';
import { End, _decode_End, _encode_End } from '../TCAPMessages/End.ta';
export { End, _decode_End, _encode_End } from '../TCAPMessages/End.ta';
import {
  Continue,
  _decode_Continue,
  _encode_Continue,
} from '../TCAPMessages/Continue.ta';
export {
  Continue,
  _decode_Continue,
  _encode_Continue,
} from '../TCAPMessages/Continue.ta';
import { Abort, _decode_Abort, _encode_Abort } from '../TCAPMessages/Abort.ta';
export { Abort, _decode_Abort, _encode_Abort } from '../TCAPMessages/Abort.ta';

/* START_OF_SYMBOL_DEFINITION TCMessage */
/**
 * @summary TCMessage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TCMessage{OPERATION:Invokable, OPERATION:Returnable}  ::=  CHOICE {
 *   unidirectional  [APPLICATION 1]  Unidirectional{{Invokable}, {Returnable}},
 *   begin           [APPLICATION 2]  Begin{{Invokable}, {Returnable}},
 *   end             [APPLICATION 4]  End{{Invokable}, {Returnable}},
 *   continue        [APPLICATION 5]  Continue{{Invokable}, {Returnable}},
 *   abort           [APPLICATION 7]  Abort
 * }
 * ```
 */
export type TCMessage =
  | { unidirectional: Unidirectional } /* CHOICE_ALT_ROOT */
  | { begin: Begin } /* CHOICE_ALT_ROOT */
  | { end: End } /* CHOICE_ALT_ROOT */
  | { continue_: Continue } /* CHOICE_ALT_ROOT */
  | { abort: Abort } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION TCMessage */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TCMessage */
let _cached_decoder_for_TCMessage: $.ASN1Decoder<TCMessage> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TCMessage */

/* START_OF_SYMBOL_DEFINITION _decode_TCMessage */
/**
 * @summary Decodes an ASN.1 element into a(n) TCMessage
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TCMessage} The decoded data structure.
 */
export function _decode_TCMessage(el: _Element) {
  if (!_cached_decoder_for_TCMessage) {
    _cached_decoder_for_TCMessage = $._decode_inextensible_choice<TCMessage>({
      'APPLICATION 1': [
        'unidirectional',
        $._decode_implicit<Unidirectional>(() => _decode_Unidirectional),
      ],
      'APPLICATION 2': [
        'begin',
        $._decode_implicit<Begin>(() => _decode_Begin),
      ],
      'APPLICATION 4': ['end', $._decode_implicit<End>(() => _decode_End)],
      'APPLICATION 5': [
        'continue_',
        $._decode_implicit<Continue>(() => _decode_Continue),
      ],
      'APPLICATION 7': [
        'abort',
        $._decode_implicit<Abort>(() => _decode_Abort),
      ],
    });
  }
  return _cached_decoder_for_TCMessage(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TCMessage */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TCMessage */
let _cached_encoder_for_TCMessage: $.ASN1Encoder<TCMessage> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TCMessage */

/* START_OF_SYMBOL_DEFINITION _encode_TCMessage */
/**
 * @summary Encodes a(n) TCMessage into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TCMessage, encoded as an ASN.1 Element.
 */
export function _encode_TCMessage(
  value: TCMessage,
  elGetter: $.ASN1Encoder<TCMessage>
) {
  if (!_cached_encoder_for_TCMessage) {
    _cached_encoder_for_TCMessage = $._encode_choice<TCMessage>(
      {
        unidirectional: $._encode_implicit(
          _TagClass.application,
          1,
          () => _encode_Unidirectional,
          $.BER
        ),
        begin: $._encode_implicit(
          _TagClass.application,
          2,
          () => _encode_Begin,
          $.BER
        ),
        end: $._encode_implicit(
          _TagClass.application,
          4,
          () => _encode_End,
          $.BER
        ),
        continue_: $._encode_implicit(
          _TagClass.application,
          5,
          () => _encode_Continue,
          $.BER
        ),
        abort: $._encode_implicit(
          _TagClass.application,
          7,
          () => _encode_Abort,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_TCMessage(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TCMessage */

/* eslint-enable */
