/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @description
 *
 * Which headers are present in one `IPMMCC.mMCCContents` packet.
 *
 * RTP content normally includes the RTP, UDP, and IP headers. UDPTL
 * follows the same principle. MSRP content includes the TCP header.
 * The mediation function does not insert missing IP, UDP, or TCP
 * headers. An inserted RTP header is a separate value. New
 * implementations shall set `IPMMCC.frameType` (clause 5.5).
 *
 * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223205/03.22.01_60/ts_10223205v032201p.pdf
 */
export
enum _enum_for_FrameType {
    /**
     * IP, UDP or TCP, and the media header are all present.
     *
     * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
     */
    ipFrame = 0,
    /**
     * The IP header is missing. The UDP header remains.
     *
     * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
     */
    udpFrame = 1,
    /**
     * The UDP and IP headers are missing. The RTP header remains.
     *
     * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
     */
    rtpFrame = 2,
    /**
     * No IP, UDP, or RTP header is present. With `mMCCprotocol` absent,
     * `mMCCContents` is this audio frame.
     *
     * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
     */
    audioFrame = 3,
    /**
     * The IP header is missing. The TCP header remains.
     *
     * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
     */
    tcpFrame = 4,
    /**
     * The UDP and IP headers are missing, and the mediation function
     * has inserted an RTP header because the original RTP header was
     * unavailable. Insertion is by agreement between CSP and LEA, and
     * is intended to help the receiver process the audio. IP and UDP
     * headers are not invented in the same way.
     *
     * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
     */
    artificialRtpFrame = 5,
    /**
     * The UDP and IP headers are missing. The UDPTL payload (ITU-T
     * T.38 facsimile) remains. UDPTL content otherwise follows the same
     * header rules as RTP.
     *
     * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
     */
    udptlFrame = 6,
    /**
     * The TCP and IP headers are missing. Used when the TCP header of
     * an MSRP payload is not available at the point of interception.
     * When the TCP header is available, MSRP content includes it.
     *
     * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
     */
    msrpFrame = 7,
}

/**
 * @summary FrameType
 * @description
 *
 * Which headers are present in one `IPMMCC.mMCCContents` packet.
 *
 * RTP content normally includes the RTP, UDP, and IP headers. UDPTL
 * follows the same principle. MSRP content includes the TCP header.
 * The mediation function does not insert missing IP, UDP, or TCP
 * headers. An inserted RTP header is a separate value. New
 * implementations shall set `IPMMCC.frameType` (clause 5.5).
 *
 * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223205/03.22.01_60/ts_10223205v032201p.pdf
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
 * @description
 *
 * IP, UDP or TCP, and the media header are all present.
 *
 * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
 *
 * @constant
 * @type {number}
 */
export
const FrameType_ipFrame: _enum_for_FrameType.ipFrame = _enum_for_FrameType.ipFrame; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ipFrame
 * @description
 *
 * IP, UDP or TCP, and the media header are all present.
 *
 * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
 *
 * @constant
 * @type {number}
 */
export
const ipFrame: _enum_for_FrameType.ipFrame = FrameType_ipFrame; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FrameType_udpFrame
 * @description
 *
 * The IP header is missing. The UDP header remains.
 *
 * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
 *
 * @constant
 * @type {number}
 */
export
const FrameType_udpFrame: _enum_for_FrameType.udpFrame = _enum_for_FrameType.udpFrame; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary udpFrame
 * @description
 *
 * The IP header is missing. The UDP header remains.
 *
 * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
 *
 * @constant
 * @type {number}
 */
export
const udpFrame: _enum_for_FrameType.udpFrame = FrameType_udpFrame; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FrameType_rtpFrame
 * @description
 *
 * The UDP and IP headers are missing. The RTP header remains.
 *
 * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
 *
 * @constant
 * @type {number}
 */
export
const FrameType_rtpFrame: _enum_for_FrameType.rtpFrame = _enum_for_FrameType.rtpFrame; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rtpFrame
 * @description
 *
 * The UDP and IP headers are missing. The RTP header remains.
 *
 * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
 *
 * @constant
 * @type {number}
 */
export
const rtpFrame: _enum_for_FrameType.rtpFrame = FrameType_rtpFrame; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FrameType_audioFrame
 * @description
 *
 * No IP, UDP, or RTP header is present. With `mMCCprotocol` absent,
 * `mMCCContents` is this audio frame.
 *
 * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
 *
 * @constant
 * @type {number}
 */
export
const FrameType_audioFrame: _enum_for_FrameType.audioFrame = _enum_for_FrameType.audioFrame; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary audioFrame
 * @description
 *
 * No IP, UDP, or RTP header is present. With `mMCCprotocol` absent,
 * `mMCCContents` is this audio frame.
 *
 * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
 *
 * @constant
 * @type {number}
 */
export
const audioFrame: _enum_for_FrameType.audioFrame = FrameType_audioFrame; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FrameType_tcpFrame
 * @description
 *
 * The IP header is missing. The TCP header remains.
 *
 * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
 *
 * @constant
 * @type {number}
 */
export
const FrameType_tcpFrame: _enum_for_FrameType.tcpFrame = _enum_for_FrameType.tcpFrame; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tcpFrame
 * @description
 *
 * The IP header is missing. The TCP header remains.
 *
 * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
 *
 * @constant
 * @type {number}
 */
export
const tcpFrame: _enum_for_FrameType.tcpFrame = FrameType_tcpFrame; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FrameType_artificialRtpFrame
 * @description
 *
 * The UDP and IP headers are missing, and the mediation function has
 * inserted an RTP header because the original RTP header was
 * unavailable. Insertion is by agreement between CSP and LEA. IP and
 * UDP headers are not invented in the same way.
 *
 * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
 *
 * @constant
 * @type {number}
 */
export
const FrameType_artificialRtpFrame: _enum_for_FrameType.artificialRtpFrame = _enum_for_FrameType.artificialRtpFrame; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary artificialRtpFrame
 * @description
 *
 * The UDP and IP headers are missing, and the mediation function has
 * inserted an RTP header because the original RTP header was
 * unavailable. Insertion is by agreement between CSP and LEA. IP and
 * UDP headers are not invented in the same way.
 *
 * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
 *
 * @constant
 * @type {number}
 */
export
const artificialRtpFrame: _enum_for_FrameType.artificialRtpFrame = FrameType_artificialRtpFrame; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FrameType_udptlFrame
 * @description
 *
 * The UDP and IP headers are missing. The UDPTL payload (ITU-T T.38
 * facsimile) remains. UDPTL content otherwise follows the same header
 * rules as RTP.
 *
 * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
 *
 * @constant
 * @type {number}
 */
export
const FrameType_udptlFrame: _enum_for_FrameType.udptlFrame = _enum_for_FrameType.udptlFrame; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary udptlFrame
 * @description
 *
 * The UDP and IP headers are missing. The UDPTL payload (ITU-T T.38
 * facsimile) remains. UDPTL content otherwise follows the same header
 * rules as RTP.
 *
 * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
 *
 * @constant
 * @type {number}
 */
export
const udptlFrame: _enum_for_FrameType.udptlFrame = FrameType_udptlFrame; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FrameType_msrpFrame
 * @description
 *
 * The TCP and IP headers are missing. Used when the TCP header of an
 * MSRP payload is not available at the point of interception. When the
 * TCP header is available, MSRP content includes it.
 *
 * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
 *
 * @constant
 * @type {number}
 */
export
const FrameType_msrpFrame: _enum_for_FrameType.msrpFrame = _enum_for_FrameType.msrpFrame; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary msrpFrame
 * @description
 *
 * The TCP and IP headers are missing. Used when the TCP header of an
 * MSRP payload is not available at the point of interception. When the
 * TCP header is available, MSRP content includes it.
 *
 * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
 *
 * @constant
 * @type {number}
 */
export
const msrpFrame: _enum_for_FrameType.msrpFrame = FrameType_msrpFrame; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_FrameType: $.ASN1Decoder<FrameType> = $._decodeEnumerated;
export const _encode_FrameType: $.ASN1Encoder<FrameType> = $._encodeEnumerated;


/* eslint-enable */
