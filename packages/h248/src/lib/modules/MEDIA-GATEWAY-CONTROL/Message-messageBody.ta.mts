/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ErrorDescriptor, _decode_ErrorDescriptor, _encode_ErrorDescriptor } from "../MEDIA-GATEWAY-CONTROL/ErrorDescriptor.ta.mjs";
// export { ErrorDescriptor, _decode_ErrorDescriptor, _encode_ErrorDescriptor } from "../MEDIA-GATEWAY-CONTROL/ErrorDescriptor.ta.mjs";
import { Transaction, _decode_Transaction, _encode_Transaction } from "../MEDIA-GATEWAY-CONTROL/Transaction.ta.mjs";
// export { Transaction, _decode_Transaction, _encode_Transaction } from "../MEDIA-GATEWAY-CONTROL/Transaction.ta.mjs";


/**
 * @summary Message_messageBody
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Message-messageBody ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type Message_messageBody =
    { messageError: ErrorDescriptor } /* CHOICE_ALT_ROOT */
    | { transactions: Transaction[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Message_messageBody: $.ASN1Decoder<Message_messageBody> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Message_messageBody
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Message_messageBody (el: _Element): Message_messageBody {
    if (!_cached_decoder_for_Message_messageBody) { _cached_decoder_for_Message_messageBody = $._decode_inextensible_choice<Message_messageBody>({
    "CONTEXT 0": [ "messageError", $._decode_implicit<ErrorDescriptor>(() => _decode_ErrorDescriptor) ],
    "CONTEXT 1": [ "transactions", $._decode_implicit<Transaction[]>(() => $._decodeSequenceOf<Transaction>(() => _decode_Transaction)) ]
}); }
    return _cached_decoder_for_Message_messageBody(el);
}

let _cached_encoder_for_Message_messageBody: $.ASN1Encoder<Message_messageBody> | null = null;

/**
 * @summary Encodes a(n) Message_messageBody into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Message_messageBody, encoded as an ASN.1 Element.
 */
export
function _encode_Message_messageBody (value: Message_messageBody, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Message_messageBody) { _cached_encoder_for_Message_messageBody = $._encode_choice<Message_messageBody>({
    "messageError": $._encode_implicit(_TagClass.context, 0, () => _encode_ErrorDescriptor, $.BER),
    "transactions": $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<Transaction>(() => _encode_Transaction, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_Message_messageBody(value, elGetter);
}


/* eslint-enable */
