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
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary RevocationInfoTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RevocationInfoTypes  ::=  BIT STRING {
 *     fullCRLs                   (0),
 *     deltaCRLs                  (1),
 *     indirectCRLs               (2),
 *     oCSPResponses              (3)
 * }
 * ```
 */
export type RevocationInfoTypes = BIT_STRING;

/**
 * @summary RevocationInfoTypes_fullCRLs
 * @constant
 */
export const RevocationInfoTypes_fullCRLs: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary fullCRLs
 * @constant
 */
export const fullCRLs: number = RevocationInfoTypes_fullCRLs; /* SHORT_NAMED_BIT */

/**
 * @summary RevocationInfoTypes_deltaCRLs
 * @constant
 */
export const RevocationInfoTypes_deltaCRLs: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary deltaCRLs
 * @constant
 */
export const deltaCRLs: number = RevocationInfoTypes_deltaCRLs; /* SHORT_NAMED_BIT */

/**
 * @summary RevocationInfoTypes_indirectCRLs
 * @constant
 */
export const RevocationInfoTypes_indirectCRLs: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary indirectCRLs
 * @constant
 */
export const indirectCRLs: number = RevocationInfoTypes_indirectCRLs; /* SHORT_NAMED_BIT */

/**
 * @summary RevocationInfoTypes_oCSPResponses
 * @constant
 */
export const RevocationInfoTypes_oCSPResponses: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary oCSPResponses
 * @constant
 */
export const oCSPResponses: number = RevocationInfoTypes_oCSPResponses; /* SHORT_NAMED_BIT */


export const _decode_RevocationInfoTypes = $._decodeBitString;


export const _encode_RevocationInfoTypes = $._encodeBitString;


/* eslint-enable */
