/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "@wildboar/x500/SelectedAttributeTypes";

/**
 * @summary X520name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * X520name  ::=  DirectoryString {ub-name}
 * ```
 */
export type X520name = DirectoryString; // DefinedType


let _cached_decoder_for_X520name: $.ASN1Decoder<X520name> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) X520name
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {X520name} The decoded data structure.
 */
export function _decode_X520name(el: _Element): X520name {
    if (!_cached_decoder_for_X520name) {
        _cached_decoder_for_X520name = _decode_DirectoryString;
    }
    return _cached_decoder_for_X520name(el);
}


let _cached_encoder_for_X520name: $.ASN1Encoder<X520name> | null = null;


/**
 * @summary Encodes a(n) X520name into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The X520name, encoded as an ASN.1 Element.
 */
export function _encode_X520name(
    value: X520name,
    elGetter: $.ASN1Encoder<X520name>
): _Element {
    if (!_cached_encoder_for_X520name) {
        _cached_encoder_for_X520name = _encode_DirectoryString;
    }
    return _cached_encoder_for_X520name(value, elGetter);
}


/* eslint-enable */
