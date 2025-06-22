/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary TSTInfo_version
 * @description
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
 * @constant
 * @type {number}
 */
export const TSTInfo_version_v1: TSTInfo_version = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TSTInfo_version_v1
 * @constant
 * @type {number}
 */
export const v1: TSTInfo_version = TSTInfo_version_v1; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_TSTInfo_version = $._decodeInteger;


export const _encode_TSTInfo_version = $._encodeInteger;


/* eslint-enable */
