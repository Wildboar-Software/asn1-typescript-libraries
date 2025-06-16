/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary Knowledge_knowledgeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Knowledge-knowledgeType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export enum _enum_for_Knowledge_knowledgeType {
    master = 0,
    shadow = 1,
    both = 2,
}

/**
 * @summary Knowledge_knowledgeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Knowledge-knowledgeType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export type Knowledge_knowledgeType = _enum_for_Knowledge_knowledgeType;

/**
 * @summary Knowledge_knowledgeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Knowledge-knowledgeType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export const Knowledge_knowledgeType = _enum_for_Knowledge_knowledgeType;

/**
 * @summary Knowledge_knowledgeType_master
 * @constant
 * @type {number}
 */
export const Knowledge_knowledgeType_master: Knowledge_knowledgeType =
    Knowledge_knowledgeType.master; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary master
 * @constant
 * @type {number}
 */
export const master: Knowledge_knowledgeType =
    Knowledge_knowledgeType.master; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Knowledge_knowledgeType_shadow
 * @constant
 * @type {number}
 */
export const Knowledge_knowledgeType_shadow: Knowledge_knowledgeType =
    Knowledge_knowledgeType.shadow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary shadow
 * @constant
 * @type {number}
 */
export const shadow: Knowledge_knowledgeType =
    Knowledge_knowledgeType.shadow; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Knowledge_knowledgeType_both
 * @constant
 * @type {number}
 */
export const Knowledge_knowledgeType_both: Knowledge_knowledgeType =
    Knowledge_knowledgeType.both; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary both
 * @constant
 * @type {number}
 */
export const both: Knowledge_knowledgeType =
    Knowledge_knowledgeType.both; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_Knowledge_knowledgeType = $._decodeEnumerated;


export const _encode_Knowledge_knowledgeType = $._encodeEnumerated;


/* eslint-enable */
