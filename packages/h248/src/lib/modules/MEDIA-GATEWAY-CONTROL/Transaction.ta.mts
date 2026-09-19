/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TransactionRequest, _decode_TransactionRequest, _encode_TransactionRequest } from "../MEDIA-GATEWAY-CONTROL/TransactionRequest.ta.mjs";
// export { TransactionRequest, _decode_TransactionRequest, _encode_TransactionRequest } from "../MEDIA-GATEWAY-CONTROL/TransactionRequest.ta.mjs";
import { TransactionPending, _decode_TransactionPending, _encode_TransactionPending } from "../MEDIA-GATEWAY-CONTROL/TransactionPending.ta.mjs";
// export { TransactionPending, _decode_TransactionPending, _encode_TransactionPending } from "../MEDIA-GATEWAY-CONTROL/TransactionPending.ta.mjs";
import { TransactionReply, _decode_TransactionReply, _encode_TransactionReply } from "../MEDIA-GATEWAY-CONTROL/TransactionReply.ta.mjs";
// export { TransactionReply, _decode_TransactionReply, _encode_TransactionReply } from "../MEDIA-GATEWAY-CONTROL/TransactionReply.ta.mjs";
import { TransactionResponseAck, _decode_TransactionResponseAck, _encode_TransactionResponseAck } from "../MEDIA-GATEWAY-CONTROL/TransactionResponseAck.ta.mjs";
// export { TransactionResponseAck, _decode_TransactionResponseAck, _encode_TransactionResponseAck } from "../MEDIA-GATEWAY-CONTROL/TransactionResponseAck.ta.mjs";
import { SegmentReply, _decode_SegmentReply, _encode_SegmentReply } from "../MEDIA-GATEWAY-CONTROL/SegmentReply.ta.mjs";
// export { SegmentReply, _decode_SegmentReply, _encode_SegmentReply } from "../MEDIA-GATEWAY-CONTROL/SegmentReply.ta.mjs";


/**
 * @summary Transaction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Transaction  ::=  CHOICE
 *     {
 *         transactionRequest        [0] TransactionRequest,
 *         transactionPending        [1] TransactionPending,
 *         transactionReply        [2] TransactionReply,
 *         transactionResponseAck    [3] TransactionResponseAck,
 *         -- use of response acks is dependent on underlying transport
 *         ...,
 *         segmentReply            [4] SegmentReply
 *     }
 * ```
 */
export
type Transaction =
    { transactionRequest: TransactionRequest } /* CHOICE_ALT_ROOT */
    | { transactionPending: TransactionPending } /* CHOICE_ALT_ROOT */
    | { transactionReply: TransactionReply } /* CHOICE_ALT_ROOT */
    | { transactionResponseAck: TransactionResponseAck } /* CHOICE_ALT_ROOT */
    | { segmentReply: SegmentReply } /* CHOICE_ALT_EXT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_Transaction: $.ASN1Decoder<Transaction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Transaction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Transaction (el: _Element): Transaction {
    if (!_cached_decoder_for_Transaction) { _cached_decoder_for_Transaction = $._decode_extensible_choice<Transaction>({
    "CONTEXT 0": [ "transactionRequest", $._decode_implicit<TransactionRequest>(() => _decode_TransactionRequest) ],
    "CONTEXT 1": [ "transactionPending", $._decode_implicit<TransactionPending>(() => _decode_TransactionPending) ],
    "CONTEXT 2": [ "transactionReply", $._decode_implicit<TransactionReply>(() => _decode_TransactionReply) ],
    "CONTEXT 3": [ "transactionResponseAck", $._decode_implicit<TransactionResponseAck>(() => _decode_TransactionResponseAck) ],
    "CONTEXT 4": [ "segmentReply", $._decode_implicit<SegmentReply>(() => _decode_SegmentReply) ]
}); }
    return _cached_decoder_for_Transaction(el);
}

let _cached_encoder_for_Transaction: $.ASN1Encoder<Transaction> | null = null;

/**
 * @summary Encodes a(n) Transaction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Transaction, encoded as an ASN.1 Element.
 */
export
function _encode_Transaction (value: Transaction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Transaction) { _cached_encoder_for_Transaction = $._encode_choice<Transaction>({
    "transactionRequest": $._encode_implicit(_TagClass.context, 0, () => _encode_TransactionRequest, $.BER),
    "transactionPending": $._encode_implicit(_TagClass.context, 1, () => _encode_TransactionPending, $.BER),
    "transactionReply": $._encode_implicit(_TagClass.context, 2, () => _encode_TransactionReply, $.BER),
    "transactionResponseAck": $._encode_implicit(_TagClass.context, 3, () => _encode_TransactionResponseAck, $.BER),
    "segmentReply": $._encode_implicit(_TagClass.context, 4, () => _encode_SegmentReply, $.BER),
}, $.BER); }
    return _cached_encoder_for_Transaction(value, elGetter);
}


/* eslint-enable */
