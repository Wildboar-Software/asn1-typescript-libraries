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
import * as $ from "asn1-ts/dist/functional.mjs";
import { SIGNED, _get_decoder_for_SIGNED, _get_encoder_for_SIGNED } from "@wildboar/x500/src/lib/modules/AuthenticationFramework/SIGNED.ta.mjs";
import { BiometricDeviceCertificateInfo, _decode_BiometricDeviceCertificateInfo, _encode_BiometricDeviceCertificateInfo } from "../TAI/BiometricDeviceCertificateInfo.ta.mjs";
/**
 * @summary BiometricDeviceCertificate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricDeviceCertificate  ::= 
 *   SIGNED{BiometricDeviceCertificateInfo}
 * ```
 */
export
type BiometricDeviceCertificate = SIGNED<BiometricDeviceCertificateInfo>; // DefinedType

let _cached_decoder_for_BiometricDeviceCertificate: $.ASN1Decoder<BiometricDeviceCertificate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BiometricDeviceCertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BiometricDeviceCertificate} The decoded data structure.
 */
export
function _decode_BiometricDeviceCertificate (el: _Element) {
    if (!_cached_decoder_for_BiometricDeviceCertificate) { _cached_decoder_for_BiometricDeviceCertificate = _get_decoder_for_SIGNED<BiometricDeviceCertificateInfo>(_decode_BiometricDeviceCertificateInfo); }
    return _cached_decoder_for_BiometricDeviceCertificate(el);
}

let _cached_encoder_for_BiometricDeviceCertificate: $.ASN1Encoder<BiometricDeviceCertificate> | null = null;

/**
 * @summary Encodes a(n) BiometricDeviceCertificate into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricDeviceCertificate, encoded as an ASN.1 Element.
 */
export
function _encode_BiometricDeviceCertificate (value: BiometricDeviceCertificate, elGetter: $.ASN1Encoder<BiometricDeviceCertificate>) {
    if (!_cached_encoder_for_BiometricDeviceCertificate) { _cached_encoder_for_BiometricDeviceCertificate = _get_encoder_for_SIGNED<BiometricDeviceCertificateInfo>(_encode_BiometricDeviceCertificateInfo); }
    return _cached_encoder_for_BiometricDeviceCertificate(value, elGetter);
}


/* eslint-enable */
