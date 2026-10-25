/* eslint-disable */
import {
    type ENUMERATED
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
 * Reason a packet-flow summary was delivered. Table 8.10 requires the reason
 * and describes it as timeout, count limit, or end of session. An interim
 * summary is also sent when a per-intercept Summary Timer expires or a
 * per-intercept count threshold is reached. The timer is configured in seconds
 * (clause 8.5.1.2).
 * 
 * 3GPP TS 33.108, clause 8.5.1.2, table 8.10, and annex B.7.
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
 * The per-intercept Summary Timer expired. Table 8.10 calls this outcome
 * timeout. The timer is configured in seconds (clause 8.5.1.2).
 * @constant
 * @type {number}
 */
export
const ReportReason_timerExpired: _enum_for_ReportReason.timerExpired = _enum_for_ReportReason.timerExpired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timerExpired
 * @description
 * 
 * Summary Timer expired (clause 8.5.1.2); table 8.10 timeout.
 * @constant
 * @type {number}
 */
export
const timerExpired: _enum_for_ReportReason.timerExpired = ReportReason_timerExpired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportReason_countThresholdHit
 * @description
 * 
 * The per-intercept packet-count threshold was reached. Table 8.10 calls this
 * outcome count limit (clause 8.5.1.2).
 * @constant
 * @type {number}
 */
export
const ReportReason_countThresholdHit: _enum_for_ReportReason.countThresholdHit = _enum_for_ReportReason.countThresholdHit; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary countThresholdHit
 * @description
 * 
 * Count threshold reached (clause 8.5.1.2); table 8.10 count limit.
 * @constant
 * @type {number}
 */
export
const countThresholdHit: _enum_for_ReportReason.countThresholdHit = ReportReason_countThresholdHit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportReason_pDPComtextDeactivated
 * @description
 * 
 * Annex B.7 names this reason, including the spelling pDPComtextDeactivated.
 * Table 8.10 lists end of session, and clause 8.5.1.2 includes packet-flow end
 * and I-WLAN tunnel deactivation, without naming this value. TS 33.108 does not
 * bind this name to those triggers.
 * @constant
 * @type {number}
 */
export
const ReportReason_pDPComtextDeactivated: _enum_for_ReportReason.pDPComtextDeactivated = _enum_for_ReportReason.pDPComtextDeactivated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDPComtextDeactivated
 * @description
 * 
 * Named in annex B.7. Clause 8 does not bind it to end of session.
 * @constant
 * @type {number}
 */
export
const pDPComtextDeactivated: _enum_for_ReportReason.pDPComtextDeactivated = ReportReason_pDPComtextDeactivated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportReason_pDPContextModification
 * @description
 * 
 * Annex B.7 names this reason. Clause 8 does not describe a PDP-context
 * modification event for I-WLAN, and table 8.10 does not name this value. TS
 * 33.108 does not further define it.
 * @constant
 * @type {number}
 */
export
const ReportReason_pDPContextModification: _enum_for_ReportReason.pDPContextModification = _enum_for_ReportReason.pDPContextModification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDPContextModification
 * @description
 * 
 * Named in annex B.7. Clause 8 does not further define it.
 * @constant
 * @type {number}
 */
export
const pDPContextModification: _enum_for_ReportReason.pDPContextModification = ReportReason_pDPContextModification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportReason_otherOrUnknown
 * @description
 * 
 * Annex B.7 names this reason. Table 8.10 does not. TS 33.108 does not further
 * define it.
 * @constant
 * @type {number}
 */
export
const ReportReason_otherOrUnknown: _enum_for_ReportReason.otherOrUnknown = _enum_for_ReportReason.otherOrUnknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary otherOrUnknown
 * @description
 * 
 * Named in annex B.7. Clause 8 does not further define it.
 * @constant
 * @type {number}
 */
export
const otherOrUnknown: _enum_for_ReportReason.otherOrUnknown = ReportReason_otherOrUnknown; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ReportReason: $.ASN1Decoder<ReportReason> = $._decodeEnumerated;
export const _encode_ReportReason: $.ASN1Encoder<ReportReason> = $._encodeEnumerated;


/* eslint-enable */
