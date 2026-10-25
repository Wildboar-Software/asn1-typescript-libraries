/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TCPPortRange, _decode_TCPPortRange, _encode_TCPPortRange } from "../Common-Parameters/TCPPortRange.ta.mjs";
// export { TCPPortRange, _decode_TCPPortRange, _encode_TCPPortRange } from "../Common-Parameters/TCPPortRange.ta.mjs";
import { UDPPortRange, _decode_UDPPortRange, _encode_UDPPortRange } from "../Common-Parameters/UDPPortRange.ta.mjs";
// export { UDPPortRange, _decode_UDPPortRange, _encode_UDPPortRange } from "../Common-Parameters/UDPPortRange.ta.mjs";


/**
 * @summary PortRange
 * @description
 *
 * Either a TCP port range or a UDP port range. The start and end of
 * the chosen range are inclusive.
 *
 * ETSI TS 103 280 V2.7.1 (2021-11), clause 6.22.
 *
 * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PortRange  ::=  CHOICE
 * {
 *     tCPPortRange [0] TCPPortRange,
 *     uDPPortRange [1] UDPPortRange
 * }
 * ```
 */
export
type PortRange =
    { tCPPortRange: TCPPortRange } /* CHOICE_ALT_ROOT */
    | { uDPPortRange: UDPPortRange } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_PortRange: $.ASN1Decoder<PortRange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PortRange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PortRange (el: _Element): PortRange {
    if (!_cached_decoder_for_PortRange) { _cached_decoder_for_PortRange = $._decode_extensible_choice<PortRange>({
    "CONTEXT 0": [ "tCPPortRange", $._decode_implicit<TCPPortRange>(() => _decode_TCPPortRange) ],
    "CONTEXT 1": [ "uDPPortRange", $._decode_implicit<UDPPortRange>(() => _decode_UDPPortRange) ]
}); }
    return _cached_decoder_for_PortRange(el);
}

let _cached_encoder_for_PortRange: $.ASN1Encoder<PortRange> | null = null;

/**
 * @summary Encodes a(n) PortRange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PortRange, encoded as an ASN.1 Element.
 */
export
function _encode_PortRange (value: PortRange, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PortRange) { _cached_encoder_for_PortRange = $._encode_choice<PortRange>({
    "tCPPortRange": $._encode_implicit(_TagClass.context, 0, () => _encode_TCPPortRange, $.BER),
    "uDPPortRange": $._encode_implicit(_TagClass.context, 1, () => _encode_UDPPortRange, $.BER),
}, $.BER); }
    return _cached_encoder_for_PortRange(value, elGetter);
}


/* eslint-enable */
