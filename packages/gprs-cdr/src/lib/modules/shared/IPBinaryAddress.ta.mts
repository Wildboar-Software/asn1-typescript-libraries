/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type IPBinV6AddressWithOrWithoutPrefixLength, _decode_IPBinV6AddressWithOrWithoutPrefixLength, _encode_IPBinV6AddressWithOrWithoutPrefixLength } from "./IPBinV6AddressWithOrWithoutPrefixLength.ta.mjs";


/**
 * @summary IPBinaryAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPBinaryAddress  ::=  CHOICE {
 *    iPBinV4Address     [0] IMPLICIT OCTET STRING ( SIZE( 4 ) ),
 *    iPBinV6Address     IPBinV6AddressWithOrWithoutPrefixLength}
 * ```
 */
export
type IPBinaryAddress =
    { iPBinV4Address: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { iPBinV6Address: IPBinV6AddressWithOrWithoutPrefixLength } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_IPBinaryAddress: $.ASN1Decoder<IPBinaryAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPBinaryAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPBinaryAddress (el: _Element): IPBinaryAddress {
    if (!_cached_decoder_for_IPBinaryAddress) { _cached_decoder_for_IPBinaryAddress = $._decode_inextensible_choice<IPBinaryAddress>({
    "CONTEXT 0": [ "iPBinV4Address", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 1": [ "iPBinV6Address", _decode_IPBinV6AddressWithOrWithoutPrefixLength ],
    "CONTEXT 4": [ "iPBinV6Address", _decode_IPBinV6AddressWithOrWithoutPrefixLength ]
}); }
    const _decoded_IPBinaryAddress = _cached_decoder_for_IPBinaryAddress(el);
    if ("iPBinV4Address" in _decoded_IPBinaryAddress && (_decoded_IPBinaryAddress.iPBinV4Address.length !== 4)) {
        throw new ASN1SizeError("IPBinaryAddress.iPBinV4Address violates SIZE constraint");
    }
    return _decoded_IPBinaryAddress;
}

let _cached_encoder_for_IPBinaryAddress: $.ASN1Encoder<IPBinaryAddress> | null = null;

/**
 * @summary Encodes a(n) IPBinaryAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPBinaryAddress, encoded as an ASN.1 Element.
 */
export
function _encode_IPBinaryAddress (value: IPBinaryAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPBinaryAddress) { _cached_encoder_for_IPBinaryAddress = $._encode_choice<IPBinaryAddress>({
    "iPBinV4Address": $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER),
    "iPBinV6Address": _encode_IPBinV6AddressWithOrWithoutPrefixLength,
}, $.BER); }
    return _cached_encoder_for_IPBinaryAddress(value, elGetter);
}


/* eslint-enable */
