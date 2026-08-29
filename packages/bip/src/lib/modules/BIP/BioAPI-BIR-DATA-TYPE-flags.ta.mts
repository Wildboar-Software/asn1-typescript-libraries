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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary BioAPI_BIR_DATA_TYPE_flags
 * @description
 *
 * Four MSBs of the C `BioAPI_BIR_DATA_TYPE` byte. Bit 0 of this
 * string is C `0x10` (encrypted); bit 1 is `0x20` (signed); bit 3
 * is `0x80` (index-present). Bit 2 (C `0x40`) is unnamed.
 *
 * ITU-T Rec. X.1083 (11/2007)
 * [§15.11](https://www.itu.int/rec/T-REC-X.1083-200711-I).
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
