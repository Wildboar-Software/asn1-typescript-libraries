/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ServerAddressingInfo, _decode_ServerAddressingInfo, _encode_ServerAddressingInfo } from "../TS33128Payloads/ServerAddressingInfo.ta.mjs";
// export { ServerAddressingInfo, _decode_ServerAddressingInfo, _encode_ServerAddressingInfo } from "../TS33128Payloads/ServerAddressingInfo.ta.mjs";


/**
 * @summary ServerAddressingInfoList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServerAddressingInfoList  ::=  SEQUENCE (SIZE(1..MAX)) OF ServerAddressingInfo
 * ```
 */
export
type ServerAddressingInfoList = ServerAddressingInfo[]; // SequenceOfType

let _cached_decoder_for_ServerAddressingInfoList: $.ASN1Decoder<ServerAddressingInfoList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServerAddressingInfoList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServerAddressingInfoList (el: _Element): ServerAddressingInfoList {
    if (!_cached_decoder_for_ServerAddressingInfoList) { _cached_decoder_for_ServerAddressingInfoList = $._decodeSequenceOf<ServerAddressingInfo>(() => _decode_ServerAddressingInfo); }
    return _cached_decoder_for_ServerAddressingInfoList(el);
}

let _cached_encoder_for_ServerAddressingInfoList: $.ASN1Encoder<ServerAddressingInfoList> | null = null;

/**
 * @summary Encodes a(n) ServerAddressingInfoList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServerAddressingInfoList, encoded as an ASN.1 Element.
 */
export
function _encode_ServerAddressingInfoList (value: ServerAddressingInfoList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServerAddressingInfoList) { _cached_encoder_for_ServerAddressingInfoList = $._encodeSequenceOf<ServerAddressingInfo>(() => _encode_ServerAddressingInfo, $.BER); }
    return _cached_encoder_for_ServerAddressingInfoList(value, elGetter);
}


/* eslint-enable */
