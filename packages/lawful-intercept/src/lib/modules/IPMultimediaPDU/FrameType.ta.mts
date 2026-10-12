/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_FrameType {
    ipFrame = 0,
    udpFrame = 1,
    rtpFrame = 2,
    audioFrame = 3,
    tcpFrame = 4,
    artificialRtpFrame = 5,
    udptlFrame = 6,
    msrpFrame = 7,
}

/**
 * @summary FrameType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FrameType  ::=  ENUMERATED
 * {
 *     ipFrame(0),
 *         -- All headers are present
 *     udpFrame(1),
 *         -- IP header is missing
 *     rtpFrame(2),
 *         -- UDP and IP headers are missing
 *     audioFrame(3),
 *         -- All headers are missing
 *     ...,
 *     tcpFrame(4),
 *         -- IP header is missing
 *     artificialRtpFrame(5),
 *         -- UDP and IP headers are missing; artificial RTP frame has been added
 *     udptlFrame(6),
 *         -- UDP and IP headers are missing
 *     msrpFrame(7)
 *         -- TCP and IP headers are missing
 * 
 * }
 * ```
 * 
 * @enum {number}
 */
export
type FrameType = _enum_for_FrameType | ENUMERATED;

/**
 * @summary FrameType_ipFrame
 * @constant
 * @type {number}
 */
export
const FrameType_ipFrame: FrameType = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ipFrame
 * @constant
 * @type {number}
 */
export
const ipFrame: FrameType = FrameType_ipFrame; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FrameType_udpFrame
 * @constant
 * @type {number}
 */
export
const FrameType_udpFrame: FrameType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary udpFrame
 * @constant
 * @type {number}
 */
export
const udpFrame: FrameType = FrameType_udpFrame; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FrameType_rtpFrame
 * @constant
 * @type {number}
 */
export
const FrameType_rtpFrame: FrameType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rtpFrame
 * @constant
 * @type {number}
 */
export
const rtpFrame: FrameType = FrameType_rtpFrame; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FrameType_audioFrame
 * @constant
 * @type {number}
 */
export
const FrameType_audioFrame: FrameType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary audioFrame
 * @constant
 * @type {number}
 */
export
const audioFrame: FrameType = FrameType_audioFrame; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FrameType_tcpFrame
 * @constant
 * @type {number}
 */
export
const FrameType_tcpFrame: FrameType = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tcpFrame
 * @constant
 * @type {number}
 */
export
const tcpFrame: FrameType = FrameType_tcpFrame; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FrameType_artificialRtpFrame
 * @constant
 * @type {number}
 */
export
const FrameType_artificialRtpFrame: FrameType = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary artificialRtpFrame
 * @constant
 * @type {number}
 */
export
const artificialRtpFrame: FrameType = FrameType_artificialRtpFrame; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FrameType_udptlFrame
 * @constant
 * @type {number}
 */
export
const FrameType_udptlFrame: FrameType = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary udptlFrame
 * @constant
 * @type {number}
 */
export
const udptlFrame: FrameType = FrameType_udptlFrame; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FrameType_msrpFrame
 * @constant
 * @type {number}
 */
export
const FrameType_msrpFrame: FrameType = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary msrpFrame
 * @constant
 * @type {number}
 */
export
const msrpFrame: FrameType = FrameType_msrpFrame; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_FrameType: $.ASN1Decoder<FrameType> = $._decodeEnumerated;
export const _encode_FrameType: $.ASN1Encoder<FrameType> = $._encodeEnumerated;


/* eslint-enable */
