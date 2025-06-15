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

/* START_OF_SYMBOL_DEFINITION FunctionalUnits */
/**
 * @summary FunctionalUnits
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FunctionalUnits  ::=  BIT STRING {
 *   multipleObjectSelection(0), filter(1), multipleReply(2), extendedService(3),
 *   cancelGet(4)}
 * ```
 */
export type FunctionalUnits = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION FunctionalUnits */

/* START_OF_SYMBOL_DEFINITION FunctionalUnits_multipleObjectSelection */
/**
 * @summary FunctionalUnits_multipleObjectSelection
 * @constant
 */
export const FunctionalUnits_multipleObjectSelection: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION FunctionalUnits_multipleObjectSelection */

/* START_OF_SYMBOL_DEFINITION multipleObjectSelection */
/**
 * @summary multipleObjectSelection
 * @constant
 */
export const multipleObjectSelection: number = FunctionalUnits_multipleObjectSelection; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION multipleObjectSelection */

/* START_OF_SYMBOL_DEFINITION FunctionalUnits_filter */
/**
 * @summary FunctionalUnits_filter
 * @constant
 */
export const FunctionalUnits_filter: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION FunctionalUnits_filter */

/* START_OF_SYMBOL_DEFINITION filter */
/**
 * @summary filter
 * @constant
 */
export const filter: number = FunctionalUnits_filter; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION filter */

/* START_OF_SYMBOL_DEFINITION FunctionalUnits_multipleReply */
/**
 * @summary FunctionalUnits_multipleReply
 * @constant
 */
export const FunctionalUnits_multipleReply: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION FunctionalUnits_multipleReply */

/* START_OF_SYMBOL_DEFINITION multipleReply */
/**
 * @summary multipleReply
 * @constant
 */
export const multipleReply: number = FunctionalUnits_multipleReply; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION multipleReply */

/* START_OF_SYMBOL_DEFINITION FunctionalUnits_extendedService */
/**
 * @summary FunctionalUnits_extendedService
 * @constant
 */
export const FunctionalUnits_extendedService: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION FunctionalUnits_extendedService */

/* START_OF_SYMBOL_DEFINITION extendedService */
/**
 * @summary extendedService
 * @constant
 */
export const extendedService: number = FunctionalUnits_extendedService; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION extendedService */

/* START_OF_SYMBOL_DEFINITION FunctionalUnits_cancelGet */
/**
 * @summary FunctionalUnits_cancelGet
 * @constant
 */
export const FunctionalUnits_cancelGet: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION FunctionalUnits_cancelGet */

/* START_OF_SYMBOL_DEFINITION cancelGet */
/**
 * @summary cancelGet
 * @constant
 */
export const cancelGet: number = FunctionalUnits_cancelGet; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION cancelGet */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FunctionalUnits */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FunctionalUnits */

/* START_OF_SYMBOL_DEFINITION _decode_FunctionalUnits */
export const _decode_FunctionalUnits = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_FunctionalUnits */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FunctionalUnits */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FunctionalUnits */

/* START_OF_SYMBOL_DEFINITION _encode_FunctionalUnits */
export const _encode_FunctionalUnits = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_FunctionalUnits */

/* eslint-enable */
