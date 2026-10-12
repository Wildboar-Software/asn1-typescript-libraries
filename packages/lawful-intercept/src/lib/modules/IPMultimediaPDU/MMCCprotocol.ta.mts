/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_MMCCprotocol {
    rTP = 0,
    mSRP = 1,
    uDPTL = 2,
}

/**
 * @summary MMCCprotocol
 * @description
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
 * @constant
 * @type {number}
 */
export
const MMCCprotocol_rTP: MMCCprotocol = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rTP
 * @constant
 * @type {number}
 */
export
const rTP: MMCCprotocol = MMCCprotocol_rTP; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMCCprotocol_mSRP
 * @constant
 * @type {number}
 */
export
const MMCCprotocol_mSRP: MMCCprotocol = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mSRP
 * @constant
 * @type {number}
 */
export
const mSRP: MMCCprotocol = MMCCprotocol_mSRP; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMCCprotocol_uDPTL
 * @constant
 * @type {number}
 */
export
const MMCCprotocol_uDPTL: MMCCprotocol = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uDPTL
 * @constant
 * @type {number}
 */
export
const uDPTL: MMCCprotocol = MMCCprotocol_uDPTL; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MMCCprotocol: $.ASN1Decoder<MMCCprotocol> = $._decodeEnumerated;
export const _encode_MMCCprotocol: $.ASN1Encoder<MMCCprotocol> = $._encodeEnumerated;


/* eslint-enable */
