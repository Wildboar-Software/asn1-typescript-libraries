/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary SpecifiedECDomainVersion
 * @description
 *
 * Version of `SpecifiedECDomain`. Not in ANSI X9.62-1998, which
 * only defined `ecpVer1(1)` on `ECParameters`. `ecdpVer2` and
 * `ecdpVer3` require `Curve.seed`. Meanings of versions 2 and 3
 * beyond that are not stated in X9.62-1998.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SpecifiedECDomainVersion  ::=  INTEGER { ecdpVer1(1) , ecdpVer2(2) , ecdpVer3(3) }
 * ```
 */
export type SpecifiedECDomainVersion = INTEGER;

/**
 * @summary SpecifiedECDomainVersion_ecdpVer1
 * @description
 *
 * Version 1 of later `SpecifiedECDomain`. Corresponds to the
 * single `ECParameters` version of ANSI X9.62-1998 §6.3.
 *
 * @constant
 * @type {number}
 */
export const SpecifiedECDomainVersion_ecdpVer1: SpecifiedECDomainVersion = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SpecifiedECDomainVersion_ecdpVer1
 * @description
 *
 * Alias of `SpecifiedECDomainVersion_ecdpVer1`.
 *
 * @constant
 * @type {number}
 */
export const ecdpVer1: SpecifiedECDomainVersion = SpecifiedECDomainVersion_ecdpVer1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SpecifiedECDomainVersion_ecdpVer2
 * @description
 *
 * Version 2 of later `SpecifiedECDomain`. Requires
 * `Curve.seed`. Not in ANSI X9.62-1998.
 *
 * @constant
 * @type {number}
 */
export const SpecifiedECDomainVersion_ecdpVer2: SpecifiedECDomainVersion = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SpecifiedECDomainVersion_ecdpVer2
 * @description
 *
 * Alias of `SpecifiedECDomainVersion_ecdpVer2`.
 *
 * @constant
 * @type {number}
 */
export const ecdpVer2: SpecifiedECDomainVersion = SpecifiedECDomainVersion_ecdpVer2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SpecifiedECDomainVersion_ecdpVer3
 * @description
 *
 * Version 3 of later `SpecifiedECDomain`. Requires
 * `Curve.seed`. Not in ANSI X9.62-1998.
 *
 * @constant
 * @type {number}
 */
export const SpecifiedECDomainVersion_ecdpVer3: SpecifiedECDomainVersion = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SpecifiedECDomainVersion_ecdpVer3
 * @description
 *
 * Alias of `SpecifiedECDomainVersion_ecdpVer3`.
 *
 * @constant
 * @type {number}
 */
export const ecdpVer3: SpecifiedECDomainVersion = SpecifiedECDomainVersion_ecdpVer3; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_SpecifiedECDomainVersion = $._decodeInteger;


export const _encode_SpecifiedECDomainVersion = $._encodeInteger;


/* eslint-enable */
