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
import { SIGNED, _get_decoder_for_SIGNED, _get_encoder_for_SIGNED } from "@wildboar/x500/src/lib/modules/AuthenticationFramework/SIGNED.ta.mjs";
import { BiometricPolicyCertificateInfo, _decode_BiometricPolicyCertificateInfo, _encode_BiometricPolicyCertificateInfo } from "../TAI/BiometricPolicyCertificateInfo.ta.mjs";
/**
 * @summary BiometricPolicyCertificate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricPolicyCertificate  ::= 
 *   SIGNED{BiometricPolicyCertificateInfo}
 * ```
 */
export
type BiometricPolicyCertificate = SIGNED<BiometricPolicyCertificateInfo>; // DefinedType

let _cached_decoder_for_BiometricPolicyCertificate: $.ASN1Decoder<BiometricPolicyCertificate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BiometricPolicyCertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BiometricPolicyCertificate} The decoded data structure.
 */
export
function _decode_BiometricPolicyCertificate (el: _Element) {
    if (!_cached_decoder_for_BiometricPolicyCertificate) { _cached_decoder_for_BiometricPolicyCertificate = _get_decoder_for_SIGNED<BiometricPolicyCertificateInfo>(_decode_BiometricPolicyCertificateInfo); }
    return _cached_decoder_for_BiometricPolicyCertificate(el);
}

let _cached_encoder_for_BiometricPolicyCertificate: $.ASN1Encoder<BiometricPolicyCertificate> | null = null;

/**
 * @summary Encodes a(n) BiometricPolicyCertificate into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricPolicyCertificate, encoded as an ASN.1 Element.
 */
export
function _encode_BiometricPolicyCertificate (value: BiometricPolicyCertificate, elGetter: $.ASN1Encoder<BiometricPolicyCertificate>) {
    if (!_cached_encoder_for_BiometricPolicyCertificate) { _cached_encoder_for_BiometricPolicyCertificate = _get_encoder_for_SIGNED<BiometricPolicyCertificateInfo>(_encode_BiometricPolicyCertificateInfo); }
    return _cached_encoder_for_BiometricPolicyCertificate(value, elGetter);
}


/* eslint-enable */
