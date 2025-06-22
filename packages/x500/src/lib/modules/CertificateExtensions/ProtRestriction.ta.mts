/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ProtRestriction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtRestriction  ::=  SEQUENCE (SIZE (1..MAX)) OF OBJECT IDENTIFIER
 * ```
 */
export type ProtRestriction = OBJECT_IDENTIFIER[]; // SequenceOfType

let _cached_decoder_for_ProtRestriction: $.ASN1Decoder<ProtRestriction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProtRestriction
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtRestriction} The decoded data structure.
 */
export function _decode_ProtRestriction(el: _Element) {
    if (!_cached_decoder_for_ProtRestriction) {
        _cached_decoder_for_ProtRestriction = $._decodeSequenceOf<OBJECT_IDENTIFIER>(
            () => $._decodeObjectIdentifier
        );
    }
    return _cached_decoder_for_ProtRestriction(el);
}

let _cached_encoder_for_ProtRestriction: $.ASN1Encoder<ProtRestriction> | null = null;

/**
 * @summary Encodes a(n) ProtRestriction into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtRestriction, encoded as an ASN.1 Element.
 */
export function _encode_ProtRestriction(
    value: ProtRestriction,
    elGetter: $.ASN1Encoder<ProtRestriction>
) {
    if (!_cached_encoder_for_ProtRestriction) {
        _cached_encoder_for_ProtRestriction = $._encodeSequenceOf<OBJECT_IDENTIFIER>(
            () => $._encodeObjectIdentifier,
            $.DER
        );
    }
    return _cached_encoder_for_ProtRestriction(value, elGetter);
}


/* eslint-enable */
