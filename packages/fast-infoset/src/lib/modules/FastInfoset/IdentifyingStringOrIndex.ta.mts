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
  NonEmptyOctetString,
  _decode_NonEmptyOctetString,
  _encode_NonEmptyOctetString,
} from '../FastInfoset/NonEmptyOctetString.ta.mjs';
/**
 * @summary IdentifyingStringOrIndex
 * @description
 *
 * Identifying character string (prefix, namespace name, local
 * name, NCName, or URI — category is given at each use):
 * either UTF-8 octets, or an index 1..2²⁰ into the applicable
 * string table. Unlike non-identifying strings, encoding is
 * always UTF-8 and a literal is always added to the table
 * (unless it already has 2²⁰ entries). Prefer `string-index`
 * when an identical entry already exists. If a processor
 * cannot add a required entry, it shall stop with an error.
 * ITU-T Rec. X.891 (05/2005)
 * [§7.13](https://www.itu.int/rec/T-REC-X.891-200505-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IdentifyingStringOrIndex  ::=  CHOICE {
 *   literal-character-string  NonEmptyOctetString,
 *   string-index              INTEGER(1..one-meg)
 * }
 * ```
 */
export type IdentifyingStringOrIndex =
  | { literal_character_string: NonEmptyOctetString } /* CHOICE_ALT_ROOT */
  | { string_index: INTEGER } /* CHOICE_ALT_ROOT */;


export const _decode_IdentifyingStringOrIndex: $.ASN1Decoder<IdentifyingStringOrIndex> = $._decode_inextensible_choice<IdentifyingStringOrIndex>(
  {
    'CONTEXT 0': ['literal_character_string', _decode_NonEmptyOctetString],
    'CONTEXT 1': ['string_index', $._decodeInteger],
  }
);


export const _encode_IdentifyingStringOrIndex: $.ASN1Encoder<IdentifyingStringOrIndex> = $._encode_choice<IdentifyingStringOrIndex>(
  {
    literal_character_string: _encode_NonEmptyOctetString,
    string_index: $._encodeInteger,
  },
  $.BER
);


/* eslint-enable */
