/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    TBSAttributeCertificate as AttributeCertificateInfo,
    _decode_TBSAttributeCertificate as _decode_AttributeCertificateInfo,
    _encode_TBSAttributeCertificate as _encode_AttributeCertificateInfo,
} from "@wildboar/x500/src/lib/modules/AttributeCertificateDefinitions/TBSAttributeCertificate.ta.mjs";


/**
 * @summary BiometricCertificateInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricCertificateInfo  ::= 
 *   AttributeCertificateInfo(WITH COMPONENTS {
 *                              ...,
 *                              attributes  (SIZE (1..MAX))
 *                            })
 * ```
 */
export
type BiometricCertificateInfo = AttributeCertificateInfo; // DefinedType

let _cached_decoder_for_BiometricCertificateInfo: $.ASN1Decoder<BiometricCertificateInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BiometricCertificateInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BiometricCertificateInfo} The decoded data structure.
 */
export
function _decode_BiometricCertificateInfo (el: _Element) {
    if (!_cached_decoder_for_BiometricCertificateInfo) { _cached_decoder_for_BiometricCertificateInfo = _decode_AttributeCertificateInfo; }
    return _cached_decoder_for_BiometricCertificateInfo(el);
}

let _cached_encoder_for_BiometricCertificateInfo: $.ASN1Encoder<BiometricCertificateInfo> | null = null;

/**
 * @summary Encodes a(n) BiometricCertificateInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricCertificateInfo, encoded as an ASN.1 Element.
 */
export
function _encode_BiometricCertificateInfo (value: BiometricCertificateInfo, elGetter: $.ASN1Encoder<BiometricCertificateInfo>) {
    if (!_cached_encoder_for_BiometricCertificateInfo) { _cached_encoder_for_BiometricCertificateInfo = _encode_AttributeCertificateInfo; }
    return _cached_encoder_for_BiometricCertificateInfo(value, elGetter);
}


/* eslint-enable */
