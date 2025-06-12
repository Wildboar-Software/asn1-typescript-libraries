/* eslint-disable */
import { MAC_ALGORITHM } from "@wildboar/cms/src/lib/modules/AlgorithmInformation-2009/MAC-ALGORITHM.oca.mjs";
import { Password_MACAlgorithms_Union0_Intersection0_Element } from "../PKIXCRMF-2009/Password-MACAlgorithms-Union0-Intersection0-Element.oa.mjs";

/* START_OF_SYMBOL_DEFINITION Password_MACAlgorithms */
/**
 * @summary Password_MACAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Password-MACAlgorithms MAC-ALGORITHM ::= {
 *     {IDENTIFIER id-PasswordBasedMac
 *     PARAMS TYPE PBMParameter ARE required
 *     IS-KEYED-MAC TRUE
 *     }, ...
 * }
 * ```
 *
 * @constant
 * @type {MAC_ALGORITHM[]}
 *
 */
export const Password_MACAlgorithms: MAC_ALGORITHM[] = [
    Password_MACAlgorithms_Union0_Intersection0_Element,
];
/* END_OF_SYMBOL_DEFINITION Password_MACAlgorithms */

/* eslint-enable */
