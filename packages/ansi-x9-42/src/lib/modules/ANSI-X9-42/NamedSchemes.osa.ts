/* eslint-disable */
import { KEY_AGREEMENT } from "../ANSI-X9-42/KEY-AGREEMENT.oca.js";
import { NamedSchemes_Union0_Intersection0_Element } from "./NamedSchemes-Union0-Intersection0-Element.oa.js";
import { NamedSchemes_Union1_Intersection0_Element } from "./NamedSchemes-Union1-Intersection0-Element.oa.js";
import { NamedSchemes_Union2_Intersection0_Element } from "./NamedSchemes-Union2-Intersection0-Element.oa.js";
import { NamedSchemes_Union3_Intersection0_Element } from "./NamedSchemes-Union3-Intersection0-Element.oa.js";
import { NamedSchemes_Union4_Intersection0_Element } from "./NamedSchemes-Union4-Intersection0-Element.oa.js";
import { NamedSchemes_Union5_Intersection0_Element } from "./NamedSchemes-Union5-Intersection0-Element.oa.js";
import { NamedSchemes_Union6_Intersection0_Element } from "./NamedSchemes-Union6-Intersection0-Element.oa.js";
import { NamedSchemes_Union7_Intersection0_Element } from "./NamedSchemes-Union7-Intersection0-Element.oa.js";

/* START_OF_SYMBOL_DEFINITION NamedSchemes */
/**
 * @summary NamedSchemes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NamedSchemes KEY-AGREEMENT ::= {
 *      { OID  dhStatic-sha1 } |        -- { dhStatic, {id-sha1,NULL} }
 *      { OID  dhEphem-sha1  } |        -- { dhEphem, {id-sha1,NULL} }
 *      { OID dhOneFlow-sha1 } |     -- { dhOneFlow, {id-sha1,NULL} }
 *      { OID  dhHybrid1-sha1 } |    -- { dhHybrid1, {id-sha1,NULL} }
 *      { OID  dhHybrid2-sha1 } |    -- { dhHybrid2, {id-sha1,NULL} }
 *      { OID dhHybridOneFlow-sha1 } | -- { dhHybridOneFlow, {id-sha1,NULL} }
 *      { OID mqv2-sha1    } |        -- { mqv2,    {id-sha1,NULL} }
 *      { OID mqv1-sha1    },        -- { mqv1,    {id-sha1,NULL} }
 *      ...
 * }
 * ```
 *
 * @constant
 * @type {KEY_AGREEMENT[]}
 *
 */
export const NamedSchemes: KEY_AGREEMENT<any>[] = [
    NamedSchemes_Union0_Intersection0_Element,
    NamedSchemes_Union1_Intersection0_Element,
    NamedSchemes_Union2_Intersection0_Element,
    NamedSchemes_Union3_Intersection0_Element,
    NamedSchemes_Union4_Intersection0_Element,
    NamedSchemes_Union5_Intersection0_Element,
    NamedSchemes_Union6_Intersection0_Element,
    NamedSchemes_Union7_Intersection0_Element,
];
/* END_OF_SYMBOL_DEFINITION NamedSchemes */

/* eslint-enable */
