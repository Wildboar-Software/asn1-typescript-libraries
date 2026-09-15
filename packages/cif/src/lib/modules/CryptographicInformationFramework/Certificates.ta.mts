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
import { PathOrObjects, _get_decoder_for_PathOrObjects, _get_encoder_for_PathOrObjects } from "../CryptographicInformationFramework/PathOrObjects.ta.mjs";
// export { PathOrObjects, _get_decoder_for_PathOrObjects, _get_encoder_for_PathOrObjects } from "../CryptographicInformationFramework/PathOrObjects.ta.mjs";
import { CertificateChoice, _decode_CertificateChoice, _encode_CertificateChoice } from "../CryptographicInformationFramework/CertificateChoice.ta.mjs";
// export { CertificateChoice, _decode_CertificateChoice, _encode_CertificateChoice } from "../CryptographicInformationFramework/CertificateChoice.ta.mjs";


/**
 * @summary Certificates
 * @description
 * 
 * Certificate directory contents (EF.CD). Used for cardholder certs
 * (`certificates`), trust-point certs (`trustedCertificates`), and other useful
 * certs (`usefulCertificates`). ISO/IEC 7816-15:2016 §8.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Certificates  ::=  PathOrObjects {CertificateChoice}
 * ```
 */
export
type Certificates = PathOrObjects<CertificateChoice>; // DefinedType

let _cached_decoder_for_Certificates: $.ASN1Decoder<Certificates> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Certificates
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Certificates (el: _Element): Certificates {
    if (!_cached_decoder_for_Certificates) { _cached_decoder_for_Certificates = _get_decoder_for_PathOrObjects<CertificateChoice>(_decode_CertificateChoice); }
    return _cached_decoder_for_Certificates(el);
}

let _cached_encoder_for_Certificates: $.ASN1Encoder<Certificates> | null = null;

/**
 * @summary Encodes a(n) Certificates into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Certificates, encoded as an ASN.1 Element.
 */
export
function _encode_Certificates (value: Certificates, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Certificates) { _cached_encoder_for_Certificates = _get_encoder_for_PathOrObjects<CertificateChoice>(_encode_CertificateChoice); }
    return _cached_encoder_for_Certificates(value, elGetter);
}


/* eslint-enable */
