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

/* START_OF_SYMBOL_DEFINITION RevocationInfoTypes */
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
/* END_OF_SYMBOL_DEFINITION RevocationInfoTypes */

/* START_OF_SYMBOL_DEFINITION RevocationInfoTypes_fullCRLs */
/**
 * @summary RevocationInfoTypes_fullCRLs
 * @constant
 */
export const RevocationInfoTypes_fullCRLs: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION RevocationInfoTypes_fullCRLs */

/* START_OF_SYMBOL_DEFINITION fullCRLs */
/**
 * @summary fullCRLs
 * @constant
 */
export const fullCRLs: number = RevocationInfoTypes_fullCRLs; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION fullCRLs */

/* START_OF_SYMBOL_DEFINITION RevocationInfoTypes_deltaCRLs */
/**
 * @summary RevocationInfoTypes_deltaCRLs
 * @constant
 */
export const RevocationInfoTypes_deltaCRLs: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION RevocationInfoTypes_deltaCRLs */

/* START_OF_SYMBOL_DEFINITION deltaCRLs */
/**
 * @summary deltaCRLs
 * @constant
 */
export const deltaCRLs: number = RevocationInfoTypes_deltaCRLs; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION deltaCRLs */

/* START_OF_SYMBOL_DEFINITION RevocationInfoTypes_indirectCRLs */
/**
 * @summary RevocationInfoTypes_indirectCRLs
 * @constant
 */
export const RevocationInfoTypes_indirectCRLs: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION RevocationInfoTypes_indirectCRLs */

/* START_OF_SYMBOL_DEFINITION indirectCRLs */
/**
 * @summary indirectCRLs
 * @constant
 */
export const indirectCRLs: number = RevocationInfoTypes_indirectCRLs; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION indirectCRLs */

/* START_OF_SYMBOL_DEFINITION RevocationInfoTypes_oCSPResponses */
/**
 * @summary RevocationInfoTypes_oCSPResponses
 * @constant
 */
export const RevocationInfoTypes_oCSPResponses: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION RevocationInfoTypes_oCSPResponses */

/* START_OF_SYMBOL_DEFINITION oCSPResponses */
/**
 * @summary oCSPResponses
 * @constant
 */
export const oCSPResponses: number = RevocationInfoTypes_oCSPResponses; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION oCSPResponses */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RevocationInfoTypes */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RevocationInfoTypes */

/* START_OF_SYMBOL_DEFINITION _decode_RevocationInfoTypes */
export const _decode_RevocationInfoTypes = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_RevocationInfoTypes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RevocationInfoTypes */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RevocationInfoTypes */

/* START_OF_SYMBOL_DEFINITION _encode_RevocationInfoTypes */
export const _encode_RevocationInfoTypes = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_RevocationInfoTypes */

/* eslint-enable */
