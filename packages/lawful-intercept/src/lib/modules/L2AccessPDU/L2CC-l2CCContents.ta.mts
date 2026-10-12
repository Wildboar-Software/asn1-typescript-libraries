/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { L2TruncatedDatagram, _decode_L2TruncatedDatagram, _encode_L2TruncatedDatagram } from "../L2AccessPDU/L2TruncatedDatagram.ta.mjs";
// export { L2TruncatedDatagram, _decode_L2TruncatedDatagram, _encode_L2TruncatedDatagram } from "../L2AccessPDU/L2TruncatedDatagram.ta.mjs";


/**
 * @summary L2CC_l2CCContents
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * L2CC-l2CCContents ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type L2CC_l2CCContents =
    { l2TP: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { l2F: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { pPTP: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { pPP: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { ethernet: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { l2ATM2684: OCTET_STRING } /* CHOICE_ALT_EXT */
    | { l2FR2427: OCTET_STRING } /* CHOICE_ALT_EXT */
    | { truncatedL2TP: L2TruncatedDatagram } /* CHOICE_ALT_EXT */
    | { truncatedL2F: L2TruncatedDatagram } /* CHOICE_ALT_EXT */
    | { truncatedPPTP: L2TruncatedDatagram } /* CHOICE_ALT_EXT */
    | { truncatedPPP: L2TruncatedDatagram } /* CHOICE_ALT_EXT */
    | { truncatedEthernet: L2TruncatedDatagram } /* CHOICE_ALT_EXT */
    | { truncatedL2ATM2684: L2TruncatedDatagram } /* CHOICE_ALT_EXT */
    | { truncatedL2FR2427: L2TruncatedDatagram } /* CHOICE_ALT_EXT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_L2CC_l2CCContents: $.ASN1Decoder<L2CC_l2CCContents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) L2CC_l2CCContents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_L2CC_l2CCContents (el: _Element): L2CC_l2CCContents {
    if (!_cached_decoder_for_L2CC_l2CCContents) { _cached_decoder_for_L2CC_l2CCContents = $._decode_extensible_choice<L2CC_l2CCContents>({
    "CONTEXT 1": [ "l2TP", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 2": [ "l2F", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 3": [ "pPTP", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 4": [ "pPP", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 5": [ "ethernet", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 6": [ "l2ATM2684", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 7": [ "l2FR2427", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 8": [ "truncatedL2TP", $._decode_implicit<L2TruncatedDatagram>(() => _decode_L2TruncatedDatagram) ],
    "CONTEXT 9": [ "truncatedL2F", $._decode_implicit<L2TruncatedDatagram>(() => _decode_L2TruncatedDatagram) ],
    "CONTEXT 10": [ "truncatedPPTP", $._decode_implicit<L2TruncatedDatagram>(() => _decode_L2TruncatedDatagram) ],
    "CONTEXT 11": [ "truncatedPPP", $._decode_implicit<L2TruncatedDatagram>(() => _decode_L2TruncatedDatagram) ],
    "CONTEXT 12": [ "truncatedEthernet", $._decode_implicit<L2TruncatedDatagram>(() => _decode_L2TruncatedDatagram) ],
    "CONTEXT 13": [ "truncatedL2ATM2684", $._decode_implicit<L2TruncatedDatagram>(() => _decode_L2TruncatedDatagram) ],
    "CONTEXT 14": [ "truncatedL2FR2427", $._decode_implicit<L2TruncatedDatagram>(() => _decode_L2TruncatedDatagram) ]
}); }
    return _cached_decoder_for_L2CC_l2CCContents(el);
}

let _cached_encoder_for_L2CC_l2CCContents: $.ASN1Encoder<L2CC_l2CCContents> | null = null;

/**
 * @summary Encodes a(n) L2CC_l2CCContents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The L2CC_l2CCContents, encoded as an ASN.1 Element.
 */
export
function _encode_L2CC_l2CCContents (value: L2CC_l2CCContents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_L2CC_l2CCContents) { _cached_encoder_for_L2CC_l2CCContents = $._encode_choice<L2CC_l2CCContents>({
    "l2TP": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
    "l2F": $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER),
    "pPTP": $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER),
    "pPP": $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER),
    "ethernet": $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER),
    "l2ATM2684": $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER),
    "l2FR2427": $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER),
    "truncatedL2TP": $._encode_implicit(_TagClass.context, 8, () => _encode_L2TruncatedDatagram, $.BER),
    "truncatedL2F": $._encode_implicit(_TagClass.context, 9, () => _encode_L2TruncatedDatagram, $.BER),
    "truncatedPPTP": $._encode_implicit(_TagClass.context, 10, () => _encode_L2TruncatedDatagram, $.BER),
    "truncatedPPP": $._encode_implicit(_TagClass.context, 11, () => _encode_L2TruncatedDatagram, $.BER),
    "truncatedEthernet": $._encode_implicit(_TagClass.context, 12, () => _encode_L2TruncatedDatagram, $.BER),
    "truncatedL2ATM2684": $._encode_implicit(_TagClass.context, 13, () => _encode_L2TruncatedDatagram, $.BER),
    "truncatedL2FR2427": $._encode_implicit(_TagClass.context, 14, () => _encode_L2TruncatedDatagram, $.BER),
}, $.BER); }
    return _cached_encoder_for_L2CC_l2CCContents(value, elGetter);
}


/* eslint-enable */
