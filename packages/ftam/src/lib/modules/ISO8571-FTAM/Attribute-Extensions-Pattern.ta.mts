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
  Attribute_Extensions_Pattern_Item,
  _decode_Attribute_Extensions_Pattern_Item,
  _encode_Attribute_Extensions_Pattern_Item,
} from '../ISO8571-FTAM/Attribute-Extensions-Pattern-Item.ta.mjs';
export {
  Attribute_Extensions_Pattern_Item,
  _decode_Attribute_Extensions_Pattern_Item,
  _encode_Attribute_Extensions_Pattern_Item,
} from '../ISO8571-FTAM/Attribute-Extensions-Pattern-Item.ta.mjs';

/* START_OF_SYMBOL_DEFINITION Attribute_Extensions_Pattern */
/**
 * @summary Attribute_Extensions_Pattern
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Attribute-Extensions-Pattern  ::=
 *   SEQUENCE OF
 *     SEQUENCE {extension-set-identifier
 *                 [0] IMPLICIT Extension-Set-Identifier,
 *               extension-set-attribute-Patterns
 *                 [1] IMPLICIT SEQUENCE OF
 *                                SEQUENCE {extension-attribute-identifier
 *                                            TYPE-IDENTIFIER.&id
 *                                              ({Extension-attribute-Patterns}),
 *                                          extension-attribute-Pattern
 *                                            TYPE-IDENTIFIER.&Type
 *                                              ({Extension-attribute-Patterns}
 *                                                 {@.extension-attribute-identifier})
 *                                }}
 * ```
 */
export type Attribute_Extensions_Pattern = Attribute_Extensions_Pattern_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION Attribute_Extensions_Pattern */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Attribute_Extensions_Pattern */
let _cached_decoder_for_Attribute_Extensions_Pattern: $.ASN1Decoder<Attribute_Extensions_Pattern> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Attribute_Extensions_Pattern */

/* START_OF_SYMBOL_DEFINITION _decode_Attribute_Extensions_Pattern */
/**
 * @summary Decodes an ASN.1 element into a(n) Attribute_Extensions_Pattern
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Attribute_Extensions_Pattern} The decoded data structure.
 */
export function _decode_Attribute_Extensions_Pattern(el: _Element) {
  if (!_cached_decoder_for_Attribute_Extensions_Pattern) {
    _cached_decoder_for_Attribute_Extensions_Pattern = $._decodeSequenceOf<Attribute_Extensions_Pattern_Item>(
      () => _decode_Attribute_Extensions_Pattern_Item
    );
  }
  return _cached_decoder_for_Attribute_Extensions_Pattern(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Attribute_Extensions_Pattern */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Attribute_Extensions_Pattern */
let _cached_encoder_for_Attribute_Extensions_Pattern: $.ASN1Encoder<Attribute_Extensions_Pattern> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Attribute_Extensions_Pattern */

/* START_OF_SYMBOL_DEFINITION _encode_Attribute_Extensions_Pattern */
/**
 * @summary Encodes a(n) Attribute_Extensions_Pattern into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Attribute_Extensions_Pattern, encoded as an ASN.1 Element.
 */
export function _encode_Attribute_Extensions_Pattern(
  value: Attribute_Extensions_Pattern,
  elGetter: $.ASN1Encoder<Attribute_Extensions_Pattern>
) {
  if (!_cached_encoder_for_Attribute_Extensions_Pattern) {
    _cached_encoder_for_Attribute_Extensions_Pattern = $._encodeSequenceOf<Attribute_Extensions_Pattern_Item>(
      () => _encode_Attribute_Extensions_Pattern_Item,
      $.BER
    );
  }
  return _cached_encoder_for_Attribute_Extensions_Pattern(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Attribute_Extensions_Pattern */

/* eslint-enable */
