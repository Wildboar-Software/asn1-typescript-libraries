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

/* START_OF_SYMBOL_DEFINITION Attribute_Groups */
/**
 * @summary Attribute_Groups
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Attribute-Groups  ::=  [5] IMPLICIT BIT STRING {
 *   storage(0), security(1), private(2), extension(3)}
 * ```
 */
export type Attribute_Groups = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION Attribute_Groups */

/* START_OF_SYMBOL_DEFINITION Attribute_Groups_storage */
/**
 * @summary Attribute_Groups_storage
 * @constant
 */
export const Attribute_Groups_storage: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Attribute_Groups_storage */

/* START_OF_SYMBOL_DEFINITION storage */
/**
 * @summary storage
 * @constant
 */
export const storage: number = Attribute_Groups_storage; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION storage */

/* START_OF_SYMBOL_DEFINITION Attribute_Groups_security */
/**
 * @summary Attribute_Groups_security
 * @constant
 */
export const Attribute_Groups_security: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Attribute_Groups_security */

/* START_OF_SYMBOL_DEFINITION security */
/**
 * @summary security
 * @constant
 */
export const security: number = Attribute_Groups_security; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION security */

/* START_OF_SYMBOL_DEFINITION Attribute_Groups_private_ */
/**
 * @summary Attribute_Groups_private_
 * @constant
 */
export const Attribute_Groups_private_: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Attribute_Groups_private_ */

/* START_OF_SYMBOL_DEFINITION private_ */
/**
 * @summary private_
 * @constant
 */
export const private_: number = Attribute_Groups_private_; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION private_ */

/* START_OF_SYMBOL_DEFINITION Attribute_Groups_extension */
/**
 * @summary Attribute_Groups_extension
 * @constant
 */
export const Attribute_Groups_extension: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Attribute_Groups_extension */

/* START_OF_SYMBOL_DEFINITION extension */
/**
 * @summary extension
 * @constant
 */
export const extension: number = Attribute_Groups_extension; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION extension */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Attribute_Groups */
let _cached_decoder_for_Attribute_Groups: $.ASN1Decoder<Attribute_Groups> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Attribute_Groups */

/* START_OF_SYMBOL_DEFINITION _decode_Attribute_Groups */
/**
 * @summary Decodes an ASN.1 element into a(n) Attribute_Groups
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Attribute_Groups} The decoded data structure.
 */
export function _decode_Attribute_Groups(el: _Element) {
  if (!_cached_decoder_for_Attribute_Groups) {
    _cached_decoder_for_Attribute_Groups = $._decode_implicit<Attribute_Groups>(
      () => $._decodeBitString
    );
  }
  return _cached_decoder_for_Attribute_Groups(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Attribute_Groups */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Attribute_Groups */
let _cached_encoder_for_Attribute_Groups: $.ASN1Encoder<Attribute_Groups> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Attribute_Groups */

/* START_OF_SYMBOL_DEFINITION _encode_Attribute_Groups */
/**
 * @summary Encodes a(n) Attribute_Groups into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Attribute_Groups, encoded as an ASN.1 Element.
 */
export function _encode_Attribute_Groups(
  value: Attribute_Groups,
  elGetter: $.ASN1Encoder<Attribute_Groups>
) {
  if (!_cached_encoder_for_Attribute_Groups) {
    _cached_encoder_for_Attribute_Groups = $._encode_implicit(
      _TagClass.context,
      5,
      () => $._encodeBitString,
      $.BER
    );
  }
  return _cached_encoder_for_Attribute_Groups(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Attribute_Groups */

/* eslint-enable */
