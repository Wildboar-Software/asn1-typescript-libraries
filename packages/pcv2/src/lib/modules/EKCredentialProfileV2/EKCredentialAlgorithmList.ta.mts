/* eslint-disable */
import {
    ASN1Element as _Element,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EKCredentialAlgorithmList
 * @description
 *
 * Subject public-key algorithms for which this issuer has issued an
 * endorsement-key credential to this TPM. A verifier uses the list to detect a
 * downgrade in which a stronger credential was omitted from a request.
 *
 * Required when the issuer has issued at least one ML-KEM or ML-DSA
 * endorsement-key credential for the TPM, including when a firmware upgrade is
 * still required before that credential can be used. Optional otherwise.
 *
 * The list contains one object identifier for the largest issued parameter set,
 * by target security strength, in each algorithm family below. An identifier
 * that is shared by more than one credential, such as a storage key and a
 * signing key on the same curve, appears once.
 *
 * RSA (any size): 1.2.840.113549.1.1.1 (rsaEncryption, RFC 8017).
 *
 * ECC NIST P-256: 1.2.840.10045.3.1.7 (secp256r1, RFC 5480).
 *
 * ECC NIST P-384: 1.3.132.0.34 (secp384r1, RFC 5480).
 *
 * ECC NIST P-521: 1.3.132.0.35 (secp521r1, RFC 5480).
 *
 * ECC SM2 P-256: 1.2.156.10197.1.301 (SM2EllipticCurveCryptography, GM/T
 * 0006-2012).
 *
 * ML-KEM-512: 2.16.840.1.101.3.4.4.1.
 *
 * ML-KEM-768: 2.16.840.1.101.3.4.4.2.
 *
 * ML-KEM-1024: 2.16.840.1.101.3.4.4.3.
 *
 * ML-DSA-44: 2.16.840.1.101.3.4.3.17.
 *
 * ML-DSA-65: 2.16.840.1.101.3.4.3.18.
 *
 * ML-DSA-87: 2.16.840.1.101.3.4.3.19.
 *
 * The ML-KEM and ML-DSA identifiers are those specified in the LAMPS Kyber and
 * Dilithium certificate drafts cited by the profile.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.4
 * and §3.2.11.2.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EKCredentialAlgorithmList  ::=  SEQUENCE OF OBJECT IDENTIFIER
 * ```
 */
export
type EKCredentialAlgorithmList = OBJECT_IDENTIFIER[]; // SequenceOfType

let _cached_decoder_for_EKCredentialAlgorithmList: $.ASN1Decoder<EKCredentialAlgorithmList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EKCredentialAlgorithmList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EKCredentialAlgorithmList (el: _Element): EKCredentialAlgorithmList {
    if (!_cached_decoder_for_EKCredentialAlgorithmList) { _cached_decoder_for_EKCredentialAlgorithmList = $._decodeSequenceOf<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier); }
    return _cached_decoder_for_EKCredentialAlgorithmList(el);
}

let _cached_encoder_for_EKCredentialAlgorithmList: $.ASN1Encoder<EKCredentialAlgorithmList> | null = null;

/**
 * @summary Encodes a(n) EKCredentialAlgorithmList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EKCredentialAlgorithmList, encoded as an ASN.1 Element.
 */
export
function _encode_EKCredentialAlgorithmList (value: EKCredentialAlgorithmList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EKCredentialAlgorithmList) { _cached_encoder_for_EKCredentialAlgorithmList = $._encodeSequenceOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER); }
    return _cached_encoder_for_EKCredentialAlgorithmList(value, elGetter);
}


/* eslint-enable */
