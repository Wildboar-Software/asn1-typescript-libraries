/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AttributeCertificate,
    _decode_AttributeCertificate,
    _encode_AttributeCertificate,
} from "../AttributeCertificateDefinitions/AttributeCertificate.ta.mjs";
/**
 * @summary AttCertPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttCertPath  ::=  SEQUENCE OF AttributeCertificate
 * ```
 */
export type AttCertPath = AttributeCertificate[]; // SequenceOfType

let _cached_decoder_for_AttCertPath: $.ASN1Decoder<AttCertPath> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttCertPath
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttCertPath} The decoded data structure.
 */
export function _decode_AttCertPath(el: _Element) {
    if (!_cached_decoder_for_AttCertPath) {
        _cached_decoder_for_AttCertPath = $._decodeSequenceOf<AttributeCertificate>(
            () => _decode_AttributeCertificate
        );
    }
    return _cached_decoder_for_AttCertPath(el);
}

let _cached_encoder_for_AttCertPath: $.ASN1Encoder<AttCertPath> | null = null;

/**
 * @summary Encodes a(n) AttCertPath into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttCertPath, encoded as an ASN.1 Element.
 */
export function _encode_AttCertPath(
    value: AttCertPath,
    elGetter: $.ASN1Encoder<AttCertPath>
) {
    if (!_cached_encoder_for_AttCertPath) {
        _cached_encoder_for_AttCertPath = $._encodeSequenceOf<AttributeCertificate>(
            () => _encode_AttributeCertificate,
            $.DER
        );
    }
    return _cached_encoder_for_AttCertPath(value, elGetter);
}


/* eslint-enable */
