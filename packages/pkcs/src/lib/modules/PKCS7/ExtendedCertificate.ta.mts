/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/SIGNED.ta.mjs";
import {
    ExtendedCertificateInfo,
    _decode_ExtendedCertificateInfo,
    _encode_ExtendedCertificateInfo,
} from "../PKCS7/ExtendedCertificateInfo.ta.mjs";


/**
 * @summary ExtendedCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtendedCertificate  ::=
 *     SIGNED{ExtendedCertificateInfo}
 * ```
 */
export type ExtendedCertificate = SIGNED<ExtendedCertificateInfo>; // DefinedType


let _cached_decoder_for_ExtendedCertificate: $.ASN1Decoder<ExtendedCertificate> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedCertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtendedCertificate} The decoded data structure.
 */
export function _decode_ExtendedCertificate(el: _Element) {
    if (!_cached_decoder_for_ExtendedCertificate) {
        _cached_decoder_for_ExtendedCertificate = _get_decoder_for_SIGNED<ExtendedCertificateInfo>(
            _decode_ExtendedCertificateInfo
        );
    }
    return _cached_decoder_for_ExtendedCertificate(el);
}


let _cached_encoder_for_ExtendedCertificate: $.ASN1Encoder<ExtendedCertificate> | null = null;


/**
 * @summary Encodes a(n) ExtendedCertificate into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedCertificate, encoded as an ASN.1 Element.
 */
export function _encode_ExtendedCertificate(
    value: ExtendedCertificate,
    elGetter: $.ASN1Encoder<ExtendedCertificate>
) {
    if (!_cached_encoder_for_ExtendedCertificate) {
        _cached_encoder_for_ExtendedCertificate = _get_encoder_for_SIGNED<ExtendedCertificateInfo>(
            _encode_ExtendedCertificateInfo
        );
    }
    return _cached_encoder_for_ExtendedCertificate(value, elGetter);
}


/* eslint-enable */
