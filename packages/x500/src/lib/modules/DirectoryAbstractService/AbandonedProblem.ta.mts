/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION _enum_for_AbandonedProblem */
/**
 * @summary AbandonedProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AbandonedProblem   ::=  ENUMERATED {
 *   pagingAbandoned (0) }
 * ```@enum {number}
 */
export enum _enum_for_AbandonedProblem {
    pagingAbandoned = 0,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_AbandonedProblem */

/* START_OF_SYMBOL_DEFINITION AbandonedProblem */
/**
 * @summary AbandonedProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AbandonedProblem   ::=  ENUMERATED {
 *   pagingAbandoned (0) }
 * ```@enum {number}
 */
export type AbandonedProblem = _enum_for_AbandonedProblem;
/* END_OF_SYMBOL_DEFINITION AbandonedProblem */

/* START_OF_SYMBOL_DEFINITION AbandonedProblem */
/**
 * @summary AbandonedProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AbandonedProblem   ::=  ENUMERATED {
 *   pagingAbandoned (0) }
 * ```@enum {number}
 */
export const AbandonedProblem = _enum_for_AbandonedProblem;
/* END_OF_SYMBOL_DEFINITION AbandonedProblem */

/* START_OF_SYMBOL_DEFINITION AbandonedProblem_pagingAbandoned */
/**
 * @summary AbandonedProblem_pagingAbandoned
 * @constant
 * @type {number}
 */
export const AbandonedProblem_pagingAbandoned: AbandonedProblem =
    AbandonedProblem.pagingAbandoned; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AbandonedProblem_pagingAbandoned */

/* START_OF_SYMBOL_DEFINITION pagingAbandoned */
/**
 * @summary pagingAbandoned
 * @constant
 * @type {number}
 */
export const pagingAbandoned: AbandonedProblem =
    AbandonedProblem.pagingAbandoned; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION pagingAbandoned */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AbandonedProblem */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AbandonedProblem */

/* START_OF_SYMBOL_DEFINITION _decode_AbandonedProblem */
export const _decode_AbandonedProblem = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_AbandonedProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AbandonedProblem */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AbandonedProblem */

/* START_OF_SYMBOL_DEFINITION _encode_AbandonedProblem */
export const _encode_AbandonedProblem = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_AbandonedProblem */

/* eslint-enable */
