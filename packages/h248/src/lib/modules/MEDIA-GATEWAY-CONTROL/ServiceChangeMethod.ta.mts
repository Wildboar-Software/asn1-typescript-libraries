/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_ServiceChangeMethod {
    /**
     * Primary MG is out of service and a secondary is taking over, or the MG
     * has detected MGC failure (clause 7.2.8.1.1). Root only (Annex F.4).
     * Reasons 908, 909, 919, and 920 are the failover reasons in Table F.1.
     */
    failover = 0,
    /**
     * Terminations were taken out of service abruptly. Connections may be lost.
     * The MGC subtracts a non-Root termination; on Root it treats every
     * connection as lost (clause 7.2.8.1.1).
     */
    forced = 1,
    /**
     * Terminations will go OutOfService after `serviceChangeDelay`, or when
     * they reach the NULL context if the delay is null. Existing connections
     * are not cut immediately (clause 7.2.8.1.1).
     */
    graceful = 2,
    /**
     * Service returns after `serviceChangeDelay`. On Root, every termination is
     * then assumed InService; those that are not are reported by later Forced
     * commands (clause 7.2.8.1.1). This is the registration method.
     */
    restart = 3,
    /**
     * The MG lost contact with the MGC and then reached the same MGC again.
     * Always sent on Root (clause 7.2.8.1.1). The MGC may audit to
     * resynchronize.
     */
    disconnected = 4,
    /**
     * The association moves to another MGC. From the MGC, this announces that
     * it is leaving. From the MG, this is the attempt to register with the
     * replacement named by a previous handoff (clauses 7.2.8.1.1 and 11.5).
     * Root only.
     */
    handOff = 5,
}

/**
 * @summary ServiceChangeMethod
 * @description
 * 
 * What a ServiceChange does (ITU-T Rec. H.248.1 (03/2013) clause 7.2.8.1.1 and
 * Annex F.4).
 *
 * Graceful waits for `serviceChangeDelay`, or for the termination to leave its
 * context, and then sets ServiceStates to OutOfService; the MGC should add
 * nothing new and should tear existing connections down. Forced means the
 * termination was removed abruptly; for a non-Root termination the MGC
 * subtracts it, and for Root the MGC treats every connection as lost. Restart
 * restores service after the delay, and on Root marks every termination
 * InService. Disconnected, Root only, means the MG lost the MGC and then
 * reached the same MGC again. Handoff, Root only, moves the association to the
 * MGC named by `serviceChangeMgcId`. Failover, Root only, means the primary MG
 * is out of service or the MG has detected that the MGC failed.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceChangeMethod  ::=  ENUMERATED
 *     {
 *         failover(0),
 *         forced(1),
 *         graceful(2),
 *         restart(3),
 *         disconnected(4),
 *         handOff(5),
 *         ...
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type ServiceChangeMethod = _enum_for_ServiceChangeMethod | ENUMERATED;

/**
 * @summary ServiceChangeMethod_failover
 * @description
 *
 * Primary MG is out of service and a secondary is taking over, or the MG has
 * detected MGC failure (clause 7.2.8.1.1). Root only (Annex F.4). Reasons 908,
 * 909, 919, and 920 are the failover reasons in Table F.1.
 *
 * @constant
 * @type {number}
 */
export
const ServiceChangeMethod_failover: ServiceChangeMethod = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary failover
 * @constant
 * @type {number}
 */
export
const failover: ServiceChangeMethod = ServiceChangeMethod_failover; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServiceChangeMethod_forced
 * @description
 *
 * Terminations were taken out of service abruptly. Connections may be lost. The
 * MGC subtracts a non-Root termination; on Root it treats every connection as
 * lost (clause 7.2.8.1.1).
 *
 * @constant
 * @type {number}
 */
export
const ServiceChangeMethod_forced: ServiceChangeMethod = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forced
 * @constant
 * @type {number}
 */
export
const forced: ServiceChangeMethod = ServiceChangeMethod_forced; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServiceChangeMethod_graceful
 * @description
 *
 * Terminations will go OutOfService after `serviceChangeDelay`, or when they
 * reach the NULL context if the delay is null. Existing connections are not cut
 * immediately (clause 7.2.8.1.1).
 *
 * @constant
 * @type {number}
 */
export
const ServiceChangeMethod_graceful: ServiceChangeMethod = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary graceful
 * @constant
 * @type {number}
 */
export
const graceful: ServiceChangeMethod = ServiceChangeMethod_graceful; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServiceChangeMethod_restart
 * @description
 *
 * Service returns after `serviceChangeDelay`. On Root, every termination is
 * then assumed InService; those that are not are reported by later Forced
 * commands (clause 7.2.8.1.1). This is the registration method.
 *
 * @constant
 * @type {number}
 */
export
const ServiceChangeMethod_restart: ServiceChangeMethod = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary restart
 * @constant
 * @type {number}
 */
export
const restart: ServiceChangeMethod = ServiceChangeMethod_restart; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServiceChangeMethod_disconnected
 * @description
 *
 * The MG lost contact with the MGC and then reached the same MGC again. Always
 * sent on Root (clause 7.2.8.1.1). The MGC may audit to resynchronize.
 *
 * @constant
 * @type {number}
 */
export
const ServiceChangeMethod_disconnected: ServiceChangeMethod = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary disconnected
 * @constant
 * @type {number}
 */
export
const disconnected: ServiceChangeMethod = ServiceChangeMethod_disconnected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServiceChangeMethod_handOff
 * @description
 *
 * The association moves to another MGC. From the MGC, this announces that it is
 * leaving. From the MG, this is the attempt to register with the replacement
 * named by a previous handoff (clauses 7.2.8.1.1 and 11.5). Root only.
 *
 * @constant
 * @type {number}
 */
export
const ServiceChangeMethod_handOff: ServiceChangeMethod = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary handOff
 * @constant
 * @type {number}
 */
export
const handOff: ServiceChangeMethod = ServiceChangeMethod_handOff; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ServiceChangeMethod = $._decodeEnumerated;
export const _encode_ServiceChangeMethod = $._encodeEnumerated;


/* eslint-enable */
