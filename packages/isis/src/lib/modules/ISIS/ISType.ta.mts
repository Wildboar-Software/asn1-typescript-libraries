/* eslint-disable */
import {
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

/* START_OF_SYMBOL_DEFINITION _enum_for_ISType */
/**
 * @summary ISType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ISType  ::=  ENUMERATED {level1IS(1), level2IS(2)}
 * ```@enum {number}
 */
export enum _enum_for_ISType {
  level1IS = 1,
  level2IS = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ISType */

/* START_OF_SYMBOL_DEFINITION ISType */
/**
 * @summary ISType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ISType  ::=  ENUMERATED {level1IS(1), level2IS(2)}
 * ```@enum {number}
 */
export type ISType = _enum_for_ISType;
/* END_OF_SYMBOL_DEFINITION ISType */

/* START_OF_SYMBOL_DEFINITION ISType */
/**
 * @summary ISType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ISType  ::=  ENUMERATED {level1IS(1), level2IS(2)}
 * ```@enum {number}
 */
export const ISType = _enum_for_ISType;
/* END_OF_SYMBOL_DEFINITION ISType */

/* START_OF_SYMBOL_DEFINITION ISType_level1IS */
/**
 * @summary ISType_level1IS
 * @constant
 * @type {number}
 */
export const ISType_level1IS: ISType =
  ISType.level1IS; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ISType_level1IS */

/* START_OF_SYMBOL_DEFINITION level1IS */
/**
 * @summary level1IS
 * @constant
 * @type {number}
 */
export const level1IS: ISType =
  ISType.level1IS; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION level1IS */

/* START_OF_SYMBOL_DEFINITION ISType_level2IS */
/**
 * @summary ISType_level2IS
 * @constant
 * @type {number}
 */
export const ISType_level2IS: ISType =
  ISType.level2IS; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ISType_level2IS */

/* START_OF_SYMBOL_DEFINITION level2IS */
/**
 * @summary level2IS
 * @constant
 * @type {number}
 */
export const level2IS: ISType =
  ISType.level2IS; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION level2IS */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ISType */
let _cached_decoder_for_ISType: $.ASN1Decoder<ISType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ISType */

/* START_OF_SYMBOL_DEFINITION _decode_ISType */
/**
 * @summary Decodes an ASN.1 element into a(n) ISType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ISType} The decoded data structure.
 */
export function _decode_ISType(el: _Element) {
  if (!_cached_decoder_for_ISType) {
    _cached_decoder_for_ISType = $._decodeEnumerated;
  }
  return _cached_decoder_for_ISType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ISType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ISType */
let _cached_encoder_for_ISType: $.ASN1Encoder<ISType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ISType */

/* START_OF_SYMBOL_DEFINITION _encode_ISType */
/**
 * @summary Encodes a(n) ISType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ISType, encoded as an ASN.1 Element.
 */
export function _encode_ISType(value: ISType, elGetter: $.ASN1Encoder<ISType>) {
  if (!_cached_encoder_for_ISType) {
    _cached_encoder_for_ISType = $._encodeEnumerated;
  }
  return _cached_encoder_for_ISType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ISType */

/* eslint-enable */
