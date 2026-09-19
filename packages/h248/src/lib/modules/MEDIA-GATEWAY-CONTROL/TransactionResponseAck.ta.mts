/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TransactionAck, _decode_TransactionAck, _encode_TransactionAck } from "../MEDIA-GATEWAY-CONTROL/TransactionAck.ta.mjs";
// export { TransactionAck, _decode_TransactionAck, _encode_TransactionAck } from "../MEDIA-GATEWAY-CONTROL/TransactionAck.ta.mjs";


/**
 * @summary TransactionResponseAck
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransactionResponseAck  ::=  SEQUENCE OF TransactionAck
 * ```
 */
export
type TransactionResponseAck = TransactionAck[]; // SequenceOfType

let _cached_decoder_for_TransactionResponseAck: $.ASN1Decoder<TransactionResponseAck> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TransactionResponseAck
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TransactionResponseAck (el: _Element): TransactionResponseAck {
    if (!_cached_decoder_for_TransactionResponseAck) { _cached_decoder_for_TransactionResponseAck = $._decodeSequenceOf<TransactionAck>(() => _decode_TransactionAck); }
    return _cached_decoder_for_TransactionResponseAck(el);
}

let _cached_encoder_for_TransactionResponseAck: $.ASN1Encoder<TransactionResponseAck> | null = null;

/**
 * @summary Encodes a(n) TransactionResponseAck into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransactionResponseAck, encoded as an ASN.1 Element.
 */
export
function _encode_TransactionResponseAck (value: TransactionResponseAck, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TransactionResponseAck) { _cached_encoder_for_TransactionResponseAck = $._encodeSequenceOf<TransactionAck>(() => _encode_TransactionAck, $.BER); }
    return _cached_encoder_for_TransactionResponseAck(value, elGetter);
}


/* eslint-enable */
