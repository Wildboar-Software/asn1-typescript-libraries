/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TCPPort, _decode_TCPPort, _encode_TCPPort } from "../Common-Parameters/TCPPort.ta.mjs";
// export { TCPPort, _decode_TCPPort, _encode_TCPPort } from "../Common-Parameters/TCPPort.ta.mjs";
import { UDPPort, _decode_UDPPort, _encode_UDPPort } from "../Common-Parameters/UDPPort.ta.mjs";
// export { UDPPort, _decode_UDPPort, _encode_UDPPort } from "../Common-Parameters/UDPPort.ta.mjs";


/**
 * @summary Port
 * @description
 *
 * Either a TCP port or a UDP port.
 *
 * ETSI TS 103 280 V2.7.1 (2021-11), clause 6.21.
 *
 * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Port  ::=  CHOICE
 * {
 *     tCPPort [0] TCPPort,
 *     uDPPort [1] UDPPort
 * }
 * ```
 */
export
type Port =
    { tCPPort: TCPPort } /* CHOICE_ALT_ROOT */
    | { uDPPort: UDPPort } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_Port: $.ASN1Decoder<Port> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Port
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Port (el: _Element): Port {
    if (!_cached_decoder_for_Port) { _cached_decoder_for_Port = $._decode_extensible_choice<Port>({
    "CONTEXT 0": [ "tCPPort", $._decode_implicit<TCPPort>(() => _decode_TCPPort) ],
    "CONTEXT 1": [ "uDPPort", $._decode_implicit<UDPPort>(() => _decode_UDPPort) ]
}); }
    return _cached_decoder_for_Port(el);
}

let _cached_encoder_for_Port: $.ASN1Encoder<Port> | null = null;

/**
 * @summary Encodes a(n) Port into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Port, encoded as an ASN.1 Element.
 */
export
function _encode_Port (value: Port, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Port) { _cached_encoder_for_Port = $._encode_choice<Port>({
    "tCPPort": $._encode_implicit(_TagClass.context, 0, () => _encode_TCPPort, $.BER),
    "uDPPort": $._encode_implicit(_TagClass.context, 1, () => _encode_UDPPort, $.BER),
}, $.BER); }
    return _cached_encoder_for_Port(value, elGetter);
}


/* eslint-enable */
