/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ECParameters_version
 * @description
 *
 * Version of `ECParameters`. Shall be 1 (`ecpVer1`) in ANSI
 * X9.62-1998 §6.3.
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
 * @description
 *
 * Version 1 of `ECParameters` (the only version in ANSI
 * X9.62-1998 §6.3). The ASN.1 name is `ecpVerl`.
 *
 * @constant
 * @type {number}
 */
export const ECParameters_version_ecpVerl: ECParameters_version = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ECParameters_version_ecpVerl
 * @description
 *
 * Alias of `ECParameters_version_ecpVerl`. ANSI X9.62-1998 §6.3.
 *
 * @constant
 * @type {number}
 */
export const ecpVerl: ECParameters_version = ECParameters_version_ecpVerl; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ECParameters_version = $._decodeInteger;


export const _encode_ECParameters_version = $._encodeInteger;


/* eslint-enable */
