/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


export
enum _enum_for_PDSRSummaryTrigger {
    startOfFlow = 0,
    timerExpiry = 1,
    packetCount = 2,
    byteCount = 3,
    endOfFlow = 4,
}

/**
 * @summary PDSRSummaryTrigger
 * @description
 *
 * Why a Packet Data Summary Report was generated
 * (ETSI TS 102 232-3 V3.9.1, clauses 6.2.4.3 and 6.2.4.4, table 5).
 * A summary is sent at the start of a flow, as an interim report, and
 * at the end of the flow. An interim report is caused by a configurable
 * timer or by a configurable packet or byte threshold. The rules for
 * which flows are summarized are outside this specification.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDSRSummaryTrigger ::= ENUMERATED
 * {
 *     startOfFlow(0),
 *     timerExpiry(1),
 *     packetCount(2),
 *     byteCount(3),
 *     endOfFlow(4),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PDSRSummaryTrigger = _enum_for_PDSRSummaryTrigger | ENUMERATED;

/**
 * @summary PDSRSummaryTrigger_startOfFlow
 * @description
 *
 * Start of the packet flow inside the access session
 * (clause 6.2.4.3). A flow is the set of packets that share source and
 * destination addresses, the IP next-layer protocol, the layer-4
 * ports, and, for IPv6, the flow label (clause 6.2.4.2).
 *
 * @constant
 * @type {number}
 */
export
const PDSRSummaryTrigger_startOfFlow: PDSRSummaryTrigger = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfFlow
 * @description
 *
 * The packet flow has started (clause 6.2.4.3).
 *
 * @constant
 * @type {number}
 */
export
const startOfFlow: PDSRSummaryTrigger = PDSRSummaryTrigger_startOfFlow; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDSRSummaryTrigger_timerExpiry
 * @description
 *
 * Interim summary because a configurable timer expired
 * (clause 6.2.4.3). Counts in `PDSRInformation` cover only the packets
 * seen since the previous summary for this flow (table 5).
 *
 * @constant
 * @type {number}
 */
export
const PDSRSummaryTrigger_timerExpiry: PDSRSummaryTrigger = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timerExpiry
 * @description
 *
 * Interim summary on timer expiry (clause 6.2.4.3).
 *
 * @constant
 * @type {number}
 */
export
const timerExpiry: PDSRSummaryTrigger = PDSRSummaryTrigger_timerExpiry; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDSRSummaryTrigger_packetCount
 * @description
 *
 * Interim summary because a configurable packet-count threshold was
 * reached (clause 6.2.4.3).
 *
 * @constant
 * @type {number}
 */
export
const PDSRSummaryTrigger_packetCount: PDSRSummaryTrigger = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary packetCount
 * @description
 *
 * Interim summary on a packet-count threshold (clause 6.2.4.3).
 *
 * @constant
 * @type {number}
 */
export
const packetCount: PDSRSummaryTrigger = PDSRSummaryTrigger_packetCount; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDSRSummaryTrigger_byteCount
 * @description
 *
 * Interim summary because a configurable byte-count threshold was
 * reached (clause 6.2.4.3).
 *
 * @constant
 * @type {number}
 */
export
const PDSRSummaryTrigger_byteCount: PDSRSummaryTrigger = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary byteCount
 * @description
 *
 * Interim summary on a byte-count threshold (clause 6.2.4.3).
 *
 * @constant
 * @type {number}
 */
export
const byteCount: PDSRSummaryTrigger = PDSRSummaryTrigger_byteCount; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDSRSummaryTrigger_endOfFlow
 * @description
 *
 * End of the flow: the flow itself ended, the access session ended,
 * or the interception ended (clause 6.2.4.3). Annex D, which is
 * informative, identifies a TCP flow end by FIN or RST, and a UDP or
 * other IP flow end by a silent interval. Those timeout values are
 * set over HI1 (clause D.5).
 *
 * @constant
 * @type {number}
 */
export
const PDSRSummaryTrigger_endOfFlow: PDSRSummaryTrigger = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary endOfFlow
 * @description
 *
 * The flow, the access session, or the interception has ended
 * (clause 6.2.4.3).
 *
 * @constant
 * @type {number}
 */
export
const endOfFlow: PDSRSummaryTrigger = PDSRSummaryTrigger_endOfFlow; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PDSRSummaryTrigger: $.ASN1Decoder<PDSRSummaryTrigger> = $._decodeEnumerated;
export const _encode_PDSRSummaryTrigger: $.ASN1Encoder<PDSRSummaryTrigger> = $._encodeEnumerated;


/* eslint-enable */
