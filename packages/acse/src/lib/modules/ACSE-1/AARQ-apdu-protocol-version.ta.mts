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

/* START_OF_SYMBOL_DEFINITION AARQ_apdu_protocol_version */
/**
 * @summary AARQ_apdu_protocol_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AARQ-apdu-protocol-version ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type AARQ_apdu_protocol_version = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION AARQ_apdu_protocol_version */

/* START_OF_SYMBOL_DEFINITION AARQ_apdu_protocol_version_version1 */
/**
 * @summary AARQ_apdu_protocol_version_version1
 * @constant
 */
export const AARQ_apdu_protocol_version_version1: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION AARQ_apdu_protocol_version_version1 */

/* START_OF_SYMBOL_DEFINITION version1 */
/**
 * @summary version1
 * @constant
 */
export const version1: number = AARQ_apdu_protocol_version_version1; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION version1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AARQ_apdu_protocol_version */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AARQ_apdu_protocol_version */

/* START_OF_SYMBOL_DEFINITION _decode_AARQ_apdu_protocol_version */
export const _decode_AARQ_apdu_protocol_version = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_AARQ_apdu_protocol_version */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AARQ_apdu_protocol_version */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AARQ_apdu_protocol_version */

/* START_OF_SYMBOL_DEFINITION _encode_AARQ_apdu_protocol_version */
export const _encode_AARQ_apdu_protocol_version = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_AARQ_apdu_protocol_version */

/* eslint-enable */
