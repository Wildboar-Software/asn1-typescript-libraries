/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type GSNAddress, _decode_GSNAddress, _encode_GSNAddress } from "../GPRSChargingDataTypes/GSNAddress.ta.mjs";


/**
 * @summary PDPAddress
 * @description
 * 
 * IP address allocated to the PDP context or PDN connection: an IPv4
 * address when the type is IPv4, or an IPv6 prefix when the type is IPv6
 * or IPv4v6 (table 6.1.1.1). For IPv4v6 the IPv4 address is carried as the
 * address extension. Absent when the type is PPP and dynamic address
 * assignment is used, and absent for a Non-IP PDN connection unless the
 * P-GW assigned an address. An IPv6 prefix length of 64 bits need not be
 * indicated.
 * 
 * 3GPP TS 32.251 V19.0.0.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDPAddress  ::=  CHOICE {
 *    iPAddress     [0] GSNAddress}
 * ```
 */
export
type PDPAddress =
    { iPAddress: GSNAddress } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PDPAddress: $.ASN1Decoder<PDPAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PDPAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PDPAddress (el: _Element): PDPAddress {
    if (!_cached_decoder_for_PDPAddress) { _cached_decoder_for_PDPAddress = $._decode_inextensible_choice<PDPAddress>({
    "CONTEXT 0": [ "iPAddress", $._decode_explicit<GSNAddress>(() => _decode_GSNAddress) ]
}); }
    return _cached_decoder_for_PDPAddress(el);
}

let _cached_encoder_for_PDPAddress: $.ASN1Encoder<PDPAddress> | null = null;

/**
 * @summary Encodes a(n) PDPAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDPAddress, encoded as an ASN.1 Element.
 */
export
function _encode_PDPAddress (value: PDPAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PDPAddress) { _cached_encoder_for_PDPAddress = $._encode_choice<PDPAddress>({
    "iPAddress": $._encode_explicit(_TagClass.context, 0, () => _encode_GSNAddress, $.BER),
}, $.BER); }
    return _cached_encoder_for_PDPAddress(value, elGetter);
}


/* eslint-enable */
