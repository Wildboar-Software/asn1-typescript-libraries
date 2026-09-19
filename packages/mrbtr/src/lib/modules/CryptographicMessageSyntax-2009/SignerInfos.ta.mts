/**
 * CMS `SignerInfos` (RFC 3852). `SignedTestReport.signerInfos` in
 * ISO/IEC 29120-1:2022 Clause 6.6: collection of per-signer
 * information.
 */
export {
    type SignerInfos,
    _decode_SignerInfos,
    _encode_SignerInfos,
} from "@wildboar/cms";
