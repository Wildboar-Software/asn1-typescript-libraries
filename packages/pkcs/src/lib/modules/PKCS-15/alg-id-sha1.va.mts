/* eslint-disable */
import * as asn1 from "@wildboar/asn1";
import { AlgorithmIdentifier } from "@wildboar/x500/AuthenticationFramework";
import { sha_1 } from "../CryptographicMessageSyntax/sha-1.va.mjs";

/**
 * @summary alg_id_sha1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * alg-id-sha1 AlgorithmIdentifier {{DigestAlgorithms}} ::= { algorithm  sha-1, parameters SHA1Parameters : NULL}
 * ```
 *
 * @constant
 */
export const alg_id_sha1: AlgorithmIdentifier = AlgorithmIdentifier._from_object(
    {
        algorithm: sha_1,
        parameters: new asn1.DERElement(
            asn1.ASN1TagClass.universal,
            asn1.ASN1Construction.primitive,
            asn1.ASN1UniversalType.nill,
            null
        ),
        _unrecognizedExtensionsList: undefined,
    }
);

/* eslint-enable */
