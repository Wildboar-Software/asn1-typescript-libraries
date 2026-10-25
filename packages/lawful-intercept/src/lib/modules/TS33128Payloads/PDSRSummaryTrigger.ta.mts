/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDSRSummaryTrigger
 * @description
 * 
 * Shall contain the trigger that caused the summary report to be generated,
 * which is one of the following: a) timer expiry. b) packet count. c) byte
 * count. d) start of a flow. e) end of a flow.
 *
 * 3GPP TS 33.128, clause 6.2.3.9.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDSRSummaryTrigger  ::=  ENUMERATED
 * {
 *     timerExpiry(1),
 *     packetCount(2),
 *     byteCount(3),
 *     startOfFlow(4),
 *     endOfFlow(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PDSRSummaryTrigger {
    timerExpiry = 1,
    packetCount = 2,
    byteCount = 3,
    startOfFlow = 4,
    endOfFlow = 5,
}

/**
 * @summary PDSRSummaryTrigger
 * @description
 * 
 * Shall contain the trigger that caused the summary report to be generated,
 * which is one of the following: a) timer expiry. b) packet count. c) byte
 * count. d) start of a flow. e) end of a flow.
 *
 * 3GPP TS 33.128, clause 6.2.3.9.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDSRSummaryTrigger  ::=  ENUMERATED
 * {
 *     timerExpiry(1),
 *     packetCount(2),
 *     byteCount(3),
 *     startOfFlow(4),
 *     endOfFlow(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PDSRSummaryTrigger = _enum_for_PDSRSummaryTrigger;

/**
 * @summary PDSRSummaryTrigger
 * @description
 * 
 * Shall contain the trigger that caused the summary report to be generated,
 * which is one of the following: a) timer expiry. b) packet count. c) byte
 * count. d) start of a flow. e) end of a flow.
 *
 * 3GPP TS 33.128, clause 6.2.3.9.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDSRSummaryTrigger  ::=  ENUMERATED
 * {
 *     timerExpiry(1),
 *     packetCount(2),
 *     byteCount(3),
 *     startOfFlow(4),
 *     endOfFlow(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PDSRSummaryTrigger = _enum_for_PDSRSummaryTrigger;

/**
 * @summary PDSRSummaryTrigger_timerExpiry
 * @constant
 * @type {number}
 */
export
const PDSRSummaryTrigger_timerExpiry = PDSRSummaryTrigger.timerExpiry satisfies PDSRSummaryTrigger; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timerExpiry
 * @constant
 * @type {number}
 */
export
const timerExpiry = PDSRSummaryTrigger.timerExpiry satisfies PDSRSummaryTrigger; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDSRSummaryTrigger_packetCount
 * @constant
 * @type {number}
 */
export
const PDSRSummaryTrigger_packetCount = PDSRSummaryTrigger.packetCount satisfies PDSRSummaryTrigger; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary packetCount
 * @constant
 * @type {number}
 */
export
const packetCount = PDSRSummaryTrigger.packetCount satisfies PDSRSummaryTrigger; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDSRSummaryTrigger_byteCount
 * @constant
 * @type {number}
 */
export
const PDSRSummaryTrigger_byteCount = PDSRSummaryTrigger.byteCount satisfies PDSRSummaryTrigger; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary byteCount
 * @constant
 * @type {number}
 */
export
const byteCount = PDSRSummaryTrigger.byteCount satisfies PDSRSummaryTrigger; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDSRSummaryTrigger_startOfFlow
 * @constant
 * @type {number}
 */
export
const PDSRSummaryTrigger_startOfFlow = PDSRSummaryTrigger.startOfFlow satisfies PDSRSummaryTrigger; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfFlow
 * @constant
 * @type {number}
 */
export
const startOfFlow = PDSRSummaryTrigger.startOfFlow satisfies PDSRSummaryTrigger; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDSRSummaryTrigger_endOfFlow
 * @constant
 * @type {number}
 */
export
const PDSRSummaryTrigger_endOfFlow = PDSRSummaryTrigger.endOfFlow satisfies PDSRSummaryTrigger; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary endOfFlow
 * @constant
 * @type {number}
 */
export
const endOfFlow = PDSRSummaryTrigger.endOfFlow satisfies PDSRSummaryTrigger; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PDSRSummaryTrigger: $.ASN1Decoder<PDSRSummaryTrigger> = $._decodeEnumerated;
export const _encode_PDSRSummaryTrigger: $.ASN1Encoder<PDSRSummaryTrigger> = $._encodeEnumerated;


/* eslint-enable */
