/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExtendedServicesRequest_waitAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedServicesRequest-waitAction ::= INTEGER {
 *     wait (1),
 *     waitIfPossible (2),
 *     dontWait (3),
 *     dontReturnPackage (4)
 * }
 * ```
 */
export
type ExtendedServicesRequest_waitAction = INTEGER;

/**
 * @summary ExtendedServicesRequest_waitAction_wait
 * @constant
 * @type {number}
 */
export
const ExtendedServicesRequest_waitAction_wait: ExtendedServicesRequest_waitAction = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_waitAction_wait
 * @constant
 * @type {number}
 */
export
const wait: ExtendedServicesRequest_waitAction = ExtendedServicesRequest_waitAction_wait; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_waitAction_waitIfPossible
 * @constant
 * @type {number}
 */
export
const ExtendedServicesRequest_waitAction_waitIfPossible: ExtendedServicesRequest_waitAction = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_waitAction_waitIfPossible
 * @constant
 * @type {number}
 */
export
const waitIfPossible: ExtendedServicesRequest_waitAction = ExtendedServicesRequest_waitAction_waitIfPossible; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_waitAction_dontWait
 * @constant
 * @type {number}
 */
export
const ExtendedServicesRequest_waitAction_dontWait: ExtendedServicesRequest_waitAction = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_waitAction_dontWait
 * @constant
 * @type {number}
 */
export
const dontWait: ExtendedServicesRequest_waitAction = ExtendedServicesRequest_waitAction_dontWait; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_waitAction_dontReturnPackage
 * @constant
 * @type {number}
 */
export
const ExtendedServicesRequest_waitAction_dontReturnPackage: ExtendedServicesRequest_waitAction = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_waitAction_dontReturnPackage
 * @constant
 * @type {number}
 */
export
const dontReturnPackage: ExtendedServicesRequest_waitAction = ExtendedServicesRequest_waitAction_dontReturnPackage; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ExtendedServicesRequest_waitAction = $._decodeInteger;
export const _encode_ExtendedServicesRequest_waitAction = $._encodeInteger;


/* eslint-enable */
