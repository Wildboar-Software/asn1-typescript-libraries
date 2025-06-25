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
import { SIGNED, _get_decoder_for_SIGNED, _get_encoder_for_SIGNED } from "@wildboar/x500/src/lib/modules/AuthenticationFramework/SIGNED.ta.mjs";
import { BiometricCertificateInfo, _decode_BiometricCertificateInfo, _encode_BiometricCertificateInfo } from "../TAI/BiometricCertificateInfo.ta.mjs";
/**
 * @summary BiometricCertificate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricCertificate  ::= 
 *   SIGNED{BiometricCertificateInfo}
 * ```
 */
export
type BiometricCertificate = SIGNED<BiometricCertificateInfo>; // DefinedType

let _cached_decoder_for_BiometricCertificate: $.ASN1Decoder<BiometricCertificate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BiometricCertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BiometricCertificate} The decoded data structure.
 */
export
function _decode_BiometricCertificate (el: _Element): BiometricCertificate {
    if (!_cached_decoder_for_BiometricCertificate) { _cached_decoder_for_BiometricCertificate = _get_decoder_for_SIGNED<BiometricCertificateInfo>(_decode_BiometricCertificateInfo); }
    return _cached_decoder_for_BiometricCertificate(el);
}

let _cached_encoder_for_BiometricCertificate: $.ASN1Encoder<BiometricCertificate> | null = null;

/**
 * @summary Encodes a(n) BiometricCertificate into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricCertificate, encoded as an ASN.1 Element.
 */
export
function _encode_BiometricCertificate (value: BiometricCertificate, elGetter: $.ASN1Encoder<BiometricCertificate>): _Element {
    if (!_cached_encoder_for_BiometricCertificate) { _cached_encoder_for_BiometricCertificate = _get_encoder_for_SIGNED<BiometricCertificateInfo>(_encode_BiometricCertificateInfo); }
    return _cached_encoder_for_BiometricCertificate(value, elGetter);
}


/* eslint-enable */
