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
 * Why a packet-flow summary was delivered. Table 6.9C requires the reason and
 * describes it as timeout, count limit, or end of session. Clause 6.5.1.1
 * triggers an interim summary on expiry of the per-intercept summary timer
 * (units of seconds) or on a per-intercept count threshold, and an end summary
 * when the flow ends, including PDP context deactivation.
 * 
 * 3GPP TS 33.108, clause 6.5.1.1, table 6.9C, and annex B.3.
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
 *     otherOrUnknown        (4),
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
 * The per-intercept summary timer expired, in units of seconds, so an interim
 * packet-flow summary is delivered. 3GPP TS 33.108, clause 6.5.1.1 and table
 * 6.9C.
 * 
 * @constant
 * @type {number}
 */
export
const ReportReason_timerExpired: ReportReason = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timerExpired
 * @description
 * 
 * Summary timer expired (3GPP TS 33.108, clause 6.5.1.1).
 * 
 * @constant
 * @type {number}
 */
export
const timerExpired: ReportReason = ReportReason_timerExpired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportReason_countThresholdHit
 * @description
 * 
 * The per-intercept packet-count threshold was reached, so an interim
 * packet-flow summary is delivered. 3GPP TS 33.108, clause 6.5.1.1 and table
 * 6.9C.
 * 
 * @constant
 * @type {number}
 */
export
const ReportReason_countThresholdHit: ReportReason = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary countThresholdHit
 * @description
 * 
 * Packet-count threshold reached (3GPP TS 33.108, clause 6.5.1.1).
 * 
 * @constant
 * @type {number}
 */
export
const countThresholdHit: ReportReason = ReportReason_countThresholdHit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportReason_pDPComtextDeactivated
 * @description
 * 
 * The packet flow ended because the PDP context was deactivated. Clause 6.5.1.1
 * includes PDP context deactivation in the end-of-flow summary trigger. The
 * identifier spells "context" as in annex B.3. 3GPP TS 33.108, clause 6.5.1.1
 * and table 6.9C.
 * 
 * @constant
 * @type {number}
 */
export
const ReportReason_pDPComtextDeactivated: ReportReason = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDPComtextDeactivated
 * @description
 * 
 * Summary because the PDP context was deactivated (3GPP TS 33.108, clause
 * 6.5.1.1).
 * 
 * @constant
 * @type {number}
 */
export
const pDPComtextDeactivated: ReportReason = ReportReason_pDPComtextDeactivated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportReason_pDPContextModification
 * @description
 * 
 * Annex B.3 names PDP context modification as a summary reason. Clause 6.5.1.1
 * and table 6.9C state the summary triggers as timer expiry, count threshold,
 * and end of session, and do not say when this value is selected.
 * 
 * @constant
 * @type {number}
 */
export
const ReportReason_pDPContextModification: ReportReason = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDPContextModification
 * @description
 * 
 * PDP context modification, named in annex B.3; stage 2 does not give a further
 * condition (3GPP TS 33.108).
 * 
 * @constant
 * @type {number}
 */
export
const pDPContextModification: ReportReason = ReportReason_pDPContextModification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportReason_otherOrUnknown
 * @description
 * 
 * A summary reason other than timer expiry, count threshold, PDP context
 * deactivation, or PDP context modification, or a reason the MF cannot
 * classify. Table 6.9C does not name this value separately. 3GPP TS 33.108,
 * annex B.3.
 * 
 * @constant
 * @type {number}
 */
export
const ReportReason_otherOrUnknown: ReportReason = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary otherOrUnknown
 * @description
 * 
 * Other or unknown summary reason (3GPP TS 33.108, annex B.3).
 * 
 * @constant
 * @type {number}
 */
export
const otherOrUnknown: ReportReason = ReportReason_otherOrUnknown; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ReportReason: $.ASN1Decoder<ReportReason> = $._decodeEnumerated;
export const _encode_ReportReason: $.ASN1Encoder<ReportReason> = $._encodeEnumerated;


/* eslint-enable */
