/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "@wildboar/x500/SelectedAttributeTypes";

/**
 * @summary MarkingPhrase
 * @description
 *
 * Marking text attached to a data object.
 * `DirectoryString` SIZE 1..256 (`ubMarkingPhraseLength`). If
 * omitted from `MarkingData`, marking codes apply to the
 * classification name. ITU-T Rec. X.841 (10/2000)
 * [§6.2.2.6](https://www.itu.int/rec/T-REC-X.841-200010-I).
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
export function _decode_MarkingPhrase(el: _Element): MarkingPhrase {
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
): _Element {
    if (!_cached_encoder_for_MarkingPhrase) {
        _cached_encoder_for_MarkingPhrase = _encode_DirectoryString;
    }
    return _cached_encoder_for_MarkingPhrase(value, elGetter);
}


/* eslint-enable */
