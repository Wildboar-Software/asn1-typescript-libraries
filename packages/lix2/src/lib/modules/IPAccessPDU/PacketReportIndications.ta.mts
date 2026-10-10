/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary PacketReportIndications
 * @description
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
export
type PacketReportIndications = BIT_STRING;

/**
 * @summary PacketReportIndications_zeroedIPv4TotalLength
 * @constant
 * @type {number}
 */
export
const PacketReportIndications_zeroedIPv4TotalLength: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary zeroedIPv4TotalLength
 * @constant
 * @type {number}
 */
export
const zeroedIPv4TotalLength: number = PacketReportIndications_zeroedIPv4TotalLength; /* SHORT_NAMED_BIT */

/**
 * @summary PacketReportIndications_zeroedIPv4Flags
 * @constant
 * @type {number}
 */
export
const PacketReportIndications_zeroedIPv4Flags: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary zeroedIPv4Flags
 * @constant
 * @type {number}
 */
export
const zeroedIPv4Flags: number = PacketReportIndications_zeroedIPv4Flags; /* SHORT_NAMED_BIT */

/**
 * @summary PacketReportIndications_zeroedIPv4TimeToLive
 * @constant
 * @type {number}
 */
export
const PacketReportIndications_zeroedIPv4TimeToLive: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary zeroedIPv4TimeToLive
 * @constant
 * @type {number}
 */
export
const zeroedIPv4TimeToLive: number = PacketReportIndications_zeroedIPv4TimeToLive; /* SHORT_NAMED_BIT */

/**
 * @summary PacketReportIndications_zeroedIPv4HeaderChecksum
 * @constant
 * @type {number}
 */
export
const PacketReportIndications_zeroedIPv4HeaderChecksum: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary zeroedIPv4HeaderChecksum
 * @constant
 * @type {number}
 */
export
const zeroedIPv4HeaderChecksum: number = PacketReportIndications_zeroedIPv4HeaderChecksum; /* SHORT_NAMED_BIT */

/**
 * @summary PacketReportIndications_zeroedIPv6PayloadLength
 * @constant
 * @type {number}
 */
export
const PacketReportIndications_zeroedIPv6PayloadLength: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary zeroedIPv6PayloadLength
 * @constant
 * @type {number}
 */
export
const zeroedIPv6PayloadLength: number = PacketReportIndications_zeroedIPv6PayloadLength; /* SHORT_NAMED_BIT */

/**
 * @summary PacketReportIndications_removedIPv6ExtensionHeaders
 * @constant
 * @type {number}
 */
export
const PacketReportIndications_removedIPv6ExtensionHeaders: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary removedIPv6ExtensionHeaders
 * @constant
 * @type {number}
 */
export
const removedIPv6ExtensionHeaders: number = PacketReportIndications_removedIPv6ExtensionHeaders; /* SHORT_NAMED_BIT */

/**
 * @summary PacketReportIndications_zeroedTCPSequenceNumber
 * @constant
 * @type {number}
 */
export
const PacketReportIndications_zeroedTCPSequenceNumber: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary zeroedTCPSequenceNumber
 * @constant
 * @type {number}
 */
export
const zeroedTCPSequenceNumber: number = PacketReportIndications_zeroedTCPSequenceNumber; /* SHORT_NAMED_BIT */

/**
 * @summary PacketReportIndications_zeroedTCPAcknowledgementNumber
 * @constant
 * @type {number}
 */
export
const PacketReportIndications_zeroedTCPAcknowledgementNumber: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary zeroedTCPAcknowledgementNumber
 * @constant
 * @type {number}
 */
export
const zeroedTCPAcknowledgementNumber: number = PacketReportIndications_zeroedTCPAcknowledgementNumber; /* SHORT_NAMED_BIT */

/**
 * @summary PacketReportIndications_zeroedTCPFlags
 * @constant
 * @type {number}
 */
export
const PacketReportIndications_zeroedTCPFlags: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary zeroedTCPFlags
 * @constant
 * @type {number}
 */
export
const zeroedTCPFlags: number = PacketReportIndications_zeroedTCPFlags; /* SHORT_NAMED_BIT */

/**
 * @summary PacketReportIndications_zeroedTCPWindowSize
 * @constant
 * @type {number}
 */
export
const PacketReportIndications_zeroedTCPWindowSize: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary zeroedTCPWindowSize
 * @constant
 * @type {number}
 */
export
const zeroedTCPWindowSize: number = PacketReportIndications_zeroedTCPWindowSize; /* SHORT_NAMED_BIT */

/**
 * @summary PacketReportIndications_zeroedTCPChecksum
 * @constant
 * @type {number}
 */
export
const PacketReportIndications_zeroedTCPChecksum: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary zeroedTCPChecksum
 * @constant
 * @type {number}
 */
export
const zeroedTCPChecksum: number = PacketReportIndications_zeroedTCPChecksum; /* SHORT_NAMED_BIT */

/**
 * @summary PacketReportIndications_zeroedUDPLength
 * @constant
 * @type {number}
 */
export
const PacketReportIndications_zeroedUDPLength: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary zeroedUDPLength
 * @constant
 * @type {number}
 */
export
const zeroedUDPLength: number = PacketReportIndications_zeroedUDPLength; /* SHORT_NAMED_BIT */

/**
 * @summary PacketReportIndications_zeroedUDPChecksum
 * @constant
 * @type {number}
 */
export
const PacketReportIndications_zeroedUDPChecksum: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary zeroedUDPChecksum
 * @constant
 * @type {number}
 */
export
const zeroedUDPChecksum: number = PacketReportIndications_zeroedUDPChecksum; /* SHORT_NAMED_BIT */

let _cached_decoder_for_PacketReportIndications: $.ASN1Decoder<PacketReportIndications> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PacketReportIndications
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PacketReportIndications (el: _Element): PacketReportIndications {
    if (!_cached_decoder_for_PacketReportIndications) { _cached_decoder_for_PacketReportIndications = $._decodeBitString; }
    return _cached_decoder_for_PacketReportIndications(el);
}

let _cached_encoder_for_PacketReportIndications: $.ASN1Encoder<PacketReportIndications> | null = null;

/**
 * @summary Encodes a(n) PacketReportIndications into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PacketReportIndications, encoded as an ASN.1 Element.
 */
export
function _encode_PacketReportIndications (value: PacketReportIndications, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PacketReportIndications) { _cached_encoder_for_PacketReportIndications = $._encodeBitString; }
    return _cached_encoder_for_PacketReportIndications(value, elGetter);
}


/* eslint-enable */
