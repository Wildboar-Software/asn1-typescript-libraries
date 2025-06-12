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
  BaseManagedObjectId,
  _decode_BaseManagedObjectId,
  _encode_BaseManagedObjectId,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/BaseManagedObjectId.ta.js';

/* START_OF_SYMBOL_DEFINITION UserObjects */
/**
 * @summary UserObjects
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UserObjects  ::=  SET OF BaseManagedObjectId
 * ```
 */
export type UserObjects = BaseManagedObjectId[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION UserObjects */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UserObjects */
let _cached_decoder_for_UserObjects: $.ASN1Decoder<UserObjects> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UserObjects */

/* START_OF_SYMBOL_DEFINITION _decode_UserObjects */
/**
 * @summary Decodes an ASN.1 element into a(n) UserObjects
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UserObjects} The decoded data structure.
 */
export function _decode_UserObjects(el: _Element) {
  if (!_cached_decoder_for_UserObjects) {
    _cached_decoder_for_UserObjects = $._decodeSetOf<BaseManagedObjectId>(
      () => _decode_BaseManagedObjectId
    );
  }
  return _cached_decoder_for_UserObjects(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UserObjects */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UserObjects */
let _cached_encoder_for_UserObjects: $.ASN1Encoder<UserObjects> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UserObjects */

/* START_OF_SYMBOL_DEFINITION _encode_UserObjects */
/**
 * @summary Encodes a(n) UserObjects into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserObjects, encoded as an ASN.1 Element.
 */
export function _encode_UserObjects(
  value: UserObjects,
  elGetter: $.ASN1Encoder<UserObjects>
) {
  if (!_cached_encoder_for_UserObjects) {
    _cached_encoder_for_UserObjects = $._encodeSetOf<BaseManagedObjectId>(
      () => _encode_BaseManagedObjectId,
      $.BER
    );
  }
  return _cached_encoder_for_UserObjects(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UserObjects */

/* eslint-enable */
