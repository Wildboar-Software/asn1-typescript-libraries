/* eslint-disable */
import { type BIT_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary PacketReportIndications
 * @description
 *
 * Not defined in ETSI TS 102 232-3 V3.9.1. Clause 8 of that edition
 * (module version14) has no packet-report types. The version20 module
 * names these bits and does not say which header fields were altered.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PacketReportIndications ::= BIT STRING
 * {
 *     zeroedIPv4TotalLength(0),
 *     zeroedIPv4Flags(1),
 *     zeroedIPv4TimeToLive(2),
 *     zeroedIPv4HeaderChecksum(3),
 *     zeroedIPv6PayloadLength(4),
 *     removedIPv6ExtensionHeaders(5),
 *     zeroedTCPSequenceNumber(6),
 *     zeroedTCPAcknowledgementNumber(7),
 *     zeroedTCPFlags(8),
 *     zeroedTCPWindowSize(9),
 *     zeroedTCPChecksum(10),
 *     zeroedUDPLength(11),
 *     zeroedUDPChecksum(12)
 * }
 * ```
 * 
 */
export type PacketReportIndications = BIT_STRING;

/**
 * @summary PacketReportIndications_zeroedIPv4TotalLength
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const PacketReportIndications_zeroedIPv4TotalLength: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary zeroedIPv4TotalLength
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const zeroedIPv4TotalLength: number = PacketReportIndications_zeroedIPv4TotalLength; /* SHORT_NAMED_BIT */

/**
 * @summary PacketReportIndications_zeroedIPv4Flags
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const PacketReportIndications_zeroedIPv4Flags: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary zeroedIPv4Flags
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const zeroedIPv4Flags: number = PacketReportIndications_zeroedIPv4Flags; /* SHORT_NAMED_BIT */

/**
 * @summary PacketReportIndications_zeroedIPv4TimeToLive
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const PacketReportIndications_zeroedIPv4TimeToLive: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary zeroedIPv4TimeToLive
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const zeroedIPv4TimeToLive: number = PacketReportIndications_zeroedIPv4TimeToLive; /* SHORT_NAMED_BIT */

/**
 * @summary PacketReportIndications_zeroedIPv4HeaderChecksum
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const PacketReportIndications_zeroedIPv4HeaderChecksum: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary zeroedIPv4HeaderChecksum
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const zeroedIPv4HeaderChecksum: number = PacketReportIndications_zeroedIPv4HeaderChecksum; /* SHORT_NAMED_BIT */

/**
 * @summary PacketReportIndications_zeroedIPv6PayloadLength
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const PacketReportIndications_zeroedIPv6PayloadLength: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary zeroedIPv6PayloadLength
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const zeroedIPv6PayloadLength: number = PacketReportIndications_zeroedIPv6PayloadLength; /* SHORT_NAMED_BIT */

/**
 * @summary PacketReportIndications_removedIPv6ExtensionHeaders
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const PacketReportIndications_removedIPv6ExtensionHeaders: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary removedIPv6ExtensionHeaders
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const removedIPv6ExtensionHeaders: number = PacketReportIndications_removedIPv6ExtensionHeaders; /* SHORT_NAMED_BIT */

/**
 * @summary PacketReportIndications_zeroedTCPSequenceNumber
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const PacketReportIndications_zeroedTCPSequenceNumber: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary zeroedTCPSequenceNumber
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const zeroedTCPSequenceNumber: number = PacketReportIndications_zeroedTCPSequenceNumber; /* SHORT_NAMED_BIT */

/**
 * @summary PacketReportIndications_zeroedTCPAcknowledgementNumber
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const PacketReportIndications_zeroedTCPAcknowledgementNumber: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary zeroedTCPAcknowledgementNumber
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const zeroedTCPAcknowledgementNumber: number = PacketReportIndications_zeroedTCPAcknowledgementNumber; /* SHORT_NAMED_BIT */

/**
 * @summary PacketReportIndications_zeroedTCPFlags
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const PacketReportIndications_zeroedTCPFlags: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary zeroedTCPFlags
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const zeroedTCPFlags: number = PacketReportIndications_zeroedTCPFlags; /* SHORT_NAMED_BIT */

/**
 * @summary PacketReportIndications_zeroedTCPWindowSize
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const PacketReportIndications_zeroedTCPWindowSize: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary zeroedTCPWindowSize
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const zeroedTCPWindowSize: number = PacketReportIndications_zeroedTCPWindowSize; /* SHORT_NAMED_BIT */

/**
 * @summary PacketReportIndications_zeroedTCPChecksum
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const PacketReportIndications_zeroedTCPChecksum: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary zeroedTCPChecksum
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const zeroedTCPChecksum: number = PacketReportIndications_zeroedTCPChecksum; /* SHORT_NAMED_BIT */

/**
 * @summary PacketReportIndications_zeroedUDPLength
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const PacketReportIndications_zeroedUDPLength: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary zeroedUDPLength
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const zeroedUDPLength: number = PacketReportIndications_zeroedUDPLength; /* SHORT_NAMED_BIT */

/**
 * @summary PacketReportIndications_zeroedUDPChecksum
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const PacketReportIndications_zeroedUDPChecksum: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary zeroedUDPChecksum
 * @description
 *
 * Not described in ETSI TS 102 232-3 V3.9.1 clause 8.
 *
 * @constant
 * @type {number}
 */
export
const zeroedUDPChecksum: number = PacketReportIndications_zeroedUDPChecksum; /* SHORT_NAMED_BIT */
export const _decode_PacketReportIndications: $.ASN1Decoder<PacketReportIndications> = $._decodeBitString;
export const _encode_PacketReportIndications: $.ASN1Encoder<PacketReportIndications> = $._encodeBitString;


/* eslint-enable */
