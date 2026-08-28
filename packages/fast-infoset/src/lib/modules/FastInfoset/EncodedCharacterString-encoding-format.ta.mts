/* eslint-disable */
import {
  INTEGER,
  NULL,
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
 * @summary EncodedCharacterString_encoding_format
 * @description
 *
 * Encoding used for `EncodedCharacterString.octets`. `utf-8`
 * is UTF-8; `utf-16` is UTF-16BE (MSB first).
 * `restricted-alphabet` is an index 1..256 into the restricted
 * alphabet table (built-in: 1 = numeric `0-9-+.e `, 2 =
 * date-and-time `0-9-:TZ `; 3–15 reserved). Each character
 * becomes a bit-field sized from the alphabet length; all-ones
 * is end-of-string, so a power-of-two alphabet uses one extra
 * bit; leftover bits in the last octet are `1`.
 * `encoding-algorithm` is an index 1..256 into the encoding
 * algorithm table (built-in 1–10: hex, base64, short, int,
 * long, boolean, float, double, uuid, cdata; 11–31 reserved).
 * ITU-T Rec. X.891 (05/2005)
 * [§7.17.4](https://www.itu.int/rec/T-REC-X.891-200505-I)–
 * §7.17.7, clauses 9–10.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncodedCharacterString-encoding-format ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type EncodedCharacterString_encoding_format =
  | { utf_8: NULL } /* CHOICE_ALT_ROOT */
  | { utf_16: NULL } /* CHOICE_ALT_ROOT */
  | { restricted_alphabet: INTEGER } /* CHOICE_ALT_ROOT */
  | { encoding_algorithm: INTEGER } /* CHOICE_ALT_ROOT */;


export const _decode_EncodedCharacterString_encoding_format: $.ASN1Decoder<EncodedCharacterString_encoding_format> = $._decode_inextensible_choice<EncodedCharacterString_encoding_format>(
  {
    'CONTEXT 0': ['utf_8', $._decodeNull],
    'CONTEXT 1': ['utf_16', $._decodeNull],
    'CONTEXT 2': ['restricted_alphabet', $._decodeInteger],
    'CONTEXT 3': ['encoding_algorithm', $._decodeInteger],
  }
);


export const _encode_EncodedCharacterString_encoding_format: $.ASN1Encoder<EncodedCharacterString_encoding_format> = $._encode_choice<EncodedCharacterString_encoding_format>(
  {
    utf_8: $._encodeNull,
    utf_16: $._encodeNull,
    restricted_alphabet: $._encodeInteger,
    encoding_algorithm: $._encodeInteger,
  },
  $.BER
);


/* eslint-enable */
