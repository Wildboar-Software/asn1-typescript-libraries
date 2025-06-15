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

/* START_OF_SYMBOL_DEFINITION _enum_for_CMIPAbortSource */
/**
 * @summary CMIPAbortSource
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMIPAbortSource  ::=  ENUMERATED {cmiseServiceUser(0), cmiseServiceProvider(1)}
 * ```@enum {number}
 */
export enum _enum_for_CMIPAbortSource {
  cmiseServiceUser = 0,
  cmiseServiceProvider = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_CMIPAbortSource */

/* START_OF_SYMBOL_DEFINITION CMIPAbortSource */
/**
 * @summary CMIPAbortSource
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMIPAbortSource  ::=  ENUMERATED {cmiseServiceUser(0), cmiseServiceProvider(1)}
 * ```@enum {number}
 */
export type CMIPAbortSource = _enum_for_CMIPAbortSource;
/* END_OF_SYMBOL_DEFINITION CMIPAbortSource */

/* START_OF_SYMBOL_DEFINITION CMIPAbortSource */
/**
 * @summary CMIPAbortSource
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMIPAbortSource  ::=  ENUMERATED {cmiseServiceUser(0), cmiseServiceProvider(1)}
 * ```@enum {number}
 */
export const CMIPAbortSource = _enum_for_CMIPAbortSource;
/* END_OF_SYMBOL_DEFINITION CMIPAbortSource */

/* START_OF_SYMBOL_DEFINITION CMIPAbortSource_cmiseServiceUser */
/**
 * @summary CMIPAbortSource_cmiseServiceUser
 * @constant
 * @type {number}
 */
export const CMIPAbortSource_cmiseServiceUser: CMIPAbortSource =
  CMIPAbortSource.cmiseServiceUser; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CMIPAbortSource_cmiseServiceUser */

/* START_OF_SYMBOL_DEFINITION cmiseServiceUser */
/**
 * @summary cmiseServiceUser
 * @constant
 * @type {number}
 */
export const cmiseServiceUser: CMIPAbortSource =
  CMIPAbortSource.cmiseServiceUser; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION cmiseServiceUser */

/* START_OF_SYMBOL_DEFINITION CMIPAbortSource_cmiseServiceProvider */
/**
 * @summary CMIPAbortSource_cmiseServiceProvider
 * @constant
 * @type {number}
 */
export const CMIPAbortSource_cmiseServiceProvider: CMIPAbortSource =
  CMIPAbortSource.cmiseServiceProvider; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CMIPAbortSource_cmiseServiceProvider */

/* START_OF_SYMBOL_DEFINITION cmiseServiceProvider */
/**
 * @summary cmiseServiceProvider
 * @constant
 * @type {number}
 */
export const cmiseServiceProvider: CMIPAbortSource =
  CMIPAbortSource.cmiseServiceProvider; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION cmiseServiceProvider */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CMIPAbortSource */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CMIPAbortSource */

/* START_OF_SYMBOL_DEFINITION _decode_CMIPAbortSource */
export const _decode_CMIPAbortSource = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_CMIPAbortSource */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CMIPAbortSource */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CMIPAbortSource */

/* START_OF_SYMBOL_DEFINITION _encode_CMIPAbortSource */
export const _encode_CMIPAbortSource = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_CMIPAbortSource */

/* eslint-enable */
