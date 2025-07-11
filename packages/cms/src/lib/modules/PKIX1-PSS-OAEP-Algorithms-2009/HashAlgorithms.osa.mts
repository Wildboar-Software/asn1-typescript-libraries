/* eslint-disable */
import { type DIGEST_ALGORITHM } from "../AlgorithmInformation-2009/DIGEST-ALGORITHM.oca.mjs";
import { HashAlgorithms_Union0_Intersection0_Element } from "./HashAlgorithms-Union0-Intersection0-Element.oa.mjs";
import { HashAlgorithms_Union1_Intersection0_Element } from "./HashAlgorithms-Union1-Intersection0-Element.oa.mjs";
import { HashAlgorithms_Union2_Intersection0_Element } from "./HashAlgorithms-Union2-Intersection0-Element.oa.mjs";
import { HashAlgorithms_Union3_Intersection0_Element } from "./HashAlgorithms-Union3-Intersection0-Element.oa.mjs";
import { HashAlgorithms_Union4_Intersection0_Element } from "./HashAlgorithms-Union4-Intersection0-Element.oa.mjs";


/**
 * @summary HashAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HashAlgorithms DIGEST-ALGORITHM ::= {
 * { IDENTIFIER id-sha1 PARAMS TYPE NULL ARE preferredPresent } |
 * { IDENTIFIER id-sha224 PARAMS TYPE NULL ARE preferredPresent } |
 * { IDENTIFIER id-sha256 PARAMS TYPE NULL ARE preferredPresent } |
 * { IDENTIFIER id-sha384 PARAMS TYPE NULL ARE preferredPresent } |
 * { IDENTIFIER id-sha512 PARAMS TYPE NULL ARE preferredPresent }
 * }
 * ```
 *
 * @constant
 * @type {DIGEST_ALGORITHM[]}
 *
 */
export const HashAlgorithms: DIGEST_ALGORITHM[] = [
    HashAlgorithms_Union0_Intersection0_Element,
    HashAlgorithms_Union1_Intersection0_Element,
    HashAlgorithms_Union2_Intersection0_Element,
    HashAlgorithms_Union3_Intersection0_Element,
    HashAlgorithms_Union4_Intersection0_Element,
];

/* eslint-enable */
