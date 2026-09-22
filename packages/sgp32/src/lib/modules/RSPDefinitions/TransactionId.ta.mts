/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TransactionId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransactionId  ::=  OCTET STRING (SIZE(1..16))
 * ```
 */
export
type TransactionId = OCTET_STRING; // OctetStringType

let _cached_decoder_for_TransactionId: $.ASN1Decoder<TransactionId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TransactionId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TransactionId (el: _Element): TransactionId {
    if (!_cached_decoder_for_TransactionId) { _cached_decoder_for_TransactionId = $._decodeOctetString; }
    return _cached_decoder_for_TransactionId(el);
}

let _cached_encoder_for_TransactionId: $.ASN1Encoder<TransactionId> | null = null;

/**
 * @summary Encodes a(n) TransactionId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransactionId, encoded as an ASN.1 Element.
 */
export
function _encode_TransactionId (value: TransactionId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TransactionId) { _cached_encoder_for_TransactionId = $._encodeOctetString; }
    return _cached_encoder_for_TransactionId(value, elGetter);
}


/* eslint-enable */
