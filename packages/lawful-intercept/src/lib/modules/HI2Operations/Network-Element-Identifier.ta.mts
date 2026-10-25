/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../HI2Operations/IPAddress.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../HI2Operations/IPAddress.ta.mjs";


/**
 * @summary Network_Element_Identifier
 * @description
 * 
 * Identity of the network element that performs the interception. Optional
 * inside the NID. Clause 6.2.1 lists an E.164 international node number, an
 * X.25 address, or an IP address. This choice also has DNS and a structured
 * `IPAddress`. The specification does not say when `iP-Format` is used rather
 * than `iP-Address`.
 *
 * `e164-Format` is the E.164 address of the node in international format, coded
 * as the calling-party number parameter of ISUP (parameter part, EN 300 356),
 * size 1 to 25. When annex E carries the NEID in the Calling Party Number
 * information element, clause E.4.2 sets the numbering plan to E.164,
 * presentation allowed, and screening to network-provided for ISUP or
 * user-provided not screened for DSS1, with nature of address or type of number
 * taken from the Q-series and DSS1 citations in that clause.
 *
 * `x25-Format` is an X.25 address, size 1 to 25. `iP-Format` is an IP address,
 * size 1 to 25. `dNS-Format` is a DNS address, size 1 to 25. Clause 6.2.1 does
 * not list DNS. The module does not define the octet layout of the X.25, IP, or
 * DNS octet-string alternatives. `iP-Address` is the structured `IPAddress`
 * type. The module gives that alternative no comment.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause 6.2.1, clause D.5, clause E.4.2.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Network-Element-Identifier  ::=  CHOICE
 * {
 *     e164-Format            [1] OCTET STRING (SIZE (1..25)),
 *         -- E164 address of the node in international format. Coded in the same format as the
 *         -- calling party number parameter of the ISUP (parameter part: EN 300 356 [5]).
 *     x25-Format            [2] OCTET STRING (SIZE (1..25)),
 *         -- X25 address
 *     iP-Format            [3] OCTET STRING (SIZE (1..25)),
 *         -- IP address
 *     dNS-Format            [4] OCTET STRING (SIZE (1..25)),
 *         -- DNS address
 *     ...,
 *     iP-Address            [5] IPAddress
 * }
 * ```
 */
export
type Network_Element_Identifier =
    { e164_Format: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { x25_Format: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { iP_Format: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { dNS_Format: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { iP_Address: IPAddress } /* CHOICE_ALT_EXT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_Network_Element_Identifier: $.ASN1Decoder<Network_Element_Identifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Network_Element_Identifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Network_Element_Identifier (el: _Element): Network_Element_Identifier {
    if (!_cached_decoder_for_Network_Element_Identifier) { _cached_decoder_for_Network_Element_Identifier = $._decode_extensible_choice<Network_Element_Identifier>({
    "CONTEXT 1": [ "e164_Format", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 2": [ "x25_Format", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 3": [ "iP_Format", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 4": [ "dNS_Format", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 5": [ "iP_Address", $._decode_implicit<IPAddress>(() => _decode_IPAddress) ]
}); }
    const _value = _cached_decoder_for_Network_Element_Identifier(el);
    if ("e164_Format" in _value && _value.e164_Format !== undefined) {
        const _alt = _value.e164_Format;
        if (_alt.length < 1 || _alt.length > 25) {
            throw new ASN1SizeError("Network_Element_Identifier.e164_Format violates SIZE constraint");
        }
    }
    if ("x25_Format" in _value && _value.x25_Format !== undefined) {
        const _alt = _value.x25_Format;
        if (_alt.length < 1 || _alt.length > 25) {
            throw new ASN1SizeError("Network_Element_Identifier.x25_Format violates SIZE constraint");
        }
    }
    if ("iP_Format" in _value && _value.iP_Format !== undefined) {
        const _alt = _value.iP_Format;
        if (_alt.length < 1 || _alt.length > 25) {
            throw new ASN1SizeError("Network_Element_Identifier.iP_Format violates SIZE constraint");
        }
    }
    if ("dNS_Format" in _value && _value.dNS_Format !== undefined) {
        const _alt = _value.dNS_Format;
        if (_alt.length < 1 || _alt.length > 25) {
            throw new ASN1SizeError("Network_Element_Identifier.dNS_Format violates SIZE constraint");
        }
    }
    return _value;
}

let _cached_encoder_for_Network_Element_Identifier: $.ASN1Encoder<Network_Element_Identifier> | null = null;

/**
 * @summary Encodes a(n) Network_Element_Identifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Network_Element_Identifier, encoded as an ASN.1 Element.
 */
export
function _encode_Network_Element_Identifier (value: Network_Element_Identifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Network_Element_Identifier) { _cached_encoder_for_Network_Element_Identifier = $._encode_choice<Network_Element_Identifier>({
    "e164_Format": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
    "x25_Format": $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER),
    "iP_Format": $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER),
    "dNS_Format": $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER),
    "iP_Address": $._encode_implicit(_TagClass.context, 5, () => _encode_IPAddress, $.BER),
}, $.BER); }
    return _cached_encoder_for_Network_Element_Identifier(value, elGetter);
}


/* eslint-enable */
