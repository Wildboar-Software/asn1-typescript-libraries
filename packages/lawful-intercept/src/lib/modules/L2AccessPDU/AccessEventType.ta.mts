/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


export
enum _enum_for_AccessEventType {
    /**
     * IRI-REPORT. The target requests access to the Internet Access Service.
     * Figure 7 assigns a new CIN on this event, subject to national agreement.
     * If the CSP allocates the CIN on `accessAccept` instead, this event is a
     * standalone message and is not associated with any other CC or IRI.
     * Duplicate events caused by resends do not change state.
     *
     * Table A.1 is the xDSL parameter set.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 6.1, table 1, table A.1.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    accessAttempt = 0,
    /**
     * IRI-BEGIN. Access is granted and the session begins. Table 1 says the
     * network elements are triggered to erect a layer 2 tunnel between the user
     * and the foreign IAP. Clause 5.2.1: if access is granted, the IAP provides
     * an IP address through that tunnel.
     *
     * If national agreement places CIN allocation on this event rather than on
     * `accessAttempt`, a new CIN is allocated only on IRI-BEGIN messages.
     * Duplicate events caused by resends do not change state.
     *
     * Table A.2 is the xDSL parameter set. `startTime` is mandatory and is the
     * start of the session or lease.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 5.2.1, clause 6.1, table 1,
     * table A.2.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    accessAccept = 1,
    /**
     * IRI-REPORT. Access is refused. If CIN allocation is on `accessAccept`,
     * this event is a standalone message and is not associated with any other
     * CC or IRI. Duplicate events caused by resends do not change state.
     *
     * Table A.3 marks `endReason` mandatory and still says to include it if
     * accessible. The examples are logoff, connection loss, and lease
     * expiration.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 6.1, table 1, table A.3.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    accessReject = 2,
    /**
     * IRI-REPORT. The access attempt timed out or failed otherwise. If CIN
     * allocation is on `accessAccept`, this event is a standalone message and
     * is not associated with any other CC or IRI. Duplicate events caused by
     * resends do not change state.
     *
     * Table A.4 marks `endReason` mandatory and still says to include it if
     * accessible. The example is time-out.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 6.1, table 1, table A.4.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    accessFailed = 3,
    /**
     * Not used from module version 4(4). The ASN.1 comment says a target starts
     * using the IAS. Clause 6.1, table 1, and figure 7 do not list this value.
     * Annex A table A.5 is void. The specification does not say that the void
     * table belonged to this event.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 6.1, clause 8.1.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    sessionStart = 4,
    /**
     * Not used from module version 4(4). The ASN.1 comment says a target stops
     * using the IAS. Clause 6.1, table 1, and figure 7 do not list this value.
     * The current end-of-session event is `accessEnd`.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 6.1, clause 8.1.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    sessionEnd = 5,
    /**
     * IRI-CONTINUE. Intermediate status report on service status or usage.
     * Table A.6 uses `startTime` as the date and time of the interim update,
     * and marks that time mandatory. It is not the session start.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 6.1, table 1, table A.6.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    interimUpdate = 6,
    /**
     * The ASN.1 assigns no comment. Clause 6.1, table 1, figure 7, and annex A
     * do not define this value.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    unknown = 7,
    /**
     * IRI-BEGIN. Lawful interception starts for a target that already has an
     * active session. When the IAP is aware of that session, this event shall
     * be used, and generating the IRI-BEGIN is recommended. The value is an
     * extension addition. A new CIN is allocated on this IRI-BEGIN (figure 7).
     *
     * Table A.8 is the xDSL parameter set. `startTime` is conditional: the
     * start of the session or lease, if accessible.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 6.1, table 1, table A.8.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    startOfInterceptionWithSessionActive = 8,
    /**
     * IRI-END. The target stops using the Internet Access Service and the
     * session ends. Table 1: communication between the user and the IAP
     * terminated, for reasons that may not be visible to the access provider,
     * such as the user logging off or a shortage of capacity between the access
     * provider and the IAP. If other connections still use the tunnel, the
     * tunnel remains. Clause 5.2.3 describes an orderly logoff. The value is an
     * extension addition.
     *
     * Table A.7 marks `endTime` mandatory (end of the session or lease).
     * `endReason` and the octet counts are conditional.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 5.2.3, clause 6.1, table 1,
     * table A.7.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    accessEnd = 9,
    /**
     * IRI-REPORT. Lawful interception ends while the user's session stays
     * active. National option: the mediation function may send this report, or
     * it may omit the report and signal the end by other means. The example
     * given is an HI1 `liDeactivated` message. The value is an extension
     * addition.
     *
     * Table A.9 marks `endTime` mandatory. The note says the mediation function
     * generates that time when the intercept ends. `endReason` is marked
     * mandatory and still says "if accessible".
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 6.1, table 1, table A.9.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    endOfInterceptionWithSessionActive = 10,
    /**
     * IRI-BEGIN. The mediation function starts an interception session without
     * a network session event (clause 5.2.5). An example is a point that only
     * passively copies layer 2 packets and does not see the session. National
     * option. The IRI session may start on LI activation, or on the first layer
     * 2 packet after activation, subject to national agreement. The value is an
     * extension addition. Figure 7 assigns a new CIN.
     *
     * Table A.10 sets `authenticationType` to `unknown`. `startTime` is
     * conditional and is the start of the intercept session. `rawAAAData` is
     * not in this table.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 5.2.5, clause 6.1, table 1,
     * table A.10.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    startOfInterceptionWithoutNetworkSession = 11,
    /**
     * IRI-REPORT. The mediation function ends an interception session that had
     * no network session event (clause 5.2.5). National option. The value is an
     * extension addition.
     *
     * Table A.11 sets `authenticationType` to `unknown`. `endTime` is mandatory
     * and is the end of the intercept session. `rawAAAData` is not in this
     * table.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 5.2.5, clause 6.1, table 1,
     * table A.11.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    endOfInterceptionWithoutNetworkSession = 12,
    /**
     * IRI-REPORT. The mediation function ends the interception session because
     * of an expiry condition (clause 5.2.6), so the session does not hold
     * mediation resources indefinitely. One such condition is failure to
     * receive a specific multiple of the expected regular network session
     * events from the NAS. Figure 7 note 2: expiry may occur from any state of
     * an existing interception session. The mediation function shall send this
     * report. The value is an extension addition.
     *
     * This is not `endReason` `connectionTimeout`, which may map directly to a
     * network event. Table A.12 marks `endTime` mandatory: the time the
     * intercept session expired.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 5.2.6, clause 6.1, table 1,
     * table A.12.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    sessionExpired = 13,
}

/**
 * @summary AccessEventType
 * @description
 *
 * IRI event for a layer 2 Internet access session. `L2IRIContents` carries it.
 * Clause 6.1 table 1 assigns each current event to one IRI record type. Clause
 * 4.2.3 defines the four record types (BEGIN, END, CONTINUE, REPORT) and defers
 * their use to ETSI TS 102 232-1. They are not components of this module.
 *
 * Figure 7 is the session lifecycle. Resends of an event do not change state.
 * Session expiry may occur from any state of an existing interception session.
 *
 * Subject to national agreement, the CIN is allocated on `accessAccept` rather
 * than on `accessAttempt`. In that case a new CIN is allocated only on
 * IRI-BEGIN, and `accessAttempt`, `accessReject`, and `accessFailed` are
 * standalone messages.
 *
 * The events apply when the target's traffic passes through the access
 * provider's network. Values from `startOfInterceptionWithSessionActive` onward
 * are extension additions. `sessionStart` and `sessionEnd` are not used from
 * module version 4(4).
 *
 * The short name `unknown` is not re-exported from the module index, because
 * `AuthenticationType` uses the same short name.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 4.2.3, clause 6.1.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessEventType ::= ENUMERATED
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
 *         -- A target starts using the IAS; not in use anymore from version 4(4).
 *     sessionEnd(5),
 *         -- A target stops using the IAS; not in use anymore from version 4(4).
 *     interimUpdate(6),
 *         -- Intermediate status report on service status or usage
 *     unknown(7),
 *     ...,
 *     startOfInterceptionWithSessionActive(8),
 *         -- LI is started on a target who already has an active session
 *     accessEnd(9),
 *         -- A target stops using the IAS, the session ends.
 *     endOfInterceptionWithSessionActive(10),
 *         -- LI is ended on a target who still has an active session
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
 * IRI-REPORT. The target requests access to the Internet Access Service. Figure
 * 7 assigns a new CIN on this event, subject to national agreement. If the CSP
 * allocates the CIN on `accessAccept` instead, this event is a standalone
 * message and is not associated with any other CC or IRI. Duplicate events
 * caused by resends do not change state.
 *
 * Table A.1 is the xDSL parameter set.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 6.1, table 1, table A.1.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
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
 * IRI-REPORT. The target requests access to the Internet Access Service. Figure
 * 7 assigns a new CIN on this event, subject to national agreement. If the CSP
 * allocates the CIN on `accessAccept` instead, this event is a standalone
 * message and is not associated with any other CC or IRI. Duplicate events
 * caused by resends do not change state.
 *
 * Table A.1 is the xDSL parameter set.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 6.1, table 1, table A.1.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
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
 * IRI-BEGIN. Access is granted and the session begins. Table 1 says the network
 * elements are triggered to erect a layer 2 tunnel between the user and the
 * foreign IAP. Clause 5.2.1: if access is granted, the IAP provides an IP
 * address through that tunnel.
 *
 * If national agreement places CIN allocation on this event rather than on
 * `accessAttempt`, a new CIN is allocated only on IRI-BEGIN messages. Duplicate
 * events caused by resends do not change state.
 *
 * Table A.2 is the xDSL parameter set. `startTime` is mandatory and is the
 * start of the session or lease.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 5.2.1, clause 6.1, table 1, table
 * A.2.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
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
 * IRI-BEGIN. Access is granted and the session begins. Table 1 says the network
 * elements are triggered to erect a layer 2 tunnel between the user and the
 * foreign IAP. Clause 5.2.1: if access is granted, the IAP provides an IP
 * address through that tunnel.
 *
 * If national agreement places CIN allocation on this event rather than on
 * `accessAttempt`, a new CIN is allocated only on IRI-BEGIN messages. Duplicate
 * events caused by resends do not change state.
 *
 * Table A.2 is the xDSL parameter set. `startTime` is mandatory and is the
 * start of the session or lease.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 5.2.1, clause 6.1, table 1, table
 * A.2.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
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
 * IRI-REPORT. Access is refused. If CIN allocation is on `accessAccept`, this
 * event is a standalone message and is not associated with any other CC or IRI.
 * Duplicate events caused by resends do not change state.
 *
 * Table A.3 marks `endReason` mandatory and still says to include it if
 * accessible. The examples are logoff, connection loss, and lease expiration.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 6.1, table 1, table A.3.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
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
 * IRI-REPORT. Access is refused. If CIN allocation is on `accessAccept`, this
 * event is a standalone message and is not associated with any other CC or IRI.
 * Duplicate events caused by resends do not change state.
 *
 * Table A.3 marks `endReason` mandatory and still says to include it if
 * accessible. The examples are logoff, connection loss, and lease expiration.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 6.1, table 1, table A.3.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
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
 * IRI-REPORT. The access attempt timed out or failed otherwise. If CIN
 * allocation is on `accessAccept`, this event is a standalone message and is
 * not associated with any other CC or IRI. Duplicate events caused by resends
 * do not change state.
 *
 * Table A.4 marks `endReason` mandatory and still says to include it if
 * accessible. The example is time-out.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 6.1, table 1, table A.4.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
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
 * IRI-REPORT. The access attempt timed out or failed otherwise. If CIN
 * allocation is on `accessAccept`, this event is a standalone message and is
 * not associated with any other CC or IRI. Duplicate events caused by resends
 * do not change state.
 *
 * Table A.4 marks `endReason` mandatory and still says to include it if
 * accessible. The example is time-out.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 6.1, table 1, table A.4.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
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
 * Not used from module version 4(4). The ASN.1 comment says a target starts
 * using the IAS. Clause 6.1, table 1, and figure 7 do not list this value.
 * Annex A table A.5 is void. The specification does not say that the void table
 * belonged to this event.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 6.1, clause 8.1.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
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
 * Not used from module version 4(4). The ASN.1 comment says a target starts
 * using the IAS. Clause 6.1, table 1, and figure 7 do not list this value.
 * Annex A table A.5 is void. The specification does not say that the void table
 * belonged to this event.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 6.1, clause 8.1.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
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
 * Not used from module version 4(4). The ASN.1 comment says a target stops
 * using the IAS. Clause 6.1, table 1, and figure 7 do not list this value. The
 * current end-of-session event is `accessEnd`.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 6.1, clause 8.1.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
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
 * Not used from module version 4(4). The ASN.1 comment says a target stops
 * using the IAS. Clause 6.1, table 1, and figure 7 do not list this value. The
 * current end-of-session event is `accessEnd`.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 6.1, clause 8.1.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
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
 * IRI-CONTINUE. Intermediate status report on service status or usage. Table
 * A.6 uses `startTime` as the date and time of the interim update, and marks
 * that time mandatory. It is not the session start.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 6.1, table 1, table A.6.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
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
 * IRI-CONTINUE. Intermediate status report on service status or usage. Table
 * A.6 uses `startTime` as the date and time of the interim update, and marks
 * that time mandatory. It is not the session start.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 6.1, table 1, table A.6.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const interimUpdate = AccessEventType_interimUpdate satisfies AccessEventType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessEventType_unknown
 * @description
 *
 * The ASN.1 assigns no comment. Clause 6.1, table 1, figure 7, and annex A do
 * not define this value.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
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
 * The ASN.1 assigns no comment. Clause 6.1, table 1, figure 7, and annex A do
 * not define this value.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
 *
 * Not re-exported from the module index: `AuthenticationType` uses the same
 * short name.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const unknown = AccessEventType_unknown satisfies AccessEventType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessEventType_startOfInterceptionWithSessionActive
 * @description
 *
 * IRI-BEGIN. Lawful interception starts for a target that already has an active
 * session. When the IAP is aware of that session, this event shall be used, and
 * generating the IRI-BEGIN is recommended. The value is an extension addition.
 * A new CIN is allocated on this IRI-BEGIN (figure 7).
 *
 * Table A.8 is the xDSL parameter set. `startTime` is conditional: the start of
 * the session or lease, if accessible.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 6.1, table 1, table A.8.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
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
 * IRI-BEGIN. Lawful interception starts for a target that already has an active
 * session. When the IAP is aware of that session, this event shall be used, and
 * generating the IRI-BEGIN is recommended. The value is an extension addition.
 * A new CIN is allocated on this IRI-BEGIN (figure 7).
 *
 * Table A.8 is the xDSL parameter set. `startTime` is conditional: the start of
 * the session or lease, if accessible.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 6.1, table 1, table A.8.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
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
 * IRI-END. The target stops using the Internet Access Service and the session
 * ends. Table 1: communication between the user and the IAP terminated, for
 * reasons that may not be visible to the access provider, such as the user
 * logging off or a shortage of capacity between the access provider and the
 * IAP. If other connections still use the tunnel, the tunnel remains. Clause
 * 5.2.3 describes an orderly logoff. The value is an extension addition.
 *
 * Table A.7 marks `endTime` mandatory (end of the session or lease).
 * `endReason` and the octet counts are conditional.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 5.2.3, clause 6.1, table 1, table
 * A.7.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
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
 * IRI-END. The target stops using the Internet Access Service and the session
 * ends. Table 1: communication between the user and the IAP terminated, for
 * reasons that may not be visible to the access provider, such as the user
 * logging off or a shortage of capacity between the access provider and the
 * IAP. If other connections still use the tunnel, the tunnel remains. Clause
 * 5.2.3 describes an orderly logoff. The value is an extension addition.
 *
 * Table A.7 marks `endTime` mandatory (end of the session or lease).
 * `endReason` and the octet counts are conditional.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 5.2.3, clause 6.1, table 1, table
 * A.7.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
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
 * IRI-REPORT. Lawful interception ends while the user's session stays active.
 * National option: the mediation function may send this report, or it may omit
 * the report and signal the end by other means. The example given is an HI1
 * `liDeactivated` message. The value is an extension addition.
 *
 * Table A.9 marks `endTime` mandatory. The note says the mediation function
 * generates that time when the intercept ends. `endReason` is marked mandatory
 * and still says "if accessible".
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 6.1, table 1, table A.9.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
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
 * IRI-REPORT. Lawful interception ends while the user's session stays active.
 * National option: the mediation function may send this report, or it may omit
 * the report and signal the end by other means. The example given is an HI1
 * `liDeactivated` message. The value is an extension addition.
 *
 * Table A.9 marks `endTime` mandatory. The note says the mediation function
 * generates that time when the intercept ends. `endReason` is marked mandatory
 * and still says "if accessible".
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 6.1, table 1, table A.9.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const endOfInterceptionWithSessionActive = AccessEventType_endOfInterceptionWithSessionActive satisfies AccessEventType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessEventType_startOfInterceptionWithoutNetworkSession
 * @description
 *
 * IRI-BEGIN. The mediation function starts an interception session without a
 * network session event (clause 5.2.5). An example is a point that only
 * passively copies layer 2 packets and does not see the session. National
 * option. The IRI session may start on LI activation, or on the first layer 2
 * packet after activation, subject to national agreement. The value is an
 * extension addition. Figure 7 assigns a new CIN.
 *
 * Table A.10 sets `authenticationType` to `unknown`. `startTime` is conditional
 * and is the start of the intercept session. `rawAAAData` is not in this table.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 5.2.5, clause 6.1, table 1, table
 * A.10.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
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
 * IRI-BEGIN. The mediation function starts an interception session without a
 * network session event (clause 5.2.5). An example is a point that only
 * passively copies layer 2 packets and does not see the session. National
 * option. The IRI session may start on LI activation, or on the first layer 2
 * packet after activation, subject to national agreement. The value is an
 * extension addition. Figure 7 assigns a new CIN.
 *
 * Table A.10 sets `authenticationType` to `unknown`. `startTime` is conditional
 * and is the start of the intercept session. `rawAAAData` is not in this table.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 5.2.5, clause 6.1, table 1, table
 * A.10.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
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
 * IRI-REPORT. The mediation function ends an interception session that had no
 * network session event (clause 5.2.5). National option. The value is an
 * extension addition.
 *
 * Table A.11 sets `authenticationType` to `unknown`. `endTime` is mandatory and
 * is the end of the intercept session. `rawAAAData` is not in this table.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 5.2.5, clause 6.1, table 1, table
 * A.11.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
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
 * IRI-REPORT. The mediation function ends an interception session that had no
 * network session event (clause 5.2.5). National option. The value is an
 * extension addition.
 *
 * Table A.11 sets `authenticationType` to `unknown`. `endTime` is mandatory and
 * is the end of the intercept session. `rawAAAData` is not in this table.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 5.2.5, clause 6.1, table 1, table
 * A.11.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
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
 * IRI-REPORT. The mediation function ends the interception session because of
 * an expiry condition (clause 5.2.6), so the session does not hold mediation
 * resources indefinitely. One such condition is failure to receive a specific
 * multiple of the expected regular network session events from the NAS. Figure
 * 7 note 2: expiry may occur from any state of an existing interception
 * session. The mediation function shall send this report. The value is an
 * extension addition.
 *
 * This is not `endReason` `connectionTimeout`, which may map directly to a
 * network event. Table A.12 marks `endTime` mandatory: the time the intercept
 * session expired.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 5.2.6, clause 6.1, table 1, table
 * A.12.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
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
 * IRI-REPORT. The mediation function ends the interception session because of
 * an expiry condition (clause 5.2.6), so the session does not hold mediation
 * resources indefinitely. One such condition is failure to receive a specific
 * multiple of the expected regular network session events from the NAS. Figure
 * 7 note 2: expiry may occur from any state of an existing interception
 * session. The mediation function shall send this report. The value is an
 * extension addition.
 *
 * This is not `endReason` `connectionTimeout`, which may map directly to a
 * network event. Table A.12 marks `endTime` mandatory: the time the intercept
 * session expired.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 5.2.6, clause 6.1, table 1, table
 * A.12.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const sessionExpired = AccessEventType_sessionExpired satisfies AccessEventType; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AccessEventType: $.ASN1Decoder<AccessEventType> = $._decodeEnumerated;
export const _encode_AccessEventType: $.ASN1Encoder<AccessEventType> = $._encodeEnumerated;


/* eslint-enable */
