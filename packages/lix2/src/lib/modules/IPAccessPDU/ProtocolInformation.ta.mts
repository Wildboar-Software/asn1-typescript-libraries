/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProtocolInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProtocolInformation  ::=  CHOICE
 * {
 *     none                    [0] NULL,
 *         -- No layer 4 protocol information is provided
 *     tCPInformation          [1] TCPInformation,
 *     uDPInformation          [2] UDPInformation,
 *     ...
 * }
 * ```
 */
export
type ProtocolInformation =
    { none: NULL } /* CHOICE_ALT_ROOT */
    | { tCPInformation: TCPInformation } /* CHOICE_ALT_ROOT */
    | { uDPInformation: UDPInformation } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ProtocolInformation: $.ASN1Decoder<ProtocolInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProtocolInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProtocolInformation (el: _Element): ProtocolInformation {
    if (!_cached_decoder_for_ProtocolInformation) { _cached_decoder_for_ProtocolInformation = $._decode_extensible_choice<ProtocolInformation>({
    "CONTEXT 0": [ "none", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "tCPInformation", $._decode_implicit<TCPInformation>(() => _decode_TCPInformation) ],
    "CONTEXT 2": [ "uDPInformation", $._decode_implicit<UDPInformation>(() => _decode_UDPInformation) ]
}); }
    return _cached_decoder_for_ProtocolInformation(el);
}

let _cached_encoder_for_ProtocolInformation: $.ASN1Encoder<ProtocolInformation> | null = null;

/**
 * @summary Encodes a(n) ProtocolInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtocolInformation, encoded as an ASN.1 Element.
 */
export
function _encode_ProtocolInformation (value: ProtocolInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProtocolInformation) { _cached_encoder_for_ProtocolInformation = $._encode_choice<ProtocolInformation>({
    "none": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "tCPInformation": $._encode_implicit(_TagClass.context, 1, () => _encode_TCPInformation, $.BER),
    "uDPInformation": $._encode_implicit(_TagClass.context, 2, () => _encode_UDPInformation, $.BER),
}, $.BER); }
    return _cached_encoder_for_ProtocolInformation(value, elGetter);
}


/* eslint-enable */
