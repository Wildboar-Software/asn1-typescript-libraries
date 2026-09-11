/**
 * X.509 `AlgorithmIdentifier`, re-exported for XBHSM
 * `HashAlgorithm` and `PSIDEncryptionAlgorithm`
 * ([ITU-T X.1085](https://www.itu.int/rec/T-REC-X.1085-201610-I)
 * | ISO/IEC 17922 Annex A.3).
 */
export {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/x500/AuthenticationFramework";
