/* eslint-disable */
import {
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PTCChatGroupID, _decode_PTCChatGroupID, _encode_PTCChatGroupID } from "../TS33128Payloads/PTCChatGroupID.ta.mjs";
// export { PTCChatGroupID, _decode_PTCChatGroupID, _encode_PTCChatGroupID } from "../TS33128Payloads/PTCChatGroupID.ta.mjs";
import { IMPU, _decode_IMPU, _encode_IMPU } from "../TS33128Payloads/IMPU.ta.mjs";
// export { IMPU, _decode_IMPU, _encode_IMPU } from "../TS33128Payloads/IMPU.ta.mjs";
import { IMPI, _decode_IMPI, _encode_IMPI } from "../TS33128Payloads/IMPI.ta.mjs";
// export { IMPI, _decode_IMPI, _encode_IMPI } from "../TS33128Payloads/IMPI.ta.mjs";


/**
 * @summary PTCIdentifiers
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCIdentifiers   ::=  CHOICE
 * {
 *     mCPTTID                    [1] UTF8String,
 *     instanceIdentifierURN      [2] UTF8String,
 *     pTCChatGroupID             [3] PTCChatGroupID,
 *     iMPU                       [4] IMPU,
 *     iMPI                       [5] IMPI
 * }
 * ```
 */
export
type PTCIdentifiers =
    { mCPTTID: UTF8String } /* CHOICE_ALT_ROOT */
    | { instanceIdentifierURN: UTF8String } /* CHOICE_ALT_ROOT */
    | { pTCChatGroupID: PTCChatGroupID } /* CHOICE_ALT_ROOT */
    | { iMPU: IMPU } /* CHOICE_ALT_ROOT */
    | { iMPI: IMPI } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PTCIdentifiers: $.ASN1Decoder<PTCIdentifiers> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCIdentifiers
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCIdentifiers (el: _Element): PTCIdentifiers {
    if (!_cached_decoder_for_PTCIdentifiers) { _cached_decoder_for_PTCIdentifiers = $._decode_inextensible_choice<PTCIdentifiers>({
    "CONTEXT 1": [ "mCPTTID", $._decode_implicit<UTF8String>(() => $._decodeUTF8String) ],
    "CONTEXT 2": [ "instanceIdentifierURN", $._decode_implicit<UTF8String>(() => $._decodeUTF8String) ],
    "CONTEXT 3": [ "pTCChatGroupID", $._decode_implicit<PTCChatGroupID>(() => _decode_PTCChatGroupID) ],
    "CONTEXT 4": [ "iMPU", $._decode_explicit<IMPU>(() => _decode_IMPU) ],
    "CONTEXT 5": [ "iMPI", $._decode_implicit<IMPI>(() => _decode_IMPI) ]
}); }
    return _cached_decoder_for_PTCIdentifiers(el);
}

let _cached_encoder_for_PTCIdentifiers: $.ASN1Encoder<PTCIdentifiers> | null = null;

/**
 * @summary Encodes a(n) PTCIdentifiers into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCIdentifiers, encoded as an ASN.1 Element.
 */
export
function _encode_PTCIdentifiers (value: PTCIdentifiers, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCIdentifiers) { _cached_encoder_for_PTCIdentifiers = $._encode_choice<PTCIdentifiers>({
    "mCPTTID": $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER),
    "instanceIdentifierURN": $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER),
    "pTCChatGroupID": $._encode_implicit(_TagClass.context, 3, () => _encode_PTCChatGroupID, $.BER),
    "iMPU": $._encode_explicit(_TagClass.context, 4, () => _encode_IMPU, $.BER),
    "iMPI": $._encode_implicit(_TagClass.context, 5, () => _encode_IMPI, $.BER),
}, $.BER); }
    return _cached_encoder_for_PTCIdentifiers(value, elGetter);
}


/* eslint-enable */
