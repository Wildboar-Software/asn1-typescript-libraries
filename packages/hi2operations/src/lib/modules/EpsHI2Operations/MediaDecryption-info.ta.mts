/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CCKeyInfo, _decode_CCKeyInfo, _encode_CCKeyInfo } from "../EpsHI2Operations/CCKeyInfo.ta.mjs";
// export { CCKeyInfo, _decode_CCKeyInfo, _encode_CCKeyInfo } from "../EpsHI2Operations/CCKeyInfo.ta.mjs";


/**
 * @summary MediaDecryption_info
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaDecryption-info  ::=  SEQUENCE OF CCKeyInfo
 * ```
 */
export
type MediaDecryption_info = CCKeyInfo[]; // SequenceOfType

let _cached_decoder_for_MediaDecryption_info: $.ASN1Decoder<MediaDecryption_info> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MediaDecryption_info
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MediaDecryption_info (el: _Element): MediaDecryption_info {
    if (!_cached_decoder_for_MediaDecryption_info) { _cached_decoder_for_MediaDecryption_info = $._decodeSequenceOf<CCKeyInfo>(() => _decode_CCKeyInfo); }
    return _cached_decoder_for_MediaDecryption_info(el);
}

let _cached_encoder_for_MediaDecryption_info: $.ASN1Encoder<MediaDecryption_info> | null = null;

/**
 * @summary Encodes a(n) MediaDecryption_info into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MediaDecryption_info, encoded as an ASN.1 Element.
 */
export
function _encode_MediaDecryption_info (value: MediaDecryption_info, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MediaDecryption_info) { _cached_encoder_for_MediaDecryption_info = $._encodeSequenceOf<CCKeyInfo>(() => _encode_CCKeyInfo, $.BER); }
    return _cached_encoder_for_MediaDecryption_info(value, elGetter);
}


/* eslint-enable */
