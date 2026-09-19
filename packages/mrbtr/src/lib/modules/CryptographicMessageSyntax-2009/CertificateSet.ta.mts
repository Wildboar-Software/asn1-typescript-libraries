/**
 * CMS `CertificateSet` (RFC 3852). Optional `SignedTestReport.certificates`
 * in ISO/IEC 29120-1:2022 Clause 6.6; intended to hold paths from a
 * recognized root to all `signerInfos` signers.
 */
export {
    type CertificateSet,
    _decode_CertificateSet,
    _encode_CertificateSet,
} from "@wildboar/cms";
