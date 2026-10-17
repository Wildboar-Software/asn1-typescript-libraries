/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EESInfo, _decode_EESInfo, _encode_EESInfo } from "../TS33128Payloads/EESInfo.ta.mjs";
// export { EESInfo, _decode_EESInfo, _encode_EESInfo } from "../TS33128Payloads/EESInfo.ta.mjs";


/**
 * @summary EESsInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EESsInfo  ::=  SET OF EESInfo
 * ```
 */
export
type EESsInfo = EESInfo[]; // SetOfType

let _cached_decoder_for_EESsInfo: $.ASN1Decoder<EESsInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EESsInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EESsInfo (el: _Element): EESsInfo {
    if (!_cached_decoder_for_EESsInfo) { _cached_decoder_for_EESsInfo = $._decodeSetOf<EESInfo>(() => _decode_EESInfo); }
    return _cached_decoder_for_EESsInfo(el);
}

let _cached_encoder_for_EESsInfo: $.ASN1Encoder<EESsInfo> | null = null;

/**
 * @summary Encodes a(n) EESsInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EESsInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EESsInfo (value: EESsInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EESsInfo) { _cached_encoder_for_EESsInfo = $._encodeSetOf<EESInfo>(() => _encode_EESInfo, $.BER); }
    return _cached_encoder_for_EESsInfo(value, elGetter);
}


/* eslint-enable */
