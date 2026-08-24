/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Versions
 * @description
 *
 * `v1` bit 0, `v2` bit 1. DEFAULT `{v1}` on bind. `v2` required for
 * `alterValues`/`resetValue`, non-NULL modify results, and signed update
 * errors/results. Unknown named bits: accept and ignore.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Versions  ::=  BIT STRING {v1(0), v2(1)}
 * ```
 */
export type Versions = BIT_STRING;

/**
 * @summary Versions_v1
 * @description
 *
 * Protocol version 1 (bit 0). DEFAULT on bind.
 *
 * @constant
 */
export const Versions_v1: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary v1
 * @description
 *
 * Protocol version 1 (bit 0). DEFAULT on bind.
 *
 * @constant
 */
export const v1: number = Versions_v1; /* SHORT_NAMED_BIT */

/**
 * @summary Versions_v2
 * @description
 *
 * Protocol version 2 (bit 1). Required for `alterValues`/`resetValue`,
 * non-NULL modify results, and signed errors/results of Add/Remove/
 * Modify/ModifyDN.
 *
 * @constant
 */
export const Versions_v2: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary v2
 * @description
 *
 * Protocol version 2 (bit 1). Required for `alterValues`/`resetValue`,
 * non-NULL modify results, and signed errors/results of Add/Remove/
 * Modify/ModifyDN.
 *
 * @constant
 */
export const v2: number = Versions_v2; /* SHORT_NAMED_BIT */


export const _decode_Versions = $._decodeBitString;


export const _encode_Versions = $._encodeBitString;


/* eslint-enable */
