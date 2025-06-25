/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/DirectoryString.ta.mjs";


/**
 * @summary ClassificationName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClassificationName  ::=  DirectoryString{ubClassificationNameLength}
 * ```
 */
export type ClassificationName = DirectoryString; // DefinedType


let _cached_decoder_for_ClassificationName: $.ASN1Decoder<ClassificationName> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ClassificationName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ClassificationName} The decoded data structure.
 */
export function _decode_ClassificationName(el: _Element): ClassificationName {
    if (!_cached_decoder_for_ClassificationName) {
        _cached_decoder_for_ClassificationName = _decode_DirectoryString;
    }
    return _cached_decoder_for_ClassificationName(el);
}


let _cached_encoder_for_ClassificationName: $.ASN1Encoder<ClassificationName> | null = null;


/**
 * @summary Encodes a(n) ClassificationName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClassificationName, encoded as an ASN.1 Element.
 */
export function _encode_ClassificationName(
    value: ClassificationName,
    elGetter: $.ASN1Encoder<ClassificationName>
): _Element {
    if (!_cached_encoder_for_ClassificationName) {
        _cached_encoder_for_ClassificationName = _encode_DirectoryString;
    }
    return _cached_encoder_for_ClassificationName(value, elGetter);
}


/* eslint-enable */
