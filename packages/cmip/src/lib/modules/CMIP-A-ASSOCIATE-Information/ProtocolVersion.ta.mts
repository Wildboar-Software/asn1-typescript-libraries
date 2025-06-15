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
 * @summary ProtocolVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtocolVersion  ::=  BIT STRING {version1(0), version2(1)}
 * ```
 */
export type ProtocolVersion = BIT_STRING;


/**
 * @summary ProtocolVersion_version1
 * @constant
 */
export const ProtocolVersion_version1: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary version1
 * @constant
 */
export const version1: number = ProtocolVersion_version1; /* SHORT_NAMED_BIT */


/**
 * @summary ProtocolVersion_version2
 * @constant
 */
export const ProtocolVersion_version2: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary version2
 * @constant
 */
export const version2: number = ProtocolVersion_version2; /* SHORT_NAMED_BIT */




export const _decode_ProtocolVersion = $._decodeBitString;




export const _encode_ProtocolVersion = $._encodeBitString;


/* eslint-enable */
