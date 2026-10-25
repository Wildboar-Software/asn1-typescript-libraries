/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceMode
 * @description
 *
 * Behaviour of a `ServiceType` when that service has more than one.
 *
 * Communication diversion: unconditional (`cFunCond`), busy
 * (`cFbusy`), no reply (`cFnoReply`), not logged-in
 * (`cFnotLogged`), deflection (`deflection`), or not reachable
 * (`notReach`). Clause 6.3.1.2 also lists communication forwarding
 * on user determined busy (CFUDB). This INTEGER has no named value
 * for CFUDB.
 *
 * Communication barring: incoming (`iCBarring`), outgoing
 * (`oCBarring`), or anonymous rejection (`aCRejection`).
 *
 * Explicit communication transfer: blind (`eCTBlind`) or
 * consultative (`eCTConsultative`). The assured-transfer scenario
 * has no separate value.
 *
 * Conference: three-party (`threePTY`).
 *
 * Advice of Charge: at set-up (`aoC_S`), during the communication
 * (`aoC_D`), or at the end (`aoC_E`).
 *
 * Values 1024 and above are reserved for network or manufacturer
 * variants.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.1.1 and 6.3.1.2.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.5.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceMode  ::=  INTEGER {
 *    cFunCond           ( 0 ),
 *    cFbusy             ( 1 ),
 *    cFnoReply          ( 2 ),
 *    cFnotLogged        ( 3 ),
 *    deflection         ( 4 ),
 *    notReach           ( 5 ),
 *    iCBarring          ( 6 ),
 *    oCBarring          ( 7 ),
 *    aCRejection        ( 8 ),
 *    eCTBlind           ( 9 ),
 *    eCTConsultative    ( 10 ),
 *    threePTY           ( 11 ),
 *    aoC-S              ( 12 ),
 *    aoC-D              ( 13 ),
 *    aoC-E              ( 14 )}
 * ```
 */
export
type ServiceMode = INTEGER;

/**
 * @summary ServiceMode_cFunCond
 * @description
 *
 * Communication Forwarding Unconditional (CFU) for CDIV. The
 * diverting user's AS diverts the communication without first
 * alerting that user. Charging Data Request [Start] is sent when
 * the diverted-to user answers. Online charging sends Reserve
 * Units [Initial] when CFU is detected, before the diverted
 * INVITE, and discards announcements toward the served party.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.1.1.7, 5.2.2.1.7 and 5.3.2.1.1.
 *
 * @constant
 * @type {number}
 */
export
const ServiceMode_cFunCond: 0 = 0 satisfies ServiceMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cFunCond
 * @description
 *
 * Communication Forwarding Unconditional (CFU). See
 * {@link ServiceMode_cFunCond}.
 *
 * @constant
 * @type {number}
 */
export
const cFunCond: 0 = ServiceMode_cFunCond; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_cFbusy
 * @description
 *
 * Communication Forwarding Busy (CFB) for CDIV. The same charging
 * point as the other diversion modes: Charging Data Request
 * [Start] when the diverted-to user answers. The no-reply flow is
 * the template for CFU, deflection, CFB and not-logged-in.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.1.1.7 and 5.2.2.1.7.1.
 *
 * @constant
 * @type {number}
 */
export
const ServiceMode_cFbusy: 1 = 1 satisfies ServiceMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cFbusy
 * @description
 *
 * Communication Forwarding Busy (CFB). See
 * {@link ServiceMode_cFbusy}.
 *
 * @constant
 * @type {number}
 */
export
const cFbusy: 1 = ServiceMode_cFbusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_cFnoReply
 * @description
 *
 * Communication Forwarding No Reply (CFNR) for CDIV. After 180
 * Ringing the AS starts a non-reply timer. On expiry it releases
 * the diverting user and forwards the communication. Charging
 * Data Request [Start] or [Event] is sent on the final response
 * from the diverted-to user, with this mode and the diverting
 * user as the associated party. [Stop] closes the CDR on release.
 *
 * 3GPP TS 32.275 V19.0.0 clause 5.2.2.1.7.
 *
 * @constant
 * @type {number}
 */
export
const ServiceMode_cFnoReply: 2 = 2 satisfies ServiceMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cFnoReply
 * @description
 *
 * Communication Forwarding No Reply (CFNR). See
 * {@link ServiceMode_cFnoReply}.
 *
 * @constant
 * @type {number}
 */
export
const cFnoReply: 2 = ServiceMode_cFnoReply; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_cFnotLogged
 * @description
 *
 * Communication Forwarding on Not Logged-in (CFNL) for CDIV.
 * Charging Data Request [Start] is sent when the diverted-to user
 * answers, as for the other call-forwarding modes.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.1.1.7 and 5.2.2.1.7.1.
 *
 * @constant
 * @type {number}
 */
export
const ServiceMode_cFnotLogged: 3 = 3 satisfies ServiceMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary cFnotLogged
 * @description
 *
 * Communication Forwarding on Not Logged-in (CFNL). See
 * {@link ServiceMode_cFnotLogged}.
 *
 * @constant
 * @type {number}
 */
export
const cFnotLogged: 3 = ServiceMode_cFnotLogged; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_deflection
 * @description
 *
 * Communication Deflection (CD) for CDIV. The diverting user
 * deflects an incoming communication. Charging Data Request
 * [Start] is sent when the diverted-to user answers, as for the
 * other call-forwarding modes.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.1.1.7 and 5.2.2.1.7.1.
 *
 * @constant
 * @type {number}
 */
export
const ServiceMode_deflection: 4 = 4 satisfies ServiceMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary deflection
 * @description
 *
 * Communication Deflection (CD). See {@link ServiceMode_deflection}.
 *
 * @constant
 * @type {number}
 */
export
const deflection: 4 = ServiceMode_deflection; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_notReach
 * @description
 *
 * Communication Forwarding on Subscriber Not Reachable (CFNRc)
 * for CDIV. Clause 6.3.1.2 lists CFNRc among the CDIV modes.
 * TS 32.275 does not give CFNRc its own message flow; the no-reply
 * flow is the stated basis for the other forwarding modes.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.1.1.7 and 6.3.1.2.
 *
 * @constant
 * @type {number}
 */
export
const ServiceMode_notReach: 5 = 5 satisfies ServiceMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary notReach
 * @description
 *
 * Communication Forwarding on Subscriber Not Reachable (CFNRc).
 * See {@link ServiceMode_notReach}.
 *
 * @constant
 * @type {number}
 */
export
const notReach: 5 = ServiceMode_notReach; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_iCBarring
 * @description
 *
 * Incoming Communications Barring (ICB). Rejects incoming
 * communications that meet provisioned or configured conditions,
 * on behalf of the terminating user. CB is reported with Charging
 * Data Request [Event] only.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.1.1.6 and 6.3.1.3.
 *
 * @constant
 * @type {number}
 */
export
const ServiceMode_iCBarring: 6 = 6 satisfies ServiceMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary iCBarring
 * @description
 *
 * Incoming Communications Barring (ICB). See
 * {@link ServiceMode_iCBarring}.
 *
 * @constant
 * @type {number}
 */
export
const iCBarring: 6 = ServiceMode_iCBarring; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_oCBarring
 * @description
 *
 * Outgoing Communication Barring (OCB). Rejects outgoing
 * communications that meet provisioned or configured conditions,
 * on behalf of the originating user. CB is reported with Charging
 * Data Request [Event] only. Clauses 6.3.1.2 and 6.4.2.2 write
 * the third CB mode as "OC, B" and "OC, or B". Clause 5.1.1.6
 * and the abbreviation OCB identify that mode as outgoing
 * communication barring, which is this value.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.1.1.6, 6.3.1.2 and 6.4.2.2.
 *
 * @constant
 * @type {number}
 */
export
const ServiceMode_oCBarring: 7 = 7 satisfies ServiceMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary oCBarring
 * @description
 *
 * Outgoing Communication Barring (OCB). See
 * {@link ServiceMode_oCBarring}.
 *
 * @constant
 * @type {number}
 */
export
const oCBarring: 7 = ServiceMode_oCBarring; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_aCRejection
 * @description
 *
 * Anonymous Communication Rejection (ACR). A particular case of
 * incoming barring that rejects communications from an anonymous
 * originator, on behalf of the terminating user. CB is reported
 * with Charging Data Request [Event] only.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.1.1.6 and 6.3.1.2.
 *
 * @constant
 * @type {number}
 */
export
const ServiceMode_aCRejection: 8 = 8 satisfies ServiceMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary aCRejection
 * @description
 *
 * Anonymous Communication Rejection (ACR). See
 * {@link ServiceMode_aCRejection}.
 *
 * @constant
 * @type {number}
 */
export
const aCRejection: 8 = ServiceMode_aCRejection; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_eCTBlind
 * @description
 *
 * Blind explicit communication transfer. The transferor sends
 * REFER without first establishing a communication to the
 * transfer target. Charging Data Request [Start] is sent, for
 * both the transferor and the transferee, on the final response
 * to the INVITE toward the target. Online charging sends Reserve
 * Units [Initial] on that REFER.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.2.2.1.9.1 and 5.3.2.1.5.1.
 *
 * @constant
 * @type {number}
 */
export
const ServiceMode_eCTBlind: 9 = 9 satisfies ServiceMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary eCTBlind
 * @description
 *
 * Blind explicit communication transfer. See
 * {@link ServiceMode_eCTBlind}.
 *
 * @constant
 * @type {number}
 */
export
const eCTBlind: 9 = ServiceMode_eCTBlind; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_eCTConsultative
 * @description
 *
 * Consultative explicit communication transfer. After holding the
 * transferee, the transferor establishes a communication to the
 * target, holds the target, then sends REFER. Charging Data
 * Request [Start] is sent at the same steps as blind transfer:
 * on the final response to the INVITE toward the target, for both
 * the transferor and the transferee. Online charging uses the
 * same Reserve Units steps as blind transfer.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.2.2.1.9.1 and 5.3.2.1.5.1.
 *
 * @constant
 * @type {number}
 */
export
const ServiceMode_eCTConsultative: 10 = 10 satisfies ServiceMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary eCTConsultative
 * @description
 *
 * Consultative explicit communication transfer. See
 * {@link ServiceMode_eCTConsultative}.
 *
 * @constant
 * @type {number}
 */
export
const eCTConsultative: 10 = ServiceMode_eCTConsultative; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_threePTY
 * @description
 *
 * Three-party (3PTY), a CONF mode. The initiator holds one party,
 * calls a third party, then has the CONF AS join both into one
 * session. `associated_Party_Address` is the initiator. Offline
 * charging sends [Start], [Interim] or [Event] when the 3PTY is
 * established, and [Stop] or [Event] on release. Online charging
 * sends Reserve Units [Initial] for CONF (3PTY). Event charging
 * with unit reservation then sends [Terminate] once creation
 * succeeds. Session charging continues with [Update].
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.2.2.1.11.5, 5.3.2.1.4.6 and
 * 6.3.1.2.
 *
 * @constant
 * @type {number}
 */
export
const ServiceMode_threePTY: 11 = 11 satisfies ServiceMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary threePTY
 * @description
 *
 * Three-party (3PTY). See {@link ServiceMode_threePTY}.
 *
 * @constant
 * @type {number}
 */
export
const threePTY: 11 = ServiceMode_threePTY; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_aoC_S
 * @description
 *
 * Advice of Charge at communication set-up time (AoC-S). The
 * information flows between the AoC AS and the CDF are specified
 * in TS 32.280. `aoCInformation` may contain more than one report.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.1.1.21 and 6.3.1.2.
 *
 * @constant
 * @type {number}
 */
export
const ServiceMode_aoC_S: 12 = 12 satisfies ServiceMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary aoC_S
 * @description
 *
 * Advice of Charge at communication set-up time (AoC-S). See
 * {@link ServiceMode_aoC_S}.
 *
 * @constant
 * @type {number}
 */
export
const aoC_S: 12 = ServiceMode_aoC_S; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_aoC_D
 * @description
 *
 * Advice of Charge during the communication (AoC-D). The
 * information flows between the AoC AS and the CDF are specified
 * in TS 32.280.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.1.1.21 and 6.3.1.2.
 *
 * @constant
 * @type {number}
 */
export
const ServiceMode_aoC_D: 13 = 13 satisfies ServiceMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary aoC_D
 * @description
 *
 * Advice of Charge during the communication (AoC-D). See
 * {@link ServiceMode_aoC_D}.
 *
 * @constant
 * @type {number}
 */
export
const aoC_D: 13 = ServiceMode_aoC_D; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_aoC_E
 * @description
 *
 * Advice of Charge at the end of the communication (AoC-E). The
 * information flows between the AoC AS and the CDF are specified
 * in TS 32.280.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.1.1.21 and 6.3.1.2.
 *
 * @constant
 * @type {number}
 */
export
const ServiceMode_aoC_E: 14 = 14 satisfies ServiceMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary aoC_E
 * @description
 *
 * Advice of Charge at the end of the communication (AoC-E). See
 * {@link ServiceMode_aoC_E}.
 *
 * @constant
 * @type {number}
 */
export
const aoC_E: 14 = ServiceMode_aoC_E; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_ServiceMode: $.ASN1Decoder<ServiceMode> = $._decodeInteger;

export
const _encode_ServiceMode: $.ASN1Encoder<ServiceMode> = $._encodeInteger;

/* eslint-enable */
