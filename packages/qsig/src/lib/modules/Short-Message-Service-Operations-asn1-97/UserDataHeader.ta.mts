/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UserDataHeaderChoice, _decode_UserDataHeaderChoice, _encode_UserDataHeaderChoice } from "../Short-Message-Service-Operations-asn1-97/UserDataHeaderChoice.ta.mjs";

/**
 * @summary UserDataHeader
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserDataHeader  ::=  SEQUENCE OF UserDataHeaderChoice
 * ```
 */
export
type UserDataHeader = UserDataHeaderChoice[]; // SequenceOfType

let _cached_decoder_for_UserDataHeader: $.ASN1Decoder<UserDataHeader> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UserDataHeader
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UserDataHeader (el: _Element): UserDataHeader {
    if (!_cached_decoder_for_UserDataHeader) { _cached_decoder_for_UserDataHeader = $._decodeSequenceOf<UserDataHeaderChoice>(() => _decode_UserDataHeaderChoice); }
    return _cached_decoder_for_UserDataHeader(el);
}

let _cached_encoder_for_UserDataHeader: $.ASN1Encoder<UserDataHeader> | null = null;

/**
 * @summary Encodes a(n) UserDataHeader into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserDataHeader, encoded as an ASN.1 Element.
 */
export
function _encode_UserDataHeader (value: UserDataHeader, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UserDataHeader) { _cached_encoder_for_UserDataHeader = $._encodeSequenceOf<UserDataHeaderChoice>(() => _encode_UserDataHeaderChoice, $.BER); }
    return _cached_encoder_for_UserDataHeader(value, elGetter);
}

/* eslint-enable */
