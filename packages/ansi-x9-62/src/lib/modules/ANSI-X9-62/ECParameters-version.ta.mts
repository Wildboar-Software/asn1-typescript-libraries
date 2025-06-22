/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ECParameters_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECParameters-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ECParameters_version = INTEGER;

/**
 * @summary ECParameters_version_ecpVerl
 * @constant
 * @type {number}
 */
export const ECParameters_version_ecpVerl: ECParameters_version = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ECParameters_version_ecpVerl
 * @constant
 * @type {number}
 */
export const ecpVerl: ECParameters_version = ECParameters_version_ecpVerl; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ECParameters_version = $._decodeInteger;


export const _encode_ECParameters_version = $._encodeInteger;


/* eslint-enable */
