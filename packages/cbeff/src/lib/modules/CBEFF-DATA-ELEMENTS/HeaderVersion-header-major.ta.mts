/* eslint-disable */
import {
  INTEGER,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary HeaderVersion_header_major
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HeaderVersion-header-major ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type HeaderVersion_header_major = INTEGER;

/**
 * @summary HeaderVersion_header_major_version1
 * @constant
 * @type {number}
 */
export const HeaderVersion_header_major_version1: HeaderVersion_header_major = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary HeaderVersion_header_major_version1
 * @constant
 * @type {number}
 */
export const version1: HeaderVersion_header_major = HeaderVersion_header_major_version1; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_HeaderVersion_header_major = $._decodeInteger;


export const _encode_HeaderVersion_header_major = $._encodeInteger;


/* eslint-enable */
