/* eslint-disable */
import { ALGORITHM } from "../ANSI-X9-62/ALGORITHM.oca.mjs";
import { ECCAlgorithmSet_Union0_Intersection0_Element } from "./ECCAlgorithmSet-Union0-Intersection0-Element.oa.mjs";
import { ECCAlgorithmSet_Union1_Intersection0_Element } from "./ECCAlgorithmSet-Union1-Intersection0-Element.oa.mjs";
import { ECCAlgorithmSet_Union2_Intersection0_Element } from "./ECCAlgorithmSet-Union2-Intersection0-Element.oa.mjs";
import { ECCAlgorithmSet_Union3_Intersection0_Element } from "./ECCAlgorithmSet-Union3-Intersection0-Element.oa.mjs";
import { ECCAlgorithmSet_Union4_Intersection0_Element } from "./ECCAlgorithmSet-Union4-Intersection0-Element.oa.mjs";
import { ECCAlgorithmSet_Union5_Intersection0_Element } from "./ECCAlgorithmSet-Union5-Intersection0-Element.oa.mjs";
import { ECCAlgorithmSet_Union6_Intersection0_Element } from "./ECCAlgorithmSet-Union6-Intersection0-Element.oa.mjs";
import { ECCAlgorithmSet_Union7_Intersection0_Element } from "./ECCAlgorithmSet-Union7-Intersection0-Element.oa.mjs";
import { ECCAlgorithmSet_Union8_Intersection0_Element } from "./ECCAlgorithmSet-Union8-Intersection0-Element.oa.mjs";
/**
 * @summary ECCAlgorithmSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECCAlgorithmSet ALGORITHM ::= {
 * {OID ecdsa-with-Sha1} |
 * {OID ecdsa-with-Sha1 PARMS NULL} |
 * {OID ecdsa-with-Recommended} |
 * {OID ecdsa-with-Recommended PARMS NULL} |
 * {OID ecdsa-with-Specified PARMS HashAlgorithm }  |
 * {OID ecdsa-with-Sha224} |
 * {OID ecdsa-with-Sha256} |
 * {OID ecdsa-with-Sha384} |
 * {OID ecdsa-with-Sha512},
 * ... -- More ECC algorithms might be added, including key agreement.
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const ECCAlgorithmSet: ALGORITHM[] = [
    ECCAlgorithmSet_Union0_Intersection0_Element,
    ECCAlgorithmSet_Union1_Intersection0_Element,
    ECCAlgorithmSet_Union2_Intersection0_Element,
    ECCAlgorithmSet_Union3_Intersection0_Element,
    ECCAlgorithmSet_Union4_Intersection0_Element,
    ECCAlgorithmSet_Union5_Intersection0_Element,
    ECCAlgorithmSet_Union6_Intersection0_Element,
    ECCAlgorithmSet_Union7_Intersection0_Element,
    ECCAlgorithmSet_Union8_Intersection0_Element,
];

/* eslint-enable */
