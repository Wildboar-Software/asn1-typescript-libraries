/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPv4Address, _decode_IPv4Address, _encode_IPv4Address } from "../TS33128Payloads/IPv4Address.ta.mjs";
// export { IPv4Address, _decode_IPv4Address, _encode_IPv4Address } from "../TS33128Payloads/IPv4Address.ta.mjs";
import { IPv6Address, _decode_IPv6Address, _encode_IPv6Address } from "../TS33128Payloads/IPv6Address.ta.mjs";
// export { IPv6Address, _decode_IPv6Address, _encode_IPv6Address } from "../TS33128Payloads/IPv6Address.ta.mjs";
import { MACAddress, _decode_MACAddress, _encode_MACAddress } from "../TS33128Payloads/MACAddress.ta.mjs";
// export { MACAddress, _decode_MACAddress, _encode_MACAddress } from "../TS33128Payloads/MACAddress.ta.mjs";


/**
 * @summary UEEndpointAddress
 * @description
 * 
 * UE's local IP address used to reach the ePDG, if present in the network
 * message (see TS 29.274 [87] clauses 7.2.4, 7.2.7 and 7.2.16) or known at the
 * context at the SGW or PGW.
 *
 * 3GPP TS 33.128, clause 6.3.3.2.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UEEndpointAddress  ::=  CHOICE
 * {
 *     iPv4Address         [1] IPv4Address,
 *     iPv6Address         [2] IPv6Address,
 *     ethernetAddress     [3] MACAddress
 * }
 * ```
 */
export
type UEEndpointAddress =
    /**
     * @description
     *
     * The IPv4 address being reported in binary representation. (3GPP TS
     * 33.128, clause 8.2.)
     */
    { iPv4Address: IPv4Address } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * The IPv6 address being reported in binary representation. (3GPP TS
     * 33.128, clause 8.2.)
     */
    | { iPv6Address: IPv6Address } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * Derived from a MAC address defined in IETF RFC 7042 [126]. (3GPP TS
     * 33.128, clause 8.3.3.)
     */
    | { ethernetAddress: MACAddress } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_UEEndpointAddress: $.ASN1Decoder<UEEndpointAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UEEndpointAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UEEndpointAddress (el: _Element): UEEndpointAddress {
    if (!_cached_decoder_for_UEEndpointAddress) { _cached_decoder_for_UEEndpointAddress = $._decode_extensible_choice<UEEndpointAddress>({
    "CONTEXT 1": [ "iPv4Address", $._decode_implicit<IPv4Address>(() => _decode_IPv4Address) ],
    "CONTEXT 2": [ "iPv6Address", $._decode_implicit<IPv6Address>(() => _decode_IPv6Address) ],
    "CONTEXT 3": [ "ethernetAddress", $._decode_implicit<MACAddress>(() => _decode_MACAddress) ]
}); }
    return _cached_decoder_for_UEEndpointAddress(el);
}

let _cached_encoder_for_UEEndpointAddress: $.ASN1Encoder<UEEndpointAddress> | null = null;

/**
 * @summary Encodes a(n) UEEndpointAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UEEndpointAddress, encoded as an ASN.1 Element.
 */
export
function _encode_UEEndpointAddress (value: UEEndpointAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UEEndpointAddress) { _cached_encoder_for_UEEndpointAddress = $._encode_choice<UEEndpointAddress>({
    "iPv4Address": $._encode_implicit(_TagClass.context, 1, () => _encode_IPv4Address, $.BER),
    "iPv6Address": $._encode_implicit(_TagClass.context, 2, () => _encode_IPv6Address, $.BER),
    "ethernetAddress": $._encode_implicit(_TagClass.context, 3, () => _encode_MACAddress, $.BER),
}, $.BER); }
    return _cached_encoder_for_UEEndpointAddress(value, elGetter);
}


/* eslint-enable */
