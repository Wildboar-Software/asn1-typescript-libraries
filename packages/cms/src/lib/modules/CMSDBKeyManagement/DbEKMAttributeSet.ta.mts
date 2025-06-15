/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../CryptographicMessageSyntax-2010/Attribute.ta.mjs";

/**
 * @summary DbEKMAttributeSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DbEKMAttributeSet  ::=
 * SEQUENCE(SIZE(1..MAX)) OF Attribute{{DbEKMAttributes}}
 * ```
 */
export type DbEKMAttributeSet = Attribute[]; // SequenceOfType


let _cached_decoder_for_DbEKMAttributeSet: $.ASN1Decoder<DbEKMAttributeSet> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DbEKMAttributeSet
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DbEKMAttributeSet} The decoded data structure.
 */
export function _decode_DbEKMAttributeSet(el: _Element) {
    if (!_cached_decoder_for_DbEKMAttributeSet) {
        _cached_decoder_for_DbEKMAttributeSet = $._decodeSequenceOf<Attribute>(
            () => _decode_Attribute
        );
    }
    return _cached_decoder_for_DbEKMAttributeSet(el);
}


let _cached_encoder_for_DbEKMAttributeSet: $.ASN1Encoder<DbEKMAttributeSet> | null = null;


/**
 * @summary Encodes a(n) DbEKMAttributeSet into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DbEKMAttributeSet, encoded as an ASN.1 Element.
 */
export function _encode_DbEKMAttributeSet(
    value: DbEKMAttributeSet,
    elGetter: $.ASN1Encoder<DbEKMAttributeSet>
) {
    if (!_cached_encoder_for_DbEKMAttributeSet) {
        _cached_encoder_for_DbEKMAttributeSet = $._encodeSequenceOf<Attribute>(
            () => _encode_Attribute,
            $.BER
        );
    }
    return _cached_encoder_for_DbEKMAttributeSet(value, elGetter);
}


/* eslint-enable */
