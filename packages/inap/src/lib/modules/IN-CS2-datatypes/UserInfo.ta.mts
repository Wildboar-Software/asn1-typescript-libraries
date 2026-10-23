/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UserInformation, _decode_UserInformation, _encode_UserInformation } from "../IN-CS2-datatypes/UserInformation.ta.mjs";
// export { UserInformation, _decode_UserInformation, _encode_UserInformation } from "../IN-CS2-datatypes/UserInformation.ta.mjs";


/**
 * @summary UserInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserInfo  ::=  SEQUENCE OF UserInformation
 * ```
 */
export
type UserInfo = UserInformation[]; // SequenceOfType

let _cached_decoder_for_UserInfo: $.ASN1Decoder<UserInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UserInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UserInfo (el: _Element): UserInfo {
    if (!_cached_decoder_for_UserInfo) { _cached_decoder_for_UserInfo = $._decodeSequenceOf<UserInformation>(() => _decode_UserInformation); }
    return _cached_decoder_for_UserInfo(el);
}

let _cached_encoder_for_UserInfo: $.ASN1Encoder<UserInfo> | null = null;

/**
 * @summary Encodes a(n) UserInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserInfo, encoded as an ASN.1 Element.
 */
export
function _encode_UserInfo (value: UserInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UserInfo) { _cached_encoder_for_UserInfo = $._encodeSequenceOf<UserInformation>(() => _encode_UserInformation, $.BER); }
    return _cached_encoder_for_UserInfo(value, elGetter);
}


/* eslint-enable */
