/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_ServiceState {
    /**
     * The termination is being tested (clause 7.1.5.1.1). Entered and left only
     * by Modify from the MGC. While in Test the MG sends only Forced or
     * Graceful ServiceChange (Annex F.6).
     */
    test = 0,
    /**
     * The termination is out of service and cannot carry traffic (clause
     * 7.1.5.1.1). Add and Move are not used. Reaching this state from InService
     * is a ServiceChange, not a Modify.
     */
    outOfSvc = 1,
    /**
     * The termination is in service. This is the default (clause 7.1.5.1.1). On
     * Root, a Restart ServiceChange marks every termination InService.
     */
    inSvc = 2,
}

/**
 * @summary ServiceState
 * @description
 * 
 * ServiceStates of a termination (ITU-T Rec. H.248.1 (03/2013) clause 7.1.5.1.1
 * and Annex F.6).
 *
 * InService is the default: the termination can carry traffic. OutOfService
 * means it cannot; Add and Move are not used on it. Test means it is being
 * tested. Only the MGC, and only by Modify, moves a termination between Test
 * and another state. InService and OutOfService are changed by ServiceChange.
 * Receivers should accept a ServiceChange, but may reject one that brings a
 * termination into service when they have no resources for it; the state is
 * then unchanged. Requests to take a termination OutOfService should be
 * honoured.
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
 * @description
 *
 * The termination is being tested (clause 7.1.5.1.1). Entered and left only by
 * Modify from the MGC. While in Test the MG sends only Forced or Graceful
 * ServiceChange (Annex F.6).
 *
 * @constant
 * @type {number}
 */
export
const ServiceState_test = _enum_for_ServiceState.test satisfies ServiceState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary test
 * @constant
 * @type {number}
 */
export
const test = ServiceState_test satisfies ServiceState; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServiceState_outOfSvc
 * @description
 *
 * The termination is out of service and cannot carry traffic (clause
 * 7.1.5.1.1). Add and Move are not used. Reaching this state from InService is
 * a ServiceChange, not a Modify.
 *
 * @constant
 * @type {number}
 */
export
const ServiceState_outOfSvc = _enum_for_ServiceState.outOfSvc satisfies ServiceState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary outOfSvc
 * @constant
 * @type {number}
 */
export
const outOfSvc = ServiceState_outOfSvc satisfies ServiceState; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServiceState_inSvc
 * @description
 *
 * The termination is in service. This is the default (clause 7.1.5.1.1). On
 * Root, a Restart ServiceChange marks every termination InService.
 *
 * @constant
 * @type {number}
 */
export
const ServiceState_inSvc = _enum_for_ServiceState.inSvc satisfies ServiceState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inSvc
 * @constant
 * @type {number}
 */
export
const inSvc = ServiceState_inSvc satisfies ServiceState; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ServiceState = $._decodeEnumerated;
export const _encode_ServiceState = $._encodeEnumerated;


/* eslint-enable */
