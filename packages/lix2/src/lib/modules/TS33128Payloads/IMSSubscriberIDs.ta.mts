/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMPI, _decode_IMPI, _encode_IMPI } from "../TS33128Payloads/IMPI.ta.mjs";
// export { IMPI, _decode_IMPI, _encode_IMPI } from "../TS33128Payloads/IMPI.ta.mjs";
import { IMPU, _decode_IMPU, _encode_IMPU } from "../TS33128Payloads/IMPU.ta.mjs";
// export { IMPU, _decode_IMPU, _encode_IMPU } from "../TS33128Payloads/IMPU.ta.mjs";


/**
 * @summary IMSSubscriberIDs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSSubscriberIDs  ::=  CHOICE
 * {
 *     iMPI        [1] IMPI,
 *     iMPU        [2] IMPU
 * }
 * ```
 */
export
type IMSSubscriberIDs =
    { iMPI: IMPI } /* CHOICE_ALT_ROOT */
    | { iMPU: IMPU } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_IMSSubscriberIDs: $.ASN1Decoder<IMSSubscriberIDs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMSSubscriberIDs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMSSubscriberIDs (el: _Element): IMSSubscriberIDs {
    if (!_cached_decoder_for_IMSSubscriberIDs) { _cached_decoder_for_IMSSubscriberIDs = $._decode_inextensible_choice<IMSSubscriberIDs>({
    "CONTEXT 1": [ "iMPI", $._decode_implicit<IMPI>(() => _decode_IMPI) ],
    "CONTEXT 2": [ "iMPU", $._decode_explicit<IMPU>(() => _decode_IMPU) ]
}); }
    return _cached_decoder_for_IMSSubscriberIDs(el);
}

let _cached_encoder_for_IMSSubscriberIDs: $.ASN1Encoder<IMSSubscriberIDs> | null = null;

/**
 * @summary Encodes a(n) IMSSubscriberIDs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMSSubscriberIDs, encoded as an ASN.1 Element.
 */
export
function _encode_IMSSubscriberIDs (value: IMSSubscriberIDs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMSSubscriberIDs) { _cached_encoder_for_IMSSubscriberIDs = $._encode_choice<IMSSubscriberIDs>({
    "iMPI": $._encode_implicit(_TagClass.context, 1, () => _encode_IMPI, $.BER),
    "iMPU": $._encode_explicit(_TagClass.context, 2, () => _encode_IMPU, $.BER),
}, $.BER); }
    return _cached_encoder_for_IMSSubscriberIDs(value, elGetter);
}


/* eslint-enable */
