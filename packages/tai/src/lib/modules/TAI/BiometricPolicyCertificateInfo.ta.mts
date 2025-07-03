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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    TBSAttributeCertificate as AttributeCertificateInfo,
    _decode_TBSAttributeCertificate as _decode_AttributeCertificateInfo,
    _encode_TBSAttributeCertificate as _encode_AttributeCertificateInfo,
} from "@wildboar/x500/AttributeCertificateDefinitions";


/**
 * @summary BiometricPolicyCertificateInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricPolicyCertificateInfo  ::= 
 *   AttributeCertificateInfo(WITH COMPONENTS {
 *                              ...,
 *                              attributes  (SIZE (1..MAX))
 *                            })
 * ```
 */
export
type BiometricPolicyCertificateInfo = AttributeCertificateInfo; // DefinedType

let _cached_decoder_for_BiometricPolicyCertificateInfo: $.ASN1Decoder<BiometricPolicyCertificateInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BiometricPolicyCertificateInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BiometricPolicyCertificateInfo} The decoded data structure.
 */
export
function _decode_BiometricPolicyCertificateInfo (el: _Element): BiometricPolicyCertificateInfo {
    if (!_cached_decoder_for_BiometricPolicyCertificateInfo) { _cached_decoder_for_BiometricPolicyCertificateInfo = _decode_AttributeCertificateInfo; }
    return _cached_decoder_for_BiometricPolicyCertificateInfo(el);
}

let _cached_encoder_for_BiometricPolicyCertificateInfo: $.ASN1Encoder<BiometricPolicyCertificateInfo> | null = null;

/**
 * @summary Encodes a(n) BiometricPolicyCertificateInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricPolicyCertificateInfo, encoded as an ASN.1 Element.
 */
export
function _encode_BiometricPolicyCertificateInfo (value: BiometricPolicyCertificateInfo, elGetter: $.ASN1Encoder<BiometricPolicyCertificateInfo>): _Element {
    if (!_cached_encoder_for_BiometricPolicyCertificateInfo) { _cached_encoder_for_BiometricPolicyCertificateInfo = _encode_AttributeCertificateInfo; }
    return _cached_encoder_for_BiometricPolicyCertificateInfo(value, elGetter);
}


/* eslint-enable */
