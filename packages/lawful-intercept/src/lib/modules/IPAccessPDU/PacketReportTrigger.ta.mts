/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


export
enum _enum_for_PacketReportTrigger {
    flowStart = 1,
    flowEnd = 2,
    flowTimeout = 3,
    flowTimerExpiration = 4,
    flowPacketCount = 5,
    flowByteCount = 6,
    sessionTimerExpiration = 7,
    sessionPacketCount = 8,
    sessionByteCount = 9,
    reportEnd = 10,
}

/**
 * @summary PacketReportTrigger
 * @description
 *
 * Not defined in ETSI TS 102 232-3 V3.9.1. Clause 8 of that edition
 * (module version14) has no packet-report types. This version20
 * enumeration has no comments that state when each value is used.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PacketReportTrigger ::= ENUMERATED
 * {
 *     flowStart(1),
 *     flowEnd(2),
 *     flowTimeout(3),
 *     flowTimerExpiration(4),
 *     flowPacketCount(5),
 *     flowByteCount(6),
 *     sessionTimerExpiration(7),
 *     sessionPacketCount(8),
 *     sessionByteCount(9),
 *     reportEnd(10),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PacketReportTrigger = _enum_for_PacketReportTrigger | ENUMERATED;

/**
 * @summary PacketReportTrigger_flowStart
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const PacketReportTrigger_flowStart = _enum_for_PacketReportTrigger.flowStart; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary flowStart
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const flowStart = PacketReportTrigger_flowStart; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PacketReportTrigger_flowEnd
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const PacketReportTrigger_flowEnd = _enum_for_PacketReportTrigger.flowEnd; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary flowEnd
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const flowEnd = PacketReportTrigger_flowEnd; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PacketReportTrigger_flowTimeout
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const PacketReportTrigger_flowTimeout = _enum_for_PacketReportTrigger.flowTimeout; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary flowTimeout
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const flowTimeout = PacketReportTrigger_flowTimeout; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PacketReportTrigger_flowTimerExpiration
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const PacketReportTrigger_flowTimerExpiration = _enum_for_PacketReportTrigger.flowTimerExpiration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary flowTimerExpiration
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const flowTimerExpiration = PacketReportTrigger_flowTimerExpiration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PacketReportTrigger_flowPacketCount
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const PacketReportTrigger_flowPacketCount = _enum_for_PacketReportTrigger.flowPacketCount; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary flowPacketCount
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const flowPacketCount = PacketReportTrigger_flowPacketCount; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PacketReportTrigger_flowByteCount
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const PacketReportTrigger_flowByteCount = _enum_for_PacketReportTrigger.flowByteCount; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary flowByteCount
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const flowByteCount = PacketReportTrigger_flowByteCount; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PacketReportTrigger_sessionTimerExpiration
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const PacketReportTrigger_sessionTimerExpiration = _enum_for_PacketReportTrigger.sessionTimerExpiration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sessionTimerExpiration
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const sessionTimerExpiration = PacketReportTrigger_sessionTimerExpiration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PacketReportTrigger_sessionPacketCount
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const PacketReportTrigger_sessionPacketCount = _enum_for_PacketReportTrigger.sessionPacketCount; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sessionPacketCount
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const sessionPacketCount = PacketReportTrigger_sessionPacketCount; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PacketReportTrigger_sessionByteCount
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const PacketReportTrigger_sessionByteCount = _enum_for_PacketReportTrigger.sessionByteCount; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sessionByteCount
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const sessionByteCount = PacketReportTrigger_sessionByteCount; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PacketReportTrigger_reportEnd
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const PacketReportTrigger_reportEnd = _enum_for_PacketReportTrigger.reportEnd; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reportEnd
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const reportEnd = PacketReportTrigger_reportEnd; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PacketReportTrigger: $.ASN1Decoder<PacketReportTrigger> = $._decodeEnumerated;
export const _encode_PacketReportTrigger: $.ASN1Encoder<PacketReportTrigger> = $._encodeEnumerated;


/* eslint-enable */
