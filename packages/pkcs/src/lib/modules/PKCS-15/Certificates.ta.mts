/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    CertificateType,
    _decode_CertificateType,
    _encode_CertificateType,
} from "../PKCS-15/CertificateType.ta.mjs";
import {
    PathOrObjects,
    _get_decoder_for_PathOrObjects,
    _get_encoder_for_PathOrObjects,
} from "../PKCS-15/PathOrObjects.ta.mjs";

/**
 * @summary Certificates
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Certificates  ::=  PathOrObjects {CertificateType}
 * ```
 */
export type Certificates = PathOrObjects<CertificateType>; // DefinedType


let _cached_decoder_for_Certificates: $.ASN1Decoder<Certificates> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Certificates
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Certificates} The decoded data structure.
 */
export function _decode_Certificates(el: _Element) {
    if (!_cached_decoder_for_Certificates) {
        _cached_decoder_for_Certificates = _get_decoder_for_PathOrObjects<CertificateType>(
            _decode_CertificateType
        );
    }
    return _cached_decoder_for_Certificates(el);
}


let _cached_encoder_for_Certificates: $.ASN1Encoder<Certificates> | null = null;


/**
 * @summary Encodes a(n) Certificates into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Certificates, encoded as an ASN.1 Element.
 */
export function _encode_Certificates(
    value: Certificates,
    elGetter: $.ASN1Encoder<Certificates>
) {
    if (!_cached_encoder_for_Certificates) {
        _cached_encoder_for_Certificates = _get_encoder_for_PathOrObjects<CertificateType>(
            _encode_CertificateType
        );
    }
    return _cached_encoder_for_Certificates(value, elGetter);
}


/* eslint-enable */
