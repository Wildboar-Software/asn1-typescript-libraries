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
  Attribute_Extension_Set,
  _decode_Attribute_Extension_Set,
  _encode_Attribute_Extension_Set,
} from '../ISO8571-FTAM/Attribute-Extension-Set.ta.mjs';
export {
  Attribute_Extension_Set,
  _decode_Attribute_Extension_Set,
  _encode_Attribute_Extension_Set,
} from '../ISO8571-FTAM/Attribute-Extension-Set.ta.mjs';

/* START_OF_SYMBOL_DEFINITION Attribute_Extensions */
/**
 * @summary Attribute_Extensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Attribute-Extensions  ::=  SEQUENCE OF Attribute-Extension-Set
 * ```
 */
export type Attribute_Extensions = Attribute_Extension_Set[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION Attribute_Extensions */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Attribute_Extensions */
let _cached_decoder_for_Attribute_Extensions: $.ASN1Decoder<Attribute_Extensions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Attribute_Extensions */

/* START_OF_SYMBOL_DEFINITION _decode_Attribute_Extensions */
/**
 * @summary Decodes an ASN.1 element into a(n) Attribute_Extensions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Attribute_Extensions} The decoded data structure.
 */
export function _decode_Attribute_Extensions(el: _Element) {
  if (!_cached_decoder_for_Attribute_Extensions) {
    _cached_decoder_for_Attribute_Extensions = $._decodeSequenceOf<Attribute_Extension_Set>(
      () => _decode_Attribute_Extension_Set
    );
  }
  return _cached_decoder_for_Attribute_Extensions(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Attribute_Extensions */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Attribute_Extensions */
let _cached_encoder_for_Attribute_Extensions: $.ASN1Encoder<Attribute_Extensions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Attribute_Extensions */

/* START_OF_SYMBOL_DEFINITION _encode_Attribute_Extensions */
/**
 * @summary Encodes a(n) Attribute_Extensions into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Attribute_Extensions, encoded as an ASN.1 Element.
 */
export function _encode_Attribute_Extensions(
  value: Attribute_Extensions,
  elGetter: $.ASN1Encoder<Attribute_Extensions>
) {
  if (!_cached_encoder_for_Attribute_Extensions) {
    _cached_encoder_for_Attribute_Extensions = $._encodeSequenceOf<Attribute_Extension_Set>(
      () => _encode_Attribute_Extension_Set,
      $.BER
    );
  }
  return _cached_encoder_for_Attribute_Extensions(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Attribute_Extensions */

/* eslint-enable */
