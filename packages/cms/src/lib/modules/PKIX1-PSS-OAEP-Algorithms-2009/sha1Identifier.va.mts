/* eslint-disable */
import { HashAlgorithm } from "../PKIX1-PSS-OAEP-Algorithms-2009/HashAlgorithm.ta.mjs";
import { id_sha1 } from "../PKIXAlgs-2009/id-sha1.va.mjs";
import {
    AlgorithmIdentifier,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import {
    ASN1TagClass,
    ASN1Construction,
    ASN1UniversalType,
    DERElement,
} from "asn1-ts";

/* START_OF_SYMBOL_DEFINITION sha1Identifier */
/**
 * @summary sha1Identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha1Identifier HashAlgorithm ::= {
 * algorithm id-sha1,
 * parameters NULL : NULL
 * }
 * ```
 *
 * @constant
 */
export const sha1Identifier: HashAlgorithm = new AlgorithmIdentifier(
    id_sha1,
    new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.nill,
        null,
    ),
);

/* END_OF_SYMBOL_DEFINITION sha1Identifier */

/* eslint-enable */
