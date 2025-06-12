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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  Context_list,
  _decode_Context_list,
  _encode_Context_list,
} from '../ACSE-1/Context-list.ta.js';
export {
  Context_list,
  _decode_Context_list,
  _encode_Context_list,
} from '../ACSE-1/Context-list.ta.js';
import {
  Default_Context_List,
  _decode_Default_Context_List,
  _encode_Default_Context_List,
} from '../ACSE-1/Default-Context-List.ta.js';
export {
  Default_Context_List,
  _decode_Default_Context_List,
  _encode_Default_Context_List,
} from '../ACSE-1/Default-Context-List.ta.js';

/* START_OF_SYMBOL_DEFINITION Syntactic_context_list */
/**
 * @summary Syntactic_context_list
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Syntactic-context-list  ::=  CHOICE {
 *   context-list          [0]  Context-list,
 *   default-contact-list  [1]  Default-Context-List
 * }
 * ```
 */
export type Syntactic_context_list =
  | { context_list: Context_list } /* CHOICE_ALT_ROOT */
  | { default_contact_list: Default_Context_List } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Syntactic_context_list */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Syntactic_context_list */
let _cached_decoder_for_Syntactic_context_list: $.ASN1Decoder<Syntactic_context_list> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Syntactic_context_list */

/* START_OF_SYMBOL_DEFINITION _decode_Syntactic_context_list */
/**
 * @summary Decodes an ASN.1 element into a(n) Syntactic_context_list
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Syntactic_context_list} The decoded data structure.
 */
export function _decode_Syntactic_context_list(el: _Element) {
  if (!_cached_decoder_for_Syntactic_context_list) {
    _cached_decoder_for_Syntactic_context_list = $._decode_inextensible_choice<Syntactic_context_list>(
      {
        'CONTEXT 0': [
          'context_list',
          $._decode_implicit<Context_list>(() => _decode_Context_list),
        ],
        'CONTEXT 1': [
          'default_contact_list',
          $._decode_implicit<Default_Context_List>(
            () => _decode_Default_Context_List
          ),
        ],
      }
    );
  }
  return _cached_decoder_for_Syntactic_context_list(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Syntactic_context_list */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Syntactic_context_list */
let _cached_encoder_for_Syntactic_context_list: $.ASN1Encoder<Syntactic_context_list> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Syntactic_context_list */

/* START_OF_SYMBOL_DEFINITION _encode_Syntactic_context_list */
/**
 * @summary Encodes a(n) Syntactic_context_list into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Syntactic_context_list, encoded as an ASN.1 Element.
 */
export function _encode_Syntactic_context_list(
  value: Syntactic_context_list,
  elGetter: $.ASN1Encoder<Syntactic_context_list>
) {
  if (!_cached_encoder_for_Syntactic_context_list) {
    _cached_encoder_for_Syntactic_context_list = $._encode_choice<Syntactic_context_list>(
      {
        context_list: $._encode_implicit(
          _TagClass.context,
          0,
          () => _encode_Context_list,
          $.BER
        ),
        default_contact_list: $._encode_implicit(
          _TagClass.context,
          1,
          () => _encode_Default_Context_List,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_Syntactic_context_list(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Syntactic_context_list */

/* eslint-enable */
