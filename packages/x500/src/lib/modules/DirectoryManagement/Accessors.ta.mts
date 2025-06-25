/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta.mjs";
/**
 * @summary Accessors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Accessors  ::=  SET OF Name
 * ```
 */
export type Accessors = Name[]; // SetOfType

let _cached_decoder_for_Accessors: $.ASN1Decoder<Accessors> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Accessors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Accessors} The decoded data structure.
 */
export function _decode_Accessors(el: _Element): Accessors {
    if (!_cached_decoder_for_Accessors) {
        _cached_decoder_for_Accessors = $._decodeSetOf<Name>(
            () => _decode_Name
        );
    }
    return _cached_decoder_for_Accessors(el);
}

let _cached_encoder_for_Accessors: $.ASN1Encoder<Accessors> | null = null;

/**
 * @summary Encodes a(n) Accessors into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Accessors, encoded as an ASN.1 Element.
 */
export function _encode_Accessors(
    value: Accessors,
    elGetter: $.ASN1Encoder<Accessors>
): _Element {
    if (!_cached_encoder_for_Accessors) {
        _cached_encoder_for_Accessors = $._encodeSetOf<Name>(
            () => _encode_Name,
            $.DER
        );
    }
    return _cached_encoder_for_Accessors(value, elGetter);
}


/* eslint-enable */
