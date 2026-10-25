/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceType
 * @description
 *
 * Which MMTel supplementary service a `SupplService` records.
 * Charging is performed at the MMTel AS and extends IMS charging
 * in TS 32.260. Services handled by the same AS may share one
 * Charging Data Request. User management of a subscription
 * (provision, registration, activation, interrogation) is out of
 * scope.
 *
 * Offline charging applies to every value below. Online charging
 * on Ro is specified only for CONF, CDIV, ECT, flexible alerting
 * and CUG; clause 6.3.1.4 notes that the others are reported in
 * offline charging only. Converged charging follows the offline
 * set except AoC, which table 5.0.1 does not mark. Reverse
 * charging is named in the scope, but clause 5.1.1.20 leaves its
 * stage 3 for further study and this INTEGER has no value for it.
 *
 * Rf operation types in table 6.3.1.3.1 are Start, Interim, Stop
 * and Event. Ro operation types in table 6.3.1.4.1 are Initial,
 * Update, Terminate and Event. Values 1024 and above are reserved
 * for network or manufacturer variants.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.0, 5.1.1, 6.3.1.2 and 6.3.1.3.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.5.6.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceType  ::=  INTEGER {
 *    oIPresentation      ( 0 ),
 *    oIRestriction       ( 1 ),
 *    tIPresentation      ( 2 ),
 *    tIRestriction       ( 3 ),
 *    hOLD                ( 4 ),
 *    cBarring            ( 5 ),
 *    cDIVersion          ( 6 ),
 *    cWaiting            ( 8 ),
 *    mWaitingIndic       ( 9 ),
 *    cONF                ( 10 ),
 *    fLexibleAlerting    ( 11 ),
 *    cCBS                ( 12 ),
 *    cCNR                ( 13 ),
 *    mCID                ( 14 ),
 *    cAT                 ( 15 ),
 *    cUG                 ( 16 ),
 *    pNM                 ( 17 ),
 *    cRS                 ( 18 ),
 *    aoC                 ( 19 ),
 *    eCT                 ( 20 )}
 * ```
 */
export
type ServiceType = INTEGER;

/**
 * @summary ServiceType_oIPresentation
 * @description
 *
 * Originating Identification Presentation (OIP). The terminating
 * user receives a trusted, network-provided identity of the
 * originating user. Reported only at the terminating side.
 * Offline Rf supports Start, Interim, Stop and Event. Not
 * reported on Ro. Converged charging applies; the default trigger
 * is Invite OK, reported immediately.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.1.1.1 and 6.3.1.3.
 *
 * @constant
 * @type {number}
 */
export
const ServiceType_oIPresentation: 0 = 0 satisfies ServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary oIPresentation
 * @description
 *
 * Originating Identification Presentation (OIP). See
 * {@link ServiceType_oIPresentation}.
 *
 * @constant
 * @type {number}
 */
export
const oIPresentation: 0 = ServiceType_oIPresentation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_oIRestriction
 * @description
 *
 * Originating Identification Restriction (OIR). Offered to the
 * originating user. It restricts presentation of that user's
 * identity to the terminating user. Offline Rf supports Start,
 * Interim, Stop and Event. Not reported on Ro. Converged
 * charging applies; the default trigger is Invite OK, reported
 * immediately.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.1.1.2 and 6.3.1.3.
 *
 * @constant
 * @type {number}
 */
export
const ServiceType_oIRestriction: 1 = 1 satisfies ServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary oIRestriction
 * @description
 *
 * Originating Identification Restriction (OIR). See
 * {@link ServiceType_oIRestriction}.
 *
 * @constant
 * @type {number}
 */
export
const oIRestriction: 1 = ServiceType_oIRestriction; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_tIPresentation
 * @description
 *
 * Terminating Identification Presentation (TIP). The originating
 * party receives trusted information identifying the terminating
 * party. Offline Rf supports Start, Interim, Stop and Event. Not
 * reported on Ro. Converged charging applies; the default trigger
 * is Invite OK, reported immediately.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.1.1.3 and 6.3.1.3.
 *
 * @constant
 * @type {number}
 */
export
const ServiceType_tIPresentation: 2 = 2 satisfies ServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary tIPresentation
 * @description
 *
 * Terminating Identification Presentation (TIP). See
 * {@link ServiceType_tIPresentation}.
 *
 * @constant
 * @type {number}
 */
export
const tIPresentation: 2 = ServiceType_tIPresentation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_tIRestriction
 * @description
 *
 * Terminating Identification Restriction (TIR). Offered to the
 * terminating party, so that party can prevent presentation of
 * the terminating identity to the originating party. Table
 * 6.3.1.3.1 marks it as a terminating-side service. Offline Rf
 * supports Start, Interim, Stop and Event. Not reported on Ro.
 * Converged charging applies; the default trigger is Invite OK,
 * reported immediately.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.1.1.4 and 6.3.1.3.
 *
 * @constant
 * @type {number}
 */
export
const ServiceType_tIRestriction: 3 = 3 satisfies ServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary tIRestriction
 * @description
 *
 * Terminating Identification Restriction (TIR). See
 * {@link ServiceType_tIRestriction}.
 *
 * @constant
 * @type {number}
 */
export
const tIRestriction: 3 = ServiceType_tIRestriction; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_hOLD
 * @description
 *
 * Communication Hold (HOLD). A user suspends the media streams of
 * an established IP multimedia session and resumes them later.
 * Either the calling party or the called party may be charged.
 * The AS takes part only when an announcement is required; a
 * re-INVITE can also trigger charging. Offline Rf supports Start,
 * Interim, Stop and Event. Not reported on Ro. Converged charging
 * applies; the default trigger is Update OK, reported immediately.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.1.1.5 and 5.2.2.1.5.
 *
 * @constant
 * @type {number}
 */
export
const ServiceType_hOLD: 4 = 4 satisfies ServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary hOLD
 * @description
 *
 * Communication Hold (HOLD). See {@link ServiceType_hOLD}.
 *
 * @constant
 * @type {number}
 */
export
const hOLD: 4 = ServiceType_hOLD; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_cBarring
 * @description
 *
 * Communication Barring (CB). Incoming barring (ICB) rejects
 * incoming communications that meet provisioned or configured
 * conditions, on behalf of the terminating user. Anonymous
 * Communication Rejection is the ICB case that bars an anonymous
 * originator. Outgoing barring (OCB) rejects outgoing
 * communications on behalf of the originating user. `serviceMode`
 * distinguishes the three. Table 6.3.1.3.1 marks CB as a
 * terminating-side service and supports only Charging Data
 * Request [Event] on Rf. Not reported on Ro. Converged charging
 * applies; the default trigger is Invite, reported immediately.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.1.1.6 and 6.3.1.3.
 *
 * @constant
 * @type {number}
 */
export
const ServiceType_cBarring: 5 = 5 satisfies ServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cBarring
 * @description
 *
 * Communication Barring (CB). See {@link ServiceType_cBarring}.
 *
 * @constant
 * @type {number}
 */
export
const cBarring: 5 = ServiceType_cBarring; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_cDIVersion
 * @description
 *
 * Communication Diversion (CDIV). The diverting user diverts
 * communications addressed to them. The diverting user's MMTel AS
 * charges that user for the forwarded leg, in its own charging
 * dialogue. The originating user and the diverted-to user are
 * charged as in TS 32.260. A further diversion charges the new
 * diverting user for the new leg. `serviceMode` selects the
 * forwarding condition, `numberOfDiversions` counts every
 * diversion type, and `associated_Party_Address` is the
 * forwarding party.
 *
 * Offline: Charging Data Request [Start] when the diverted-to
 * user answers (the no-reply flow also allows [Event]), and
 * [Stop] on release. Rf supports Start, Interim, Stop and Event.
 * Online: Reserve Units [Initial] before the diverted INVITE,
 * [Update] on answer, [Terminate] on release. There is no Event
 * operation. Announcements from the OCS toward the served party
 * are discarded because of CDIV. Converged charging applies.
 * Default triggers are Invite (OK), Answer and Bye, all immediate.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.1.1.7, 5.2.2.1.7 and 5.3.2.1.1.
 *
 * @constant
 * @type {number}
 */
export
const ServiceType_cDIVersion: 6 = 6 satisfies ServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cDIVersion
 * @description
 *
 * Communication Diversion (CDIV). See
 * {@link ServiceType_cDIVersion}.
 *
 * @constant
 * @type {number}
 */
export
const cDIVersion: 6 = ServiceType_cDIVersion; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_cWaiting
 * @description
 *
 * Communication Waiting (CW). The AS tells the subscriber that
 * another communication is requested and that no resources are
 * free. The user may accept, reject or ignore it. How many
 * communications may wait is a service-provider option; a further
 * attempt is rejected with a busy cause once that maximum is
 * reached. Offline charging sends Charging Data Request [Start]
 * or [Event] when the callee returns 200 OK, and the AS CDR
 * carries the CW indication. Rf supports Start, Interim, Stop and
 * Event. Not reported on Ro. Converged charging applies; the
 * default trigger is Invite OK, reported immediately.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.1.1.8 and 5.2.2.1.8.
 *
 * @constant
 * @type {number}
 */
export
const ServiceType_cWaiting: 8 = 8 satisfies ServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cWaiting
 * @description
 *
 * Communication Waiting (CW). See {@link ServiceType_cWaiting}.
 *
 * @constant
 * @type {number}
 */
export
const cWaiting: 8 = ServiceType_cWaiting; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_mWaitingIndic
 * @description
 *
 * Message Waiting Indication (MWI). The AS tells the subscriber
 * that at least one message is waiting. The indication is
 * delivered after a successful subscription. Offline charging
 * sends Charging Data Request [Event] after the subscriber
 * acknowledges the SIP NOTIFY, and Rf supports Event only. Not
 * reported on Ro. Converged charging applies; the default trigger
 * is Notify, reported immediately.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.1.1.10 and 5.2.2.1.10.
 *
 * @constant
 * @type {number}
 */
export
const ServiceType_mWaitingIndic: 9 = 9 satisfies ServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary mWaitingIndic
 * @description
 *
 * Message Waiting Indication (MWI). See
 * {@link ServiceType_mWaitingIndic}.
 *
 * @constant
 * @type {number}
 */
export
const mWaitingIndic: 9 = ServiceType_mWaitingIndic; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_cONF
 * @description
 *
 * Conference (CONF). A user participates in and controls a
 * communication with a number of users. Owner charging may use
 * establishment, the number of participants, or duration.
 * Participant charging may use duration. The SIP AS and the MRFC
 * measure the conference, and each call leg has its own charging
 * dialogue at the SIP AS. `participantActionType` records create,
 * join, invite or quit. `changeTime` timestamps that action.
 * `serviceId` holds the conference ID. `serviceMode` `threePTY`
 * is the three-party case, whose associated party is the
 * initiator.
 *
 * Offline Rf supports Start, Interim, Stop and Event. Creation
 * uses [Start] or [Event]. Join, invite and leave use [Interim]
 * or [Event]. The last participant leaving uses [Stop] or
 * [Event]. Online supports Initial, Update, Terminate and Event.
 * Event charging with unit reservation charges creation with
 * [Initial] then [Terminate] on success. Session charging keeps
 * credit-control open and sends [Update] when conference
 * parameters, including the participant count, change. Three-party
 * uses the same split. Converged charging applies. Default
 * triggers, all immediate, are Invite, Created, User joining,
 * User leaving and Bye.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.1.1.11, 5.2.2.1.11 and
 * 5.3.2.1.4.
 *
 * @constant
 * @type {number}
 */
export
const ServiceType_cONF: 10 = 10 satisfies ServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cONF
 * @description
 *
 * Conference (CONF). See {@link ServiceType_cONF}.
 *
 * @constant
 * @type {number}
 */
export
const cONF: 10 = ServiceType_cONF; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_fLexibleAlerting
 * @description
 *
 * Flexible Alerting (FA). A call to a Pilot Identity branches to
 * several legs that alert the group members at once. The first
 * leg answered is connected and the others are abandoned.
 * `associated_Party_Address` holds the Pilot Identity.
 *
 * Offline: Charging Data Request [Start] when one member answers,
 * and [Stop] on release. Rf supports Start, Interim, Stop and
 * Event. Online supports Initial, Update and Terminate, not
 * Event. A separate credit-control session, with its own IMS
 * Charging Identifier, is opened for each alerted member; when
 * one answers, the other legs are cancelled and an [Update]
 * continues the answered leg. Converged charging applies. Default
 * triggers, all immediate, are Invite, Answer/Cancel and Bye.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.1.1.14, 5.2.2.1.14 and
 * 5.3.2.1.2.
 *
 * @constant
 * @type {number}
 */
export
const ServiceType_fLexibleAlerting: 11 = 11 satisfies ServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary fLexibleAlerting
 * @description
 *
 * Flexible Alerting (FA). See {@link ServiceType_fLexibleAlerting}.
 *
 * @constant
 * @type {number}
 */
export
const fLexibleAlerting: 11 = ServiceType_fLexibleAlerting; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_cCBS
 * @description
 *
 * Completion of Communications to Busy Subscriber (CCBS). User A,
 * having reached a busy destination B, asks the network to
 * complete the communication when B becomes free, without a new
 * manual attempt. The originating AS sends Charging Data Request
 * [Event] when it is notified that CCBS has been activated. Rf
 * supports Start, Interim, Stop and Event. Not reported on Ro.
 * Converged charging applies; the default trigger is Notify,
 * reported immediately.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.1.1.12 and 5.2.2.1.12.
 *
 * @constant
 * @type {number}
 */
export
const ServiceType_cCBS: 12 = 12 satisfies ServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cCBS
 * @description
 *
 * Completion of Communications to Busy Subscriber (CCBS). See
 * {@link ServiceType_cCBS}.
 *
 * @constant
 * @type {number}
 */
export
const cCBS: 12 = ServiceType_cCBS; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_cCNR
 * @description
 *
 * Completion of Communications on No Reply (CCNR). User A, having
 * received no reply from B, asks the network to complete the
 * communication when B becomes free after B has initiated and
 * completed a new communication. The originating AS sends
 * Charging Data Request [Event] when CCNR activation is notified.
 * Rf supports Start, Interim, Stop and Event. Not reported on Ro.
 * Converged charging applies; the default trigger is Notify,
 * reported immediately.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.1.1.13 and 5.2.2.1.13.
 *
 * @constant
 * @type {number}
 */
export
const ServiceType_cCNR: 13 = 13 satisfies ServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cCNR
 * @description
 *
 * Completion of Communications on No Reply (CCNR). See
 * {@link ServiceType_cCNR}.
 *
 * @constant
 * @type {number}
 */
export
const cCNR: 13 = ServiceType_cCNR; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_mCID
 * @description
 *
 * Malicious Communication Identification (MCID). An incoming
 * communication is identified as malicious and registered. The
 * network records the related information, including the
 * terminating and originating identities and the local time, and
 * keeps it under operator control: it is not available to either
 * party. Permanent mode applies to every incoming communication.
 * Temporary mode applies only to communications the served user
 * declares. The user may invoke it during the active phase, or
 * after the active phase for a limited period, but not after the
 * communication has terminated. It may also be invoked
 * automatically during alerting.
 *
 * Permanent mode sends an Accounting-Request [Event] as the data
 * are registered, before the INVITE is forwarded. Temporary mode
 * stores the data, then sends Charging Data Request [Event] or
 * [Interim] when the served user's re-INVITE requests MCID. Rf
 * supports Start, Interim, Stop and Event. Not reported on Ro.
 * Converged charging applies; the default trigger is Store,
 * reported immediately.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.1.1.15 and 5.2.2.1.15.
 *
 * @constant
 * @type {number}
 */
export
const ServiceType_mCID: 14 = 14 satisfies ServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary mCID
 * @description
 *
 * Malicious Communication Identification (MCID). See
 * {@link ServiceType_mCID}.
 *
 * @constant
 * @type {number}
 */
export
const mCID: 14 = ServiceType_mCID; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_cAT
 * @description
 *
 * Customized Alerting Tone (CAT). An operator-specific service
 * with which the subscriber customizes the alerting tone played
 * to the calling party. Forking, early-session and gateway
 * delivery share one charging rule: Charging Data Request [Start]
 * records the start of tone playing and [Stop] records the end.
 * The establishment flow sends [Start] or [Event] when the called
 * party answers and CAT media stops. Rf supports Start, Interim,
 * Stop and Event. Not reported on Ro. Converged charging applies;
 * the default trigger is Stop, reported immediately.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.1.1.16 and 5.2.2.1.16.
 *
 * @constant
 * @type {number}
 */
export
const ServiceType_cAT: 15 = 15 satisfies ServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cAT
 * @description
 *
 * Customized Alerting Tone (CAT). See {@link ServiceType_cAT}.
 *
 * @constant
 * @type {number}
 */
export
const cAT: 15 = ServiceType_cAT; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_cUG
 * @description
 *
 * Closed User Group (CUG). Members of a group generally
 * communicate only inside it. Particular members may be allowed
 * to call out or to accept calls from outside, or may be barred
 * from other members of the same group. A user may belong to more
 * than one group. `cUGInformation` carries the CUG interlock code
 * when the AS allows the communication as a CUG communication.
 * If the checks result in non-CUG behaviour, the code is omitted
 * and non-CUG charging applies.
 *
 * Offline: Charging Data Request [Start] or [Event] on 200 OK,
 * for both the originating and the terminating CUG member. Rf
 * supports Start, Interim, Stop and Event. Online supports
 * Initial, Update and Terminate, not Event: [Initial] after the
 * AS allows the CUG communication, and [Update] on answer.
 * Converged charging applies. Default triggers, all immediate,
 * are Invite, Answer and Bye.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.1.1.17, 5.2.2.1.17 and
 * 5.3.2.1.3.
 *
 * @constant
 * @type {number}
 */
export
const ServiceType_cUG: 16 = 16 satisfies ServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cUG
 * @description
 *
 * Closed User Group (CUG). See {@link ServiceType_cUG}.
 *
 * @constant
 * @type {number}
 */
export
const cUG: 16 = ServiceType_cUG; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_pNM
 * @description
 *
 * Personal Network Management (PNM). The user manages terminating
 * services across UEs according to preferences, capabilities and
 * availability. Charging covers PN UE redirection and applies to
 * the active UE to which the terminating services are delivered.
 * Offline charging sends Charging Data Request [Start] when the
 * redirected UE answers. Rf supports Start, Interim, Stop and
 * Event. Not reported on Ro. Converged charging applies. Default
 * triggers, all immediate, are Invite, Answer and Bye.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.1.1.18 and 5.2.2.1.18.
 *
 * @constant
 * @type {number}
 */
export
const ServiceType_pNM: 17 = 17 satisfies ServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary pNM
 * @description
 *
 * Personal Network Management (PNM). See {@link ServiceType_pNM}.
 *
 * @constant
 * @type {number}
 */
export
const pNM: 17 = ServiceType_pNM; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_cRS
 * @description
 *
 * Customized Ringing Signal (CRS). An operator-specific service
 * with which the subscriber customizes the ringing signal played
 * to the called party. Charging Data Request [Start] or [Event]
 * records CRS delivery. In the worked flow that request is sent
 * when the called party answers and CRS media stops. Rf supports
 * Start, Interim, Stop and Event. Not reported on Ro. Converged
 * charging applies; the default trigger is Stop, reported
 * immediately.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.1.1.19 and 5.2.2.1.19.
 *
 * @constant
 * @type {number}
 */
export
const ServiceType_cRS: 18 = 18 satisfies ServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cRS
 * @description
 *
 * Customized Ringing Signal (CRS). See {@link ServiceType_cRS}.
 *
 * @constant
 * @type {number}
 */
export
const cRS: 18 = ServiceType_cRS; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_aoC
 * @description
 *
 * Advice of Charge (AoC). The served user is given MMTel charging
 * information at set-up (AoC-S), during the communication (AoC-D),
 * or at the end (AoC-E). Those three cases are `serviceMode`
 * values. `aoCInformation` carries what is conveyed to the CDF,
 * as defined in TS 32.280, and may occur more than once. The
 * information flows are in TS 32.280. Rf supports Start, Interim,
 * Stop and Event. Not reported on Ro. Table 5.0.1 does not mark
 * converged charging for AoC.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.1.1.21 and 6.3.1.2.
 *
 * @constant
 * @type {number}
 */
export
const ServiceType_aoC: 19 = 19 satisfies ServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary aoC
 * @description
 *
 * Advice of Charge (AoC). See {@link ServiceType_aoC}.
 *
 * @constant
 * @type {number}
 */
export
const aoC: 19 = ServiceType_aoC; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_eCT
 * @description
 *
 * Explicit Communication Transfer (ECT). The transferor transfers
 * an active communication to a transfer target. The transferee
 * stays in the communication. The transferor's ECT AS charges the
 * transferor, and the transferee's ECT AS charges the transferee.
 * `associated_Party_Address` is the transferor. `serviceMode` is
 * blind or consultative transfer.
 *
 * Offline: [Stop] ends the original dialogue when the transferor
 * sends BYE. On the final response from the transfer target, each
 * AS sends [Start]. The transferor's record is transfer execution.
 * The transferee's record includes whether the transferee had been
 * in an originating or a terminating call. Consultative transfer
 * differs only in establishment: the transferor calls the target
 * and holds them before REFER. The [Start] steps are the same.
 * Assured transfer may also send [Event] when the termination
 * NOTIFY goes out, and [Interim] when a re-INVITE retrieves the
 * original communication. Release sends [Stop] from both ASs.
 * Rf supports Start, Interim, Stop and Event.
 *
 * Online supports Initial, Update and Terminate, not Event.
 * [Initial] is sent on the REFER, [Update] as the new session and
 * the transfer proceed, and [Terminate] on release. Announcements
 * toward the transferor are discarded. An announcement toward the
 * transferee is discarded on the initial response; an update may
 * still carry one. Blind transfer with third-party call control
 * is charged only on the transferor's AS. Converged charging
 * applies. Default triggers, all immediate, are Refer, Invite,
 * Answer and Release.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.1.1.9, 5.2.2.1.9 and 5.3.2.1.5.
 *
 * @constant
 * @type {number}
 */
export
const ServiceType_eCT: 20 = 20 satisfies ServiceType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary eCT
 * @description
 *
 * Explicit Communication Transfer (ECT). See
 * {@link ServiceType_eCT}.
 *
 * @constant
 * @type {number}
 */
export
const eCT: 20 = ServiceType_eCT; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_ServiceType: $.ASN1Decoder<ServiceType> = $._decodeInteger;

export
const _encode_ServiceType: $.ASN1Encoder<ServiceType> = $._encodeInteger;

/* eslint-enable */
