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
  NonEmptyOctetString,
  _decode_NonEmptyOctetString,
  _encode_NonEmptyOctetString,
} from '../FastInfoset/NonEmptyOctetString.ta';
export {
  NonEmptyOctetString,
  _decode_NonEmptyOctetString,
  _encode_NonEmptyOctetString,
} from '../FastInfoset/NonEmptyOctetString.ta';

/* START_OF_SYMBOL_DEFINITION IdentifyingStringOrIndex */
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
/* END_OF_SYMBOL_DEFINITION IdentifyingStringOrIndex */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IdentifyingStringOrIndex */
let _cached_decoder_for_IdentifyingStringOrIndex: $.ASN1Decoder<IdentifyingStringOrIndex> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IdentifyingStringOrIndex */

/* START_OF_SYMBOL_DEFINITION _decode_IdentifyingStringOrIndex */
/**
 * @summary Decodes an ASN.1 element into a(n) IdentifyingStringOrIndex
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IdentifyingStringOrIndex} The decoded data structure.
 */
export function _decode_IdentifyingStringOrIndex(el: _Element) {
  if (!_cached_decoder_for_IdentifyingStringOrIndex) {
    _cached_decoder_for_IdentifyingStringOrIndex = $._decode_inextensible_choice<IdentifyingStringOrIndex>(
      {
        'CONTEXT 0': ['literal_character_string', _decode_NonEmptyOctetString],
        'CONTEXT 1': ['string_index', $._decodeInteger],
      }
    );
  }
  return _cached_decoder_for_IdentifyingStringOrIndex(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IdentifyingStringOrIndex */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IdentifyingStringOrIndex */
let _cached_encoder_for_IdentifyingStringOrIndex: $.ASN1Encoder<IdentifyingStringOrIndex> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IdentifyingStringOrIndex */

/* START_OF_SYMBOL_DEFINITION _encode_IdentifyingStringOrIndex */
/**
 * @summary Encodes a(n) IdentifyingStringOrIndex into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IdentifyingStringOrIndex, encoded as an ASN.1 Element.
 */
export function _encode_IdentifyingStringOrIndex(
  value: IdentifyingStringOrIndex,
  elGetter: $.ASN1Encoder<IdentifyingStringOrIndex>
) {
  if (!_cached_encoder_for_IdentifyingStringOrIndex) {
    _cached_encoder_for_IdentifyingStringOrIndex = $._encode_choice<IdentifyingStringOrIndex>(
      {
        literal_character_string: _encode_NonEmptyOctetString,
        string_index: $._encodeInteger,
      },
      $.BER
    );
  }
  return _cached_encoder_for_IdentifyingStringOrIndex(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IdentifyingStringOrIndex */

/* eslint-enable */
