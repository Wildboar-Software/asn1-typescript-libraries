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
  AND_Set_Item,
  _decode_AND_Set_Item,
  _encode_AND_Set_Item,
} from '../ISO8571-FTAM/AND-Set-Item.ta.mjs';
export {
  AND_Set_Item,
  _decode_AND_Set_Item,
  _encode_AND_Set_Item,
} from '../ISO8571-FTAM/AND-Set-Item.ta.mjs';

/* START_OF_SYMBOL_DEFINITION AND_Set */
/**
 * @summary AND_Set
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AND-Set  ::=
 *   SEQUENCE OF
 *     CHOICE {-- Kernel group
 *             pathname-Pattern
 *               [0] IMPLICIT Pathname-Pattern,
 *             object-type-Pattern
 *               [18] IMPLICIT Integer-Pattern,
 *             permitted-actions-Pattern
 *               [1] IMPLICIT Bitstring-Pattern,
 *             contents-type-Pattern
 *               [2]  Contents-Type-Pattern,
 *             linked-Object-Pattern
 *               [19] IMPLICIT Pathname-Pattern,
 *             child-objects-Pattern
 *               [23] IMPLICIT Pathname-Pattern,
 *             -- Storage group
 *             primaty-pathname-Pattern
 *               [20] IMPLICIT Pathname-Pattern,
 *             storage-account-Pattern
 *               [3] IMPLICIT String-Pattern,
 *             date-and-time-of-creation-Pattern
 *               [4] IMPLICIT Date-and-Time-Pattern,
 *             date-and-time-of-last-modification-Pattern
 *               [5] IMPLICIT Date-and-Time-Pattern,
 *             date-and-time-of-last-read-access-Pattern
 *               [6] IMPLICIT Date-and-Time-Pattern,
 *             date-and-time-of-last-attribute-modification-Pattern
 *               [7] IMPLICIT Date-and-Time-Pattern,
 *             identity-of-creator-Pattern
 *               [8] IMPLICIT User-Identity-Pattern,
 *             identity-of-last-modifier-Pattern
 *               [9] IMPLICIT User-Identity-Pattern,
 *             identity-of-last-reader-Pattern
 *               [10] IMPLICIT User-Identity-Pattern,
 *             identity-of-last-attribute-modifier-Pattern
 *               [11] IMPLICIT User-Identity-Pattern,
 *             object-availabiiity-Pattern
 *               [12] IMPLICIT Boolean-Pattern,
 *             object-size-Pattern
 *               [13] IMPLICIT Integer-Pattern,
 *             future-object-size-Pattern
 *               [14] IMPLICIT Integer-Pattern,
 *             -- Security group
 *             -- Access control searches are disallowed.
 *             legal-quailfication-Pattern
 *               [16] IMPLICIT String-Pattern,
 *             -- Private group
 *             -- Private use searches are disallowed.
 *             -- Attribute Extensions group
 *             attribute-extensions-pattern
 *               [22] IMPLICIT Attribute-Extensions-Pattern}
 * ```
 */
export type AND_Set = AND_Set_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION AND_Set */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AND_Set */
let _cached_decoder_for_AND_Set: $.ASN1Decoder<AND_Set> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AND_Set */

/* START_OF_SYMBOL_DEFINITION _decode_AND_Set */
/**
 * @summary Decodes an ASN.1 element into a(n) AND_Set
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AND_Set} The decoded data structure.
 */
export function _decode_AND_Set(el: _Element) {
  if (!_cached_decoder_for_AND_Set) {
    _cached_decoder_for_AND_Set = $._decodeSequenceOf<AND_Set_Item>(
      () => _decode_AND_Set_Item
    );
  }
  return _cached_decoder_for_AND_Set(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AND_Set */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AND_Set */
let _cached_encoder_for_AND_Set: $.ASN1Encoder<AND_Set> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AND_Set */

/* START_OF_SYMBOL_DEFINITION _encode_AND_Set */
/**
 * @summary Encodes a(n) AND_Set into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AND_Set, encoded as an ASN.1 Element.
 */
export function _encode_AND_Set(
  value: AND_Set,
  elGetter: $.ASN1Encoder<AND_Set>
) {
  if (!_cached_encoder_for_AND_Set) {
    _cached_encoder_for_AND_Set = $._encodeSequenceOf<AND_Set_Item>(
      () => _encode_AND_Set_Item,
      $.BER
    );
  }
  return _cached_encoder_for_AND_Set(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AND_Set */

/* eslint-enable */
