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
 * @summary HashValueType_algorithmOID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HashValueType-algorithmOID ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_HashValueType_algorithmOID {
  sha_1 = 0,
  sha_256 = 1,
}


/**
 * @summary HashValueType_algorithmOID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HashValueType-algorithmOID ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type HashValueType_algorithmOID = _enum_for_HashValueType_algorithmOID;


/**
 * @summary HashValueType_algorithmOID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HashValueType-algorithmOID ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const HashValueType_algorithmOID = _enum_for_HashValueType_algorithmOID;


/**
 * @summary HashValueType_algorithmOID_sha_1
 * @constant
 * @type {number}
 */
export const HashValueType_algorithmOID_sha_1: HashValueType_algorithmOID =
  HashValueType_algorithmOID.sha_1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sha_1
 * @constant
 * @type {number}
 */
export const sha_1: HashValueType_algorithmOID =
  HashValueType_algorithmOID.sha_1; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary HashValueType_algorithmOID_sha_256
 * @constant
 * @type {number}
 */
export const HashValueType_algorithmOID_sha_256: HashValueType_algorithmOID =
  HashValueType_algorithmOID.sha_256; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sha_256
 * @constant
 * @type {number}
 */
export const sha_256: HashValueType_algorithmOID =
  HashValueType_algorithmOID.sha_256; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_HashValueType_algorithmOID = $._decodeEnumerated;




export const _encode_HashValueType_algorithmOID = $._encodeEnumerated;


/* eslint-enable */
