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
 * @summary BiometricDeviceCertificateInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricDeviceCertificateInfo  ::= 
 *   AttributeCertificateInfo(WITH COMPONENTS {
 *                              ...,
 *                              attributes  (SIZE (1..MAX))
 *                            })
 * ```
 */
export
type BiometricDeviceCertificateInfo = AttributeCertificateInfo; // DefinedType

let _cached_decoder_for_BiometricDeviceCertificateInfo: $.ASN1Decoder<BiometricDeviceCertificateInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BiometricDeviceCertificateInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BiometricDeviceCertificateInfo} The decoded data structure.
 */
export
function _decode_BiometricDeviceCertificateInfo (el: _Element): BiometricDeviceCertificateInfo {
    if (!_cached_decoder_for_BiometricDeviceCertificateInfo) { _cached_decoder_for_BiometricDeviceCertificateInfo = _decode_AttributeCertificateInfo; }
    return _cached_decoder_for_BiometricDeviceCertificateInfo(el);
}

let _cached_encoder_for_BiometricDeviceCertificateInfo: $.ASN1Encoder<BiometricDeviceCertificateInfo> | null = null;

/**
 * @summary Encodes a(n) BiometricDeviceCertificateInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricDeviceCertificateInfo, encoded as an ASN.1 Element.
 */
export
function _encode_BiometricDeviceCertificateInfo (value: BiometricDeviceCertificateInfo, elGetter: $.ASN1Encoder<BiometricDeviceCertificateInfo>): _Element {
    if (!_cached_encoder_for_BiometricDeviceCertificateInfo) { _cached_encoder_for_BiometricDeviceCertificateInfo = _encode_AttributeCertificateInfo; }
    return _cached_encoder_for_BiometricDeviceCertificateInfo(value, elGetter);
}


/* eslint-enable */
