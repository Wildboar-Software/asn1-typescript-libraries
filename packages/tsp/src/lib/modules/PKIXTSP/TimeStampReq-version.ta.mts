/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary TimeStampReq_version
 * @description
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
 * @constant
 * @type {number}
 */
export const TimeStampReq_version_v1: TimeStampReq_version = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TimeStampReq_version_v1
 * @constant
 * @type {number}
 */
export const v1: TimeStampReq_version = TimeStampReq_version_v1; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_TimeStampReq_version = $._decodeInteger;


export const _encode_TimeStampReq_version = $._encodeInteger;


/* eslint-enable */
