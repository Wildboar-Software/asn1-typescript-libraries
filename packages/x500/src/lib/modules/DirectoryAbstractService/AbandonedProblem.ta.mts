/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AbandonedProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AbandonedProblem   ::=  ENUMERATED {
 *   pagingAbandoned (0) }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_AbandonedProblem {
    pagingAbandoned = 0,
}

/**
 * @summary AbandonedProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AbandonedProblem   ::=  ENUMERATED {
 *   pagingAbandoned (0) }
 * ```
 *
 * @enum {number}
 */
export type AbandonedProblem = _enum_for_AbandonedProblem;

/**
 * @summary AbandonedProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AbandonedProblem   ::=  ENUMERATED {
 *   pagingAbandoned (0) }
 * ```
 *
 * @enum {number}
 */
export const AbandonedProblem = _enum_for_AbandonedProblem;

/**
 * @summary AbandonedProblem_pagingAbandoned
 * @constant
 * @type {number}
 */
export const AbandonedProblem_pagingAbandoned: AbandonedProblem =
    AbandonedProblem.pagingAbandoned; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pagingAbandoned
 * @constant
 * @type {number}
 */
export const pagingAbandoned: AbandonedProblem =
    AbandonedProblem.pagingAbandoned; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_AbandonedProblem = $._decodeEnumerated;


export const _encode_AbandonedProblem = $._encodeEnumerated;


/* eslint-enable */
