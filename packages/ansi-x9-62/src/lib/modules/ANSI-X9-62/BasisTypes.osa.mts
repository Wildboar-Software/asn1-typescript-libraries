/* eslint-disable */
import { CHARACTERISTIC_TWO } from "../ANSI-X9-62/CHARACTERISTIC-TWO.oca.mjs";
import { BasisTypes_Union0_Intersection0_Element } from "./BasisTypes-Union0-Intersection0-Element.oa.mjs";
import { BasisTypes_Union1_Intersection0_Element } from "./BasisTypes-Union1-Intersection0-Element.oa.mjs";
import { BasisTypes_Union2_Intersection0_Element } from "./BasisTypes-Union2-Intersection0-Element.oa.mjs";
/* START_OF_SYMBOL_DEFINITION BasisTypes */
/**
 * @summary BasisTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BasisTypes CHARACTERISTIC-TWO ::= {
 * { NULL          IDENTIFIED BY  gnBasis } |
 * { Trinomial      IDENTIFIED BY  tpBasis } |
 * { Pentanomial    IDENTIFIED BY  ppBasis },
 * ... -- Additional basis types may be added
 * }
 * ```
 *
 * @constant
 * @type {CHARACTERISTIC_TWO[]}
 *
 */
export const BasisTypes: CHARACTERISTIC_TWO<any>[] = [
    BasisTypes_Union0_Intersection0_Element,
    BasisTypes_Union1_Intersection0_Element,
    BasisTypes_Union2_Intersection0_Element,
];
/* END_OF_SYMBOL_DEFINITION BasisTypes */

/* eslint-enable */
