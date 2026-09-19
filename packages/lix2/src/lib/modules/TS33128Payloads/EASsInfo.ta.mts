/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EASInfo, _decode_EASInfo, _encode_EASInfo } from "../TS33128Payloads/EASInfo.ta.mjs";
// export { EASInfo, _decode_EASInfo, _encode_EASInfo } from "../TS33128Payloads/EASInfo.ta.mjs";


/**
 * @summary EASsInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EASsInfo  ::=  SET OF EASInfo
 * ```
 */
export
type EASsInfo = EASInfo[]; // SetOfType

let _cached_decoder_for_EASsInfo: $.ASN1Decoder<EASsInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EASsInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EASsInfo (el: _Element): EASsInfo {
    if (!_cached_decoder_for_EASsInfo) { _cached_decoder_for_EASsInfo = $._decodeSetOf<EASInfo>(() => _decode_EASInfo); }
    return _cached_decoder_for_EASsInfo(el);
}

let _cached_encoder_for_EASsInfo: $.ASN1Encoder<EASsInfo> | null = null;

/**
 * @summary Encodes a(n) EASsInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EASsInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EASsInfo (value: EASsInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EASsInfo) { _cached_encoder_for_EASsInfo = $._encodeSetOf<EASInfo>(() => _encode_EASInfo, $.BER); }
    return _cached_encoder_for_EASsInfo(value, elGetter);
}


/* eslint-enable */
