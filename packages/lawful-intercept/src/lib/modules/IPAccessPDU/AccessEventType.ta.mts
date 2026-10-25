/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_AccessEventType {
    accessAttempt = 0,
    accessAccept = 1,
    accessReject = 2,
    accessFailed = 3,
    sessionStart = 4,
    sessionEnd = 5,
    interimUpdate = 6,
    startOfInterceptionWithSessionActive = 7,
    accessEnd = 8,
    endOfInterceptionWithSessionActive = 9,
    unknown = 10,
    startOfInterceptionWithoutNetworkSession = 11,
    endOfInterceptionWithoutNetworkSession = 12,
    sessionExpired = 13,
}

/**
 * @summary AccessEventType
 * @description
 *
 * IRI event for an Internet Access Service session, and therefore which
 * IRI message the MF sends (ETSI TS 102 232-3 V3.9.1, clause 6.1,
 * table 1, figure 6).
 *
 * Subject to national agreement, the CIN is allocated on
 * `accessAttempt` or on `accessAccept`. If it is allocated on
 * `accessAccept`, `accessAttempt`, `accessReject`, and `accessFailed`
 * are standalone records and are not associated with other IRI or CC.
 * Resends of an event do not change state.
 *
 * Values 11 to 13 are not in the version14 module published in
 * clause 8. Their comments below are from this version20 module.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessEventType  ::=  ENUMERATED
 * {
 *     accessAttempt(0),
 *         -- A target requests access to the IAS
 *     accessAccept(1),
 *         -- IAS access is granted to the target, the session begins
 *     accessReject(2),
 *         -- IAS access is refused to the target
 *     accessFailed(3),
 *         -- The accessAttempt timed-out or failed otherwise
 *     sessionStart(4),
 *         -- A target starts using the IAS; not in use anymore from version 4(4)
 *     sessionEnd(5),
 *         -- A target stops using the IAS; not in use anymore from version 4(4)
 *     interimUpdate(6),
 *         -- Intermediate status report on service status or usage
 *     ...,
 *     startOfInterceptionWithSessionActive(7),
 *         -- LI is started on a target who already has an active session
 *     accessEnd(8),
 *         -- A target stops using the IAS, the session ends
 *     endOfInterceptionWithSessionActive(9),
 *         -- LI is ended on a target who still has an active session
 *     unknown(10),
 *     startOfInterceptionWithoutNetworkSession(11),
 *         -- Start of LI session without a network session
 *     endOfInterceptionWithoutNetworkSession(12),
 *         -- End of LI session without a network session
 *     sessionExpired(13)
 *         -- LI session terminated due to expiry by MF
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AccessEventType = _enum_for_AccessEventType | ENUMERATED;

/**
 * @summary AccessEventType_accessAttempt
 * @description
 *
 * The target requests access to the IAS. Sent as IRI-REPORT
 * (clause 6.1, table 1). A new CIN may be allocated here.
 *
 * RADIUS: an Access-Request whose target identity is on the target
 * list (annex A, clause A.5.2.2, figure A.6). DHCP: a DHCPREQUEST
 * while no address is assigned, and also DHCPDISCOVER or DHCPOFFER
 * (annex B, figure B.3).
 *
 * @constant
 * @type {number}
 */
export
const AccessEventType_accessAttempt = _enum_for_AccessEventType.accessAttempt satisfies AccessEventType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary accessAttempt
 * @description
 *
 * The target requests access to the IAS. IRI-REPORT (clause 6.1).
 *
 * @constant
 * @type {number}
 */
export
const accessAttempt = AccessEventType_accessAttempt satisfies AccessEventType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessEventType_accessAccept
 * @description
 *
 * The AAA server grants access and the session begins. Sent as
 * IRI-BEGIN (clause 6.1, table 1). Alternative point at which a new
 * CIN is allocated.
 *
 * RADIUS: Access-Accept correlated with the Access-Request, or the
 * Accounting-Response to an Accounting-Request Start when that is the
 * first sign of the session (clause A.5.2.2). The assigned addresses
 * and prefixes are passed to the IP interception function. An extra
 * multilink channel whose address is 0.0.0.0 may be ignored; traffic
 * uses the base-channel address (clauses 5.2.3 and A.5.2.2).
 *
 * DHCP: the DHCPACK that binds `yiaddr` (clause B.6.4, figure B.3).
 *
 * @constant
 * @type {number}
 */
export
const AccessEventType_accessAccept = _enum_for_AccessEventType.accessAccept satisfies AccessEventType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary accessAccept
 * @description
 *
 * Access is granted and the session begins. IRI-BEGIN (clause 6.1).
 *
 * @constant
 * @type {number}
 */
export
const accessAccept = AccessEventType_accessAccept satisfies AccessEventType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessEventType_accessReject
 * @description
 *
 * The AAA server refuses access. Sent as IRI-REPORT (clause 6.1,
 * table 1). Standalone when the CIN is allocated only on IRI-BEGIN.
 *
 * RADIUS: Access-Reject correlated with the Access-Request
 * (clause A.5.2.2). A NAS that cannot honour an Access-Accept treats
 * it as Access-Reject (figure A.6, note).
 *
 * DHCP: DHCPNAK (figure B.3). Clause B.6.3.1 says a DHCP rejection
 * does not have the same weight as a RADIUS logon failure, because
 * DHCP messages are not authenticated.
 *
 * @constant
 * @type {number}
 */
export
const AccessEventType_accessReject = _enum_for_AccessEventType.accessReject satisfies AccessEventType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary accessReject
 * @description
 *
 * Access is refused. IRI-REPORT (clause 6.1).
 *
 * @constant
 * @type {number}
 */
export
const accessReject = AccessEventType_accessReject satisfies AccessEventType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessEventType_accessFailed
 * @description
 *
 * The access attempt timed out or failed for another reason. Sent as
 * IRI-REPORT (clause 6.1, table 1).
 *
 * RADIUS figure A.6 labels the timeout path "Access-Failed or
 * timeout". DHCP figure B.3 uses this event for DHCPDECLINE, which
 * voids an assignment the client considers unsuitable
 * (clause B.6.3.1). That figure marks the DHCPDECLINE path IRI-END;
 * table 1 marks `accessFailed` as IRI-REPORT. The specification does
 * not reconcile the two.
 *
 * @constant
 * @type {number}
 */
export
const AccessEventType_accessFailed = _enum_for_AccessEventType.accessFailed satisfies AccessEventType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary accessFailed
 * @description
 *
 * The access attempt timed out or failed otherwise. IRI-REPORT
 * (clause 6.1).
 *
 * @constant
 * @type {number}
 */
export
const accessFailed = AccessEventType_accessFailed satisfies AccessEventType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessEventType_sessionStart
 * @description
 *
 * Not used from module version 4. The version20 comment says a target
 * starts using the IAS. V3.9.1 table 1 does not list this value;
 * `accessAccept` is the session-begin event.
 *
 * @constant
 * @type {number}
 */
export
const AccessEventType_sessionStart = _enum_for_AccessEventType.sessionStart satisfies AccessEventType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sessionStart
 * @description
 *
 * Not used from module version 4. See `accessAccept`.
 *
 * @constant
 * @type {number}
 */
export
const sessionStart = AccessEventType_sessionStart satisfies AccessEventType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessEventType_sessionEnd
 * @description
 *
 * Not used from module version 4. The version20 comment says a target
 * stops using the IAS. V3.9.1 table 1 uses `accessEnd` for that event.
 *
 * @constant
 * @type {number}
 */
export
const AccessEventType_sessionEnd = _enum_for_AccessEventType.sessionEnd satisfies AccessEventType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sessionEnd
 * @description
 *
 * Not used from module version 4. See `accessEnd`.
 *
 * @constant
 * @type {number}
 */
export
const sessionEnd = AccessEventType_sessionEnd satisfies AccessEventType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessEventType_interimUpdate
 * @description
 *
 * Intermediate report of service status or usage. Sent as
 * IRI-CONTINUE (clause 6.1, table 1).
 *
 * RADIUS: Accounting-Request Start or Interim-Update, after its
 * Accounting-Response, when interception for this session is already
 * active (clauses A.3.2 and A.5.2.2, figure A.6).
 *
 * DHCP: a lease renewal while the address is already bound
 * (clause B.6.4, figure B.3).
 *
 * @constant
 * @type {number}
 */
export
const AccessEventType_interimUpdate = _enum_for_AccessEventType.interimUpdate satisfies AccessEventType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interimUpdate
 * @description
 *
 * Intermediate status or usage report. IRI-CONTINUE (clause 6.1).
 *
 * @constant
 * @type {number}
 */
export
const interimUpdate = AccessEventType_interimUpdate satisfies AccessEventType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessEventType_startOfInterceptionWithSessionActive
 * @description
 *
 * LI starts on a target who already has an active session. Sent as
 * IRI-BEGIN with a new CIN (clause 6.1). Use this when the IAP knows
 * the session is already up. RADIUS and DHCP call the same case
 * "Start intercept" (figures A.6 and B.3). DHCP preload is the
 * administrative form of learning an assignment that already exists
 * (clause B.6.3.2).
 *
 * @constant
 * @type {number}
 */
export
const AccessEventType_startOfInterceptionWithSessionActive = _enum_for_AccessEventType.startOfInterceptionWithSessionActive satisfies AccessEventType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfInterceptionWithSessionActive
 * @description
 *
 * LI starts during an active session. IRI-BEGIN (clause 6.1).
 *
 * @constant
 * @type {number}
 */
export
const startOfInterceptionWithSessionActive = AccessEventType_startOfInterceptionWithSessionActive satisfies AccessEventType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessEventType_accessEnd
 * @description
 *
 * The target stops using the IAS, by logoff or by connection loss,
 * and the session ends. Sent as IRI-END (clause 6.1, table 1).
 * Interception of the released address stops immediately, because the
 * address may be given to another user (clause 4.2).
 *
 * RADIUS: Accounting-Response to Accounting-Request Stop
 * (clause A.5.2.2). If that Stop was missed and a later login reuses
 * the address for a different username, send IRI-END at once (silent
 * logoff). Same username with a different Accounting-Session-Id:
 * IRI-END, then a new IRI-BEGIN with a new CIN.
 *
 * PPP logoff is an LCP Terminate exchange (clause 5.2.5). Connection
 * loss has no user logoff; the NAS detects it (clause 5.2.6).
 *
 * DHCP: DHCPRELEASE, a conflicting assignment, or the lease returning
 * the address to the pool (clauses B.6.3.1 and B.6.4).
 *
 * @constant
 * @type {number}
 */
export
const AccessEventType_accessEnd = _enum_for_AccessEventType.accessEnd satisfies AccessEventType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary accessEnd
 * @description
 *
 * The session ends by logoff or connection loss. IRI-END
 * (clause 6.1).
 *
 * @constant
 * @type {number}
 */
export
const accessEnd = AccessEventType_accessEnd satisfies AccessEventType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessEventType_endOfInterceptionWithSessionActive
 * @description
 *
 * LI ends while the user session is still active. Sent as IRI-REPORT.
 * As a national option the MF may send no IRI and signal the end only
 * by other means, such as an HI1 liDeactivated message (clause 6.1).
 *
 * @constant
 * @type {number}
 */
export
const AccessEventType_endOfInterceptionWithSessionActive = _enum_for_AccessEventType.endOfInterceptionWithSessionActive satisfies AccessEventType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary endOfInterceptionWithSessionActive
 * @description
 *
 * LI ends during an active session. IRI-REPORT, national option
 * (clause 6.1).
 *
 * @constant
 * @type {number}
 */
export
const endOfInterceptionWithSessionActive = AccessEventType_endOfInterceptionWithSessionActive satisfies AccessEventType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessEventType_unknown
 * @description
 *
 * Present in the V3.9.1 module (clause 8). That edition gives no
 * further meaning and table 1 does not list it.
 *
 * @constant
 * @type {number}
 */
export
const AccessEventType_unknown = _enum_for_AccessEventType.unknown satisfies AccessEventType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @description
 *
 * Present in clause 8 of V3.9.1, with no further description.
 *
 * @constant
 * @type {number}
 */
export
const unknown = AccessEventType_unknown satisfies AccessEventType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessEventType_startOfInterceptionWithoutNetworkSession
 * @description
 *
 * Not in V3.9.1 (version14 ends at `unknown`). The version20 module
 * comment says this is the start of an LI session without a network
 * session.
 *
 * @constant
 * @type {number}
 */
export
const AccessEventType_startOfInterceptionWithoutNetworkSession = _enum_for_AccessEventType.startOfInterceptionWithoutNetworkSession satisfies AccessEventType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfInterceptionWithoutNetworkSession
 * @description
 *
 * Not in V3.9.1. Version20 comment: start of an LI session without a
 * network session.
 *
 * @constant
 * @type {number}
 */
export
const startOfInterceptionWithoutNetworkSession = AccessEventType_startOfInterceptionWithoutNetworkSession satisfies AccessEventType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessEventType_endOfInterceptionWithoutNetworkSession
 * @description
 *
 * Not in V3.9.1. The version20 module comment says this is the end of
 * an LI session without a network session.
 *
 * @constant
 * @type {number}
 */
export
const AccessEventType_endOfInterceptionWithoutNetworkSession = _enum_for_AccessEventType.endOfInterceptionWithoutNetworkSession satisfies AccessEventType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary endOfInterceptionWithoutNetworkSession
 * @description
 *
 * Not in V3.9.1. Version20 comment: end of an LI session without a
 * network session.
 *
 * @constant
 * @type {number}
 */
export
const endOfInterceptionWithoutNetworkSession = AccessEventType_endOfInterceptionWithoutNetworkSession satisfies AccessEventType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessEventType_sessionExpired
 * @description
 *
 * Not in V3.9.1. The version20 module comment says the MF ended the LI
 * session because it expired. Clause 4.3.5 requires an intercept to
 * stop when a session timeout elapses with no termination event, but
 * that clause does not assign this value.
 *
 * @constant
 * @type {number}
 */
export
const AccessEventType_sessionExpired = _enum_for_AccessEventType.sessionExpired satisfies AccessEventType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sessionExpired
 * @description
 *
 * Not in V3.9.1. Version20 comment: the MF ended the LI session
 * because it expired.
 *
 * @constant
 * @type {number}
 */
export
const sessionExpired = AccessEventType_sessionExpired satisfies AccessEventType; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AccessEventType: $.ASN1Decoder<AccessEventType> = $._decodeEnumerated;
export const _encode_AccessEventType: $.ASN1Encoder<AccessEventType> = $._encodeEnumerated;


/* eslint-enable */
