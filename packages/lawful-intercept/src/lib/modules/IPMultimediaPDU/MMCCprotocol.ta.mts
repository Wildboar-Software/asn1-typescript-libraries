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

let _cached_decoder_for_MMCCprotocol: $.ASN1Decoder<MMCCprotocol> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMCCprotocol
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMCCprotocol (el: _Element): MMCCprotocol {
    if (!_cached_decoder_for_MMCCprotocol) { _cached_decoder_for_MMCCprotocol = $._decodeEnumerated; }
    return _cached_decoder_for_MMCCprotocol(el);
}

let _cached_encoder_for_MMCCprotocol: $.ASN1Encoder<MMCCprotocol> | null = null;

/**
 * @summary Encodes a(n) MMCCprotocol into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMCCprotocol, encoded as an ASN.1 Element.
 */
export
function _encode_MMCCprotocol (value: MMCCprotocol, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMCCprotocol) { _cached_encoder_for_MMCCprotocol = $._encodeEnumerated; }
    return _cached_encoder_for_MMCCprotocol(value, elGetter);
}


/* eslint-enable */
