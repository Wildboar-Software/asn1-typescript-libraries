/* eslint-disable */
import { type ALGORITHM } from "../ANSI-X9-62/ALGORITHM.oca.mjs";
import { ANSIX9HashFunctions_Union0_Intersection0_Element } from "./ANSIX9HashFunctions-Union0-Intersection0-Element.oa.mjs";
import { ANSIX9HashFunctions_Union1_Intersection0_Element } from "./ANSIX9HashFunctions-Union1-Intersection0-Element.oa.mjs";
import { ANSIX9HashFunctions_Union2_Intersection0_Element } from "./ANSIX9HashFunctions-Union2-Intersection0-Element.oa.mjs";
import { ANSIX9HashFunctions_Union3_Intersection0_Element } from "./ANSIX9HashFunctions-Union3-Intersection0-Element.oa.mjs";
import { ANSIX9HashFunctions_Union4_Intersection0_Element } from "./ANSIX9HashFunctions-Union4-Intersection0-Element.oa.mjs";
import { ANSIX9HashFunctions_Union5_Intersection0_Element } from "./ANSIX9HashFunctions-Union5-Intersection0-Element.oa.mjs";
import { ANSIX9HashFunctions_Union6_Intersection0_Element } from "./ANSIX9HashFunctions-Union6-Intersection0-Element.oa.mjs";
import { ANSIX9HashFunctions_Union7_Intersection0_Element } from "./ANSIX9HashFunctions-Union7-Intersection0-Element.oa.mjs";
import { ANSIX9HashFunctions_Union8_Intersection0_Element } from "./ANSIX9HashFunctions-Union8-Intersection0-Element.oa.mjs";
import { ANSIX9HashFunctions_Union9_Intersection0_Element } from "./ANSIX9HashFunctions-Union9-Intersection0-Element.oa.mjs";

/**
 * @summary ANSIX9HashFunctions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ANSIX9HashFunctions ALGORITHM ::= {
 * { OID sha-1 } |
 * { OID sha-1 PARMS NULL } |
 * { OID id-SHA224 } |
 * { OID id-SHA224 PARMS NULL } |
 * { OID id-SHA256 } |
 * { OID id-SHA256 PARMS NULL } |
 * { OID id-SHA384 } |
 * { OID id-SHA384 PARMS NULL } |
 * { OID id-SHA512 } |
 * { OID id-SHA512 PARMS NULL } ,
 * ... -- Additional hash functions may be added
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const ANSIX9HashFunctions: ALGORITHM[] = [
    ANSIX9HashFunctions_Union0_Intersection0_Element,
    ANSIX9HashFunctions_Union1_Intersection0_Element,
    ANSIX9HashFunctions_Union2_Intersection0_Element,
    ANSIX9HashFunctions_Union3_Intersection0_Element,
    ANSIX9HashFunctions_Union4_Intersection0_Element,
    ANSIX9HashFunctions_Union5_Intersection0_Element,
    ANSIX9HashFunctions_Union6_Intersection0_Element,
    ANSIX9HashFunctions_Union7_Intersection0_Element,
    ANSIX9HashFunctions_Union8_Intersection0_Element,
    ANSIX9HashFunctions_Union9_Intersection0_Element,
];

/* eslint-enable */
