/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary SupportedApplicationContexts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedApplicationContexts  ::=  SET OF OBJECT IDENTIFIER
 * ```
 */
export type SupportedApplicationContexts = OBJECT_IDENTIFIER[]; // SetOfType

let _cached_decoder_for_SupportedApplicationContexts: $.ASN1Decoder<SupportedApplicationContexts> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SupportedApplicationContexts
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupportedApplicationContexts} The decoded data structure.
 */
export function _decode_SupportedApplicationContexts(el: _Element): SupportedApplicationContexts {
    if (!_cached_decoder_for_SupportedApplicationContexts) {
        _cached_decoder_for_SupportedApplicationContexts = $._decodeSetOf<OBJECT_IDENTIFIER>(
            () => $._decodeObjectIdentifier
        );
    }
    return _cached_decoder_for_SupportedApplicationContexts(el);
}

let _cached_encoder_for_SupportedApplicationContexts: $.ASN1Encoder<SupportedApplicationContexts> | null = null;

/**
 * @summary Encodes a(n) SupportedApplicationContexts into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedApplicationContexts, encoded as an ASN.1 Element.
 */
export function _encode_SupportedApplicationContexts(
    value: SupportedApplicationContexts,
    elGetter: $.ASN1Encoder<SupportedApplicationContexts>
): _Element {
    if (!_cached_encoder_for_SupportedApplicationContexts) {
        _cached_encoder_for_SupportedApplicationContexts = $._encodeSetOf<OBJECT_IDENTIFIER>(
            () => $._encodeObjectIdentifier,
            $.DER
        );
    }
    return _cached_encoder_for_SupportedApplicationContexts(value, elGetter);
}


/* eslint-enable */
