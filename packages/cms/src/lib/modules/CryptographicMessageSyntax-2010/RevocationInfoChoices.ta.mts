/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    RevocationInfoChoice,
    _decode_RevocationInfoChoice,
    _encode_RevocationInfoChoice,
} from "../CryptographicMessageSyntax-2010/RevocationInfoChoice.ta.mjs";

/**
 * @summary RevocationInfoChoices
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RevocationInfoChoices  ::=  SET OF RevocationInfoChoice
 * ```
 */
export type RevocationInfoChoices = RevocationInfoChoice[]; // SetOfType


let _cached_decoder_for_RevocationInfoChoices: $.ASN1Decoder<RevocationInfoChoices> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RevocationInfoChoices
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RevocationInfoChoices} The decoded data structure.
 */
export function _decode_RevocationInfoChoices(el: _Element) {
    if (!_cached_decoder_for_RevocationInfoChoices) {
        _cached_decoder_for_RevocationInfoChoices = $._decodeSetOf<RevocationInfoChoice>(
            () => _decode_RevocationInfoChoice
        );
    }
    return _cached_decoder_for_RevocationInfoChoices(el);
}


let _cached_encoder_for_RevocationInfoChoices: $.ASN1Encoder<RevocationInfoChoices> | null = null;


/**
 * @summary Encodes a(n) RevocationInfoChoices into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RevocationInfoChoices, encoded as an ASN.1 Element.
 */
export function _encode_RevocationInfoChoices(
    value: RevocationInfoChoices,
    elGetter: $.ASN1Encoder<RevocationInfoChoices>
) {
    if (!_cached_encoder_for_RevocationInfoChoices) {
        _cached_encoder_for_RevocationInfoChoices = $._encodeSetOf<RevocationInfoChoice>(
            () => _encode_RevocationInfoChoice,
            $.DER
        );
    }
    return _cached_encoder_for_RevocationInfoChoices(value, elGetter);
}


/* eslint-enable */
