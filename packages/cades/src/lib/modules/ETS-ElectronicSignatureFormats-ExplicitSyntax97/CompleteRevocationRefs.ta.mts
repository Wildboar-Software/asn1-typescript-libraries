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
import { CrlOcspRef, _decode_CrlOcspRef, _encode_CrlOcspRef } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/CrlOcspRef.ta.mjs";
/**
 * @summary CompleteRevocationRefs
 * @description
 *
 * Value of the unsigned `complete-revocation-references`
 * attribute (CAdES-C). One `CrlOcspRef` for the signing
 * certificate, then one per `OtherCertID` in
 * `CompleteCertificateRefs`, in the same order. At least one
 * of CRL, OCSP, or other refs should be present for all but
 * the trusted CA. Only a single instance. ETSI TS 101 733
 * V2.2.1 (2013-04) §6.2.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CompleteRevocationRefs  ::=  SEQUENCE OF CrlOcspRef
 * ```
 */
export
type CompleteRevocationRefs = CrlOcspRef[]; // SequenceOfType

let _cached_decoder_for_CompleteRevocationRefs: $.ASN1Decoder<CompleteRevocationRefs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompleteRevocationRefs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CompleteRevocationRefs} The decoded data structure.
 */
export
function _decode_CompleteRevocationRefs (el: _Element): CompleteRevocationRefs {
    if (!_cached_decoder_for_CompleteRevocationRefs) { _cached_decoder_for_CompleteRevocationRefs = $._decodeSequenceOf<CrlOcspRef>(() => _decode_CrlOcspRef); }
    return _cached_decoder_for_CompleteRevocationRefs(el);
}

let _cached_encoder_for_CompleteRevocationRefs: $.ASN1Encoder<CompleteRevocationRefs> | null = null;

/**
 * @summary Encodes a(n) CompleteRevocationRefs into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompleteRevocationRefs, encoded as an ASN.1 Element.
 */
export
function _encode_CompleteRevocationRefs (value: CompleteRevocationRefs, elGetter: $.ASN1Encoder<CompleteRevocationRefs>): _Element {
    if (!_cached_encoder_for_CompleteRevocationRefs) { _cached_encoder_for_CompleteRevocationRefs = $._encodeSequenceOf<CrlOcspRef>(() => _encode_CrlOcspRef, $.DER); }
    return _cached_encoder_for_CompleteRevocationRefs(value, elGetter);
}


/* eslint-enable */
