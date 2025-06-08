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

/* START_OF_SYMBOL_DEFINITION BioAPI_DB_ACCESS_TYPE */
/**
 * @summary BioAPI_DB_ACCESS_TYPE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-DB-ACCESS-TYPE  ::=  BIT STRING {read(0), write(1)}(SIZE (32))
 * ```
 */
export type BioAPI_DB_ACCESS_TYPE = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION BioAPI_DB_ACCESS_TYPE */

/* START_OF_SYMBOL_DEFINITION BioAPI_DB_ACCESS_TYPE_read */
/**
 * @summary BioAPI_DB_ACCESS_TYPE_read
 * @constant
 */
export const BioAPI_DB_ACCESS_TYPE_read: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_DB_ACCESS_TYPE_read */

/* START_OF_SYMBOL_DEFINITION read */
/**
 * @summary read
 * @constant
 */
export const read: number = BioAPI_DB_ACCESS_TYPE_read; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION read */

/* START_OF_SYMBOL_DEFINITION BioAPI_DB_ACCESS_TYPE_write */
/**
 * @summary BioAPI_DB_ACCESS_TYPE_write
 * @constant
 */
export const BioAPI_DB_ACCESS_TYPE_write: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_DB_ACCESS_TYPE_write */

/* START_OF_SYMBOL_DEFINITION write */
/**
 * @summary write
 * @constant
 */
export const write: number = BioAPI_DB_ACCESS_TYPE_write; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION write */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_DB_ACCESS_TYPE */
let _cached_decoder_for_BioAPI_DB_ACCESS_TYPE: $.ASN1Decoder<BioAPI_DB_ACCESS_TYPE> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_DB_ACCESS_TYPE */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_DB_ACCESS_TYPE */
/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_DB_ACCESS_TYPE
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_DB_ACCESS_TYPE} The decoded data structure.
 */
export function _decode_BioAPI_DB_ACCESS_TYPE(el: _Element) {
  if (!_cached_decoder_for_BioAPI_DB_ACCESS_TYPE) {
    _cached_decoder_for_BioAPI_DB_ACCESS_TYPE = $._decodeBitString;
  }
  return _cached_decoder_for_BioAPI_DB_ACCESS_TYPE(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_DB_ACCESS_TYPE */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_DB_ACCESS_TYPE */
let _cached_encoder_for_BioAPI_DB_ACCESS_TYPE: $.ASN1Encoder<BioAPI_DB_ACCESS_TYPE> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_DB_ACCESS_TYPE */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_DB_ACCESS_TYPE */
/**
 * @summary Encodes a(n) BioAPI_DB_ACCESS_TYPE into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_DB_ACCESS_TYPE, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_DB_ACCESS_TYPE(
  value: BioAPI_DB_ACCESS_TYPE,
  elGetter: $.ASN1Encoder<BioAPI_DB_ACCESS_TYPE>
) {
  if (!_cached_encoder_for_BioAPI_DB_ACCESS_TYPE) {
    _cached_encoder_for_BioAPI_DB_ACCESS_TYPE = $._encodeBitString;
  }
  return _cached_encoder_for_BioAPI_DB_ACCESS_TYPE(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_DB_ACCESS_TYPE */

/* eslint-enable */
