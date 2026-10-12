/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CodressMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CodressMessage  ::=  INTEGER
 * ```
 */
export
type CodressMessage = INTEGER;

let _cached_decoder_for_CodressMessage: $.ASN1Decoder<CodressMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CodressMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CodressMessage (el: _Element): CodressMessage {
    if (!_cached_decoder_for_CodressMessage) { _cached_decoder_for_CodressMessage = $._decodeInteger; }
    return _cached_decoder_for_CodressMessage(el);
}

let _cached_encoder_for_CodressMessage: $.ASN1Encoder<CodressMessage> | null = null;

/**
 * @summary Encodes a(n) CodressMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CodressMessage, encoded as an ASN.1 Element.
 */
export
function _encode_CodressMessage (value: CodressMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CodressMessage) { _cached_encoder_for_CodressMessage = $._encodeInteger; }
    return _cached_encoder_for_CodressMessage(value, elGetter);
}


/* eslint-enable */
