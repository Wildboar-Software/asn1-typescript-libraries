/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPv4Information, _decode_IPv4Information, _encode_IPv4Information } from "../IPAccessPDU/IPv4Information.ta.mjs";
// export { IPv4Information, _decode_IPv4Information, _encode_IPv4Information } from "../IPAccessPDU/IPv4Information.ta.mjs";


/**
 * @summary IPInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPInformation  ::=  CHOICE
 * {
 *     iPv4Information     [0] IPv4Information,
 *     iPv6Information     [1] IPv6Information
 * }
 * ```
 */
export
type IPInformation =
    { iPv4Information: IPv4Information } /* CHOICE_ALT_ROOT */
    | { iPv6Information: IPv6Information } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_IPInformation: $.ASN1Decoder<IPInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPInformation (el: _Element): IPInformation {
    if (!_cached_decoder_for_IPInformation) { _cached_decoder_for_IPInformation = $._decode_inextensible_choice<IPInformation>({
    "CONTEXT 0": [ "iPv4Information", $._decode_implicit<IPv4Information>(() => _decode_IPv4Information) ],
    "CONTEXT 1": [ "iPv6Information", $._decode_implicit<IPv6Information>(() => _decode_IPv6Information) ]
}); }
    return _cached_decoder_for_IPInformation(el);
}

let _cached_encoder_for_IPInformation: $.ASN1Encoder<IPInformation> | null = null;

/**
 * @summary Encodes a(n) IPInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPInformation, encoded as an ASN.1 Element.
 */
export
function _encode_IPInformation (value: IPInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPInformation) { _cached_encoder_for_IPInformation = $._encode_choice<IPInformation>({
    "iPv4Information": $._encode_implicit(_TagClass.context, 0, () => _encode_IPv4Information, $.BER),
    "iPv6Information": $._encode_implicit(_TagClass.context, 1, () => _encode_IPv6Information, $.BER),
}, $.BER); }
    return _cached_encoder_for_IPInformation(value, elGetter);
}


/* eslint-enable */
