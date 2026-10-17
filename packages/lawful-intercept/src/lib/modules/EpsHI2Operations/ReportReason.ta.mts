/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_ReportReason {
    timerExpired = 0,
    countThresholdHit = 1,
    pDPComtextDeactivated = 2,
    pDPContextModification = 3,
    otherOrUnknown = 4,
}

/**
 * @summary ReportReason
 * @description
 * 
 * Why a packet-flow summary is delivered. Mandatory in table 10.5.1.1.16. That
 * table's examples are timeout, count limit, and end of session. Table 6.9C
 * gives the same examples for a PDP context (clause 6.5.1.0). The named values
 * also include PDP-context deactivation, PDP-context modification, and other or
 * unknown; see each value for what the tables actually require.
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportReason  ::=  ENUMERATED
 * {
 *     timerExpired            (0),
 *     countThresholdHit        (1),
 *     pDPComtextDeactivated   (2),
 *     pDPContextModification    (3),
 *     otherOrUnknown            (4),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ReportReason = _enum_for_ReportReason | ENUMERATED;

/**
 * @summary ReportReason_timerExpired
 * @description
 * 
 * The per-intercept summary timer expired. The timer is configurable in seconds
 * (clause 10.5.1.1 and clause 6.5.1.1). Table 10.5.1.1.16 calls this timeout.
 * @constant
 * @type {number}
 */
export
const ReportReason_timerExpired: ReportReason = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timerExpired
 * @description
 * 
 * Summary timer expired (clause 10.5.1.1).
 * @constant
 * @type {number}
 */
export
const timerExpired: ReportReason = ReportReason_timerExpired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportReason_countThresholdHit
 * @description
 * 
 * The per-intercept packet-count threshold was reached (clause 10.5.1.1 and
 * clause 6.5.1.1). Table 10.5.1.1.16 calls this the count limit.
 * @constant
 * @type {number}
 */
export
const ReportReason_countThresholdHit: ReportReason = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary countThresholdHit
 * @description
 * 
 * Packet-count threshold reached (clause 10.5.1.1).
 * @constant
 * @type {number}
 */
export
const countThresholdHit: ReportReason = ReportReason_countThresholdHit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportReason_pDPComtextDeactivated
 * @description
 * 
 * PDP context deactivated. The spelling is the module's. Clause 6.5.1.1 ends a
 * summary when the PDP context is deactivated. Clause 10.5.1.1 ends a summary
 * when the EPS bearer or session is deactivated and names that reason only as
 * end of session.
 * @constant
 * @type {number}
 */
export
const ReportReason_pDPComtextDeactivated: ReportReason = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDPComtextDeactivated
 * @description
 * 
 * PDP context deactivated (clause 6.5.1.1). The spelling is the module's.
 * @constant
 * @type {number}
 */
export
const pDPComtextDeactivated: ReportReason = ReportReason_pDPComtextDeactivated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportReason_pDPContextModification
 * @description
 * 
 * The module names PDP-context modification. Table 6.9C and table 10.5.1.1.16
 * do not list modification among the summary reasons. The handover text does
 * not say when to send this value.
 * @constant
 * @type {number}
 */
export
const ReportReason_pDPContextModification: ReportReason = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDPContextModification
 * @description
 * 
 * PDP-context modification. The summary-reason tables do not list it.
 * @constant
 * @type {number}
 */
export
const pDPContextModification: ReportReason = ReportReason_pDPContextModification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportReason_otherOrUnknown
 * @description
 * 
 * Other or unknown reason. Table 10.5.1.1.16 lists end of session separately
 * from timeout and count limit and does not assign end of session to this
 * value.
 * @constant
 * @type {number}
 */
export
const ReportReason_otherOrUnknown: ReportReason = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary otherOrUnknown
 * @description
 * 
 * Other or unknown summary reason (table 10.5.1.1.16).
 * @constant
 * @type {number}
 */
export
const otherOrUnknown: ReportReason = ReportReason_otherOrUnknown; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ReportReason: $.ASN1Decoder<ReportReason> = $._decodeEnumerated;
export const _encode_ReportReason: $.ASN1Encoder<ReportReason> = $._encodeEnumerated;


/* eslint-enable */
