/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CertificateList,
    _decode_CertificateList,
    _encode_CertificateList,
} from "@wildboar/x500/AuthenticationFramework";


/**
 * @summary CertificateRevocationLists
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateRevocationLists  ::=  SET OF CertificateList
 * ```
 */
export type CertificateRevocationLists = CertificateList[]; // SetOfType


let _cached_decoder_for_CertificateRevocationLists: $.ASN1Decoder<CertificateRevocationLists> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CertificateRevocationLists
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateRevocationLists} The decoded data structure.
 */
export function _decode_CertificateRevocationLists(el: _Element): CertificateRevocationLists {
    if (!_cached_decoder_for_CertificateRevocationLists) {
        _cached_decoder_for_CertificateRevocationLists = $._decodeSetOf<CertificateList>(
            () => _decode_CertificateList
        );
    }
    return _cached_decoder_for_CertificateRevocationLists(el);
}


let _cached_encoder_for_CertificateRevocationLists: $.ASN1Encoder<CertificateRevocationLists> | null = null;


/**
 * @summary Encodes a(n) CertificateRevocationLists into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateRevocationLists, encoded as an ASN.1 Element.
 */
export function _encode_CertificateRevocationLists(
    value: CertificateRevocationLists,
    elGetter: $.ASN1Encoder<CertificateRevocationLists>
): _Element {
    if (!_cached_encoder_for_CertificateRevocationLists) {
        _cached_encoder_for_CertificateRevocationLists = $._encodeSetOf<CertificateList>(
            () => _encode_CertificateList,
            $.BER
        );
    }
    return _cached_encoder_for_CertificateRevocationLists(value, elGetter);
}


/* eslint-enable */
