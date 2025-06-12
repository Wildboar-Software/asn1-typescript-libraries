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
  Scope_namedNumbers,
  Scope_namedNumbers_baseObject /* IMPORTED_LONG_NAMED_INTEGER */,
  baseObject /* IMPORTED_SHORT_NAMED_INTEGER */,
  Scope_namedNumbers_firstLevelOnly /* IMPORTED_LONG_NAMED_INTEGER */,
  firstLevelOnly /* IMPORTED_SHORT_NAMED_INTEGER */,
  Scope_namedNumbers_wholeSubtree /* IMPORTED_LONG_NAMED_INTEGER */,
  wholeSubtree /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_Scope_namedNumbers,
  _encode_Scope_namedNumbers,
} from '../CMIP-1/Scope-namedNumbers.ta.js';
export {
  Scope_namedNumbers,
  Scope_namedNumbers_baseObject /* IMPORTED_LONG_NAMED_INTEGER */,
  baseObject /* IMPORTED_SHORT_NAMED_INTEGER */,
  Scope_namedNumbers_firstLevelOnly /* IMPORTED_LONG_NAMED_INTEGER */,
  firstLevelOnly /* IMPORTED_SHORT_NAMED_INTEGER */,
  Scope_namedNumbers_wholeSubtree /* IMPORTED_LONG_NAMED_INTEGER */,
  wholeSubtree /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_Scope_namedNumbers,
  _encode_Scope_namedNumbers,
} from '../CMIP-1/Scope-namedNumbers.ta.js';

/* START_OF_SYMBOL_DEFINITION Scope */
/**
 * @summary Scope
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Scope  ::=  CHOICE {
 *   namedNumbers      INTEGER {baseObject(0), firstLevelOnly(1), wholeSubtree(2)},
 *   individualLevels  [1] IMPLICIT INTEGER, -- POSITIVE integer indicates the level to be selected
 *   baseToNthLevel    [2] IMPLICIT INTEGER
 * }
 * ```
 */
export type Scope =
  | { namedNumbers: Scope_namedNumbers } /* CHOICE_ALT_ROOT */
  | { individualLevels: INTEGER } /* CHOICE_ALT_ROOT */
  | { baseToNthLevel: INTEGER } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Scope */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Scope */
let _cached_decoder_for_Scope: $.ASN1Decoder<Scope> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Scope */

/* START_OF_SYMBOL_DEFINITION _decode_Scope */
/**
 * @summary Decodes an ASN.1 element into a(n) Scope
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Scope} The decoded data structure.
 */
export function _decode_Scope(el: _Element) {
  if (!_cached_decoder_for_Scope) {
    _cached_decoder_for_Scope = $._decode_inextensible_choice<Scope>({
      'UNIVERSAL 2': ['namedNumbers', _decode_Scope_namedNumbers],
      'CONTEXT 1': [
        'individualLevels',
        $._decode_implicit<INTEGER>(() => $._decodeInteger),
      ],
      'CONTEXT 2': [
        'baseToNthLevel',
        $._decode_implicit<INTEGER>(() => $._decodeInteger),
      ],
    });
  }
  return _cached_decoder_for_Scope(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Scope */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Scope */
let _cached_encoder_for_Scope: $.ASN1Encoder<Scope> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Scope */

/* START_OF_SYMBOL_DEFINITION _encode_Scope */
/**
 * @summary Encodes a(n) Scope into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Scope, encoded as an ASN.1 Element.
 */
export function _encode_Scope(value: Scope, elGetter: $.ASN1Encoder<Scope>) {
  if (!_cached_encoder_for_Scope) {
    _cached_encoder_for_Scope = $._encode_choice<Scope>(
      {
        namedNumbers: _encode_Scope_namedNumbers,
        individualLevels: $._encode_implicit(
          _TagClass.context,
          1,
          () => $._encodeInteger,
          $.BER
        ),
        baseToNthLevel: $._encode_implicit(
          _TagClass.context,
          2,
          () => $._encodeInteger,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_Scope(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Scope */

/* eslint-enable */
