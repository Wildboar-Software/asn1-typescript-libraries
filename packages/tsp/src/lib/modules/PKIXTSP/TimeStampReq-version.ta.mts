/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary TimeStampReq_version
 * @description
 *
 * Version field of `TimeStampReq`: currently `v1(1)`
 * ([RFC 3161 §2.4.1](https://datatracker.ietf.org/doc/html/rfc3161#section-2.4.1)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeStampReq-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TimeStampReq_version = INTEGER;

/**
 * @summary TimeStampReq_version_v1
 * @description
 *
 * `v1`(1): current time-stamp request version
 * ([RFC 3161 §2.4.1](https://datatracker.ietf.org/doc/html/rfc3161#section-2.4.1)).
 *
 * @constant
 * @type {number}
 */
export const TimeStampReq_version_v1: TimeStampReq_version = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TimeStampReq_version_v1
 * @description
 *
 * `v1`(1): current time-stamp request version
 * ([RFC 3161 §2.4.1](https://datatracker.ietf.org/doc/html/rfc3161#section-2.4.1)).
 *
 * @constant
 * @type {number}
 */
export const v1: TimeStampReq_version = TimeStampReq_version_v1; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_TimeStampReq_version = $._decodeInteger;


export const _encode_TimeStampReq_version = $._encodeInteger;


/* eslint-enable */
