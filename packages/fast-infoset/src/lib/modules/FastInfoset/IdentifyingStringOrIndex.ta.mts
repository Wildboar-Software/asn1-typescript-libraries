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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  NonEmptyOctetString,
  _decode_NonEmptyOctetString,
  _encode_NonEmptyOctetString,
} from '../FastInfoset/NonEmptyOctetString.ta.mjs';
/**
 * @summary IdentifyingStringOrIndex
 * @description
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


export const _decode_IdentifyingStringOrIndex = $._decode_inextensible_choice<IdentifyingStringOrIndex>(
  {
    'CONTEXT 0': ['literal_character_string', _decode_NonEmptyOctetString],
    'CONTEXT 1': ['string_index', $._decodeInteger],
  }
);


export const _encode_IdentifyingStringOrIndex = $._encode_choice<IdentifyingStringOrIndex>(
  {
    literal_character_string: _encode_NonEmptyOctetString,
    string_index: $._encodeInteger,
  },
  $.BER
);


/* eslint-enable */
