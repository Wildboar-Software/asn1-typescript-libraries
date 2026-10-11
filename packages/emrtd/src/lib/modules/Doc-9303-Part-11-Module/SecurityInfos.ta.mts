/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SecurityInfo, _decode_SecurityInfo, _encode_SecurityInfo } from "../Doc-9303-Part-11-Module/SecurityInfo.ta.mjs";
// export { SecurityInfo, _decode_SecurityInfo, _encode_SecurityInfo } from "../Doc-9303-Part-11-Module/SecurityInfo.ta.mjs";


/**
 * @summary SecurityInfos
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityInfos  ::=  SET OF SecurityInfo
 * ```
 */
export
type SecurityInfos = SecurityInfo[]; // SetOfType

let _cached_decoder_for_SecurityInfos: $.ASN1Decoder<SecurityInfos> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityInfos
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SecurityInfos (el: _Element): SecurityInfos {
    if (!_cached_decoder_for_SecurityInfos) { _cached_decoder_for_SecurityInfos = $._decodeSetOf<SecurityInfo>(() => _decode_SecurityInfo); }
    return _cached_decoder_for_SecurityInfos(el);
}

let _cached_encoder_for_SecurityInfos: $.ASN1Encoder<SecurityInfos> | null = null;

/**
 * @summary Encodes a(n) SecurityInfos into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityInfos, encoded as an ASN.1 Element.
 */
export
function _encode_SecurityInfos (value: SecurityInfos, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SecurityInfos) { _cached_encoder_for_SecurityInfos = $._encodeSetOf<SecurityInfo>(() => _encode_SecurityInfo, $.BER); }
    return _cached_encoder_for_SecurityInfos(value, elGetter);
}


/* eslint-enable */
