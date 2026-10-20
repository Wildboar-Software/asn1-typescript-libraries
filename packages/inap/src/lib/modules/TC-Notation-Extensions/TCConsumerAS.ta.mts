/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";
// export { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";


/**
 * @summary TCConsumerAS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TCConsumerAS{OPERATION-PACKAGE:package}  ::= 
 *   TCMessage{{ConsumerPerforms  {package}}, {ConsumerPerforms  {package}}}
 * ```
 */
export
type TCConsumerAS = TCMessage; // DefinedType

let _cached_decoder_for_TCConsumerAS: $.ASN1Decoder<TCConsumerAS> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TCConsumerAS
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TCConsumerAS (el: _Element): TCConsumerAS {
    if (!_cached_decoder_for_TCConsumerAS) { _cached_decoder_for_TCConsumerAS = _decode_TCMessage; }
    return _cached_decoder_for_TCConsumerAS(el);
}

let _cached_encoder_for_TCConsumerAS: $.ASN1Encoder<TCConsumerAS> | null = null;

/**
 * @summary Encodes a(n) TCConsumerAS into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TCConsumerAS, encoded as an ASN.1 Element.
 */
export
function _encode_TCConsumerAS (value: TCConsumerAS, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TCConsumerAS) { _cached_encoder_for_TCConsumerAS = _encode_TCMessage; }
    return _cached_encoder_for_TCConsumerAS(value, elGetter);
}


/* eslint-enable */
