/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExtendedServicesInfo_waitAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedServicesInfo-waitAction ::= INTEGER {
 *     waitSupported       (1),
 *     waitAlways          (2),
 *     waitNotSupported    (3),
 *     depends             (4),
 *     notSaying           (5)
 * }
 * ```
 */
export
type ExtendedServicesInfo_waitAction = INTEGER;

/**
 * @summary ExtendedServicesInfo_waitAction_waitSupported
 * @constant
 * @type {number}
 */
export
const ExtendedServicesInfo_waitAction_waitSupported: ExtendedServicesInfo_waitAction = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesInfo_waitAction_waitSupported
 * @constant
 * @type {number}
 */
export
const waitSupported: ExtendedServicesInfo_waitAction = ExtendedServicesInfo_waitAction_waitSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesInfo_waitAction_waitAlways
 * @constant
 * @type {number}
 */
export
const ExtendedServicesInfo_waitAction_waitAlways: ExtendedServicesInfo_waitAction = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesInfo_waitAction_waitAlways
 * @constant
 * @type {number}
 */
export
const waitAlways: ExtendedServicesInfo_waitAction = ExtendedServicesInfo_waitAction_waitAlways; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesInfo_waitAction_waitNotSupported
 * @constant
 * @type {number}
 */
export
const ExtendedServicesInfo_waitAction_waitNotSupported: ExtendedServicesInfo_waitAction = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesInfo_waitAction_waitNotSupported
 * @constant
 * @type {number}
 */
export
const waitNotSupported: ExtendedServicesInfo_waitAction = ExtendedServicesInfo_waitAction_waitNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesInfo_waitAction_depends
 * @constant
 * @type {number}
 */
export
const ExtendedServicesInfo_waitAction_depends: ExtendedServicesInfo_waitAction = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesInfo_waitAction_depends
 * @constant
 * @type {number}
 */
export
const depends: ExtendedServicesInfo_waitAction = ExtendedServicesInfo_waitAction_depends; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesInfo_waitAction_notSaying
 * @constant
 * @type {number}
 */
export
const ExtendedServicesInfo_waitAction_notSaying: ExtendedServicesInfo_waitAction = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesInfo_waitAction_notSaying
 * @constant
 * @type {number}
 */
export
const notSaying: ExtendedServicesInfo_waitAction = ExtendedServicesInfo_waitAction_notSaying; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ExtendedServicesInfo_waitAction = $._decodeInteger;
export const _encode_ExtendedServicesInfo_waitAction = $._encodeInteger;


/* eslint-enable */
