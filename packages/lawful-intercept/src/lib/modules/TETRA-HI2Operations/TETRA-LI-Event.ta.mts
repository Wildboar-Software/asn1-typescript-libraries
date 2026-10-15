/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_TETRA_LI_Event {
    /**
     * BEGIN record. Start of a call, and the A party is the target. Clause
     * A.9.2.1.1 requires BEGIN for this event. Besides the common parameters,
     * table A.9.2 requires the call identity, the target identity, the
     * other-party identity, the call nature, the call state, and the HI3 line
     * identity in `tARGETCOMMSMONITORind`. Location is conditional. The call
     * identity is the same from BEGIN to END and unique for one LIID for at
     * least several days. `tetraLocation` may be used as the TETRA location.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.1.1, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    callSetupMobileOriginating = 1,
    /**
     * BEGIN record. Start of a call, and the B party is the target. Table A.9.3
     * requires the same parameters as originating call setup: call identity,
     * both party identities, call nature, call state, and the HI3 line
     * identity. Location is conditional.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.1.2, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    callSetupMobileTerminating = 2,
    /**
     * CONTINUE record. The call reaches the other party. Table A.9.4 requires
     * the call identity, both party identities, the call nature, and the call
     * state. Location is conditional. The HI3 line identity is not in this
     * table.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.2.1, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    ringing = 3,
    /**
     * CONTINUE record. The call is waiting at the other party. Table A.9.5
     * requires the call identity, both party identities, the call nature, and
     * the call state. Location is conditional.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.2.2, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    queueing = 4,
    /**
     * CONTINUE record. The call is established. Table A.9.6 requires the call
     * identity, both party identities, the call nature, and the call state.
     * Location is conditional.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.2.3, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    connected = 5,
    /**
     * CONTINUE record. The location changes during a call. Table A.9.7 requires
     * the call identity, the target identity, and the HI3 line identity. The
     * location, when present, is the new TETRA location. The other party is not
     * in this table.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.2.4, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    handover = 6,
    /**
     * END record. The call is released. Clause A.9.2.1.3 requires END for this
     * event only. Table A.9.11 requires the call identity, both party
     * identities, the call nature, the call state, and the HI3 line identity.
     * Location is conditional. The call-identity note says incoming or outgoing
     * depending on call type. The HI3 line-identity note says moc or mtc
     * depending on call type. The table's release reason is
     * `callReleaseReason`, which is not a component of `Tetra-IRI-Parameters`.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.3.1, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    callRelease = 7,
    /**
     * REPORT record. The TETRA switch changes while the target is not in a
     * call. Table A.9.12 requires the target identity. The location, when
     * present, is the new TETRA location. The table does not include a call
     * identity.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.1, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    locationUpdate = 8,
    /**
     * REPORT record. The target sends SDS. Table A.9.13 requires the target
     * identity. Location is conditional. The table names `forwardSM-Arg` for
     * the SDS content (called address, originator address, and SDS value). That
     * parameter is not a component of `Tetra-IRI-Parameters`.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.2, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    sDSMobileOriginating = 9,
    /**
     * REPORT record. The target receives SDS. Table A.9.14 requires the target
     * identity. Location is conditional. The table names `forwardSM-Arg` for
     * the SDS content. That parameter is not a component of
     * `Tetra-IRI-Parameters`.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.3, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    sDSMobileTerminating = 10,
    /**
     * CONTINUE record. The call is forwarded to the C party. Table A.9.8
     * requires the call identity, both party identities, the call nature, and
     * the HI3 line identity. Location is conditional. The table also names a
     * supplementary-service type, with examples cfb and cw, and a forwarded-to
     * identity. Those names are not components of `Tetra-IRI-Parameters`.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.2.5, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    callForward = 11,
    /**
     * CONTINUE record. The call is on hold. Table A.9.9 requires the call
     * identity, both party identities, and the call nature. Location is
     * conditional. The table's hold status is `callRetrieve`: FALSE when the
     * call is put on hold, TRUE when it is retrieved. That name is not a
     * component of `Tetra-IRI-Parameters`.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.2.6, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    callHold = 12,
    /**
     * REPORT record for one group the observed subscriber has joined or left.
     * One record is sent for every such group. Table A.9.15 requires the call
     * identity, both party identities, and `groupStatus`. Location is
     * conditional. If the warrant is on an individual, the target identity is
     * the ITSI and the other party is the GTSI. If the warrant is on a group,
     * the target identity is the GTSI and the other party is the ITSI. FALSE
     * means leaving the group. TRUE means joining.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.4, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    groupIndication = 13,
    /**
     * CONTINUE record of talker status in a group. Table A.9.10 requires the
     * call identity, the target identity, the group identity in the other
     * party, and `txGrantedStatus`. FALSE means TxCeased. TRUE means TxGranted.
     * The table's location is `TETRACGIType`, which is not a component of
     * `Tetra-IRI-Parameters`.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.2.7, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    txGranted = 14,
    /**
     * REPORT record. The observed subscriber's handset has been turned on.
     * Table A.9.16 requires the target identity. Location is conditional. The
     * table does not include a call identity.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.5, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    mobileOn = 15,
    /**
     * REPORT record. The observed subscriber's handset has been turned off.
     * Table A.9.17 requires the target identity. Location is conditional. The
     * table does not include a call identity.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.6, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    mobileOff = 16,
    /**
     * REPORT record. The observed party has entered direct-mode radio
     * communications which the TETRA switch cannot observe. Table A.9.18
     * requires the target identity and `dMO-Indicator`. Location is
     * conditional. The indicator values are names only.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.7, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    dMO = 17,
}

/**
 * @summary TETRA_LI_Event
 * @description
 * 
 * TETRA HI2 event. Clause A.9.2.0 assigns each value to one IRI record type.
 * Clause A.9.2.1.0 requires `nature-Of-The-intercepted-call` to be
 * `tETRA-circuit-call` for these definitions. Notes stated on the first table
 * that uses a field remain valid for that field in later records.
 *
 * Every table in clause A.9.2.1 marks the LIID, the event time, the network
 * identifier, and this event as mandatory. Several tables also name
 * `callDirection`, `callTransactionType`, `basicService`,
 * `supplementaryService`, `forwardedToNumber`, `callRetrieve`,
 * `callReleaseReason`, `TETRACGIType`, or `forwardSM-Arg`. Those names are not
 * components of `Tetra-IRI-Parameters`.
 *
 * An extension marker follows the named events. The present document does not
 * name further values.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.0, clause A.9.2.1.0, clause
 * D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TETRA-LI-Event  ::=  ENUMERATED
 * {
 *     callSetupMobileOriginating(1),
 *         -- Start of call, A party is target
 *     callSetupMobileTerminating(2),
 *         -- Start of call, B party is target
 *     ringing(3),
 *         -- Call reaches other party
 *     queueing(4),
 *         -- Call waiting at other party
 *     connected(5),
 *         -- Call established
 *     handover(6),
 *         -- Location change during call
 *     callRelease(7),
 *         -- Call is released
 *     locationUpdate(8),
 *         -- TETRA switch change while not in call
 *     sDSMobileOriginating(9),
 *         -- Target sends SDS
 *     sDSMobileTerminating(10),
 *         -- Target receives SDS
 *     callForward(11),
 *         -- Call forwarded to C party
 *     callHold(12),
 *         -- Call on hold
 *     groupIndication(13),
 *         -- Group indication action
 *     txGranted(14),
 *         -- Group talker tx granted
 *     mobileOn(15),
 *         -- Handset switched on
 *     mobileOff(16),
 *         -- Handset switched off
 *     dMO(17),
 *         -- Direct Mode Operation
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TETRA_LI_Event = _enum_for_TETRA_LI_Event | ENUMERATED;

/**
 * @summary TETRA_LI_Event_callSetupMobileOriginating
 * @description
 *
 * BEGIN record. Start of a call, and the A party is the target. Clause
 * A.9.2.1.1 requires BEGIN for this event. Besides the common parameters, table
 * A.9.2 requires the call identity, the target identity, the other-party
 * identity, the call nature, the call state, and the HI3 line identity in
 * `tARGETCOMMSMONITORind`. Location is conditional. The call identity is the
 * same from BEGIN to END and unique for one LIID for at least several days.
 * `tetraLocation` may be used as the TETRA location.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.1.1, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const TETRA_LI_Event_callSetupMobileOriginating: TETRA_LI_Event = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callSetupMobileOriginating
 * @description
 *
 * BEGIN record. Start of a call, and the A party is the target. Clause
 * A.9.2.1.1 requires BEGIN for this event. Besides the common parameters, table
 * A.9.2 requires the call identity, the target identity, the other-party
 * identity, the call nature, the call state, and the HI3 line identity in
 * `tARGETCOMMSMONITORind`. Location is conditional. The call identity is the
 * same from BEGIN to END and unique for one LIID for at least several days.
 * `tetraLocation` may be used as the TETRA location.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.1.1, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const callSetupMobileOriginating: TETRA_LI_Event = TETRA_LI_Event_callSetupMobileOriginating; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TETRA_LI_Event_callSetupMobileTerminating
 * @description
 *
 * BEGIN record. Start of a call, and the B party is the target. Table A.9.3
 * requires the same parameters as originating call setup: call identity, both
 * party identities, call nature, call state, and the HI3 line identity.
 * Location is conditional.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.1.2, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const TETRA_LI_Event_callSetupMobileTerminating: TETRA_LI_Event = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callSetupMobileTerminating
 * @description
 *
 * BEGIN record. Start of a call, and the B party is the target. Table A.9.3
 * requires the same parameters as originating call setup: call identity, both
 * party identities, call nature, call state, and the HI3 line identity.
 * Location is conditional.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.1.2, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const callSetupMobileTerminating: TETRA_LI_Event = TETRA_LI_Event_callSetupMobileTerminating; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TETRA_LI_Event_ringing
 * @description
 *
 * CONTINUE record. The call reaches the other party. Table A.9.4 requires the
 * call identity, both party identities, the call nature, and the call state.
 * Location is conditional. The HI3 line identity is not in this table.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.2.1, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const TETRA_LI_Event_ringing: TETRA_LI_Event = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ringing
 * @description
 *
 * CONTINUE record. The call reaches the other party. Table A.9.4 requires the
 * call identity, both party identities, the call nature, and the call state.
 * Location is conditional. The HI3 line identity is not in this table.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.2.1, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ringing: TETRA_LI_Event = TETRA_LI_Event_ringing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TETRA_LI_Event_queueing
 * @description
 *
 * CONTINUE record. The call is waiting at the other party. Table A.9.5 requires
 * the call identity, both party identities, the call nature, and the call
 * state. Location is conditional.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.2.2, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const TETRA_LI_Event_queueing: TETRA_LI_Event = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary queueing
 * @description
 *
 * CONTINUE record. The call is waiting at the other party. Table A.9.5 requires
 * the call identity, both party identities, the call nature, and the call
 * state. Location is conditional.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.2.2, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const queueing: TETRA_LI_Event = TETRA_LI_Event_queueing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TETRA_LI_Event_connected
 * @description
 *
 * CONTINUE record. The call is established. Table A.9.6 requires the call
 * identity, both party identities, the call nature, and the call state.
 * Location is conditional.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.2.3, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const TETRA_LI_Event_connected: TETRA_LI_Event = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connected
 * @description
 *
 * CONTINUE record. The call is established. Table A.9.6 requires the call
 * identity, both party identities, the call nature, and the call state.
 * Location is conditional.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.2.3, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const connected: TETRA_LI_Event = TETRA_LI_Event_connected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TETRA_LI_Event_handover
 * @description
 *
 * CONTINUE record. The location changes during a call. Table A.9.7 requires the
 * call identity, the target identity, and the HI3 line identity. The location,
 * when present, is the new TETRA location. The other party is not in this
 * table.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.2.4, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const TETRA_LI_Event_handover: TETRA_LI_Event = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary handover
 * @description
 *
 * CONTINUE record. The location changes during a call. Table A.9.7 requires the
 * call identity, the target identity, and the HI3 line identity. The location,
 * when present, is the new TETRA location. The other party is not in this
 * table.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.2.4, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const handover: TETRA_LI_Event = TETRA_LI_Event_handover; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TETRA_LI_Event_callRelease
 * @description
 *
 * END record. The call is released. Clause A.9.2.1.3 requires END for this
 * event only. Table A.9.11 requires the call identity, both party identities,
 * the call nature, the call state, and the HI3 line identity. Location is
 * conditional. The call-identity note says incoming or outgoing depending on
 * call type. The HI3 line-identity note says moc or mtc depending on call type.
 * The table's release reason is `callReleaseReason`, which is not a component
 * of `Tetra-IRI-Parameters`.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.3.1, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const TETRA_LI_Event_callRelease: TETRA_LI_Event = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callRelease
 * @description
 *
 * END record. The call is released. Clause A.9.2.1.3 requires END for this
 * event only. Table A.9.11 requires the call identity, both party identities,
 * the call nature, the call state, and the HI3 line identity. Location is
 * conditional. The call-identity note says incoming or outgoing depending on
 * call type. The HI3 line-identity note says moc or mtc depending on call type.
 * The table's release reason is `callReleaseReason`, which is not a component
 * of `Tetra-IRI-Parameters`.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.3.1, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const callRelease: TETRA_LI_Event = TETRA_LI_Event_callRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TETRA_LI_Event_locationUpdate
 * @description
 *
 * REPORT record. The TETRA switch changes while the target is not in a call.
 * Table A.9.12 requires the target identity. The location, when present, is the
 * new TETRA location. The table does not include a call identity.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.1, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const TETRA_LI_Event_locationUpdate: TETRA_LI_Event = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locationUpdate
 * @description
 *
 * REPORT record. The TETRA switch changes while the target is not in a call.
 * Table A.9.12 requires the target identity. The location, when present, is the
 * new TETRA location. The table does not include a call identity.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.1, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const locationUpdate: TETRA_LI_Event = TETRA_LI_Event_locationUpdate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TETRA_LI_Event_sDSMobileOriginating
 * @description
 *
 * REPORT record. The target sends SDS. Table A.9.13 requires the target
 * identity. Location is conditional. The table names `forwardSM-Arg` for the
 * SDS content (called address, originator address, and SDS value). That
 * parameter is not a component of `Tetra-IRI-Parameters`.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.2, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const TETRA_LI_Event_sDSMobileOriginating: TETRA_LI_Event = 9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sDSMobileOriginating
 * @description
 *
 * REPORT record. The target sends SDS. Table A.9.13 requires the target
 * identity. Location is conditional. The table names `forwardSM-Arg` for the
 * SDS content (called address, originator address, and SDS value). That
 * parameter is not a component of `Tetra-IRI-Parameters`.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.2, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const sDSMobileOriginating: TETRA_LI_Event = TETRA_LI_Event_sDSMobileOriginating; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TETRA_LI_Event_sDSMobileTerminating
 * @description
 *
 * REPORT record. The target receives SDS. Table A.9.14 requires the target
 * identity. Location is conditional. The table names `forwardSM-Arg` for the
 * SDS content. That parameter is not a component of `Tetra-IRI-Parameters`.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.3, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const TETRA_LI_Event_sDSMobileTerminating: TETRA_LI_Event = 10; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sDSMobileTerminating
 * @description
 *
 * REPORT record. The target receives SDS. Table A.9.14 requires the target
 * identity. Location is conditional. The table names `forwardSM-Arg` for the
 * SDS content. That parameter is not a component of `Tetra-IRI-Parameters`.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.3, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const sDSMobileTerminating: TETRA_LI_Event = TETRA_LI_Event_sDSMobileTerminating; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TETRA_LI_Event_callForward
 * @description
 *
 * CONTINUE record. The call is forwarded to the C party. Table A.9.8 requires
 * the call identity, both party identities, the call nature, and the HI3 line
 * identity. Location is conditional. The table also names a
 * supplementary-service type, with examples cfb and cw, and a forwarded-to
 * identity. Those names are not components of `Tetra-IRI-Parameters`.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.2.5, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const TETRA_LI_Event_callForward: TETRA_LI_Event = 11; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForward
 * @description
 *
 * CONTINUE record. The call is forwarded to the C party. Table A.9.8 requires
 * the call identity, both party identities, the call nature, and the HI3 line
 * identity. Location is conditional. The table also names a
 * supplementary-service type, with examples cfb and cw, and a forwarded-to
 * identity. Those names are not components of `Tetra-IRI-Parameters`.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.2.5, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const callForward: TETRA_LI_Event = TETRA_LI_Event_callForward; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TETRA_LI_Event_callHold
 * @description
 *
 * CONTINUE record. The call is on hold. Table A.9.9 requires the call identity,
 * both party identities, and the call nature. Location is conditional. The
 * table's hold status is `callRetrieve`: FALSE when the call is put on hold,
 * TRUE when it is retrieved. That name is not a component of
 * `Tetra-IRI-Parameters`.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.2.6, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const TETRA_LI_Event_callHold: TETRA_LI_Event = 12; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callHold
 * @description
 *
 * CONTINUE record. The call is on hold. Table A.9.9 requires the call identity,
 * both party identities, and the call nature. Location is conditional. The
 * table's hold status is `callRetrieve`: FALSE when the call is put on hold,
 * TRUE when it is retrieved. That name is not a component of
 * `Tetra-IRI-Parameters`.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.2.6, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const callHold: TETRA_LI_Event = TETRA_LI_Event_callHold; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TETRA_LI_Event_groupIndication
 * @description
 *
 * REPORT record for one group the observed subscriber has joined or left. One
 * record is sent for every such group. Table A.9.15 requires the call identity,
 * both party identities, and `groupStatus`. Location is conditional. If the
 * warrant is on an individual, the target identity is the ITSI and the other
 * party is the GTSI. If the warrant is on a group, the target identity is the
 * GTSI and the other party is the ITSI. FALSE means leaving the group. TRUE
 * means joining.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.4, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const TETRA_LI_Event_groupIndication: TETRA_LI_Event = 13; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary groupIndication
 * @description
 *
 * REPORT record for one group the observed subscriber has joined or left. One
 * record is sent for every such group. Table A.9.15 requires the call identity,
 * both party identities, and `groupStatus`. Location is conditional. If the
 * warrant is on an individual, the target identity is the ITSI and the other
 * party is the GTSI. If the warrant is on a group, the target identity is the
 * GTSI and the other party is the ITSI. FALSE means leaving the group. TRUE
 * means joining.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.4, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const groupIndication: TETRA_LI_Event = TETRA_LI_Event_groupIndication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TETRA_LI_Event_txGranted
 * @description
 *
 * CONTINUE record of talker status in a group. Table A.9.10 requires the call
 * identity, the target identity, the group identity in the other party, and
 * `txGrantedStatus`. FALSE means TxCeased. TRUE means TxGranted. The table's
 * location is `TETRACGIType`, which is not a component of
 * `Tetra-IRI-Parameters`.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.2.7, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const TETRA_LI_Event_txGranted: TETRA_LI_Event = 14; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary txGranted
 * @description
 *
 * CONTINUE record of talker status in a group. Table A.9.10 requires the call
 * identity, the target identity, the group identity in the other party, and
 * `txGrantedStatus`. FALSE means TxCeased. TRUE means TxGranted. The table's
 * location is `TETRACGIType`, which is not a component of
 * `Tetra-IRI-Parameters`.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.2.7, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const txGranted: TETRA_LI_Event = TETRA_LI_Event_txGranted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TETRA_LI_Event_mobileOn
 * @description
 *
 * REPORT record. The observed subscriber's handset has been turned on. Table
 * A.9.16 requires the target identity. Location is conditional. The table does
 * not include a call identity.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.5, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const TETRA_LI_Event_mobileOn: TETRA_LI_Event = 15; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mobileOn
 * @description
 *
 * REPORT record. The observed subscriber's handset has been turned on. Table
 * A.9.16 requires the target identity. Location is conditional. The table does
 * not include a call identity.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.5, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const mobileOn: TETRA_LI_Event = TETRA_LI_Event_mobileOn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TETRA_LI_Event_mobileOff
 * @description
 *
 * REPORT record. The observed subscriber's handset has been turned off. Table
 * A.9.17 requires the target identity. Location is conditional. The table does
 * not include a call identity.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.6, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const TETRA_LI_Event_mobileOff: TETRA_LI_Event = 16; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mobileOff
 * @description
 *
 * REPORT record. The observed subscriber's handset has been turned off. Table
 * A.9.17 requires the target identity. Location is conditional. The table does
 * not include a call identity.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.6, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const mobileOff: TETRA_LI_Event = TETRA_LI_Event_mobileOff; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TETRA_LI_Event_dMO
 * @description
 *
 * REPORT record. The observed party has entered direct-mode radio
 * communications which the TETRA switch cannot observe. Table A.9.18 requires
 * the target identity and `dMO-Indicator`. Location is conditional. The
 * indicator values are names only.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.7, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const TETRA_LI_Event_dMO: TETRA_LI_Event = 17; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dMO
 * @description
 *
 * REPORT record. The observed party has entered direct-mode radio
 * communications which the TETRA switch cannot observe. Table A.9.18 requires
 * the target identity and `dMO-Indicator`. Location is conditional. The
 * indicator values are names only.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.4.7, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const dMO: TETRA_LI_Event = TETRA_LI_Event_dMO; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_TETRA_LI_Event: $.ASN1Decoder<TETRA_LI_Event> = $._decodeEnumerated;
export const _encode_TETRA_LI_Event: $.ASN1Encoder<TETRA_LI_Event> = $._encodeEnumerated;


/* eslint-enable */
