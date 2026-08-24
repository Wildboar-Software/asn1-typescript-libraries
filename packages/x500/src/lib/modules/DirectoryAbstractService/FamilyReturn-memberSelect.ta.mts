/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

export enum _enum_for_FamilyReturn_memberSelect {
    contributingEntriesOnly = 1,
    participatingEntriesOnly = 2,
    compoundEntry = 3,
}

/**
 * @summary FamilyReturn_memberSelect
 * @description
 *
 * `contributingEntriesOnly` (1): only members marked contributing.
 * `participatingEntriesOnly` (2): only participating. Read/ModifyEntry:
 * contributing and participating are the same (the named object).
 * `compoundEntry` (3): every family member except those unmarked by a
 * governing-search-rule; `familySelect` has no effect.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FamilyReturn-memberSelect ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type FamilyReturn_memberSelect =
    | _enum_for_FamilyReturn_memberSelect
    | ENUMERATED;

/**
 * @summary FamilyReturn_memberSelect_contributingEntriesOnly
 * @description
 *
 * (1) Only members marked contributing. Read/ModifyEntry: the named
 * object. Search: members that contributed to the match. DEFAULT Search
 * filter `and:{}` ⇒ none contributing (all participating).
 *
 * @constant
 * @type {number}
 */
export const FamilyReturn_memberSelect_contributingEntriesOnly: FamilyReturn_memberSelect = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary contributingEntriesOnly
 * @description
 *
 * (1) Only members marked contributing. Read/ModifyEntry: the named
 * object. Search: members that contributed to the match. DEFAULT Search
 * filter `and:{}` ⇒ none contributing (all participating).
 *
 * @constant
 * @type {number}
 */
export const contributingEntriesOnly: FamilyReturn_memberSelect = FamilyReturn_memberSelect_contributingEntriesOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FamilyReturn_memberSelect_participatingEntriesOnly
 * @description
 *
 * (2) Only participating members. Read/ModifyEntry: same as
 * contributing (the named object).
 *
 * @constant
 * @type {number}
 */
export const FamilyReturn_memberSelect_participatingEntriesOnly: FamilyReturn_memberSelect = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary participatingEntriesOnly
 * @description
 *
 * (2) Only participating members. Read/ModifyEntry: same as
 * contributing (the named object).
 *
 * @constant
 * @type {number}
 */
export const participatingEntriesOnly: FamilyReturn_memberSelect = FamilyReturn_memberSelect_participatingEntriesOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FamilyReturn_memberSelect_compoundEntry
 * @description
 *
 * (3) Every family member except those unmarked by a
 * governing-search-rule. `familySelect` has no effect.
 *
 * @constant
 * @type {number}
 */
export const FamilyReturn_memberSelect_compoundEntry: FamilyReturn_memberSelect = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary compoundEntry
 * @description
 *
 * (3) Every family member except those unmarked by a
 * governing-search-rule. `familySelect` has no effect.
 *
 * @constant
 * @type {number}
 */
export const compoundEntry: FamilyReturn_memberSelect = FamilyReturn_memberSelect_compoundEntry; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_FamilyReturn_memberSelect = $._decodeEnumerated;


export const _encode_FamilyReturn_memberSelect = $._encodeEnumerated;


/* eslint-enable */
