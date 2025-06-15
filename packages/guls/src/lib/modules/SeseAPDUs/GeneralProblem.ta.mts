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

/* START_OF_SYMBOL_DEFINITION _enum_for_GeneralProblem */
/**
 * @summary GeneralProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralProblem  ::=  ENUMERATED {invalidAPDU(0)}
 * ```@enum {number}
 */
export enum _enum_for_GeneralProblem {
  invalidAPDU = 0,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_GeneralProblem */

/* START_OF_SYMBOL_DEFINITION GeneralProblem */
/**
 * @summary GeneralProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralProblem  ::=  ENUMERATED {invalidAPDU(0)}
 * ```@enum {number}
 */
export type GeneralProblem = _enum_for_GeneralProblem;
/* END_OF_SYMBOL_DEFINITION GeneralProblem */

/* START_OF_SYMBOL_DEFINITION GeneralProblem */
/**
 * @summary GeneralProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralProblem  ::=  ENUMERATED {invalidAPDU(0)}
 * ```@enum {number}
 */
export const GeneralProblem = _enum_for_GeneralProblem;
/* END_OF_SYMBOL_DEFINITION GeneralProblem */

/* START_OF_SYMBOL_DEFINITION GeneralProblem_invalidAPDU */
/**
 * @summary GeneralProblem_invalidAPDU
 * @constant
 * @type {number}
 */
export const GeneralProblem_invalidAPDU: GeneralProblem =
  GeneralProblem.invalidAPDU; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION GeneralProblem_invalidAPDU */

/* START_OF_SYMBOL_DEFINITION invalidAPDU */
/**
 * @summary invalidAPDU
 * @constant
 * @type {number}
 */
export const invalidAPDU: GeneralProblem =
  GeneralProblem.invalidAPDU; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidAPDU */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GeneralProblem */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GeneralProblem */

/* START_OF_SYMBOL_DEFINITION _decode_GeneralProblem */
export const _decode_GeneralProblem = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_GeneralProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GeneralProblem */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GeneralProblem */

/* START_OF_SYMBOL_DEFINITION _encode_GeneralProblem */
export const _encode_GeneralProblem = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_GeneralProblem */

/* eslint-enable */
