/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION _enum_for_Knowledge_knowledgeType */
/**
 * @summary Knowledge_knowledgeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Knowledge-knowledgeType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_Knowledge_knowledgeType {
    master = 0,
    shadow = 1,
    both = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_Knowledge_knowledgeType */

/* START_OF_SYMBOL_DEFINITION Knowledge_knowledgeType */
/**
 * @summary Knowledge_knowledgeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Knowledge-knowledgeType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type Knowledge_knowledgeType = _enum_for_Knowledge_knowledgeType;
/* END_OF_SYMBOL_DEFINITION Knowledge_knowledgeType */

/* START_OF_SYMBOL_DEFINITION Knowledge_knowledgeType */
/**
 * @summary Knowledge_knowledgeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Knowledge-knowledgeType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const Knowledge_knowledgeType = _enum_for_Knowledge_knowledgeType;
/* END_OF_SYMBOL_DEFINITION Knowledge_knowledgeType */

/* START_OF_SYMBOL_DEFINITION Knowledge_knowledgeType_master */
/**
 * @summary Knowledge_knowledgeType_master
 * @constant
 * @type {number}
 */
export const Knowledge_knowledgeType_master: Knowledge_knowledgeType =
    Knowledge_knowledgeType.master; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Knowledge_knowledgeType_master */

/* START_OF_SYMBOL_DEFINITION master */
/**
 * @summary master
 * @constant
 * @type {number}
 */
export const master: Knowledge_knowledgeType =
    Knowledge_knowledgeType.master; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION master */

/* START_OF_SYMBOL_DEFINITION Knowledge_knowledgeType_shadow */
/**
 * @summary Knowledge_knowledgeType_shadow
 * @constant
 * @type {number}
 */
export const Knowledge_knowledgeType_shadow: Knowledge_knowledgeType =
    Knowledge_knowledgeType.shadow; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Knowledge_knowledgeType_shadow */

/* START_OF_SYMBOL_DEFINITION shadow */
/**
 * @summary shadow
 * @constant
 * @type {number}
 */
export const shadow: Knowledge_knowledgeType =
    Knowledge_knowledgeType.shadow; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION shadow */

/* START_OF_SYMBOL_DEFINITION Knowledge_knowledgeType_both */
/**
 * @summary Knowledge_knowledgeType_both
 * @constant
 * @type {number}
 */
export const Knowledge_knowledgeType_both: Knowledge_knowledgeType =
    Knowledge_knowledgeType.both; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Knowledge_knowledgeType_both */

/* START_OF_SYMBOL_DEFINITION both */
/**
 * @summary both
 * @constant
 * @type {number}
 */
export const both: Knowledge_knowledgeType =
    Knowledge_knowledgeType.both; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION both */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Knowledge_knowledgeType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Knowledge_knowledgeType */

/* START_OF_SYMBOL_DEFINITION _decode_Knowledge_knowledgeType */
export const _decode_Knowledge_knowledgeType = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_Knowledge_knowledgeType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Knowledge_knowledgeType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Knowledge_knowledgeType */

/* START_OF_SYMBOL_DEFINITION _encode_Knowledge_knowledgeType */
export const _encode_Knowledge_knowledgeType = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_Knowledge_knowledgeType */

/* eslint-enable */
