/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @description
 *
 * Protocol of the packet in `IPMMCC.mMCCContents`.
 *
 * If `IPMMCC.mMCCprotocol` is absent, the packet is RTP/RTCP, or an
 * audio frame, as indicated by `frameType` (clause 5.5).
 *
 * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223205/03.22.01_60/ts_10223205v032201p.pdf
 */
export
enum _enum_for_MMCCprotocol {
    /**
     * `mMCCContents` contains RTP/RTCP packets (IETF RFC 3550).
     *
     * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
     */
    rTP = 0,
    /**
     * `mMCCContents` contains MSRP packets (IETF RFC 4975).
     *
     * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
     */
    mSRP = 1,
    /**
     * `mMCCContents` contains UDPTL packets (ITU-T T.38 facsimile).
     *
     * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
     */
    uDPTL = 2,
}

/**
 * @summary MMCCprotocol
 * @description
 *
 * Protocol of the packet in `IPMMCC.mMCCContents`.
 *
 * If `IPMMCC.mMCCprotocol` is absent, the packet is RTP/RTCP, or an
 * audio frame, as indicated by `frameType` (clause 5.5).
 *
 * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223205/03.22.01_60/ts_10223205v032201p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMCCprotocol  ::=  ENUMERATED
 * {
 *     rTP(0),
 *         -- mMCCContents parameter contains RTP/RTCP packets
 *     mSRP(1),
 *         -- mMCCContents parameter contains MSRP packets
 *     ...,
 *     uDPTL(2)
 *         -- mMCCContents parameter contains UDPTL packets
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMCCprotocol = _enum_for_MMCCprotocol | ENUMERATED;

/**
 * @summary MMCCprotocol_rTP
 * @description
 *
 * `mMCCContents` contains RTP/RTCP packets (IETF RFC 3550).
 *
 * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
 *
 * @constant
 * @type {number}
 */
export
const MMCCprotocol_rTP = _enum_for_MMCCprotocol.rTP satisfies MMCCprotocol; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rTP
 * @description
 *
 * `mMCCContents` contains RTP/RTCP packets (IETF RFC 3550).
 *
 * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
 *
 * @constant
 * @type {number}
 */
export
const rTP = MMCCprotocol_rTP satisfies MMCCprotocol; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMCCprotocol_mSRP
 * @description
 *
 * `mMCCContents` contains MSRP packets (IETF RFC 4975).
 *
 * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
 *
 * @constant
 * @type {number}
 */
export
const MMCCprotocol_mSRP = _enum_for_MMCCprotocol.mSRP satisfies MMCCprotocol; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mSRP
 * @description
 *
 * `mMCCContents` contains MSRP packets (IETF RFC 4975).
 *
 * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
 *
 * @constant
 * @type {number}
 */
export
const mSRP = MMCCprotocol_mSRP satisfies MMCCprotocol; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMCCprotocol_uDPTL
 * @description
 *
 * `mMCCContents` contains UDPTL packets (ITU-T T.38 facsimile).
 *
 * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
 *
 * @constant
 * @type {number}
 */
export
const MMCCprotocol_uDPTL = _enum_for_MMCCprotocol.uDPTL satisfies MMCCprotocol; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uDPTL
 * @description
 *
 * `mMCCContents` contains UDPTL packets (ITU-T T.38 facsimile).
 *
 * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.5.
 *
 * @constant
 * @type {number}
 */
export
const uDPTL = MMCCprotocol_uDPTL satisfies MMCCprotocol; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MMCCprotocol: $.ASN1Decoder<MMCCprotocol> = $._decodeEnumerated;
export const _encode_MMCCprotocol: $.ASN1Encoder<MMCCprotocol> = $._encodeEnumerated;


/* eslint-enable */
