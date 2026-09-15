/**
 * ISO/IEC 9594-8 `KeyUsage`, used in `Usage.keyUsage` (trusted usage).
 * Mapping to CIO `KeyUsageFlags` is Table 2 of ISO/IEC 7816-15:2016 §8.2.9.
 */
export {
    type KeyUsage,
    KeyUsage_digitalSignature,
    digitalSignature,
    KeyUsage_contentCommitment,
    contentCommitment,
    KeyUsage_keyEncipherment,
    keyEncipherment,
    KeyUsage_dataEncipherment,
    dataEncipherment,
    KeyUsage_keyAgreement,
    keyAgreement,
    KeyUsage_keyCertSign,
    keyCertSign,
    KeyUsage_cRLSign,
    cRLSign,
    KeyUsage_encipherOnly,
    encipherOnly,
    KeyUsage_decipherOnly,
    decipherOnly,
    _decode_KeyUsage,
    _encode_KeyUsage,
} from "@wildboar/x500/CertificateExtensions";
