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
import { CertificateSerialNumber, _decode_CertificateSerialNumber, _encode_CertificateSerialNumber } from "../AuthenticationFramework/CertificateSerialNumber.ta.mjs";



/**
 * @summary CertificateIDInformation
 * @description
 *
 * Alias of X.509 `CertificateSerialNumber`. Identifies a reference
 * template for revocation checks without sending the template itself
 * (privacy-protecting models). ITU-T Rec. X.1084 (05/2008) §11.1,
 * Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertificateIDInformation         ::=      CertificateSerialNumber
 * ```
 */
export
type CertificateIDInformation = CertificateSerialNumber; // DefinedType

let _cached_decoder_for_CertificateIDInformation: $.ASN1Decoder<CertificateIDInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificateIDInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CertificateIDInformation (el: _Element): CertificateIDInformation {
    if (!_cached_decoder_for_CertificateIDInformation) { _cached_decoder_for_CertificateIDInformation = _decode_CertificateSerialNumber; }
    return _cached_decoder_for_CertificateIDInformation(el);
}

let _cached_encoder_for_CertificateIDInformation: $.ASN1Encoder<CertificateIDInformation> | null = null;

/**
 * @summary Encodes a(n) CertificateIDInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateIDInformation, encoded as an ASN.1 Element.
 */
export
function _encode_CertificateIDInformation (value: CertificateIDInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CertificateIDInformation) { _cached_encoder_for_CertificateIDInformation = _encode_CertificateSerialNumber; }
    return _cached_encoder_for_CertificateIDInformation(value, elGetter);
}


/* eslint-enable */
