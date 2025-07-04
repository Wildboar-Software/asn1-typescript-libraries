/* eslint-disable */
import type { MAC_ALGORITHM } from "@wildboar/cms";
import { Password_MACAlgorithms_Union0_Intersection0_Element } from "../PKIXCRMF-2009/Password-MACAlgorithms-Union0-Intersection0-Element.oa.mjs";


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

/* eslint-enable */
