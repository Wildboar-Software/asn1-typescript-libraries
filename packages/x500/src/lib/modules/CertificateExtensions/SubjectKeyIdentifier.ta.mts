/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    KeyIdentifier,
    _decode_KeyIdentifier,
    _encode_KeyIdentifier,
} from "../CertificateExtensions/KeyIdentifier.ta.mjs";
/**
 * @summary SubjectKeyIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubjectKeyIdentifier  ::=  KeyIdentifier
 * ```
 */
export type SubjectKeyIdentifier = KeyIdentifier; // DefinedType

let _cached_decoder_for_SubjectKeyIdentifier: $.ASN1Decoder<SubjectKeyIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubjectKeyIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubjectKeyIdentifier} The decoded data structure.
 */
export function _decode_SubjectKeyIdentifier(el: _Element): SubjectKeyIdentifier {
    if (!_cached_decoder_for_SubjectKeyIdentifier) {
        _cached_decoder_for_SubjectKeyIdentifier = _decode_KeyIdentifier;
    }
    return _cached_decoder_for_SubjectKeyIdentifier(el);
}

let _cached_encoder_for_SubjectKeyIdentifier: $.ASN1Encoder<SubjectKeyIdentifier> | null = null;

/**
 * @summary Encodes a(n) SubjectKeyIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubjectKeyIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_SubjectKeyIdentifier(
    value: SubjectKeyIdentifier,
    elGetter: $.ASN1Encoder<SubjectKeyIdentifier>
): _Element {
    if (!_cached_encoder_for_SubjectKeyIdentifier) {
        _cached_encoder_for_SubjectKeyIdentifier = _encode_KeyIdentifier;
    }
    return _cached_encoder_for_SubjectKeyIdentifier(value, elGetter);
}


/* eslint-enable */
