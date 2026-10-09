/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";
// export { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";


/**
 * @summary UserInfo_1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserInfo-1  ::=  OtherInformation
 * ```
 */
export
type UserInfo_1 = OtherInformation; // DefinedType

let _cached_decoder_for_UserInfo_1: $.ASN1Decoder<UserInfo_1> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UserInfo_1
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UserInfo_1 (el: _Element): UserInfo_1 {
    if (!_cached_decoder_for_UserInfo_1) { _cached_decoder_for_UserInfo_1 = _decode_OtherInformation; }
    return _cached_decoder_for_UserInfo_1(el);
}

let _cached_encoder_for_UserInfo_1: $.ASN1Encoder<UserInfo_1> | null = null;

/**
 * @summary Encodes a(n) UserInfo_1 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserInfo_1, encoded as an ASN.1 Element.
 */
export
function _encode_UserInfo_1 (value: UserInfo_1, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UserInfo_1) { _cached_encoder_for_UserInfo_1 = _encode_OtherInformation; }
    return _cached_encoder_for_UserInfo_1(value, elGetter);
}


/* eslint-enable */
