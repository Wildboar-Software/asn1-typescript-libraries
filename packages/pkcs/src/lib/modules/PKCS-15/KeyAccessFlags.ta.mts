/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION KeyAccessFlags */
/**
 * @summary KeyAccessFlags
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyAccessFlags  ::=  BIT STRING { sensitive  (0), extractable (1), alwaysSensitive (2), neverExtractable (3), local (4) }
 * ```
 */
export type KeyAccessFlags = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION KeyAccessFlags */

/* START_OF_SYMBOL_DEFINITION KeyAccessFlags_sensitive */
/**
 * @summary KeyAccessFlags_sensitive
 * @constant
 */
export const KeyAccessFlags_sensitive: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION KeyAccessFlags_sensitive */

/* START_OF_SYMBOL_DEFINITION sensitive */
/**
 * @summary sensitive
 * @constant
 */
export const sensitive: number = KeyAccessFlags_sensitive; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION sensitive */

/* START_OF_SYMBOL_DEFINITION KeyAccessFlags_extractable */
/**
 * @summary KeyAccessFlags_extractable
 * @constant
 */
export const KeyAccessFlags_extractable: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION KeyAccessFlags_extractable */

/* START_OF_SYMBOL_DEFINITION extractable */
/**
 * @summary extractable
 * @constant
 */
export const extractable: number = KeyAccessFlags_extractable; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION extractable */

/* START_OF_SYMBOL_DEFINITION KeyAccessFlags_alwaysSensitive */
/**
 * @summary KeyAccessFlags_alwaysSensitive
 * @constant
 */
export const KeyAccessFlags_alwaysSensitive: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION KeyAccessFlags_alwaysSensitive */

/* START_OF_SYMBOL_DEFINITION alwaysSensitive */
/**
 * @summary alwaysSensitive
 * @constant
 */
export const alwaysSensitive: number = KeyAccessFlags_alwaysSensitive; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION alwaysSensitive */

/* START_OF_SYMBOL_DEFINITION KeyAccessFlags_neverExtractable */
/**
 * @summary KeyAccessFlags_neverExtractable
 * @constant
 */
export const KeyAccessFlags_neverExtractable: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION KeyAccessFlags_neverExtractable */

/* START_OF_SYMBOL_DEFINITION neverExtractable */
/**
 * @summary neverExtractable
 * @constant
 */
export const neverExtractable: number = KeyAccessFlags_neverExtractable; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION neverExtractable */

/* START_OF_SYMBOL_DEFINITION KeyAccessFlags_local */
/**
 * @summary KeyAccessFlags_local
 * @constant
 */
export const KeyAccessFlags_local: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION KeyAccessFlags_local */

/* START_OF_SYMBOL_DEFINITION local */
/**
 * @summary local
 * @constant
 */
export const local: number = KeyAccessFlags_local; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION local */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyAccessFlags */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyAccessFlags */

/* START_OF_SYMBOL_DEFINITION _decode_KeyAccessFlags */
export const _decode_KeyAccessFlags = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_KeyAccessFlags */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyAccessFlags */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyAccessFlags */

/* START_OF_SYMBOL_DEFINITION _encode_KeyAccessFlags */
export const _encode_KeyAccessFlags = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_KeyAccessFlags */

/* eslint-enable */
