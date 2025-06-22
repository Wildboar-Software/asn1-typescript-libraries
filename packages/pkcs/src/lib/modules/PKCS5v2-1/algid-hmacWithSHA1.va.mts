/* eslint-disable */
import * as asn1 from "@wildboar/asn1";
import { AlgorithmIdentifier } from "../PKCS5v2-1/AlgorithmIdentifier.ta.mjs";
import { id_hmacWithSHA1 } from "../PKCS5v2-1/id-hmacWithSHA1.va.mjs";

/**
 * @summary algid_hmacWithSHA1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * algid-hmacWithSHA1 AlgorithmIdentifier {{PBKDF2-PRFs}} ::= {algorithm id-hmacWithSHA1, parameters NULL : NULL}
 * ```
 *
 * @constant
 */
export const algid_hmacWithSHA1: AlgorithmIdentifier = AlgorithmIdentifier._from_object(
    {
        algorithm: id_hmacWithSHA1,
        parameters: new asn1.DERElement(
            asn1.ASN1TagClass.universal,
            asn1.ASN1Construction.primitive,
            asn1.ASN1UniversalType.nill,
            null
        ),
    }
);

/* eslint-enable */
