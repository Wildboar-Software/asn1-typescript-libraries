/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { TMSI, _decode_TMSI, _encode_TMSI } from "../MAP-CommonDataTypes/TMSI.ta.mjs";


/**
 * @summary SubscriberId
 * @description
 *
 * Subscriber identity as IMSI or TMSI.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 17.7.8, 7.6.2.1 and 7.6.2.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriberId  ::=  CHOICE {
 *     imsi    [0] IMSI,
 *     tmsi    [1] TMSI}
 * ```
 */
export
type SubscriberId =
    { imsi: IMSI } /* CHOICE_ALT_ROOT */
    | { tmsi: TMSI } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SubscriberId: $.ASN1Decoder<SubscriberId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubscriberId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubscriberId (el: _Element): SubscriberId {
    if (!_cached_decoder_for_SubscriberId) { _cached_decoder_for_SubscriberId = $._decode_inextensible_choice<SubscriberId>({
    "CONTEXT 0": [ "imsi", $._decode_implicit<IMSI>(() => _decode_IMSI) ],
    "CONTEXT 1": [ "tmsi", $._decode_implicit<TMSI>(() => _decode_TMSI) ]
}); }
    return _cached_decoder_for_SubscriberId(el);
}

let _cached_encoder_for_SubscriberId: $.ASN1Encoder<SubscriberId> | null = null;

/**
 * @summary Encodes a(n) SubscriberId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscriberId, encoded as an ASN.1 Element.
 */
export
function _encode_SubscriberId (value: SubscriberId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubscriberId) { _cached_encoder_for_SubscriberId = $._encode_choice<SubscriberId>({
    "imsi": $._encode_implicit(_TagClass.context, 0, () => _encode_IMSI, $.BER),
    "tmsi": $._encode_implicit(_TagClass.context, 1, () => _encode_TMSI, $.BER),
}, $.BER); }
    return _cached_encoder_for_SubscriberId(value, elGetter);
}


/* eslint-enable */
