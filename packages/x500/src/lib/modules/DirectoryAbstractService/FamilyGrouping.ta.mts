/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

export enum _enum_for_FamilyGrouping {
    entryOnly = 1,
    compoundEntry = 2,
    strands = 3,
    multiStrand = 4,
}

/**
 * @summary FamilyGrouping
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FamilyGrouping  ::=  ENUMERATED {
 *   entryOnly     (1),
 *   compoundEntry (2),
 *   strands       (3),
 *   multiStrand   (4),
 *   ... }
 * ```@enum {number}
 */
export type FamilyGrouping = _enum_for_FamilyGrouping | ENUMERATED;

/**
 * @summary FamilyGrouping_entryOnly
 * @constant
 * @type {number}
 */
export const FamilyGrouping_entryOnly: FamilyGrouping = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary entryOnly
 * @constant
 * @type {number}
 */
export const entryOnly: FamilyGrouping = FamilyGrouping_entryOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FamilyGrouping_compoundEntry
 * @constant
 * @type {number}
 */
export const FamilyGrouping_compoundEntry: FamilyGrouping = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary compoundEntry
 * @constant
 * @type {number}
 */
export const compoundEntry: FamilyGrouping = FamilyGrouping_compoundEntry; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FamilyGrouping_strands
 * @constant
 * @type {number}
 */
export const FamilyGrouping_strands: FamilyGrouping = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary strands
 * @constant
 * @type {number}
 */
export const strands: FamilyGrouping = FamilyGrouping_strands; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FamilyGrouping_multiStrand
 * @constant
 * @type {number}
 */
export const FamilyGrouping_multiStrand: FamilyGrouping = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multiStrand
 * @constant
 * @type {number}
 */
export const multiStrand: FamilyGrouping = FamilyGrouping_multiStrand; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_FamilyGrouping = $._decodeEnumerated;


export const _encode_FamilyGrouping = $._encodeEnumerated;


/* eslint-enable */
