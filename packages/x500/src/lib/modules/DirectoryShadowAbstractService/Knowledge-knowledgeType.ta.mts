/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Knowledge_knowledgeType
 * @description
 *
 * `master` (0) = only master naming-context refs; `shadow` (1) = only
 * commonly usable replica refs; `both` (2) = both. Does not by itself
 * include extended (non-immediate) subordinates — that is
 * `extendedKnowledge`.
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
 * `master` (0) = only master naming-context refs; `shadow` (1) = only
 * commonly usable replica refs; `both` (2) = both.
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
 * `master` (0) = only master naming-context refs; `shadow` (1) = only
 * commonly usable replica refs; `both` (2) = both.
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
export const Knowledge_knowledgeType_master =
    Knowledge_knowledgeType.master; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary master
 * @constant
 * @type {number}
 */
export const master =
    Knowledge_knowledgeType.master; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Knowledge_knowledgeType_shadow
 * @constant
 * @type {number}
 */
export const Knowledge_knowledgeType_shadow =
    Knowledge_knowledgeType.shadow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary shadow
 * @constant
 * @type {number}
 */
export const shadow =
    Knowledge_knowledgeType.shadow; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Knowledge_knowledgeType_both
 * @constant
 * @type {number}
 */
export const Knowledge_knowledgeType_both =
    Knowledge_knowledgeType.both; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary both
 * @constant
 * @type {number}
 */
export const both =
    Knowledge_knowledgeType.both; /* SHORT_NAMED_ENUMERATED_VALUE */


export function _decode_Knowledge_knowledgeType(el: _Element): Knowledge_knowledgeType {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case Knowledge_knowledgeType.master: return Knowledge_knowledgeType.master;
        case Knowledge_knowledgeType.shadow: return Knowledge_knowledgeType.shadow;
        case Knowledge_knowledgeType.both: return Knowledge_knowledgeType.both;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for Knowledge_knowledgeType.",
                el,
            );
    }
}


export const _encode_Knowledge_knowledgeType: $.ASN1Encoder<Knowledge_knowledgeType> = $._encodeEnumerated as $.ASN1Encoder<Knowledge_knowledgeType>;


/* eslint-enable */
