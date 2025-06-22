/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    CrossCertificates,
    _decode_CrossCertificates,
    _encode_CrossCertificates,
} from "../AuthenticationFramework/CrossCertificates.ta.mjs";
/**
 * @summary ForwardCertificationPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ForwardCertificationPath  ::=  SEQUENCE SIZE (1..MAX) OF CrossCertificates
 * ```
 */
export type ForwardCertificationPath = CrossCertificates[]; // SequenceOfType

let _cached_decoder_for_ForwardCertificationPath: $.ASN1Decoder<ForwardCertificationPath> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ForwardCertificationPath
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ForwardCertificationPath} The decoded data structure.
 */
export function _decode_ForwardCertificationPath(el: _Element) {
    if (!_cached_decoder_for_ForwardCertificationPath) {
        _cached_decoder_for_ForwardCertificationPath = $._decodeSequenceOf<CrossCertificates>(
            () => _decode_CrossCertificates
        );
    }
    return _cached_decoder_for_ForwardCertificationPath(el);
}

let _cached_encoder_for_ForwardCertificationPath: $.ASN1Encoder<ForwardCertificationPath> | null = null;

/**
 * @summary Encodes a(n) ForwardCertificationPath into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardCertificationPath, encoded as an ASN.1 Element.
 */
export function _encode_ForwardCertificationPath(
    value: ForwardCertificationPath,
    elGetter: $.ASN1Encoder<ForwardCertificationPath>
) {
    if (!_cached_encoder_for_ForwardCertificationPath) {
        _cached_encoder_for_ForwardCertificationPath = $._encodeSequenceOf<CrossCertificates>(
            () => _encode_CrossCertificates,
            $.DER
        );
    }
    return _cached_encoder_for_ForwardCertificationPath(value, elGetter);
}


/* eslint-enable */
