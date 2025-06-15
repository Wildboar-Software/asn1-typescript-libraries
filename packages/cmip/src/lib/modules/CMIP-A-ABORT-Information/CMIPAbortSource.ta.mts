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


/**
 * @summary CMIPAbortSource_cmiseServiceUser
 * @constant
 * @type {number}
 */
export const CMIPAbortSource_cmiseServiceUser: CMIPAbortSource =
  CMIPAbortSource.cmiseServiceUser; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary cmiseServiceUser
 * @constant
 * @type {number}
 */
export const cmiseServiceUser: CMIPAbortSource =
  CMIPAbortSource.cmiseServiceUser; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CMIPAbortSource_cmiseServiceProvider
 * @constant
 * @type {number}
 */
export const CMIPAbortSource_cmiseServiceProvider: CMIPAbortSource =
  CMIPAbortSource.cmiseServiceProvider; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary cmiseServiceProvider
 * @constant
 * @type {number}
 */
export const cmiseServiceProvider: CMIPAbortSource =
  CMIPAbortSource.cmiseServiceProvider; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_CMIPAbortSource = $._decodeEnumerated;




export const _encode_CMIPAbortSource = $._encodeEnumerated;


/* eslint-enable */
