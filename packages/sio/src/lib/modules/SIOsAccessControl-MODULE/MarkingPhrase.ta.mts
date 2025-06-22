/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/DirectoryString.ta.mjs";

/**
 * @summary MarkingPhrase
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MarkingPhrase  ::=  DirectoryString{ubMarkingPhraseLength}
 * ```
 */
export type MarkingPhrase = DirectoryString; // DefinedType


let _cached_decoder_for_MarkingPhrase: $.ASN1Decoder<MarkingPhrase> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) MarkingPhrase
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MarkingPhrase} The decoded data structure.
 */
export function _decode_MarkingPhrase(el: _Element) {
    if (!_cached_decoder_for_MarkingPhrase) {
        _cached_decoder_for_MarkingPhrase = _decode_DirectoryString;
    }
    return _cached_decoder_for_MarkingPhrase(el);
}


let _cached_encoder_for_MarkingPhrase: $.ASN1Encoder<MarkingPhrase> | null = null;


/**
 * @summary Encodes a(n) MarkingPhrase into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MarkingPhrase, encoded as an ASN.1 Element.
 */
export function _encode_MarkingPhrase(
    value: MarkingPhrase,
    elGetter: $.ASN1Encoder<MarkingPhrase>
) {
    if (!_cached_encoder_for_MarkingPhrase) {
        _cached_encoder_for_MarkingPhrase = _encode_DirectoryString;
    }
    return _cached_encoder_for_MarkingPhrase(value, elGetter);
}


/* eslint-enable */
