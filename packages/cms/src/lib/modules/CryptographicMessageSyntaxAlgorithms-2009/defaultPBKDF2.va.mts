/* eslint-disable */
import { alg_hMAC_SHA1 } from "../CryptographicMessageSyntaxAlgorithms-2009/alg-hMAC-SHA1.oa.mjs";
import { PBKDF2_PRFsAlgorithmIdentifier } from "../CryptographicMessageSyntaxAlgorithms-2009/PBKDF2-PRFsAlgorithmIdentifier.ta.mjs";
import {
    AlgorithmIdentifier,
} from "@wildboar/x500/AuthenticationFramework";
import {
    ASN1TagClass,
    ASN1Construction,
    ASN1UniversalType,
    DERElement,
} from "@wildboar/asn1";


/**
 * @summary defaultPBKDF2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * defaultPBKDF2 PBKDF2-PRFsAlgorithmIdentifier ::= { algorithm alg-hMAC-SHA1.&id, parameters NULL:NULL }
 * ```
 *
 * @constant
 */
export const defaultPBKDF2: PBKDF2_PRFsAlgorithmIdentifier = new AlgorithmIdentifier(
    alg_hMAC_SHA1["&id"],
    new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.nill,
        null,
    ),
);


/* eslint-enable */
