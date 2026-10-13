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
 * @constant
 * @type {number}
 */
export
const ReportReason_timerExpired: ReportReason = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timerExpired
 * @constant
 * @type {number}
 */
export
const timerExpired: ReportReason = ReportReason_timerExpired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportReason_countThresholdHit
 * @constant
 * @type {number}
 */
export
const ReportReason_countThresholdHit: ReportReason = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary countThresholdHit
 * @constant
 * @type {number}
 */
export
const countThresholdHit: ReportReason = ReportReason_countThresholdHit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportReason_pDPComtextDeactivated
 * @constant
 * @type {number}
 */
export
const ReportReason_pDPComtextDeactivated: ReportReason = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDPComtextDeactivated
 * @constant
 * @type {number}
 */
export
const pDPComtextDeactivated: ReportReason = ReportReason_pDPComtextDeactivated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportReason_pDPContextModification
 * @constant
 * @type {number}
 */
export
const ReportReason_pDPContextModification: ReportReason = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDPContextModification
 * @constant
 * @type {number}
 */
export
const pDPContextModification: ReportReason = ReportReason_pDPContextModification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportReason_otherOrUnknown
 * @constant
 * @type {number}
 */
export
const ReportReason_otherOrUnknown: ReportReason = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary otherOrUnknown
 * @constant
 * @type {number}
 */
export
const otherOrUnknown: ReportReason = ReportReason_otherOrUnknown; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ReportReason: $.ASN1Decoder<ReportReason> = $._decodeEnumerated;
export const _encode_ReportReason: $.ASN1Encoder<ReportReason> = $._encodeEnumerated;


/* eslint-enable */
