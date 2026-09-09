/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OCTET_STRING, ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";



/**
 * @summary UserData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserData  ::=  [APPLICATION 29] OCTET STRING
 * ```
 */
export
type UserData = OCTET_STRING; // OctetStringType

let _cached_decoder_for_UserData: $.ASN1Decoder<UserData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UserData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UserData (el: _Element): UserData {
    if (!_cached_decoder_for_UserData) { _cached_decoder_for_UserData = $._decode_implicit<UserData>(() => $._decodeOctetString); }
    return _cached_decoder_for_UserData(el);
}

let _cached_encoder_for_UserData: $.ASN1Encoder<UserData> | null = null;

/**
 * @summary Encodes a(n) UserData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserData, encoded as an ASN.1 Element.
 */
export
function _encode_UserData (value: UserData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UserData) { _cached_encoder_for_UserData = $._encode_implicit(_TagClass.application, 29, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_UserData(value, elGetter);
}


/* eslint-enable */
