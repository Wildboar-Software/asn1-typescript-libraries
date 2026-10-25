/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SSType
 * @description
 * 
 * TETRA supplementary service invoked or modified by the target. Set in
 * `ActivityType.sStype` only when `cctivity` is `supplementaryService`.
 * Clause 6.4.7 then requires `direction` as appropriate, and requires `scope`
 * and `cPlaneData` to be omitted. Clause 5.1.3: invoking interception does not
 * alter the supplementary service. Clause 4.3.4 and clause 4.8 also mention an
 * advice of charge for the resources used to provide interception; this module
 * has no component for that charge. `adviceofCharge` is the
 * supplementary-service name in annex E.
 *
 * EN 301 040 lists these services and does not define their procedures.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7, annex E.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SSType  ::=  ENUMERATED {
 *     ambienceListening,
 *     adviceofCharge,
 *     accessPriority,
 *     areaSelection,
 *     barringofIncomingCalls,
 *     barringofOutgoingCalls,
 *     callAuthorizedbyDispatcher,
 *     callCompletiontoBusySubscriber,
 *     callCompletiononNoReply,
 *     callForwardingonBusy,
 *     callForwardingonNoReply,
 *     callForwardingonNotReachable,
 *     callForwardingUnconditional,
 *     callingLineIdentificationPresentation,
 *     callingConnectedLineIdentificationRestriction,
 *     connectedLineIdentificationPresentation,
 *     callReport,
 *     callRetention,
 *     callWaiting,
 *     dynamicGroupNumberAssignment,
 *     discreetListening,
 *     callHold,
 *     includeCall,
 *     lateEntry,
 *     listSearchCall,
 *     priorityCall,
 *     preemptivePriorityCall,
 *     shortNumberAddressing,
 *     transferofControl,
 *     talkingPartyIdentification
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SSType {
    /**
     * TETRA supplementary service listed in annex E. Selected by
     * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
     * activity, `direction` is set as appropriate and both `scope` and
     * `cPlaneData` are omitted (clause 6.4.7). EN 301 040 lists the service and
     * does not define its procedure. Invocation of interception does not change
     * the service (clause 5.1.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    ambienceListening = 0,
    /**
     * TETRA supplementary service listed in annex E. Selected by
     * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
     * activity, `direction` is set as appropriate and both `scope` and
     * `cPlaneData` are omitted (clause 6.4.7). EN 301 040 lists the service and
     * does not define its procedure. Invocation of interception does not change
     * the service (clause 5.1.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    adviceofCharge = 1,
    /**
     * TETRA supplementary service listed in annex E. Selected by
     * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
     * activity, `direction` is set as appropriate and both `scope` and
     * `cPlaneData` are omitted (clause 6.4.7). EN 301 040 lists the service and
     * does not define its procedure. Invocation of interception does not change
     * the service (clause 5.1.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    accessPriority = 2,
    /**
     * TETRA supplementary service listed in annex E. Selected by
     * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
     * activity, `direction` is set as appropriate and both `scope` and
     * `cPlaneData` are omitted (clause 6.4.7). EN 301 040 lists the service and
     * does not define its procedure. Invocation of interception does not change
     * the service (clause 5.1.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    areaSelection = 3,
    /**
     * TETRA supplementary service listed in annex E. Selected by
     * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
     * activity, `direction` is set as appropriate and both `scope` and
     * `cPlaneData` are omitted (clause 6.4.7). EN 301 040 lists the service and
     * does not define its procedure. Invocation of interception does not change
     * the service (clause 5.1.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    barringofIncomingCalls = 4,
    /**
     * TETRA supplementary service listed in annex E. Selected by
     * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
     * activity, `direction` is set as appropriate and both `scope` and
     * `cPlaneData` are omitted (clause 6.4.7). EN 301 040 lists the service and
     * does not define its procedure. Invocation of interception does not change
     * the service (clause 5.1.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    barringofOutgoingCalls = 5,
    /**
     * TETRA supplementary service listed in annex E. Selected by
     * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
     * activity, `direction` is set as appropriate and both `scope` and
     * `cPlaneData` are omitted (clause 6.4.7). EN 301 040 lists the service and
     * does not define its procedure. Invocation of interception does not change
     * the service (clause 5.1.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    callAuthorizedbyDispatcher = 6,
    /**
     * TETRA supplementary service listed in annex E. Selected by
     * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
     * activity, `direction` is set as appropriate and both `scope` and
     * `cPlaneData` are omitted (clause 6.4.7). EN 301 040 lists the service and
     * does not define its procedure. Invocation of interception does not change
     * the service (clause 5.1.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    callCompletiontoBusySubscriber = 7,
    /**
     * TETRA supplementary service listed in annex E. Selected by
     * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
     * activity, `direction` is set as appropriate and both `scope` and
     * `cPlaneData` are omitted (clause 6.4.7). EN 301 040 lists the service and
     * does not define its procedure. Invocation of interception does not change
     * the service (clause 5.1.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    callCompletiononNoReply = 8,
    /**
     * TETRA supplementary service listed in annex E. Selected by
     * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
     * activity, `direction` is set as appropriate and both `scope` and
     * `cPlaneData` are omitted (clause 6.4.7). EN 301 040 lists the service and
     * does not define its procedure. Invocation of interception does not change
     * the service (clause 5.1.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    callForwardingonBusy = 9,
    /**
     * TETRA supplementary service listed in annex E. Selected by
     * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
     * activity, `direction` is set as appropriate and both `scope` and
     * `cPlaneData` are omitted (clause 6.4.7). EN 301 040 lists the service and
     * does not define its procedure. Invocation of interception does not change
     * the service (clause 5.1.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    callForwardingonNoReply = 10,
    /**
     * TETRA supplementary service listed in annex E. Selected by
     * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
     * activity, `direction` is set as appropriate and both `scope` and
     * `cPlaneData` are omitted (clause 6.4.7). EN 301 040 lists the service and
     * does not define its procedure. Invocation of interception does not change
     * the service (clause 5.1.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    callForwardingonNotReachable = 11,
    /**
     * TETRA supplementary service listed in annex E. Selected by
     * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
     * activity, `direction` is set as appropriate and both `scope` and
     * `cPlaneData` are omitted (clause 6.4.7). EN 301 040 lists the service and
     * does not define its procedure. Invocation of interception does not change
     * the service (clause 5.1.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    callForwardingUnconditional = 12,
    /**
     * TETRA supplementary service listed in annex E. Selected by
     * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
     * activity, `direction` is set as appropriate and both `scope` and
     * `cPlaneData` are omitted (clause 6.4.7). EN 301 040 lists the service and
     * does not define its procedure. Invocation of interception does not change
     * the service (clause 5.1.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    callingLineIdentificationPresentation = 13,
    /**
     * TETRA supplementary service listed in annex E. Selected by
     * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
     * activity, `direction` is set as appropriate and both `scope` and
     * `cPlaneData` are omitted (clause 6.4.7). EN 301 040 lists the service and
     * does not define its procedure. Invocation of interception does not change
     * the service (clause 5.1.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    callingConnectedLineIdentificationRestriction = 14,
    /**
     * TETRA supplementary service listed in annex E. Selected by
     * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
     * activity, `direction` is set as appropriate and both `scope` and
     * `cPlaneData` are omitted (clause 6.4.7). EN 301 040 lists the service and
     * does not define its procedure. Invocation of interception does not change
     * the service (clause 5.1.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    connectedLineIdentificationPresentation = 15,
    /**
     * TETRA supplementary service listed in annex E. Selected by
     * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
     * activity, `direction` is set as appropriate and both `scope` and
     * `cPlaneData` are omitted (clause 6.4.7). EN 301 040 lists the service and
     * does not define its procedure. Invocation of interception does not change
     * the service (clause 5.1.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    callReport = 16,
    /**
     * TETRA supplementary service listed in annex E. Selected by
     * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
     * activity, `direction` is set as appropriate and both `scope` and
     * `cPlaneData` are omitted (clause 6.4.7). EN 301 040 lists the service and
     * does not define its procedure. Invocation of interception does not change
     * the service (clause 5.1.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    callRetention = 17,
    /**
     * TETRA supplementary service listed in annex E. Selected by
     * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
     * activity, `direction` is set as appropriate and both `scope` and
     * `cPlaneData` are omitted (clause 6.4.7). EN 301 040 lists the service and
     * does not define its procedure. Invocation of interception does not change
     * the service (clause 5.1.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    callWaiting = 18,
    /**
     * TETRA supplementary service listed in annex E. Selected by
     * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
     * activity, `direction` is set as appropriate and both `scope` and
     * `cPlaneData` are omitted (clause 6.4.7). EN 301 040 lists the service and
     * does not define its procedure. Invocation of interception does not change
     * the service (clause 5.1.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    dynamicGroupNumberAssignment = 19,
    /**
     * TETRA supplementary service listed in annex E. Selected by
     * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
     * activity, `direction` is set as appropriate and both `scope` and
     * `cPlaneData` are omitted (clause 6.4.7). EN 301 040 lists the service and
     * does not define its procedure. Invocation of interception does not change
     * the service (clause 5.1.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    discreetListening = 20,
    /**
     * TETRA supplementary service listed in annex E. Selected by
     * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
     * activity, `direction` is set as appropriate and both `scope` and
     * `cPlaneData` are omitted (clause 6.4.7). EN 301 040 lists the service and
     * does not define its procedure. Invocation of interception does not change
     * the service (clause 5.1.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    callHold = 21,
    /**
     * TETRA supplementary service listed in annex E. Selected by
     * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
     * activity, `direction` is set as appropriate and both `scope` and
     * `cPlaneData` are omitted (clause 6.4.7). EN 301 040 lists the service and
     * does not define its procedure. Invocation of interception does not change
     * the service (clause 5.1.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    includeCall = 22,
    /**
     * TETRA supplementary service listed in annex E. Selected by
     * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
     * activity, `direction` is set as appropriate and both `scope` and
     * `cPlaneData` are omitted (clause 6.4.7). EN 301 040 lists the service and
     * does not define its procedure. Invocation of interception does not change
     * the service (clause 5.1.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    lateEntry = 23,
    /**
     * TETRA supplementary service listed in annex E. Selected by
     * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
     * activity, `direction` is set as appropriate and both `scope` and
     * `cPlaneData` are omitted (clause 6.4.7). EN 301 040 lists the service and
     * does not define its procedure. Invocation of interception does not change
     * the service (clause 5.1.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    listSearchCall = 24,
    /**
     * TETRA supplementary service listed in annex E. Selected by
     * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
     * activity, `direction` is set as appropriate and both `scope` and
     * `cPlaneData` are omitted (clause 6.4.7). EN 301 040 lists the service and
     * does not define its procedure. Invocation of interception does not change
     * the service (clause 5.1.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    priorityCall = 25,
    /**
     * TETRA supplementary service listed in annex E. Selected by
     * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
     * activity, `direction` is set as appropriate and both `scope` and
     * `cPlaneData` are omitted (clause 6.4.7). EN 301 040 lists the service and
     * does not define its procedure. Invocation of interception does not change
     * the service (clause 5.1.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    preemptivePriorityCall = 26,
    /**
     * TETRA supplementary service listed in annex E. Selected by
     * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
     * activity, `direction` is set as appropriate and both `scope` and
     * `cPlaneData` are omitted (clause 6.4.7). EN 301 040 lists the service and
     * does not define its procedure. Invocation of interception does not change
     * the service (clause 5.1.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    shortNumberAddressing = 27,
    /**
     * TETRA supplementary service listed in annex E. Selected by
     * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
     * activity, `direction` is set as appropriate and both `scope` and
     * `cPlaneData` are omitted (clause 6.4.7). EN 301 040 lists the service and
     * does not define its procedure. Invocation of interception does not change
     * the service (clause 5.1.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    transferofControl = 28,
    /**
     * TETRA supplementary service listed in annex E. Selected by
     * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
     * activity, `direction` is set as appropriate and both `scope` and
     * `cPlaneData` are omitted (clause 6.4.7). EN 301 040 lists the service and
     * does not define its procedure. Invocation of interception does not change
     * the service (clause 5.1.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     */
    talkingPartyIdentification = 29,
}

/**
 * @summary SSType
 * @description
 * 
 * TETRA supplementary service invoked or modified by the target. Set in
 * `ActivityType.sStype` only when `cctivity` is `supplementaryService`.
 * Clause 6.4.7 then requires `direction` as appropriate, and requires `scope`
 * and `cPlaneData` to be omitted. Clause 5.1.3: invoking interception does not
 * alter the supplementary service. Clause 4.3.4 and clause 4.8 also mention an
 * advice of charge for the resources used to provide interception; this module
 * has no component for that charge. `adviceofCharge` is the
 * supplementary-service name in annex E.
 *
 * EN 301 040 lists these services and does not define their procedures.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7, annex E.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SSType  ::=  ENUMERATED {
 *     ambienceListening,
 *     adviceofCharge,
 *     accessPriority,
 *     areaSelection,
 *     barringofIncomingCalls,
 *     barringofOutgoingCalls,
 *     callAuthorizedbyDispatcher,
 *     callCompletiontoBusySubscriber,
 *     callCompletiononNoReply,
 *     callForwardingonBusy,
 *     callForwardingonNoReply,
 *     callForwardingonNotReachable,
 *     callForwardingUnconditional,
 *     callingLineIdentificationPresentation,
 *     callingConnectedLineIdentificationRestriction,
 *     connectedLineIdentificationPresentation,
 *     callReport,
 *     callRetention,
 *     callWaiting,
 *     dynamicGroupNumberAssignment,
 *     discreetListening,
 *     callHold,
 *     includeCall,
 *     lateEntry,
 *     listSearchCall,
 *     priorityCall,
 *     preemptivePriorityCall,
 *     shortNumberAddressing,
 *     transferofControl,
 *     talkingPartyIdentification
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SSType = _enum_for_SSType;

/**
 * @summary SSType
 * @description
 * 
 * TETRA supplementary service invoked or modified by the target. Set in
 * `ActivityType.sStype` only when `cctivity` is `supplementaryService`.
 * Clause 6.4.7 then requires `direction` as appropriate, and requires `scope`
 * and `cPlaneData` to be omitted. Clause 5.1.3: invoking interception does not
 * alter the supplementary service. Clause 4.3.4 and clause 4.8 also mention an
 * advice of charge for the resources used to provide interception; this module
 * has no component for that charge. `adviceofCharge` is the
 * supplementary-service name in annex E.
 *
 * EN 301 040 lists these services and does not define their procedures.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7, annex E.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SSType  ::=  ENUMERATED {
 *     ambienceListening,
 *     adviceofCharge,
 *     accessPriority,
 *     areaSelection,
 *     barringofIncomingCalls,
 *     barringofOutgoingCalls,
 *     callAuthorizedbyDispatcher,
 *     callCompletiontoBusySubscriber,
 *     callCompletiononNoReply,
 *     callForwardingonBusy,
 *     callForwardingonNoReply,
 *     callForwardingonNotReachable,
 *     callForwardingUnconditional,
 *     callingLineIdentificationPresentation,
 *     callingConnectedLineIdentificationRestriction,
 *     connectedLineIdentificationPresentation,
 *     callReport,
 *     callRetention,
 *     callWaiting,
 *     dynamicGroupNumberAssignment,
 *     discreetListening,
 *     callHold,
 *     includeCall,
 *     lateEntry,
 *     listSearchCall,
 *     priorityCall,
 *     preemptivePriorityCall,
 *     shortNumberAddressing,
 *     transferofControl,
 *     talkingPartyIdentification
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SSType = _enum_for_SSType;

/**
 * @summary SSType_ambienceListening
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SSType_ambienceListening = SSType.ambienceListening; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ambienceListening
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ambienceListening = SSType.ambienceListening; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_adviceofCharge
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SSType_adviceofCharge = SSType.adviceofCharge; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary adviceofCharge
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const adviceofCharge = SSType.adviceofCharge; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_accessPriority
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SSType_accessPriority = SSType.accessPriority; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary accessPriority
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const accessPriority = SSType.accessPriority; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_areaSelection
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SSType_areaSelection = SSType.areaSelection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary areaSelection
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const areaSelection = SSType.areaSelection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_barringofIncomingCalls
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SSType_barringofIncomingCalls = SSType.barringofIncomingCalls; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary barringofIncomingCalls
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const barringofIncomingCalls = SSType.barringofIncomingCalls; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_barringofOutgoingCalls
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SSType_barringofOutgoingCalls = SSType.barringofOutgoingCalls; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary barringofOutgoingCalls
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const barringofOutgoingCalls = SSType.barringofOutgoingCalls; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_callAuthorizedbyDispatcher
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SSType_callAuthorizedbyDispatcher = SSType.callAuthorizedbyDispatcher; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callAuthorizedbyDispatcher
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const callAuthorizedbyDispatcher = SSType.callAuthorizedbyDispatcher; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_callCompletiontoBusySubscriber
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SSType_callCompletiontoBusySubscriber = SSType.callCompletiontoBusySubscriber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callCompletiontoBusySubscriber
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const callCompletiontoBusySubscriber = SSType.callCompletiontoBusySubscriber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_callCompletiononNoReply
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SSType_callCompletiononNoReply = SSType.callCompletiononNoReply; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callCompletiononNoReply
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const callCompletiononNoReply = SSType.callCompletiononNoReply; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_callForwardingonBusy
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SSType_callForwardingonBusy = SSType.callForwardingonBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwardingonBusy
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const callForwardingonBusy = SSType.callForwardingonBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_callForwardingonNoReply
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SSType_callForwardingonNoReply = SSType.callForwardingonNoReply; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwardingonNoReply
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const callForwardingonNoReply = SSType.callForwardingonNoReply; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_callForwardingonNotReachable
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SSType_callForwardingonNotReachable = SSType.callForwardingonNotReachable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwardingonNotReachable
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const callForwardingonNotReachable = SSType.callForwardingonNotReachable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_callForwardingUnconditional
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SSType_callForwardingUnconditional = SSType.callForwardingUnconditional; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwardingUnconditional
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const callForwardingUnconditional = SSType.callForwardingUnconditional; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_callingLineIdentificationPresentation
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SSType_callingLineIdentificationPresentation = SSType.callingLineIdentificationPresentation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callingLineIdentificationPresentation
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const callingLineIdentificationPresentation = SSType.callingLineIdentificationPresentation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_callingConnectedLineIdentificationRestriction
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SSType_callingConnectedLineIdentificationRestriction = SSType.callingConnectedLineIdentificationRestriction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callingConnectedLineIdentificationRestriction
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const callingConnectedLineIdentificationRestriction = SSType.callingConnectedLineIdentificationRestriction; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_connectedLineIdentificationPresentation
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SSType_connectedLineIdentificationPresentation = SSType.connectedLineIdentificationPresentation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connectedLineIdentificationPresentation
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const connectedLineIdentificationPresentation = SSType.connectedLineIdentificationPresentation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_callReport
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SSType_callReport = SSType.callReport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callReport
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const callReport = SSType.callReport; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_callRetention
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SSType_callRetention = SSType.callRetention; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callRetention
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const callRetention = SSType.callRetention; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_callWaiting
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SSType_callWaiting = SSType.callWaiting; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callWaiting
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const callWaiting = SSType.callWaiting; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_dynamicGroupNumberAssignment
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SSType_dynamicGroupNumberAssignment = SSType.dynamicGroupNumberAssignment; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dynamicGroupNumberAssignment
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const dynamicGroupNumberAssignment = SSType.dynamicGroupNumberAssignment; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_discreetListening
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SSType_discreetListening = SSType.discreetListening; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary discreetListening
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const discreetListening = SSType.discreetListening; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_callHold
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SSType_callHold = SSType.callHold; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callHold
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const callHold = SSType.callHold; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_includeCall
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SSType_includeCall = SSType.includeCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary includeCall
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const includeCall = SSType.includeCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_lateEntry
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SSType_lateEntry = SSType.lateEntry; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lateEntry
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const lateEntry = SSType.lateEntry; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_listSearchCall
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SSType_listSearchCall = SSType.listSearchCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary listSearchCall
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const listSearchCall = SSType.listSearchCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_priorityCall
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SSType_priorityCall = SSType.priorityCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary priorityCall
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const priorityCall = SSType.priorityCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_preemptivePriorityCall
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SSType_preemptivePriorityCall = SSType.preemptivePriorityCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary preemptivePriorityCall
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const preemptivePriorityCall = SSType.preemptivePriorityCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_shortNumberAddressing
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SSType_shortNumberAddressing = SSType.shortNumberAddressing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary shortNumberAddressing
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const shortNumberAddressing = SSType.shortNumberAddressing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_transferofControl
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SSType_transferofControl = SSType.transferofControl; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transferofControl
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const transferofControl = SSType.transferofControl; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_talkingPartyIdentification
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const SSType_talkingPartyIdentification = SSType.talkingPartyIdentification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary talkingPartyIdentification
 * @description
 *
 * TETRA supplementary service listed in annex E. Selected by
 * `ActivityType.sStype` when `cctivity` is `supplementaryService`. For that
 * activity, `direction` is set as appropriate and both `scope` and `cPlaneData`
 * are omitted (clause 6.4.7). EN 301 040 lists the service and does not define
 * its procedure. Invocation of interception does not change the service
 * (clause 5.1.3).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * @constant
 * @type {number}
 */
export
const talkingPartyIdentification = SSType.talkingPartyIdentification; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SSType: $.ASN1Decoder<SSType> = $._decodeEnumerated;
export const _encode_SSType: $.ASN1Encoder<SSType> = $._encodeEnumerated;


/* eslint-enable */
