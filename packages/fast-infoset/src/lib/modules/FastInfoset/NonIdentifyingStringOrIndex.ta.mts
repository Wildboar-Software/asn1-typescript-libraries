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
  NonIdentifyingStringOrIndex_literal_character_string,
  _decode_NonIdentifyingStringOrIndex_literal_character_string,
  _encode_NonIdentifyingStringOrIndex_literal_character_string,
} from '../FastInfoset/NonIdentifyingStringOrIndex-literal-character-string.ta.mjs';
/**
 * @summary NonIdentifyingStringOrIndex
 * @description
 *
 * Non-identifying character string (attribute values, character
 * chunks, PI/comment content, document version — category is
 * given at each use): a literal `EncodedCharacterString` with
 * an `add-to-table` flag, or an index 0..2²⁰. Index 0 is the
 * empty string (always used for zero-length; empty strings are
 * never table entries). Adding a literal to the table is a
 * creator option, unlike identifying strings. Prefer
 * `string-index` when an identical entry exists. A processor
 * that cannot add a required entry shall stop with an error.
 * ITU-T Rec. X.891 (05/2005)
 * [§7.14](https://www.itu.int/rec/T-REC-X.891-200505-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NonIdentifyingStringOrIndex  ::=  CHOICE {
 *   literal-character-string
 *     SEQUENCE {add-to-table      BOOLEAN,
 *               character-string  EncodedCharacterString},
 *   string-index              INTEGER(0..one-meg)
 * }
 * ```
 */
export type NonIdentifyingStringOrIndex =
  | {
      literal_character_string: NonIdentifyingStringOrIndex_literal_character_string;
    } /* CHOICE_ALT_ROOT */
  | { string_index: INTEGER } /* CHOICE_ALT_ROOT */;


export const _decode_NonIdentifyingStringOrIndex: $.ASN1Decoder<NonIdentifyingStringOrIndex> = $._decode_inextensible_choice<NonIdentifyingStringOrIndex>(
  {
    'CONTEXT 0': [
      'literal_character_string',
      _decode_NonIdentifyingStringOrIndex_literal_character_string,
    ],
    'CONTEXT 1': ['string_index', $._decodeInteger],
  }
);


export const _encode_NonIdentifyingStringOrIndex: $.ASN1Encoder<NonIdentifyingStringOrIndex> = $._encode_choice<NonIdentifyingStringOrIndex>(
  {
    literal_character_string: _encode_NonIdentifyingStringOrIndex_literal_character_string,
    string_index: $._encodeInteger,
  },
  $.BER
);


/* eslint-enable */
