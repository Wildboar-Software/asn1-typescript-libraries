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

/* START_OF_SYMBOL_DEFINITION Extension_Set_Identifier */
/**
 * @summary Extension_Set_Identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Extension-Set-Identifier  ::=  OBJECT IDENTIFIER
 * ```
 */
export type Extension_Set_Identifier = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION Extension_Set_Identifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Extension_Set_Identifier */
let _cached_decoder_for_Extension_Set_Identifier: $.ASN1Decoder<Extension_Set_Identifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Extension_Set_Identifier */

/* START_OF_SYMBOL_DEFINITION _decode_Extension_Set_Identifier */
/**
 * @summary Decodes an ASN.1 element into a(n) Extension_Set_Identifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Extension_Set_Identifier} The decoded data structure.
 */
export function _decode_Extension_Set_Identifier(el: _Element) {
  if (!_cached_decoder_for_Extension_Set_Identifier) {
    _cached_decoder_for_Extension_Set_Identifier = $._decodeObjectIdentifier;
  }
  return _cached_decoder_for_Extension_Set_Identifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Extension_Set_Identifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Extension_Set_Identifier */
let _cached_encoder_for_Extension_Set_Identifier: $.ASN1Encoder<Extension_Set_Identifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Extension_Set_Identifier */

/* START_OF_SYMBOL_DEFINITION _encode_Extension_Set_Identifier */
/**
 * @summary Encodes a(n) Extension_Set_Identifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Extension_Set_Identifier, encoded as an ASN.1 Element.
 */
export function _encode_Extension_Set_Identifier(
  value: Extension_Set_Identifier,
  elGetter: $.ASN1Encoder<Extension_Set_Identifier>
) {
  if (!_cached_encoder_for_Extension_Set_Identifier) {
    _cached_encoder_for_Extension_Set_Identifier = $._encodeObjectIdentifier;
  }
  return _cached_encoder_for_Extension_Set_Identifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Extension_Set_Identifier */

/* eslint-enable */
