/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CertificateChoice,
    _decode_CertificateChoice,
    _encode_CertificateChoice,
} from "../PKCS7/CertificateChoice.ta.mjs";

/**
 * @summary CertificateSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateSet  ::=  SET OF CertificateChoice
 * ```
 */
export type CertificateSet = CertificateChoice[]; // SetOfType


let _cached_decoder_for_CertificateSet: $.ASN1Decoder<CertificateSet> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CertificateSet
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateSet} The decoded data structure.
 */
export function _decode_CertificateSet(el: _Element) {
    if (!_cached_decoder_for_CertificateSet) {
        _cached_decoder_for_CertificateSet = $._decodeSetOf<CertificateChoice>(
            () => _decode_CertificateChoice
        );
    }
    return _cached_decoder_for_CertificateSet(el);
}


let _cached_encoder_for_CertificateSet: $.ASN1Encoder<CertificateSet> | null = null;


/**
 * @summary Encodes a(n) CertificateSet into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateSet, encoded as an ASN.1 Element.
 */
export function _encode_CertificateSet(
    value: CertificateSet,
    elGetter: $.ASN1Encoder<CertificateSet>
) {
    if (!_cached_encoder_for_CertificateSet) {
        _cached_encoder_for_CertificateSet = $._encodeSetOf<CertificateChoice>(
            () => _encode_CertificateChoice,
            $.BER
        );
    }
    return _cached_encoder_for_CertificateSet(value, elGetter);
}


/* eslint-enable */
