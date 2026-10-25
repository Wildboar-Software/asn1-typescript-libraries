/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @description
 *
 * Which headers are present in `pstnIsdnCCContents`. Omit this when the
 * application header, the UDP header, and the IP header are all present.
 * The application protocols this specification supports are RTP and UDPTL
 * (ITU-T T.38).
 *
 * The mediation function does not insert IP or UDP headers that were missing
 * at interception. It may insert an RTP header, by agreement with the LEA,
 * when the original RTP header is unavailable; that case is
 * `artificialRtpFrame`. The enumeration is not closed.
 *
 * ETSI TS 102 232-6 V3.5.1 (2023-03), clause 6.2 and annex A.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223206/03.05.01_60/ts_10223206v030501p.pdf
 */
export
enum _enum_for_FrameType {
    /**
     * Application, UDP, and IP headers are all present. If the payload is not
     * RTP, `alternateProtocol` identifies it.
     *
     * ETSI TS 102 232-6 V3.5.1 (2023-03), clause 6.2 and annex A.
     */
    ipFrame = 0,
    /**
     * The IP header is missing. The UDP header and the application header are
     * present. If the payload is not RTP, `alternateProtocol` identifies it.
     *
     * ETSI TS 102 232-6 V3.5.1 (2023-03), clause 6.2 and annex A.
     */
    udpFrame = 1,
    /**
     * The UDP and IP headers are missing. The application header is present.
     * If the payload is not RTP, `alternateProtocol` identifies it.
     *
     * ETSI TS 102 232-6 V3.5.1 (2023-03), clause 6.2 and annex A.
     */
    applicationFrame = 2,
    /**
     * The application, UDP, and IP headers are all missing. What remains is
     * the media payload.
     *
     * ETSI TS 102 232-6 V3.5.1 (2023-03), clause 6.2 and annex A.
     */
    audioFrame = 3,
    /**
     * The UDP and IP headers are missing, and the mediation function has
     * inserted an RTP header because the original was unavailable. Insertion
     * is by agreement between CSP and LEA. The inserted header shall still
     * accurately describe the target communication. IP and UDP headers are
     * not inserted to fill the gap.
     *
     * ETSI TS 102 232-6 V3.5.1 (2023-03), clause 6.2 and annex A.
     */
    artificialRtpFrame = 4,
}

/**
 * @summary FrameType
 * @description
 *
 * Which headers are present in `pstnIsdnCCContents`. Omit this when the
 * application header, the UDP header, and the IP header are all present.
 * The application protocols this specification supports are RTP and UDPTL
 * (ITU-T T.38).
 *
 * The mediation function does not insert IP or UDP headers that were missing
 * at interception. It may insert an RTP header, by agreement with the LEA,
 * when the original RTP header is unavailable; that case is
 * `artificialRtpFrame`. The enumeration is not closed.
 *
 * ETSI TS 102 232-6 V3.5.1 (2023-03), clause 6.2 and annex A.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223206/03.05.01_60/ts_10223206v030501p.pdf
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
 * @description
 *
 * Application, UDP, and IP headers are all present. If the payload is not
 * RTP, `alternateProtocol` identifies it.
 *
 * ETSI TS 102 232-6 V3.5.1 (2023-03), clause 6.2 and annex A.
 *
 * @constant
 * @type {number}
 */
export
const FrameType_ipFrame = _enum_for_FrameType.ipFrame satisfies FrameType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ipFrame
 * @description
 *
 * Application, UDP, and IP headers are all present. If the payload is not
 * RTP, `alternateProtocol` identifies it.
 *
 * ETSI TS 102 232-6 V3.5.1 (2023-03), clause 6.2 and annex A.
 *
 * @constant
 * @type {number}
 */
export
const ipFrame = FrameType_ipFrame satisfies FrameType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FrameType_udpFrame
 * @description
 *
 * The IP header is missing. The UDP header and the application header are
 * present. If the payload is not RTP, `alternateProtocol` identifies it.
 *
 * ETSI TS 102 232-6 V3.5.1 (2023-03), clause 6.2 and annex A.
 *
 * @constant
 * @type {number}
 */
export
const FrameType_udpFrame = _enum_for_FrameType.udpFrame satisfies FrameType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary udpFrame
 * @description
 *
 * The IP header is missing. The UDP header and the application header are
 * present. If the payload is not RTP, `alternateProtocol` identifies it.
 *
 * ETSI TS 102 232-6 V3.5.1 (2023-03), clause 6.2 and annex A.
 *
 * @constant
 * @type {number}
 */
export
const udpFrame = FrameType_udpFrame satisfies FrameType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FrameType_applicationFrame
 * @description
 *
 * The UDP and IP headers are missing. The application header is present.
 * If the payload is not RTP, `alternateProtocol` identifies it.
 *
 * ETSI TS 102 232-6 V3.5.1 (2023-03), clause 6.2 and annex A.
 *
 * @constant
 * @type {number}
 */
export
const FrameType_applicationFrame = _enum_for_FrameType.applicationFrame satisfies FrameType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary applicationFrame
 * @description
 *
 * The UDP and IP headers are missing. The application header is present.
 * If the payload is not RTP, `alternateProtocol` identifies it.
 *
 * ETSI TS 102 232-6 V3.5.1 (2023-03), clause 6.2 and annex A.
 *
 * @constant
 * @type {number}
 */
export
const applicationFrame = FrameType_applicationFrame satisfies FrameType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FrameType_audioFrame
 * @description
 *
 * The application, UDP, and IP headers are all missing. What remains is the
 * media payload.
 *
 * ETSI TS 102 232-6 V3.5.1 (2023-03), clause 6.2 and annex A.
 *
 * @constant
 * @type {number}
 */
export
const FrameType_audioFrame = _enum_for_FrameType.audioFrame satisfies FrameType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary audioFrame
 * @description
 *
 * The application, UDP, and IP headers are all missing. What remains is the
 * media payload.
 *
 * ETSI TS 102 232-6 V3.5.1 (2023-03), clause 6.2 and annex A.
 *
 * @constant
 * @type {number}
 */
export
const audioFrame = FrameType_audioFrame satisfies FrameType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FrameType_artificialRtpFrame
 * @description
 *
 * The UDP and IP headers are missing, and the mediation function has inserted
 * an RTP header because the original was unavailable. Insertion is by
 * agreement between CSP and LEA. The inserted header shall still accurately
 * describe the target communication.
 *
 * ETSI TS 102 232-6 V3.5.1 (2023-03), clause 6.2 and annex A.
 *
 * @constant
 * @type {number}
 */
export
const FrameType_artificialRtpFrame = _enum_for_FrameType.artificialRtpFrame satisfies FrameType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary artificialRtpFrame
 * @description
 *
 * The UDP and IP headers are missing, and the mediation function has inserted
 * an RTP header because the original was unavailable. Insertion is by
 * agreement between CSP and LEA. The inserted header shall still accurately
 * describe the target communication.
 *
 * ETSI TS 102 232-6 V3.5.1 (2023-03), clause 6.2 and annex A.
 *
 * @constant
 * @type {number}
 */
export
const artificialRtpFrame = FrameType_artificialRtpFrame satisfies FrameType; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_FrameType: $.ASN1Decoder<FrameType> = $._decodeEnumerated;
export const _encode_FrameType: $.ASN1Encoder<FrameType> = $._encodeEnumerated;


/* eslint-enable */
