/* eslint-disable */
import {
    ASN1Element as _Element,
    EXTERNAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary User_information
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * User-information  ::=  EXTERNAL
 * ```
 */
export
type User_information = EXTERNAL; // ExternalType

let _cached_decoder_for_User_information: $.ASN1Decoder<User_information> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) User_information
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_User_information (el: _Element): User_information {
    if (!_cached_decoder_for_User_information) { _cached_decoder_for_User_information = $._decodeExternal; }
    return _cached_decoder_for_User_information(el);
}

let _cached_encoder_for_User_information: $.ASN1Encoder<User_information> | null = null;

/**
 * @summary Encodes a(n) User_information into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The User_information, encoded as an ASN.1 Element.
 */
export
function _encode_User_information (value: User_information, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_User_information) { _cached_encoder_for_User_information = $._encodeExternal; }
    return _cached_encoder_for_User_information(value, elGetter);
}


/* eslint-enable */
