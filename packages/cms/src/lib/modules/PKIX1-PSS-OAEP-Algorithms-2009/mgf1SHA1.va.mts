/* eslint-disable */
import { id_mgf1 } from "../PKIX1-PSS-OAEP-Algorithms-2009/id-mgf1.va.mjs";
import { MaskGenAlgorithm } from "../PKIX1-PSS-OAEP-Algorithms-2009/MaskGenAlgorithm.ta.mjs";
import { sha1Identifier } from "../PKIX1-PSS-OAEP-Algorithms-2009/sha1Identifier.va.mjs";
import {
    AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/x500/AuthenticationFramework";
import {
    DERElement,
} from "@wildboar/asn1";


/**
 * @summary mgf1SHA1
 * @description
 *
 * Default MGF1 AlgorithmIdentifier using SHA-1
 * ([RFC 4055 §2.2](https://datatracker.ietf.org/doc/html/rfc4055#section-2.2)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mgf1SHA1 MaskGenAlgorithm ::= {
 * algorithm id-mgf1,
 * parameters HashAlgorithm : sha1Identifier
 * }
 * ```
 *
 * @constant
 */
export const mgf1SHA1: MaskGenAlgorithm = new AlgorithmIdentifier(
    id_mgf1,
    _encode_AlgorithmIdentifier(sha1Identifier, () => new DERElement()),
);


/* eslint-enable */
