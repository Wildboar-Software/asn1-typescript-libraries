/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary SearchControlOptions
 * @description
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
 * @constant
 */
export const SearchControlOptions_searchAliases: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary searchAliases
 * @constant
 */
export const searchAliases: number = SearchControlOptions_searchAliases; /* SHORT_NAMED_BIT */

/**
 * @summary SearchControlOptions_matchedValuesOnly
 * @constant
 */
export const SearchControlOptions_matchedValuesOnly: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary matchedValuesOnly
 * @constant
 */
export const matchedValuesOnly: number = SearchControlOptions_matchedValuesOnly; /* SHORT_NAMED_BIT */

/**
 * @summary SearchControlOptions_checkOverspecified
 * @constant
 */
export const SearchControlOptions_checkOverspecified: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary checkOverspecified
 * @constant
 */
export const checkOverspecified: number = SearchControlOptions_checkOverspecified; /* SHORT_NAMED_BIT */

/**
 * @summary SearchControlOptions_performExactly
 * @constant
 */
export const SearchControlOptions_performExactly: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary performExactly
 * @constant
 */
export const performExactly: number = SearchControlOptions_performExactly; /* SHORT_NAMED_BIT */

/**
 * @summary SearchControlOptions_includeAllAreas
 * @constant
 */
export const SearchControlOptions_includeAllAreas: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary includeAllAreas
 * @constant
 */
export const includeAllAreas: number = SearchControlOptions_includeAllAreas; /* SHORT_NAMED_BIT */

/**
 * @summary SearchControlOptions_noSystemRelaxation
 * @constant
 */
export const SearchControlOptions_noSystemRelaxation: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary noSystemRelaxation
 * @constant
 */
export const noSystemRelaxation: number = SearchControlOptions_noSystemRelaxation; /* SHORT_NAMED_BIT */

/**
 * @summary SearchControlOptions_dnAttribute
 * @constant
 */
export const SearchControlOptions_dnAttribute: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary dnAttribute
 * @constant
 */
export const dnAttribute: number = SearchControlOptions_dnAttribute; /* SHORT_NAMED_BIT */

/**
 * @summary SearchControlOptions_matchOnResidualName
 * @constant
 */
export const SearchControlOptions_matchOnResidualName: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary matchOnResidualName
 * @constant
 */
export const matchOnResidualName: number = SearchControlOptions_matchOnResidualName; /* SHORT_NAMED_BIT */

/**
 * @summary SearchControlOptions_entryCount
 * @constant
 */
export const SearchControlOptions_entryCount: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary entryCount
 * @constant
 */
export const entryCount: number = SearchControlOptions_entryCount; /* SHORT_NAMED_BIT */

/**
 * @summary SearchControlOptions_useSubset
 * @constant
 */
export const SearchControlOptions_useSubset: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary useSubset
 * @constant
 */
export const useSubset: number = SearchControlOptions_useSubset; /* SHORT_NAMED_BIT */

/**
 * @summary SearchControlOptions_separateFamilyMembers
 * @constant
 */
export const SearchControlOptions_separateFamilyMembers: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary separateFamilyMembers
 * @constant
 */
export const separateFamilyMembers: number = SearchControlOptions_separateFamilyMembers; /* SHORT_NAMED_BIT */

/**
 * @summary SearchControlOptions_searchFamily
 * @constant
 */
export const SearchControlOptions_searchFamily: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary searchFamily
 * @constant
 */
export const searchFamily: number = SearchControlOptions_searchFamily; /* SHORT_NAMED_BIT */


export const _decode_SearchControlOptions = $._decodeBitString;


export const _encode_SearchControlOptions = $._encodeBitString;


/* eslint-enable */
