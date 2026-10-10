/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_ServiceState {
    test = 0,
    outOfSvc = 1,
    inSvc = 2,
}

/**
 * @summary ServiceState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceState  ::=  ENUMERATED
 *     {
 *         test(0),
 *         outOfSvc(1),
 *         inSvc(2),
 *         ...
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type ServiceState = _enum_for_ServiceState | ENUMERATED;

/**
 * @summary ServiceState_test
 * @constant
 * @type {number}
 */
export
const ServiceState_test: ServiceState = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary test
 * @constant
 * @type {number}
 */
export
const test: ServiceState = ServiceState_test; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServiceState_outOfSvc
 * @constant
 * @type {number}
 */
export
const ServiceState_outOfSvc: ServiceState = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary outOfSvc
 * @constant
 * @type {number}
 */
export
const outOfSvc: ServiceState = ServiceState_outOfSvc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServiceState_inSvc
 * @constant
 * @type {number}
 */
export
const ServiceState_inSvc: ServiceState = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inSvc
 * @constant
 * @type {number}
 */
export
const inSvc: ServiceState = ServiceState_inSvc; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ServiceState = $._decodeEnumerated;
export const _encode_ServiceState = $._encodeEnumerated;


/* eslint-enable */
