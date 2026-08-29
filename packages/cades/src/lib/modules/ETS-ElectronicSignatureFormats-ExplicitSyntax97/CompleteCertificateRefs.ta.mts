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
import { OtherCertID, _decode_OtherCertID, _encode_OtherCertID } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/OtherCertID.ta.mjs";
/**
 * @summary CompleteCertificateRefs
 * @description
 *
 * Value of the unsigned `complete-certificate-references`
 * attribute (CAdES-C). Full set of CA certificates used to
 * validate the ES, up to but not including the signer's
 * certificate (that is in the signing-certificate attribute).
 * `issuerSerial` shall be present in each `OtherCertID`. Only
 * a single instance of the attribute. May also be added to a
 * TST to reference the TSU chain. ETSI TS 101 733 V2.2.1
 * (2013-04) §6.2.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CompleteCertificateRefs  ::=  SEQUENCE OF OtherCertID
 * ```
 */
export
type CompleteCertificateRefs = OtherCertID[]; // SequenceOfType

let _cached_decoder_for_CompleteCertificateRefs: $.ASN1Decoder<CompleteCertificateRefs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompleteCertificateRefs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CompleteCertificateRefs} The decoded data structure.
 */
export
function _decode_CompleteCertificateRefs (el: _Element): CompleteCertificateRefs {
    if (!_cached_decoder_for_CompleteCertificateRefs) { _cached_decoder_for_CompleteCertificateRefs = $._decodeSequenceOf<OtherCertID>(() => _decode_OtherCertID); }
    return _cached_decoder_for_CompleteCertificateRefs(el);
}

let _cached_encoder_for_CompleteCertificateRefs: $.ASN1Encoder<CompleteCertificateRefs> | null = null;

/**
 * @summary Encodes a(n) CompleteCertificateRefs into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompleteCertificateRefs, encoded as an ASN.1 Element.
 */
export
function _encode_CompleteCertificateRefs (value: CompleteCertificateRefs, elGetter: $.ASN1Encoder<CompleteCertificateRefs>): _Element {
    if (!_cached_encoder_for_CompleteCertificateRefs) { _cached_encoder_for_CompleteCertificateRefs = $._encodeSequenceOf<OtherCertID>(() => _encode_OtherCertID, $.DER); }
    return _cached_encoder_for_CompleteCertificateRefs(value, elGetter);
}


/* eslint-enable */
