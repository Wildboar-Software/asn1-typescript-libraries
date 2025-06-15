/* eslint-disable */
import {
  BIT_STRING,
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
 * @summary C_INITIALIZE_RC_version_number
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * C-INITIALIZE-RC-version-number ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type C_INITIALIZE_RC_version_number = BIT_STRING;


/**
 * @summary C_INITIALIZE_RC_version_number_version1
 * @constant
 */
export const C_INITIALIZE_RC_version_number_version1: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary version1
 * @constant
 */
export const version1: number = C_INITIALIZE_RC_version_number_version1; /* SHORT_NAMED_BIT */


/**
 * @summary C_INITIALIZE_RC_version_number_version2
 * @constant
 */
export const C_INITIALIZE_RC_version_number_version2: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary version2
 * @constant
 */
export const version2: number = C_INITIALIZE_RC_version_number_version2; /* SHORT_NAMED_BIT */




export const _decode_C_INITIALIZE_RC_version_number = $._decodeBitString;




export const _encode_C_INITIALIZE_RC_version_number = $._encodeBitString;


/* eslint-enable */
