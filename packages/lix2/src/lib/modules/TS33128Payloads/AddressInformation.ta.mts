/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPv4Address, _decode_IPv4Address, _encode_IPv4Address } from "../TS33128Payloads/IPv4Address.ta.mjs";
// export { IPv4Address, _decode_IPv4Address, _encode_IPv4Address } from "../TS33128Payloads/IPv4Address.ta.mjs";
import { IPv4AddressUDPPortRange, _decode_IPv4AddressUDPPortRange, _encode_IPv4AddressUDPPortRange } from "../TS33128Payloads/IPv4AddressUDPPortRange.ta.mjs";
// export { IPv4AddressUDPPortRange, _decode_IPv4AddressUDPPortRange, _encode_IPv4AddressUDPPortRange } from "../TS33128Payloads/IPv4AddressUDPPortRange.ta.mjs";
import { IPv4AddressTCPPortRange, _decode_IPv4AddressTCPPortRange, _encode_IPv4AddressTCPPortRange } from "../TS33128Payloads/IPv4AddressTCPPortRange.ta.mjs";
// export { IPv4AddressTCPPortRange, _decode_IPv4AddressTCPPortRange, _encode_IPv4AddressTCPPortRange } from "../TS33128Payloads/IPv4AddressTCPPortRange.ta.mjs";
import { IPv4AddressUDPTCPPortRange, _decode_IPv4AddressUDPTCPPortRange, _encode_IPv4AddressUDPTCPPortRange } from "../TS33128Payloads/IPv4AddressUDPTCPPortRange.ta.mjs";
// export { IPv4AddressUDPTCPPortRange, _decode_IPv4AddressUDPTCPPortRange, _encode_IPv4AddressUDPTCPPortRange } from "../TS33128Payloads/IPv4AddressUDPTCPPortRange.ta.mjs";
import { IPv6Address, _decode_IPv6Address, _encode_IPv6Address } from "../TS33128Payloads/IPv6Address.ta.mjs";
// export { IPv6Address, _decode_IPv6Address, _encode_IPv6Address } from "../TS33128Payloads/IPv6Address.ta.mjs";
import { MACAddress, _decode_MACAddress, _encode_MACAddress } from "../TS33128Payloads/MACAddress.ta.mjs";
// export { MACAddress, _decode_MACAddress, _encode_MACAddress } from "../TS33128Payloads/MACAddress.ta.mjs";


/**
 * @summary AddressInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AddressInformation  ::=  CHOICE
 * {
 *     iPv4Address                [1] IPv4Address,
 *     iPv4AddressUDPPortRange    [2] IPv4AddressUDPPortRange,
 *     iPv4AddressTCPPortRange    [3] IPv4AddressTCPPortRange,
 *     iPv4AddressUDPTCPPortRange [4] IPv4AddressUDPTCPPortRange,
 *     iPv6Address                [5] IPv6Address,
 *     ethernetAddress            [6] MACAddress
 * }
 * ```
 */
export
type AddressInformation =
    { iPv4Address: IPv4Address } /* CHOICE_ALT_ROOT */
    | { iPv4AddressUDPPortRange: IPv4AddressUDPPortRange } /* CHOICE_ALT_ROOT */
    | { iPv4AddressTCPPortRange: IPv4AddressTCPPortRange } /* CHOICE_ALT_ROOT */
    | { iPv4AddressUDPTCPPortRange: IPv4AddressUDPTCPPortRange } /* CHOICE_ALT_ROOT */
    | { iPv6Address: IPv6Address } /* CHOICE_ALT_ROOT */
    | { ethernetAddress: MACAddress } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AddressInformation: $.ASN1Decoder<AddressInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AddressInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AddressInformation (el: _Element): AddressInformation {
    if (!_cached_decoder_for_AddressInformation) { _cached_decoder_for_AddressInformation = $._decode_inextensible_choice<AddressInformation>({
    "CONTEXT 1": [ "iPv4Address", $._decode_implicit<IPv4Address>(() => _decode_IPv4Address) ],
    "CONTEXT 2": [ "iPv4AddressUDPPortRange", $._decode_implicit<IPv4AddressUDPPortRange>(() => _decode_IPv4AddressUDPPortRange) ],
    "CONTEXT 3": [ "iPv4AddressTCPPortRange", $._decode_implicit<IPv4AddressTCPPortRange>(() => _decode_IPv4AddressTCPPortRange) ],
    "CONTEXT 4": [ "iPv4AddressUDPTCPPortRange", $._decode_implicit<IPv4AddressUDPTCPPortRange>(() => _decode_IPv4AddressUDPTCPPortRange) ],
    "CONTEXT 5": [ "iPv6Address", $._decode_implicit<IPv6Address>(() => _decode_IPv6Address) ],
    "CONTEXT 6": [ "ethernetAddress", $._decode_implicit<MACAddress>(() => _decode_MACAddress) ]
}); }
    return _cached_decoder_for_AddressInformation(el);
}

let _cached_encoder_for_AddressInformation: $.ASN1Encoder<AddressInformation> | null = null;

/**
 * @summary Encodes a(n) AddressInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddressInformation, encoded as an ASN.1 Element.
 */
export
function _encode_AddressInformation (value: AddressInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AddressInformation) { _cached_encoder_for_AddressInformation = $._encode_choice<AddressInformation>({
    "iPv4Address": $._encode_implicit(_TagClass.context, 1, () => _encode_IPv4Address, $.BER),
    "iPv4AddressUDPPortRange": $._encode_implicit(_TagClass.context, 2, () => _encode_IPv4AddressUDPPortRange, $.BER),
    "iPv4AddressTCPPortRange": $._encode_implicit(_TagClass.context, 3, () => _encode_IPv4AddressTCPPortRange, $.BER),
    "iPv4AddressUDPTCPPortRange": $._encode_implicit(_TagClass.context, 4, () => _encode_IPv4AddressUDPTCPPortRange, $.BER),
    "iPv6Address": $._encode_implicit(_TagClass.context, 5, () => _encode_IPv6Address, $.BER),
    "ethernetAddress": $._encode_implicit(_TagClass.context, 6, () => _encode_MACAddress, $.BER),
}, $.BER); }
    return _cached_encoder_for_AddressInformation(value, elGetter);
}


/* eslint-enable */
