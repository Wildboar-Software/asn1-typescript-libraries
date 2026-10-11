/**
 * @description
 *
 * ASN.1 module `DeviationList`
 * `{joint-iso-itu-t(2) international-organization(23) icao(136) mrtd(1) security(1) deviationlist(7)}`
 * from ICAO Doc 9303. `IMPLICIT TAGS`.
 *
 * The short integer name `generic` is omitted because it collides between
 * `CertificateBodyField` and `MRZField`. Use `CertificateBodyField_generic`
 * and `MRZField_generic`.
 */

export * from "./CertField.ta.mjs";
export {
    type CertificateBodyField,
    CertificateBodyField_generic,
    CertificateBodyField_version,
    version,
    CertificateBodyField_serialNumber,
    serialNumber,
    CertificateBodyField_signature,
    signature,
    CertificateBodyField_issuer,
    issuer,
    CertificateBodyField_validity,
    validity,
    CertificateBodyField_subject,
    subject,
    CertificateBodyField_subjectPublicKeyInfo,
    subjectPublicKeyInfo,
    CertificateBodyField_issuerUniqueID,
    issuerUniqueID,
    CertificateBodyField_subjectUniqueID,
    subjectUniqueID,
    _decode_CertificateBodyField,
    _encode_CertificateBodyField,
} from "./CertificateBodyField.ta.mjs";
export * from "./Datagroup.ta.mjs";
export * from "./Deviation.ta.mjs";
export * from "./DeviationDescription.ta.mjs";
export * from "./DeviationDocuments.ta.mjs";
export * from "./DeviationList.ta.mjs";
export * from "./DeviationListVersion.ta.mjs";
export * from "./Digest.ta.mjs";
export * from "./DocumentSignerIdentifier.ta.mjs";
export * from "./IssuancePeriod.ta.mjs";
export {
    type MRZField,
    MRZField_generic,
    MRZField_documentCode,
    documentCode,
    MRZField_issuingState,
    issuingState,
    MRZField_personName,
    personName,
    MRZField_documentNumber,
    documentNumber,
    MRZField_nationality,
    nationality,
    MRZField_dateOfBirth,
    dateOfBirth,
    MRZField_sex,
    sex,
    MRZField_dateOfExpiry,
    dateOfExpiry,
    MRZField_optionalData,
    optionalData,
    _decode_MRZField,
    _encode_MRZField,
} from "./MRZField.ta.mjs";
export * from "./id-Deviation-CertOrKey-AAKeyCompromised.va.mjs";
export * from "./id-Deviation-CertOrKey-CSCAEncoding.va.mjs";
export * from "./id-Deviation-CertOrKey-DSEncoding.va.mjs";
export * from "./id-Deviation-CertOrKey-DSSignature.va.mjs";
export * from "./id-Deviation-CertOrKey.va.mjs";
export * from "./id-Deviation-Chip.va.mjs";
export * from "./id-Deviation-LDS-COMInconsistent.va.mjs";
export * from "./id-Deviation-LDS-DGHashWrong.va.mjs";
export * from "./id-Deviation-LDS-DGMalformed.va.mjs";
export * from "./id-Deviation-LDS-SODSignatureWrong.va.mjs";
export * from "./id-Deviation-LDS.va.mjs";
export * from "./id-Deviation-MRZ-WrongCheckDigit.va.mjs";
export * from "./id-Deviation-MRZ-WrongData.va.mjs";
export * from "./id-Deviation-MRZ.va.mjs";
export * from "./id-Deviation-NationalUse.va.mjs";
export * from "./id-icao-DeviationList.va.mjs";
export * from "./id-icao-DeviationListSigningKey.va.mjs";
export * from "./id-icao-mrtd-security.va.mjs";
export * from "./id-icao-mrtd.va.mjs";
export * from "./id-icao.va.mjs";
