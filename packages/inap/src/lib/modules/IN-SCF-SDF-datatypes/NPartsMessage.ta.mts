/* eslint-disable */
import {
    type ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NPartsMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NPartsMessage  ::=  SEQUENCE OF BIT STRING
 * ```
 */
export
type NPartsMessage = BIT_STRING[]; // SequenceOfType

let _cached_decoder_for_NPartsMessage: $.ASN1Decoder<NPartsMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NPartsMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NPartsMessage (el: _Element): NPartsMessage {
    if (!_cached_decoder_for_NPartsMessage) { _cached_decoder_for_NPartsMessage = $._decodeSequenceOf<BIT_STRING>(() => $._decodeBitString); }
    return _cached_decoder_for_NPartsMessage(el);
}

let _cached_encoder_for_NPartsMessage: $.ASN1Encoder<NPartsMessage> | null = null;

/**
 * @summary Encodes a(n) NPartsMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NPartsMessage, encoded as an ASN.1 Element.
 */
export
function _encode_NPartsMessage (value: NPartsMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NPartsMessage) { _cached_encoder_for_NPartsMessage = $._encodeSequenceOf<BIT_STRING>(() => $._encodeBitString, $.BER); }
    return _cached_encoder_for_NPartsMessage(value, elGetter);
}


/* eslint-enable */
