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
 * @summary BioAPI_BIR_DATA_TYPE_flags
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-BIR-DATA-TYPE-flags ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type BioAPI_BIR_DATA_TYPE_flags = BIT_STRING;


/**
 * @summary BioAPI_BIR_DATA_TYPE_flags_encrypted
 * @constant
 */
export const BioAPI_BIR_DATA_TYPE_flags_encrypted: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary encrypted
 * @constant
 */
export const encrypted: number = BioAPI_BIR_DATA_TYPE_flags_encrypted; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_DATA_TYPE_flags_signed
 * @constant
 */
export const BioAPI_BIR_DATA_TYPE_flags_signed: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary signed
 * @constant
 */
export const signed: number = BioAPI_BIR_DATA_TYPE_flags_signed; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_DATA_TYPE_flags_index_present
 * @constant
 */
export const BioAPI_BIR_DATA_TYPE_flags_index_present: number = 3; /* LONG_NAMED_BIT */


/**
 * @summary index_present
 * @constant
 */
export const index_present: number = BioAPI_BIR_DATA_TYPE_flags_index_present; /* SHORT_NAMED_BIT */




export const _decode_BioAPI_BIR_DATA_TYPE_flags = $._decodeBitString;




export const _encode_BioAPI_BIR_DATA_TYPE_flags = $._encodeBitString;


/* eslint-enable */
