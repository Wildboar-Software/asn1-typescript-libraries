/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_NotReachableReason, _encode_NotReachableReason, NotReachableReason } from "../MAP-MS-DataTypes/NotReachableReason.ta.mjs";


/**
 * @summary SubscriberState
 * @description
 *
 * Circuit-switched MS state as in 3GPP TS 23.018. HLR shall discard this IE if
 * received from an SGSN or MME (via IWF).
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.3.30 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriberState  ::=  CHOICE {
 *     assumedIdle    [0] NULL,
 *     camelBusy    [1] NULL,
 *     netDetNotReachable    NotReachableReason,
 *     notProvidedFromVLR    [2] NULL}
 * ```
 */
export
type SubscriberState =
    { assumedIdle: NULL } /* CHOICE_ALT_ROOT */
    | { camelBusy: NULL } /* CHOICE_ALT_ROOT */
    | { netDetNotReachable: NotReachableReason } /* CHOICE_ALT_ROOT */
    | { notProvidedFromVLR: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SubscriberState: $.ASN1Decoder<SubscriberState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubscriberState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubscriberState (el: _Element): SubscriberState {
    if (!_cached_decoder_for_SubscriberState) { _cached_decoder_for_SubscriberState = $._decode_inextensible_choice<SubscriberState>({
    "CONTEXT 0": [ "assumedIdle", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "camelBusy", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "UNIVERSAL 10": [ "netDetNotReachable", _decode_NotReachableReason ],
    "CONTEXT 2": [ "notProvidedFromVLR", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_SubscriberState(el);
}

let _cached_encoder_for_SubscriberState: $.ASN1Encoder<SubscriberState> | null = null;

/**
 * @summary Encodes a(n) SubscriberState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscriberState, encoded as an ASN.1 Element.
 */
export
function _encode_SubscriberState (value: SubscriberState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubscriberState) { _cached_encoder_for_SubscriberState = $._encode_choice<SubscriberState>({
    "assumedIdle": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "camelBusy": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "netDetNotReachable": _encode_NotReachableReason,
    "notProvidedFromVLR": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_SubscriberState(value, elGetter);
}


/* eslint-enable */
