/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary ServiceControlOptions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceControlOptions  ::=  BIT STRING {
 *   preferChaining          (0),
 *   chainingProhibited      (1),
 *   localScope              (2),
 *   dontUseCopy             (3),
 *   dontDereferenceAliases  (4),
 *   subentries              (5),
 *   copyShallDo             (6),
 *   partialNameResolution   (7),
 *   manageDSAIT             (8),
 *   noSubtypeMatch          (9),
 *   noSubtypeSelection      (10),
 *   countFamily             (11),
 *   dontSelectFriends       (12),
 *   dontMatchFriends        (13),
 *   allowWriteableCopy      (14)}
 * ```
 */
export type ServiceControlOptions = BIT_STRING;

/**
 * @summary ServiceControlOptions_preferChaining
 * @constant
 */
export const ServiceControlOptions_preferChaining: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary preferChaining
 * @constant
 */
export const preferChaining: number = ServiceControlOptions_preferChaining; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceControlOptions_chainingProhibited
 * @constant
 */
export const ServiceControlOptions_chainingProhibited: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary chainingProhibited
 * @constant
 */
export const chainingProhibited: number = ServiceControlOptions_chainingProhibited; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceControlOptions_localScope
 * @constant
 */
export const ServiceControlOptions_localScope: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary localScope
 * @constant
 */
export const localScope: number = ServiceControlOptions_localScope; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceControlOptions_dontUseCopy
 * @constant
 */
export const ServiceControlOptions_dontUseCopy: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary dontUseCopy
 * @constant
 */
export const dontUseCopy: number = ServiceControlOptions_dontUseCopy; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceControlOptions_dontDereferenceAliases
 * @constant
 */
export const ServiceControlOptions_dontDereferenceAliases: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary dontDereferenceAliases
 * @constant
 */
export const dontDereferenceAliases: number = ServiceControlOptions_dontDereferenceAliases; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceControlOptions_subentries
 * @constant
 */
export const ServiceControlOptions_subentries: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary subentries
 * @constant
 */
export const subentries: number = ServiceControlOptions_subentries; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceControlOptions_copyShallDo
 * @constant
 */
export const ServiceControlOptions_copyShallDo: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary copyShallDo
 * @constant
 */
export const copyShallDo: number = ServiceControlOptions_copyShallDo; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceControlOptions_partialNameResolution
 * @constant
 */
export const ServiceControlOptions_partialNameResolution: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary partialNameResolution
 * @constant
 */
export const partialNameResolution: number = ServiceControlOptions_partialNameResolution; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceControlOptions_manageDSAIT
 * @constant
 */
export const ServiceControlOptions_manageDSAIT: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary manageDSAIT
 * @constant
 */
export const manageDSAIT: number = ServiceControlOptions_manageDSAIT; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceControlOptions_noSubtypeMatch
 * @constant
 */
export const ServiceControlOptions_noSubtypeMatch: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary noSubtypeMatch
 * @constant
 */
export const noSubtypeMatch: number = ServiceControlOptions_noSubtypeMatch; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceControlOptions_noSubtypeSelection
 * @constant
 */
export const ServiceControlOptions_noSubtypeSelection: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary noSubtypeSelection
 * @constant
 */
export const noSubtypeSelection: number = ServiceControlOptions_noSubtypeSelection; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceControlOptions_countFamily
 * @constant
 */
export const ServiceControlOptions_countFamily: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary countFamily
 * @constant
 */
export const countFamily: number = ServiceControlOptions_countFamily; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceControlOptions_dontSelectFriends
 * @constant
 */
export const ServiceControlOptions_dontSelectFriends: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary dontSelectFriends
 * @constant
 */
export const dontSelectFriends: number = ServiceControlOptions_dontSelectFriends; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceControlOptions_dontMatchFriends
 * @constant
 */
export const ServiceControlOptions_dontMatchFriends: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary dontMatchFriends
 * @constant
 */
export const dontMatchFriends: number = ServiceControlOptions_dontMatchFriends; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceControlOptions_allowWriteableCopy
 * @constant
 */
export const ServiceControlOptions_allowWriteableCopy: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary allowWriteableCopy
 * @constant
 */
export const allowWriteableCopy: number = ServiceControlOptions_allowWriteableCopy; /* SHORT_NAMED_BIT */


export const _decode_ServiceControlOptions = $._decodeBitString;


export const _encode_ServiceControlOptions = $._encodeBitString;


/* eslint-enable */
