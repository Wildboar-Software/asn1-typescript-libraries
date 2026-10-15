/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    IA5String,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IP_value
 * @description
 *
 * IP address as binary octets or as text.
 *
 * Binary, size 4 to 16 octets: for IPv6 the prefix length is
 * `iPv6PrefixLength`; for IPv4 the netmask is `iPv4SubnetMask`. Text, size 7
 * to 45 characters: for IPv6, a complete single IPv6 address or an IPv6 prefix
 * for a subnetwork on the target side; for IPv4, a single IPv4 address or an
 * IPv4 address and netmask, for example `192.168.1.1` or `192.168.1.1/24`.
 *
 * The module does not name an imported half-octet format for the binary
 * address. Clause D.1's general rule puts the most significant half-octet in
 * bits 5 to 8 and the least significant in bits 1 to 4.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.1, annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IP-value  ::=  CHOICE
 * {
 *     iPBinaryAddress    [1] OCTET STRING (SIZE(4..16)),
 *         -- In case of IPv6, the Prefix Length is provided by the "iPv6PrefixLength"
 *         -- In case of IPv4, the netmask is provided by the "iPv4SubnetMask"
 *     iPTextAddress    [2] IA5String (SIZE(7..45)),
 *         -- In case of IPv6, the delivered iPTextAddress field could include a complete
 *         -- single IPv6-Address or an IPv6-Prefix for a subnetwork on the target side.
 *         -- In case of IPv4, the delivered iPTextAddress field could include a single
 *         -- IPv4 address or an IPv4address/netmask, for example "192.168.1.1" or "192.168.1.1/24"
 *     ...
 * }
 * ```
 */
export
type IP_value =
    { iPBinaryAddress: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { iPTextAddress: IA5String } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_IP_value: $.ASN1Decoder<IP_value> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IP_value
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IP_value (el: _Element): IP_value {
    if (!_cached_decoder_for_IP_value) { _cached_decoder_for_IP_value = $._decode_extensible_choice<IP_value>({
    "CONTEXT 1": [ "iPBinaryAddress", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 2": [ "iPTextAddress", $._decode_implicit<IA5String>(() => $._decodeIA5String) ]
}); }
    const _value = _cached_decoder_for_IP_value(el);
    if ("iPBinaryAddress" in _value && _value.iPBinaryAddress !== undefined) {
        const _alt = _value.iPBinaryAddress;
        if (_alt.length < 4 || _alt.length > 16) {
            throw new ASN1SizeError("IP_value.iPBinaryAddress violates SIZE constraint");
        }
    }
    if ("iPTextAddress" in _value && _value.iPTextAddress !== undefined) {
        const _alt = _value.iPTextAddress;
        if (_alt.length < 7 || _alt.length > 45) {
            throw new ASN1SizeError("IP_value.iPTextAddress violates SIZE constraint");
        }
    }
    return _value;
}

let _cached_encoder_for_IP_value: $.ASN1Encoder<IP_value> | null = null;

/**
 * @summary Encodes a(n) IP_value into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IP_value, encoded as an ASN.1 Element.
 */
export
function _encode_IP_value (value: IP_value, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IP_value) { _cached_encoder_for_IP_value = $._encode_choice<IP_value>({
    "iPBinaryAddress": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
    "iPTextAddress": $._encode_implicit(_TagClass.context, 2, () => $._encodeIA5String, $.BER),
}, $.BER); }
    return _cached_encoder_for_IP_value(value, elGetter);
}


/* eslint-enable */
