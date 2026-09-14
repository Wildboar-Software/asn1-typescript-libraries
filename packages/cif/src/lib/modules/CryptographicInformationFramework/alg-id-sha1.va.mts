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
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
// export { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import { id_sha1 } from "../CryptographicInformationFramework/id-sha1.va.mjs";
// export { id_sha1 } from "../CryptographicInformationFramework/id-sha1.va.mjs";
import { _decode_SHA1Parameters, _encode_SHA1Parameters } from "../CryptographicInformationFramework/SHA1Parameters.ta.mjs";
// export { SHA1Parameters, _decode_SHA1Parameters, _encode_SHA1Parameters } from "../CryptographicInformationFramework/SHA1Parameters.ta.mjs";
// export { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca.mjs";
// export { SupportedAlgorithms } from "../AuthenticationFramework/SupportedAlgorithms.osa.mjs";


/**
 * @summary alg_id_sha1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * alg-id-sha1 AlgorithmIdentifier {{DigestAlgorithms}} ::= {
 *     algorithm   id-sha1,
 *     parameters  SHA1Parameters:NULL
 * }
 * ```
 * 
 * @constant
 */
export
const alg_id_sha1: AlgorithmIdentifier = AlgorithmIdentifier._from_object({ algorithm: id_sha1, parameters: null });

/* eslint-enable */
