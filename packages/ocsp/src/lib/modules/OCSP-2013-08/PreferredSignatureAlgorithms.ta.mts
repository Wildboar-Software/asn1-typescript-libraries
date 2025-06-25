/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    PreferredSignatureAlgorithm,
    _decode_PreferredSignatureAlgorithm,
    _encode_PreferredSignatureAlgorithm,
} from "../OCSP-2013-08/PreferredSignatureAlgorithm.ta.mjs";

/**
 * @summary PreferredSignatureAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PreferredSignatureAlgorithms  ::=  SEQUENCE OF PreferredSignatureAlgorithm
 * ```
 */
export type PreferredSignatureAlgorithms = PreferredSignatureAlgorithm[]; // SequenceOfType


let _cached_decoder_for_PreferredSignatureAlgorithms: $.ASN1Decoder<PreferredSignatureAlgorithms> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PreferredSignatureAlgorithms
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PreferredSignatureAlgorithms} The decoded data structure.
 */
export function _decode_PreferredSignatureAlgorithms(el: _Element): PreferredSignatureAlgorithms {
    if (!_cached_decoder_for_PreferredSignatureAlgorithms) {
        _cached_decoder_for_PreferredSignatureAlgorithms = $._decodeSequenceOf<PreferredSignatureAlgorithm>(
            () => _decode_PreferredSignatureAlgorithm
        );
    }
    return _cached_decoder_for_PreferredSignatureAlgorithms(el);
}


let _cached_encoder_for_PreferredSignatureAlgorithms: $.ASN1Encoder<PreferredSignatureAlgorithms> | null = null;


/**
 * @summary Encodes a(n) PreferredSignatureAlgorithms into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PreferredSignatureAlgorithms, encoded as an ASN.1 Element.
 */
export function _encode_PreferredSignatureAlgorithms(
    value: PreferredSignatureAlgorithms,
    elGetter: $.ASN1Encoder<PreferredSignatureAlgorithms>
): _Element {
    if (!_cached_encoder_for_PreferredSignatureAlgorithms) {
        _cached_encoder_for_PreferredSignatureAlgorithms = $._encodeSequenceOf<PreferredSignatureAlgorithm>(
            () => _encode_PreferredSignatureAlgorithm,
            $.DER
        );
    }
    return _cached_encoder_for_PreferredSignatureAlgorithms(value, elGetter);
}


/* eslint-enable */
