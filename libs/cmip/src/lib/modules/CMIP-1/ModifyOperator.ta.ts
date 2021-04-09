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

/* START_OF_SYMBOL_DEFINITION ModifyOperator */
/**
 * @summary ModifyOperator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyOperator  ::=  INTEGER {
 *   replace(0), addValues(1), removeValues(2), setToDefault(3)}
 * ```
 */
export type ModifyOperator = INTEGER;
/* END_OF_SYMBOL_DEFINITION ModifyOperator */

/* START_OF_SYMBOL_DEFINITION ModifyOperator_replace */
/**
 * @summary ModifyOperator_replace
 * @constant
 * @type {number}
 */
export const ModifyOperator_replace: ModifyOperator = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ModifyOperator_replace */

/* START_OF_SYMBOL_DEFINITION replace */
/**
 * @summary ModifyOperator_replace
 * @constant
 * @type {number}
 */
export const replace: ModifyOperator = ModifyOperator_replace; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION replace */

/* START_OF_SYMBOL_DEFINITION ModifyOperator_addValues */
/**
 * @summary ModifyOperator_addValues
 * @constant
 * @type {number}
 */
export const ModifyOperator_addValues: ModifyOperator = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ModifyOperator_addValues */

/* START_OF_SYMBOL_DEFINITION addValues */
/**
 * @summary ModifyOperator_addValues
 * @constant
 * @type {number}
 */
export const addValues: ModifyOperator = ModifyOperator_addValues; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION addValues */

/* START_OF_SYMBOL_DEFINITION ModifyOperator_removeValues */
/**
 * @summary ModifyOperator_removeValues
 * @constant
 * @type {number}
 */
export const ModifyOperator_removeValues: ModifyOperator = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ModifyOperator_removeValues */

/* START_OF_SYMBOL_DEFINITION removeValues */
/**
 * @summary ModifyOperator_removeValues
 * @constant
 * @type {number}
 */
export const removeValues: ModifyOperator = ModifyOperator_removeValues; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION removeValues */

/* START_OF_SYMBOL_DEFINITION ModifyOperator_setToDefault */
/**
 * @summary ModifyOperator_setToDefault
 * @constant
 * @type {number}
 */
export const ModifyOperator_setToDefault: ModifyOperator = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ModifyOperator_setToDefault */

/* START_OF_SYMBOL_DEFINITION setToDefault */
/**
 * @summary ModifyOperator_setToDefault
 * @constant
 * @type {number}
 */
export const setToDefault: ModifyOperator = ModifyOperator_setToDefault; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION setToDefault */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyOperator */
let _cached_decoder_for_ModifyOperator: $.ASN1Decoder<ModifyOperator> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyOperator */

/* START_OF_SYMBOL_DEFINITION _decode_ModifyOperator */
/**
 * @summary Decodes an ASN.1 element into a(n) ModifyOperator
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyOperator} The decoded data structure.
 */
export function _decode_ModifyOperator(el: _Element) {
  if (!_cached_decoder_for_ModifyOperator) {
    _cached_decoder_for_ModifyOperator = $._decodeInteger;
  }
  return _cached_decoder_for_ModifyOperator(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ModifyOperator */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyOperator */
let _cached_encoder_for_ModifyOperator: $.ASN1Encoder<ModifyOperator> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyOperator */

/* START_OF_SYMBOL_DEFINITION _encode_ModifyOperator */
/**
 * @summary Encodes a(n) ModifyOperator into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyOperator, encoded as an ASN.1 Element.
 */
export function _encode_ModifyOperator(
  value: ModifyOperator,
  elGetter: $.ASN1Encoder<ModifyOperator>
) {
  if (!_cached_encoder_for_ModifyOperator) {
    _cached_encoder_for_ModifyOperator = $._encodeInteger;
  }
  return _cached_encoder_for_ModifyOperator(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ModifyOperator */

/* eslint-enable */
