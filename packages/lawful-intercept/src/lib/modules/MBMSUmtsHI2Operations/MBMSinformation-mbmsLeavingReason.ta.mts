/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_MBMSinformation_mbmsLeavingReason {
    uEinitiatedRequested = 0,
    bMSCorNetworkTerminated = 1,
}

/**
 * @summary MBMSinformation_mbmsLeavingReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSinformation-mbmsLeavingReason ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type MBMSinformation_mbmsLeavingReason = _enum_for_MBMSinformation_mbmsLeavingReason | ENUMERATED;

/**
 * @summary MBMSinformation_mbmsLeavingReason_uEinitiatedRequested
 * @constant
 * @type {number}
 */
export
const MBMSinformation_mbmsLeavingReason_uEinitiatedRequested: MBMSinformation_mbmsLeavingReason = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEinitiatedRequested
 * @constant
 * @type {number}
 */
export
const uEinitiatedRequested: MBMSinformation_mbmsLeavingReason = MBMSinformation_mbmsLeavingReason_uEinitiatedRequested; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MBMSinformation_mbmsLeavingReason_bMSCorNetworkTerminated
 * @constant
 * @type {number}
 */
export
const MBMSinformation_mbmsLeavingReason_bMSCorNetworkTerminated: MBMSinformation_mbmsLeavingReason = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bMSCorNetworkTerminated
 * @constant
 * @type {number}
 */
export
const bMSCorNetworkTerminated: MBMSinformation_mbmsLeavingReason = MBMSinformation_mbmsLeavingReason_bMSCorNetworkTerminated; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MBMSinformation_mbmsLeavingReason: $.ASN1Decoder<MBMSinformation_mbmsLeavingReason> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MBMSinformation_mbmsLeavingReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MBMSinformation_mbmsLeavingReason (el: _Element): MBMSinformation_mbmsLeavingReason {
    if (!_cached_decoder_for_MBMSinformation_mbmsLeavingReason) { _cached_decoder_for_MBMSinformation_mbmsLeavingReason = $._decodeEnumerated; }
    return _cached_decoder_for_MBMSinformation_mbmsLeavingReason(el);
}

let _cached_encoder_for_MBMSinformation_mbmsLeavingReason: $.ASN1Encoder<MBMSinformation_mbmsLeavingReason> | null = null;

/**
 * @summary Encodes a(n) MBMSinformation_mbmsLeavingReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MBMSinformation_mbmsLeavingReason, encoded as an ASN.1 Element.
 */
export
function _encode_MBMSinformation_mbmsLeavingReason (value: MBMSinformation_mbmsLeavingReason, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MBMSinformation_mbmsLeavingReason) { _cached_encoder_for_MBMSinformation_mbmsLeavingReason = $._encodeEnumerated; }
    return _cached_encoder_for_MBMSinformation_mbmsLeavingReason(value, elGetter);
}


/* eslint-enable */
