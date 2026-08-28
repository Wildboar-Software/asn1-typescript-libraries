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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary HashValueType_algorithmOID
 * @description
 *
 * Hash algorithm on a `HashValueType`. XER text is the
 * algorithm OID, not the ASN.1 name. ITU-T Rec. X.1341
 * (09/2015) Annex B.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HashValueType-algorithmOID ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_HashValueType_algorithmOID {
  /** SHA-1. XER text `1.3.14.3.2.26`. */
  sha_1 = 0,
  /** SHA-256. XER text `2.16.840.1.101.3.4.2.1`. */
  sha_256 = 1,
}


/**
 * @summary HashValueType_algorithmOID
 * @description
 *
 * Hash algorithm on a `HashValueType`. XER text is the
 * algorithm OID. ITU-T Rec. X.1341 (09/2015) Annex B.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HashValueType-algorithmOID ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type HashValueType_algorithmOID = _enum_for_HashValueType_algorithmOID;


/**
 * @summary HashValueType_algorithmOID
 * @description
 *
 * Hash algorithm on a `HashValueType`. XER text is the
 * algorithm OID. ITU-T Rec. X.1341 (09/2015) Annex B.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HashValueType-algorithmOID ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export const HashValueType_algorithmOID = _enum_for_HashValueType_algorithmOID;


/**
 * @summary HashValueType_algorithmOID_sha_1
 * @description SHA-1. XER text `1.3.14.3.2.26`.
 * @constant
 * @type {number}
 */
export const HashValueType_algorithmOID_sha_1: HashValueType_algorithmOID =
  HashValueType_algorithmOID.sha_1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sha_1
 * @description SHA-1. XER text `1.3.14.3.2.26`.
 * @constant
 * @type {number}
 */
export const sha_1: HashValueType_algorithmOID =
  HashValueType_algorithmOID.sha_1; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary HashValueType_algorithmOID_sha_256
 * @description SHA-256. XER text `2.16.840.1.101.3.4.2.1`.
 * @constant
 * @type {number}
 */
export const HashValueType_algorithmOID_sha_256: HashValueType_algorithmOID =
  HashValueType_algorithmOID.sha_256; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sha_256
 * @description SHA-256. XER text `2.16.840.1.101.3.4.2.1`.
 * @constant
 * @type {number}
 */
export const sha_256: HashValueType_algorithmOID =
  HashValueType_algorithmOID.sha_256; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_HashValueType_algorithmOID = $._decodeEnumerated;




export const _encode_HashValueType_algorithmOID = $._encodeEnumerated;


/* eslint-enable */
