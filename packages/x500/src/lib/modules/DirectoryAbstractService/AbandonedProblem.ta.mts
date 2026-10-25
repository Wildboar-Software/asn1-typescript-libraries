/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AbandonedProblem
 * @description
 *
 * Only `pagingAbandoned` (0). Shall not be present for Abandon; shall be
 * present for `abandonQuery`.
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
 * Only `pagingAbandoned` (0). Shall not be present for Abandon; shall be
 * present for `abandonQuery`.
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
 * Only `pagingAbandoned` (0). Shall not be present for Abandon; shall be
 * present for `abandonQuery`.
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
export const AbandonedProblem: typeof _enum_for_AbandonedProblem = _enum_for_AbandonedProblem;

/**
 * @summary AbandonedProblem_pagingAbandoned
 * @description
 *
 * Only for `abandonQuery` (paged results), not Abandon.
 *
 * @constant
 * @type {number}
 */
export const AbandonedProblem_pagingAbandoned: _enum_for_AbandonedProblem.pagingAbandoned =
    AbandonedProblem.pagingAbandoned; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pagingAbandoned
 * @description
 *
 * Only for `abandonQuery` (paged results), not Abandon.
 *
 * @constant
 * @type {number}
 */
export const pagingAbandoned: _enum_for_AbandonedProblem.pagingAbandoned =
    AbandonedProblem.pagingAbandoned; /* SHORT_NAMED_ENUMERATED_VALUE */


export function _decode_AbandonedProblem(el: _Element): AbandonedProblem {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case AbandonedProblem.pagingAbandoned: return AbandonedProblem.pagingAbandoned;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for AbandonedProblem.",
                el,
            );
    }
}


export const _encode_AbandonedProblem: $.ASN1Encoder<AbandonedProblem> = $._encodeEnumerated as $.ASN1Encoder<AbandonedProblem>;


/* eslint-enable */
