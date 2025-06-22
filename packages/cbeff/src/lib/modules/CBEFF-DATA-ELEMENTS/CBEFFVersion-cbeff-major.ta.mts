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
 * @summary CBEFFVersion_cbeff_major
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CBEFFVersion-cbeff-major ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CBEFFVersion_cbeff_major = INTEGER;

/**
 * @summary CBEFFVersion_cbeff_major_version2
 * @constant
 * @type {number}
 */
export const CBEFFVersion_cbeff_major_version2: CBEFFVersion_cbeff_major = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CBEFFVersion_cbeff_major_version2
 * @constant
 * @type {number}
 */
export const version2: CBEFFVersion_cbeff_major = CBEFFVersion_cbeff_major_version2; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_CBEFFVersion_cbeff_major = $._decodeInteger;


export const _encode_CBEFFVersion_cbeff_major = $._encodeInteger;


/* eslint-enable */
