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
export { ALGORITHM } from "../ANSI-X9-62/ALGORITHM.oca.mjs";
export { ecdsa_with_Recommended } from "../ANSI-X9-62/ecdsa-with-Recommended.va.mjs";
export { ecdsa_with_Sha1 } from "../ANSI-X9-62/ecdsa-with-Sha1.va.mjs";
export { ecdsa_with_Sha224 } from "../ANSI-X9-62/ecdsa-with-Sha224.va.mjs";
export { ecdsa_with_Sha256 } from "../ANSI-X9-62/ecdsa-with-Sha256.va.mjs";
export { ecdsa_with_Sha384 } from "../ANSI-X9-62/ecdsa-with-Sha384.va.mjs";
export { ecdsa_with_Sha512 } from "../ANSI-X9-62/ecdsa-with-Sha512.va.mjs";
export { ecdsa_with_Specified } from "../ANSI-X9-62/ecdsa-with-Specified.va.mjs";
export {
    HashAlgorithm,
    _decode_HashAlgorithm,
    _encode_HashAlgorithm,
} from "../ANSI-X9-62/HashAlgorithm.ta.mjs";

/* START_OF_SYMBOL_DEFINITION ECCAlgorithmSet */
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
/* END_OF_SYMBOL_DEFINITION ECCAlgorithmSet */

/* eslint-enable */
