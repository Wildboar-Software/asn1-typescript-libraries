/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_EndReason {
    undefined = 0,
    regularLogoff = 1,
    connectionLoss = 2,
    connectionTimeout = 3,
    leaseExpired = 4,
}

/**
 * @summary EndReason
 * @description
 *
 * Why an internet-access session or lease ended. Required on the
 * IRI-END record when a value is available (ETSI TS 102 232-3 V3.9.1,
 * table 2). RADIUS Acct-Terminate-Cause maps as in table A.3; any
 * other mapping is a national matter (clause A.5.2.4).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EndReason  ::=  ENUMERATED
 * {
 *     undefined(0),
 *     regularLogoff(1),
 *         -- The target logged off
 *     connectionLoss(2),
 *         -- The connection was lost
 *     connectionTimeout(3),
 *         -- The connection timed-out
 *     leaseExpired(4),
 *         -- The DHCP lease expired
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EndReason = _enum_for_EndReason | ENUMERATED;

/**
 * @summary EndReason_undefined
 * @description
 *
 * No specific cause, or a RADIUS cause that table A.3 does not treat
 * as logoff, loss, or timeout: Admin Reset, Admin Reboot, Port Error,
 * NAS Error, NAS Request, NAS Reboot, Port Unneeded, Port Preempted,
 * Port Suspended, Service Unavailable, Callback, and User Error.
 *
 * @constant
 * @type {number}
 */
export
const EndReason_undefined: _enum_for_EndReason.undefined = _enum_for_EndReason.undefined; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined
 * @description
 *
 * No specific end cause, including the RADIUS causes listed under
 * `EndReason_undefined` (table A.3).
 *
 * @constant
 * @type {number}
 */
export
const undefined: _enum_for_EndReason.undefined = EndReason_undefined; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EndReason_regularLogoff
 * @description
 *
 * The target logged off (clause 8). RADIUS: User Request and Host
 * Request (table A.3). A PPP session closes with LCP Terminate
 * (clause 5.2.5); the NAS then reports the stop to accounting.
 *
 * @constant
 * @type {number}
 */
export
const EndReason_regularLogoff: _enum_for_EndReason.regularLogoff = _enum_for_EndReason.regularLogoff; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary regularLogoff
 * @description
 *
 * The target logged off (clause 5.2.5, table A.3).
 *
 * @constant
 * @type {number}
 */
export
const regularLogoff: _enum_for_EndReason.regularLogoff = EndReason_regularLogoff; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EndReason_connectionLoss
 * @description
 *
 * The connection was lost (clause 8). RADIUS: Lost Carrier and Lost
 * Service (table A.3). Clause 5.2.6 includes loss of carrier, link
 * quality failure, and expiry of an idle timer. There is no user
 * logoff; the NAS detects the loss.
 *
 * @constant
 * @type {number}
 */
export
const EndReason_connectionLoss: _enum_for_EndReason.connectionLoss = _enum_for_EndReason.connectionLoss; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connectionLoss
 * @description
 *
 * The connection was lost (clause 5.2.6, table A.3).
 *
 * @constant
 * @type {number}
 */
export
const connectionLoss: _enum_for_EndReason.connectionLoss = EndReason_connectionLoss; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EndReason_connectionTimeout
 * @description
 *
 * The connection timed out (clause 8). RADIUS: Idle Timeout and
 * Session Timeout (table A.3).
 *
 * @constant
 * @type {number}
 */
export
const EndReason_connectionTimeout: _enum_for_EndReason.connectionTimeout = _enum_for_EndReason.connectionTimeout; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connectionTimeout
 * @description
 *
 * The connection timed out (table A.3).
 *
 * @constant
 * @type {number}
 */
export
const connectionTimeout: _enum_for_EndReason.connectionTimeout = EndReason_connectionTimeout; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EndReason_leaseExpired
 * @description
 *
 * The DHCP lease expired (clause 8). Not used for RADIUS (table A.3,
 * note). After expiry the server may reassign the address, so
 * interception of that address stops at once (clauses 4.2 and B.4).
 *
 * @constant
 * @type {number}
 */
export
const EndReason_leaseExpired: _enum_for_EndReason.leaseExpired = _enum_for_EndReason.leaseExpired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary leaseExpired
 * @description
 *
 * The DHCP lease expired (clause 8, table A.3).
 *
 * @constant
 * @type {number}
 */
export
const leaseExpired: _enum_for_EndReason.leaseExpired = EndReason_leaseExpired; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_EndReason: $.ASN1Decoder<EndReason> = $._decodeEnumerated;
export const _encode_EndReason: $.ASN1Encoder<EndReason> = $._encodeEnumerated;


/* eslint-enable */
