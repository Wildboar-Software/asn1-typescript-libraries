/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

export enum _enum_for_FamilyReturn_memberSelect {
    contributingEntriesOnly = 1,
    participatingEntriesOnly = 2,
    compoundEntry = 3,
}

/**
 * @summary FamilyReturn_memberSelect
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FamilyReturn-memberSelect ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type FamilyReturn_memberSelect =
    | _enum_for_FamilyReturn_memberSelect
    | ENUMERATED;

/**
 * @summary FamilyReturn_memberSelect_contributingEntriesOnly
 * @constant
 * @type {number}
 */
export const FamilyReturn_memberSelect_contributingEntriesOnly: FamilyReturn_memberSelect = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary contributingEntriesOnly
 * @constant
 * @type {number}
 */
export const contributingEntriesOnly: FamilyReturn_memberSelect = FamilyReturn_memberSelect_contributingEntriesOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FamilyReturn_memberSelect_participatingEntriesOnly
 * @constant
 * @type {number}
 */
export const FamilyReturn_memberSelect_participatingEntriesOnly: FamilyReturn_memberSelect = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary participatingEntriesOnly
 * @constant
 * @type {number}
 */
export const participatingEntriesOnly: FamilyReturn_memberSelect = FamilyReturn_memberSelect_participatingEntriesOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FamilyReturn_memberSelect_compoundEntry
 * @constant
 * @type {number}
 */
export const FamilyReturn_memberSelect_compoundEntry: FamilyReturn_memberSelect = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary compoundEntry
 * @constant
 * @type {number}
 */
export const compoundEntry: FamilyReturn_memberSelect = FamilyReturn_memberSelect_compoundEntry; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_FamilyReturn_memberSelect = $._decodeEnumerated;


export const _encode_FamilyReturn_memberSelect = $._encodeEnumerated;


/* eslint-enable */
