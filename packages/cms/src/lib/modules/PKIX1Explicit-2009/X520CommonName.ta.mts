/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/DirectoryString.ta.mjs";

/**
 * @summary X520CommonName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * X520CommonName  ::=  DirectoryString {ub-common-name}
 * ```
 */
export type X520CommonName = DirectoryString; // DefinedType


let _cached_decoder_for_X520CommonName: $.ASN1Decoder<X520CommonName> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) X520CommonName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {X520CommonName} The decoded data structure.
 */
export function _decode_X520CommonName(el: _Element) {
    if (!_cached_decoder_for_X520CommonName) {
        _cached_decoder_for_X520CommonName = _decode_DirectoryString;
    }
    return _cached_decoder_for_X520CommonName(el);
}


let _cached_encoder_for_X520CommonName: $.ASN1Encoder<X520CommonName> | null = null;


/**
 * @summary Encodes a(n) X520CommonName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The X520CommonName, encoded as an ASN.1 Element.
 */
export function _encode_X520CommonName(
    value: X520CommonName,
    elGetter: $.ASN1Encoder<X520CommonName>
) {
    if (!_cached_encoder_for_X520CommonName) {
        _cached_encoder_for_X520CommonName = _encode_DirectoryString;
    }
    return _cached_encoder_for_X520CommonName(value, elGetter);
}


/* eslint-enable */
