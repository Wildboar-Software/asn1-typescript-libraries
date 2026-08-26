/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary TSTInfo_version
 * @description
 *
 * Version field of `TSTInfo`: currently `v1(1)`. Conforming servers
 * MUST provide version 1 tokens; conforming requesters MUST recognize
 * them
 * ([RFC 3161 §2.4.2](https://datatracker.ietf.org/doc/html/rfc3161#section-2.4.2)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TSTInfo-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TSTInfo_version = INTEGER;

/**
 * @summary TSTInfo_version_v1
 * @description
 *
 * `v1`(1): current time-stamp token info version
 * ([RFC 3161 §2.4.2](https://datatracker.ietf.org/doc/html/rfc3161#section-2.4.2)).
 *
 * @constant
 * @type {number}
 */
export const TSTInfo_version_v1: TSTInfo_version = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TSTInfo_version_v1
 * @description
 *
 * `v1`(1): current time-stamp token info version
 * ([RFC 3161 §2.4.2](https://datatracker.ietf.org/doc/html/rfc3161#section-2.4.2)).
 *
 * @constant
 * @type {number}
 */
export const v1: TSTInfo_version = TSTInfo_version_v1; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_TSTInfo_version = $._decodeInteger;


export const _encode_TSTInfo_version = $._encodeInteger;


/* eslint-enable */
