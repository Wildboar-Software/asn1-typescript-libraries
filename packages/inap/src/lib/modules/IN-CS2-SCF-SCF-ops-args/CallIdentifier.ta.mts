/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-CS2-datatypes/Integer4.ta.mjs";
// export { Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-CS2-datatypes/Integer4.ta.mjs";


/**
 * @summary CallIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallIdentifier  ::=  Integer4
 * ```
 */
export
type CallIdentifier = Integer4; // DefinedType

let _cached_decoder_for_CallIdentifier: $.ASN1Decoder<CallIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallIdentifier (el: _Element): CallIdentifier {
    if (!_cached_decoder_for_CallIdentifier) { _cached_decoder_for_CallIdentifier = _decode_Integer4; }
    return _cached_decoder_for_CallIdentifier(el);
}

let _cached_encoder_for_CallIdentifier: $.ASN1Encoder<CallIdentifier> | null = null;

/**
 * @summary Encodes a(n) CallIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_CallIdentifier (value: CallIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallIdentifier) { _cached_encoder_for_CallIdentifier = _encode_Integer4; }
    return _cached_encoder_for_CallIdentifier(value, elGetter);
}


/* eslint-enable */
