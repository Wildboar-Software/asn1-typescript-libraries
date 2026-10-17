/* eslint-disable */
import {
    ENUMERATED
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
const PacketReportTrigger_flowStart: PacketReportTrigger = 1; /* LONG_NAMED_ENUMERATED_VALUE */

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
const flowStart: PacketReportTrigger = PacketReportTrigger_flowStart; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const PacketReportTrigger_flowEnd: PacketReportTrigger = 2; /* LONG_NAMED_ENUMERATED_VALUE */

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
const flowEnd: PacketReportTrigger = PacketReportTrigger_flowEnd; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const PacketReportTrigger_flowTimeout: PacketReportTrigger = 3; /* LONG_NAMED_ENUMERATED_VALUE */

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
const flowTimeout: PacketReportTrigger = PacketReportTrigger_flowTimeout; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const PacketReportTrigger_flowTimerExpiration: PacketReportTrigger = 4; /* LONG_NAMED_ENUMERATED_VALUE */

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
const flowTimerExpiration: PacketReportTrigger = PacketReportTrigger_flowTimerExpiration; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const PacketReportTrigger_flowPacketCount: PacketReportTrigger = 5; /* LONG_NAMED_ENUMERATED_VALUE */

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
const flowPacketCount: PacketReportTrigger = PacketReportTrigger_flowPacketCount; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const PacketReportTrigger_flowByteCount: PacketReportTrigger = 6; /* LONG_NAMED_ENUMERATED_VALUE */

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
const flowByteCount: PacketReportTrigger = PacketReportTrigger_flowByteCount; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const PacketReportTrigger_sessionTimerExpiration: PacketReportTrigger = 7; /* LONG_NAMED_ENUMERATED_VALUE */

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
const sessionTimerExpiration: PacketReportTrigger = PacketReportTrigger_sessionTimerExpiration; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const PacketReportTrigger_sessionPacketCount: PacketReportTrigger = 8; /* LONG_NAMED_ENUMERATED_VALUE */

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
const sessionPacketCount: PacketReportTrigger = PacketReportTrigger_sessionPacketCount; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const PacketReportTrigger_sessionByteCount: PacketReportTrigger = 9; /* LONG_NAMED_ENUMERATED_VALUE */

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
const sessionByteCount: PacketReportTrigger = PacketReportTrigger_sessionByteCount; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const PacketReportTrigger_reportEnd: PacketReportTrigger = 10; /* LONG_NAMED_ENUMERATED_VALUE */

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
const reportEnd: PacketReportTrigger = PacketReportTrigger_reportEnd; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PacketReportTrigger: $.ASN1Decoder<PacketReportTrigger> = $._decodeEnumerated;
export const _encode_PacketReportTrigger: $.ASN1Encoder<PacketReportTrigger> = $._encodeEnumerated;


/* eslint-enable */
