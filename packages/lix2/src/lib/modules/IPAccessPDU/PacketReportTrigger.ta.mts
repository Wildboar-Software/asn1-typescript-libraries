/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED,
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
 * @constant
 * @type {number}
 */
export
const PacketReportTrigger_flowStart: PacketReportTrigger = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary flowStart
 * @constant
 * @type {number}
 */
export
const flowStart: PacketReportTrigger = PacketReportTrigger_flowStart; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PacketReportTrigger_flowEnd
 * @constant
 * @type {number}
 */
export
const PacketReportTrigger_flowEnd: PacketReportTrigger = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary flowEnd
 * @constant
 * @type {number}
 */
export
const flowEnd: PacketReportTrigger = PacketReportTrigger_flowEnd; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PacketReportTrigger_flowTimeout
 * @constant
 * @type {number}
 */
export
const PacketReportTrigger_flowTimeout: PacketReportTrigger = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary flowTimeout
 * @constant
 * @type {number}
 */
export
const flowTimeout: PacketReportTrigger = PacketReportTrigger_flowTimeout; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PacketReportTrigger_flowTimerExpiration
 * @constant
 * @type {number}
 */
export
const PacketReportTrigger_flowTimerExpiration: PacketReportTrigger = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary flowTimerExpiration
 * @constant
 * @type {number}
 */
export
const flowTimerExpiration: PacketReportTrigger = PacketReportTrigger_flowTimerExpiration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PacketReportTrigger_flowPacketCount
 * @constant
 * @type {number}
 */
export
const PacketReportTrigger_flowPacketCount: PacketReportTrigger = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary flowPacketCount
 * @constant
 * @type {number}
 */
export
const flowPacketCount: PacketReportTrigger = PacketReportTrigger_flowPacketCount; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PacketReportTrigger_flowByteCount
 * @constant
 * @type {number}
 */
export
const PacketReportTrigger_flowByteCount: PacketReportTrigger = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary flowByteCount
 * @constant
 * @type {number}
 */
export
const flowByteCount: PacketReportTrigger = PacketReportTrigger_flowByteCount; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PacketReportTrigger_sessionTimerExpiration
 * @constant
 * @type {number}
 */
export
const PacketReportTrigger_sessionTimerExpiration: PacketReportTrigger = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sessionTimerExpiration
 * @constant
 * @type {number}
 */
export
const sessionTimerExpiration: PacketReportTrigger = PacketReportTrigger_sessionTimerExpiration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PacketReportTrigger_sessionPacketCount
 * @constant
 * @type {number}
 */
export
const PacketReportTrigger_sessionPacketCount: PacketReportTrigger = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sessionPacketCount
 * @constant
 * @type {number}
 */
export
const sessionPacketCount: PacketReportTrigger = PacketReportTrigger_sessionPacketCount; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PacketReportTrigger_sessionByteCount
 * @constant
 * @type {number}
 */
export
const PacketReportTrigger_sessionByteCount: PacketReportTrigger = 9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sessionByteCount
 * @constant
 * @type {number}
 */
export
const sessionByteCount: PacketReportTrigger = PacketReportTrigger_sessionByteCount; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PacketReportTrigger_reportEnd
 * @constant
 * @type {number}
 */
export
const PacketReportTrigger_reportEnd: PacketReportTrigger = 10; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reportEnd
 * @constant
 * @type {number}
 */
export
const reportEnd: PacketReportTrigger = PacketReportTrigger_reportEnd; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PacketReportTrigger: $.ASN1Decoder<PacketReportTrigger> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PacketReportTrigger
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PacketReportTrigger (el: _Element): PacketReportTrigger {
    if (!_cached_decoder_for_PacketReportTrigger) { _cached_decoder_for_PacketReportTrigger = $._decodeEnumerated; }
    return _cached_decoder_for_PacketReportTrigger(el);
}

let _cached_encoder_for_PacketReportTrigger: $.ASN1Encoder<PacketReportTrigger> | null = null;

/**
 * @summary Encodes a(n) PacketReportTrigger into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PacketReportTrigger, encoded as an ASN.1 Element.
 */
export
function _encode_PacketReportTrigger (value: PacketReportTrigger, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PacketReportTrigger) { _cached_encoder_for_PacketReportTrigger = $._encodeEnumerated; }
    return _cached_encoder_for_PacketReportTrigger(value, elGetter);
}


/* eslint-enable */
