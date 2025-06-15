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
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary CBEFFVersion_cbeff_minor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CBEFFVersion-cbeff-minor ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CBEFFVersion_cbeff_minor = INTEGER;

/**
 * @summary CBEFFVersion_cbeff_minor_version0
 * @constant
 * @type {number}
 */
export const CBEFFVersion_cbeff_minor_version0: CBEFFVersion_cbeff_minor = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CBEFFVersion_cbeff_minor_version0
 * @constant
 * @type {number}
 */
export const version0: CBEFFVersion_cbeff_minor = CBEFFVersion_cbeff_minor_version0; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_CBEFFVersion_cbeff_minor = $._decodeInteger;


export const _encode_CBEFFVersion_cbeff_minor = $._encodeInteger;


/* eslint-enable */
