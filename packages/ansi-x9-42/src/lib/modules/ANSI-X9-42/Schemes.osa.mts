/* eslint-disable */
import { type KEY_AGREEMENT } from "../ANSI-X9-42/KEY-AGREEMENT.oca.mjs";
import { NamedSchemes } from "../ANSI-X9-42/NamedSchemes.osa.mjs";
import { Schemes_Union0_Intersection0_Element } from "./Schemes-Union0-Intersection0-Element.oa.mjs";
import { Schemes_Union1_Intersection0_Element } from "./Schemes-Union1-Intersection0-Element.oa.mjs";
import { Schemes_Union2_Intersection0_Element } from "./Schemes-Union2-Intersection0-Element.oa.mjs";
import { Schemes_Union3_Intersection0_Element } from "./Schemes-Union3-Intersection0-Element.oa.mjs";
import { Schemes_Union4_Intersection0_Element } from "./Schemes-Union4-Intersection0-Element.oa.mjs";
import { Schemes_Union5_Intersection0_Element } from "./Schemes-Union5-Intersection0-Element.oa.mjs";
import { Schemes_Union6_Intersection0_Element } from "./Schemes-Union6-Intersection0-Element.oa.mjs";
import { Schemes_Union7_Intersection0_Element } from "./Schemes-Union7-Intersection0-Element.oa.mjs";


/**
 * @summary Schemes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Schemes KEY-AGREEMENT ::= {
 * { OID dhStatic     PARMS SchemeParameters } |
 * { OID dhEphem    PARMS SchemeParameters } |
 * { OID dhOneFlow    PARMS SchemeParameters } |
 * { OID dhHybrid1    PARMS SchemeParameters } |
 * { OID dhHybrid2    PARMS SchemeParameters } |
 * { OID dhHybridOneFlow PARMS SchemeParameters } |
 * { OID mqv2        PARMS  SchemeParameters } |
 * { OID mqv1        PARMS  SchemeParameters } |
 * --
 * NamedSchemes,
 * ...
 * }
 * ```
 *
 * @constant
 * @type {KEY_AGREEMENT[]}
 *
 */
export const Schemes: KEY_AGREEMENT<any>[] = [
    Schemes_Union0_Intersection0_Element,
    Schemes_Union1_Intersection0_Element,
    Schemes_Union2_Intersection0_Element,
    Schemes_Union3_Intersection0_Element,
    Schemes_Union4_Intersection0_Element,
    Schemes_Union5_Intersection0_Element,
    Schemes_Union6_Intersection0_Element,
    Schemes_Union7_Intersection0_Element,
    ...NamedSchemes,
];

/* eslint-enable */
