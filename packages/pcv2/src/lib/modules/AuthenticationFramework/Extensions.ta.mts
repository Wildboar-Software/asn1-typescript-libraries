/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../AuthenticationFramework/Extension.ta.mjs";
// export { Extension, _decode_Extension, _encode_Extension } from "../AuthenticationFramework/Extension.ta.mjs";


/**
 * @summary Extensions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Extensions  ::=  SEQUENCE SIZE (1..MAX) OF Extension
 * ```
 */
export
type Extensions = Extension[]; // SequenceOfType

let _cached_decoder_for_Extensions: $.ASN1Decoder<Extensions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Extensions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Extensions (el: _Element): Extensions {
    if (!_cached_decoder_for_Extensions) { _cached_decoder_for_Extensions = $._decodeSequenceOf<Extension>(() => _decode_Extension); }
    return _cached_decoder_for_Extensions(el);
}

let _cached_encoder_for_Extensions: $.ASN1Encoder<Extensions> | null = null;

/**
 * @summary Encodes a(n) Extensions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Extensions, encoded as an ASN.1 Element.
 */
export
function _encode_Extensions (value: Extensions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Extensions) { _cached_encoder_for_Extensions = $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER); }
    return _cached_encoder_for_Extensions(value, elGetter);
}


/* eslint-enable */
