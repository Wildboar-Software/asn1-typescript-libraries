/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExtendedServicesInfo_waitAction
 * @description
 * 
 * Level of Wait-action the extended service supports. REC.1 names
 * waitSupported, waitAlways, waitNotSupported, depends, and notSaying.
 * ANSI/NISO Z39.50-2003 §3.2.10.3.8 says only what level is supported. Those
 * names are not the request values wait, wait-if-possible, do-not-wait, and
 * do-not-send-task-package, and §3.2.9.1.13 does not map the two lists.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedServicesInfo-waitAction ::= INTEGER {
 *     waitSupported (1),
 *     waitAlways (2),
 *     waitNotSupported (3),
 *     depends (4),
 *     notSaying (5)
 * }
 * ```
 */
export
type ExtendedServicesInfo_waitAction = INTEGER;

/**
 * @summary ExtendedServicesInfo_waitAction_waitSupported
 * @description
 * `waitSupported` (1). A named level of Wait-action support. §3.2.10.3.8 does
 * not map it to wait, wait-if-possible, do-not-wait, or
 * do-not-send-task-package (§3.2.9.1.13).
 * @constant
 * @type {number}
 */
export
const ExtendedServicesInfo_waitAction_waitSupported: ExtendedServicesInfo_waitAction = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesInfo_waitAction_waitSupported
 * @description
 * `waitSupported` (1). Named level; not mapped to §3.2.9.1.13.
 * @constant
 * @type {number}
 */
export
const waitSupported: ExtendedServicesInfo_waitAction = ExtendedServicesInfo_waitAction_waitSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesInfo_waitAction_waitAlways
 * @description
 * `waitAlways` (2). A named level of Wait-action support. §3.2.10.3.8 does not
 * map it to the request values in §3.2.9.1.13.
 * @constant
 * @type {number}
 */
export
const ExtendedServicesInfo_waitAction_waitAlways: ExtendedServicesInfo_waitAction = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesInfo_waitAction_waitAlways
 * @description
 * `waitAlways` (2). Named level; not mapped to §3.2.9.1.13.
 * @constant
 * @type {number}
 */
export
const waitAlways: ExtendedServicesInfo_waitAction = ExtendedServicesInfo_waitAction_waitAlways; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesInfo_waitAction_waitNotSupported
 * @description
 * `waitNotSupported` (3). A named level of Wait-action support. §3.2.10.3.8
 * does not map it to the request values in §3.2.9.1.13.
 * @constant
 * @type {number}
 */
export
const ExtendedServicesInfo_waitAction_waitNotSupported: ExtendedServicesInfo_waitAction = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesInfo_waitAction_waitNotSupported
 * @description
 * `waitNotSupported` (3). Named level; not mapped to §3.2.9.1.13.
 * @constant
 * @type {number}
 */
export
const waitNotSupported: ExtendedServicesInfo_waitAction = ExtendedServicesInfo_waitAction_waitNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesInfo_waitAction_depends
 * @description
 * `depends` (4). A named level of Wait-action support. §3.2.10.3.8 does not say
 * what it depends on, and does not map it to §3.2.9.1.13.
 * @constant
 * @type {number}
 */
export
const ExtendedServicesInfo_waitAction_depends: ExtendedServicesInfo_waitAction = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesInfo_waitAction_depends
 * @description
 * `depends` (4). Named level; the standard does not say on what.
 * @constant
 * @type {number}
 */
export
const depends: ExtendedServicesInfo_waitAction = ExtendedServicesInfo_waitAction_depends; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesInfo_waitAction_notSaying
 * @description
 * `notSaying` (5). A named level of Wait-action support. §3.2.10.3.8 does not
 * define it beyond the name.
 * @constant
 * @type {number}
 */
export
const ExtendedServicesInfo_waitAction_notSaying: ExtendedServicesInfo_waitAction = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesInfo_waitAction_notSaying
 * @description
 * `notSaying` (5). Named level; §3.2.10.3.8 defines only the name.
 * @constant
 * @type {number}
 */
export
const notSaying: ExtendedServicesInfo_waitAction = ExtendedServicesInfo_waitAction_notSaying; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ExtendedServicesInfo_waitAction: $.ASN1Decoder<ExtendedServicesInfo_waitAction> = $._decodeInteger;
export const _encode_ExtendedServicesInfo_waitAction: $.ASN1Encoder<ExtendedServicesInfo_waitAction> = $._encodeInteger;


/* eslint-enable */
