/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary SearchControlOptions
 * @description
 *
 * If this component is present on Search, ignore the corresponding BOOLEAN
 * argument fields. Absent ⇒ bits default from those BOOLEANs
 * (`searchAliases` defaults SET if the BOOLEAN is absent or TRUE).
 * DEFAULT `{searchAliases}`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchControlOptions  ::=  BIT STRING {
 *   searchAliases         (0),
 *   matchedValuesOnly     (1),
 *   checkOverspecified    (2),
 *   performExactly        (3),
 *   includeAllAreas       (4),
 *   noSystemRelaxation    (5),
 *   dnAttribute           (6),
 *   matchOnResidualName   (7),
 *   entryCount            (8),
 *   useSubset             (9),
 *   separateFamilyMembers (10),
 *   searchFamily          (11) }
 * ```
 */
export type SearchControlOptions = BIT_STRING;

/**
 * @summary SearchControlOptions_searchAliases
 * @description
 *
 * Aliases among subordinates (not the base — that is
 * `dontDereferenceAliases`). SET ⇒ continue into the aliased subtree.
 *
 * @constant
 */
export const SearchControlOptions_searchAliases: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary searchAliases
 * @description
 *
 * Aliases among subordinates (not the base — that is
 * `dontDereferenceAliases`). SET ⇒ continue into the aliased subtree.
 *
 * @constant
 */
export const searchAliases: number = SearchControlOptions_searchAliases; /* SHORT_NAMED_BIT */

/**
 * @summary SearchControlOptions_matchedValuesOnly
 * @description
 *
 * Omit multi-valued attr values that did not contribute to the last
 * effective filter via items other than `present`. No effect on `present`,
 * negated items, or FALSE/UNDEFINED `or` arms; evaluate all `or` arms even
 * if already TRUE.
 *
 * @constant
 */
export const SearchControlOptions_matchedValuesOnly: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary matchedValuesOnly
 * @description
 *
 * Omit multi-valued attr values that did not contribute to the last
 * effective filter via items other than `present`. No effect on `present`,
 * negated items, or FALSE/UNDEFINED `or` arms; evaluate all `or` arms even
 * if already TRUE.
 *
 * @constant
 */
export const matchedValuesOnly: number = SearchControlOptions_matchedValuesOnly; /* SHORT_NAMED_BIT */

/**
 * @summary SearchControlOptions_checkOverspecified
 * @description
 *
 * If SET and the search is empty because the filter is overspecified,
 * return `overspecFilter` in the POQ.
 *
 * @constant
 */
export const SearchControlOptions_checkOverspecified: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary checkOverspecified
 * @description
 *
 * If SET and the search is empty because the filter is overspecified,
 * return `overspecFilter` in the POQ.
 *
 * @constant
 */
export const checkOverspecified: number = SearchControlOptions_checkOverspecified; /* SHORT_NAMED_BIT */

/**
 * @summary SearchControlOptions_performExactly
 * @description
 *
 * Unsupported MR in `extensibleMatch` ⇒ reject (`unsupportedMatchingUse`),
 * not UNDEFINED. Search-rule matching-restriction fails validation only if
 * this is SET.
 *
 * @constant
 */
export const SearchControlOptions_performExactly: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary performExactly
 * @description
 *
 * Unsupported MR in `extensibleMatch` ⇒ reject (`unsupportedMatchingUse`),
 * not UNDEFINED. Search-rule matching-restriction fails validation only if
 * this is SET.
 *
 * @constant
 */
export const performExactly: number = SearchControlOptions_performExactly; /* SHORT_NAMED_BIT */

/**
 * @summary SearchControlOptions_includeAllAreas
 * @description
 *
 * Meaningful only if `extendedArea` ≥ 0. SET = inclusive relaxation;
 * unset = exclusive.
 *
 * @constant
 */
export const SearchControlOptions_includeAllAreas: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary includeAllAreas
 * @description
 *
 * Meaningful only if `extendedArea` ≥ 0. SET = inclusive relaxation;
 * unset = exclusive.
 *
 * @constant
 */
export const includeAllAreas: number = SearchControlOptions_includeAllAreas; /* SHORT_NAMED_BIT */

/**
 * @summary SearchControlOptions_noSystemRelaxation
 * @description
 *
 * DSA still applies basic policy unless the user overrides basic; no
 * further relax/tighten (filter evaluated once except user-supplied).
 *
 * @constant
 */
export const SearchControlOptions_noSystemRelaxation: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary noSystemRelaxation
 * @description
 *
 * DSA still applies basic policy unless the user overrides basic; no
 * further relax/tighten (filter evaluated once except user-supplied).
 *
 * @constant
 */
export const noSystemRelaxation: number = SearchControlOptions_noSystemRelaxation; /* SHORT_NAMED_BIT */

/**
 * @summary SearchControlOptions_dnAttribute
 * @description
 *
 * DN attributes used for ALL filter item types; overrides
 * `extensibleMatch.dnAttributes`.
 *
 * @constant
 */
export const SearchControlOptions_dnAttribute: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary dnAttribute
 * @description
 *
 * DN attributes used for ALL filter item types; overrides
 * `extensibleMatch.dnAttributes`.
 *
 * @constant
 */
export const dnAttribute: number = SearchControlOptions_dnAttribute; /* SHORT_NAMED_BIT */

/**
 * @summary SearchControlOptions_matchOnResidualName
 * @description
 *
 * Only with `partialNameResolution`. Unresolved RDN AVAs AND'd as
 * equality items into the filter.
 *
 * @constant
 */
export const SearchControlOptions_matchOnResidualName: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary matchOnResidualName
 * @description
 *
 * Only with `partialNameResolution`. Unresolved RDN AVAs AND'd as
 * equality items into the filter.
 *
 * @constant
 */
export const matchOnResidualName: number = SearchControlOptions_matchOnResidualName; /* SHORT_NAMED_BIT */

/**
 * @summary SearchControlOptions_entryCount
 * @description
 *
 * Count of how many would have been returned if size/admin limit not hit;
 * ignored if `subentries` is SET.
 *
 * @constant
 */
export const SearchControlOptions_entryCount: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary entryCount
 * @description
 *
 * Count of how many would have been returned if size/admin limit not hit;
 * ignored if `subentries` is SET.
 *
 * @constant
 */
export const entryCount: number = SearchControlOptions_entryCount; /* SHORT_NAMED_BIT */

/**
 * @summary SearchControlOptions_useSubset
 * @description
 *
 * Ignore search-rule `imposedSubset`.
 *
 * @constant
 */
export const SearchControlOptions_useSubset: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary useSubset
 * @description
 *
 * Ignore search-rule `imposedSubset`.
 *
 * @constant
 */
export const useSubset: number = SearchControlOptions_useSubset; /* SHORT_NAMED_BIT */

/**
 * @summary SearchControlOptions_separateFamilyMembers
 * @description
 *
 * Return family members as separate `EntryInformation`, not packed in
 * `family-information`.
 *
 * @constant
 */
export const SearchControlOptions_separateFamilyMembers: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary separateFamilyMembers
 * @description
 *
 * Return family members as separate `EntryInformation`, not packed in
 * `family-information`.
 *
 * @constant
 */
export const separateFamilyMembers: number = SearchControlOptions_separateFamilyMembers; /* SHORT_NAMED_BIT */

/**
 * @summary SearchControlOptions_searchFamily
 * @description
 *
 * Only if base is ancestor of a compound entry (ignored otherwise, or if
 * `entryOnly` in CommonArguments/ChainingArguments). Operation only on
 * that compound entry; members count separately for subset and
 * `sizeLimit`. Unset ⇒ compound entry counts as one vs subset.
 *
 * @constant
 */
export const SearchControlOptions_searchFamily: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary searchFamily
 * @description
 *
 * Only if base is ancestor of a compound entry (ignored otherwise, or if
 * `entryOnly` in CommonArguments/ChainingArguments). Operation only on
 * that compound entry; members count separately for subset and
 * `sizeLimit`. Unset ⇒ compound entry counts as one vs subset.
 *
 * @constant
 */
export const searchFamily: number = SearchControlOptions_searchFamily; /* SHORT_NAMED_BIT */


export const _decode_SearchControlOptions = $._decodeBitString;


export const _encode_SearchControlOptions = $._encodeBitString;


/* eslint-enable */
