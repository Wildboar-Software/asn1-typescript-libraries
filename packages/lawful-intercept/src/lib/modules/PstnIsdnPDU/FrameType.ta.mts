/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_FrameType {
    ipFrame = 0,
    udpFrame = 1,
    applicationFrame = 2,
    audioFrame = 3,
    artificialRtpFrame = 4,
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
 *         -- All headers are present. Use AlternateProtocol to signal the contents if not RTP
 *     udpFrame(1),
 *         -- IP header is missing. Use AlternateProtocol to signal the contents if not RTP
 *     applicationFrame(2),
 *         -- UDP and IP headers are missing. Use AlternateProtocol to signal the contents if not RTP
 *     audioFrame(3),
 *         -- All headers are missing
 *     ...,
 *     artificialRtpFrame(4)
 *         -- UDP and IP headers are missing, artificial RTP frame has been added
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
 * @summary FrameType_applicationFrame
 * @constant
 * @type {number}
 */
export
const FrameType_applicationFrame: FrameType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary applicationFrame
 * @constant
 * @type {number}
 */
export
const applicationFrame: FrameType = FrameType_applicationFrame; /* SHORT_NAMED_ENUMERATED_VALUE */

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
 * @summary FrameType_artificialRtpFrame
 * @constant
 * @type {number}
 */
export
const FrameType_artificialRtpFrame: FrameType = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary artificialRtpFrame
 * @constant
 * @type {number}
 */
export
const artificialRtpFrame: FrameType = FrameType_artificialRtpFrame; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_FrameType: $.ASN1Decoder<FrameType> = $._decodeEnumerated;
export const _encode_FrameType: $.ASN1Encoder<FrameType> = $._encodeEnumerated;


/* eslint-enable */
