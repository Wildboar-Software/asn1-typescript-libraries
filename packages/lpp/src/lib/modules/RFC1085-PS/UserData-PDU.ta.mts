/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UserData_PDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UserData-PDU ::= [5] ANY
 * -- this is the ASN.1 object
 * -- if it is a top-level PDU, it
 * -- is in PCI #1, otherwise PCI #3
 * ```
 */
export
type UserData_PDU = _Element; // AnyType

let _cached_decoder_for_UserData_PDU: $.ASN1Decoder<UserData_PDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UserData_PDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UserData_PDU (el: _Element): UserData_PDU {
    if (!_cached_decoder_for_UserData_PDU) { _cached_decoder_for_UserData_PDU = $._decode_explicit<UserData_PDU>(() => $._decodeAny); }
    return _cached_decoder_for_UserData_PDU(el);
}

let _cached_encoder_for_UserData_PDU: $.ASN1Encoder<UserData_PDU> | null = null;

/**
 * @summary Encodes a(n) UserData_PDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserData_PDU, encoded as an ASN.1 Element.
 */
export
function _encode_UserData_PDU (value: UserData_PDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UserData_PDU) { _cached_encoder_for_UserData_PDU = $._encode_explicit(_TagClass.context, 5, () => $._encodeAny, $.BER); }
    return _cached_encoder_for_UserData_PDU(value, elGetter);
}


/* eslint-enable */
