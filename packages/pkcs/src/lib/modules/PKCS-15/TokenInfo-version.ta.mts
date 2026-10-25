/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary TokenInfo_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TokenInfo-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TokenInfo_version = INTEGER;


/**
 * @summary TokenInfo_version_v1
 * @constant
 * @type {number}
 */
export const TokenInfo_version_v1 = 0 satisfies TokenInfo_version; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TokenInfo_version_v1
 * @constant
 * @type {number}
 */
export const v1 = TokenInfo_version_v1; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_TokenInfo_version = $._decodeInteger;




export const _encode_TokenInfo_version = $._encodeInteger;


/* eslint-enable */
