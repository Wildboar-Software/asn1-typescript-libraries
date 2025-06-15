/* eslint-disable */
import { CurveNames_Union0_Intersection0_Element } from "../ANSI-X9-62/CurveNames-Union0-Intersection0-Element.oa.mjs";
import { CurveNames_Union1_Intersection0_Element } from "../ANSI-X9-62/CurveNames-Union1-Intersection0-Element.oa.mjs";
import { CurveNames_Union10_Intersection0_Element } from "../ANSI-X9-62/CurveNames-Union10-Intersection0-Element.oa.mjs";
import { CurveNames_Union11_Intersection0_Element } from "../ANSI-X9-62/CurveNames-Union11-Intersection0-Element.oa.mjs";
import { CurveNames_Union12_Intersection0_Element } from "../ANSI-X9-62/CurveNames-Union12-Intersection0-Element.oa.mjs";
import { CurveNames_Union13_Intersection0_Element } from "../ANSI-X9-62/CurveNames-Union13-Intersection0-Element.oa.mjs";
import { CurveNames_Union14_Intersection0_Element } from "../ANSI-X9-62/CurveNames-Union14-Intersection0-Element.oa.mjs";
import { CurveNames_Union15_Intersection0_Element } from "../ANSI-X9-62/CurveNames-Union15-Intersection0-Element.oa.mjs";
import { CurveNames_Union16_Intersection0_Element } from "../ANSI-X9-62/CurveNames-Union16-Intersection0-Element.oa.mjs";
import { CurveNames_Union17_Intersection0_Element } from "../ANSI-X9-62/CurveNames-Union17-Intersection0-Element.oa.mjs";
import { CurveNames_Union18_Intersection0_Element } from "../ANSI-X9-62/CurveNames-Union18-Intersection0-Element.oa.mjs";
import { CurveNames_Union19_Intersection0_Element } from "../ANSI-X9-62/CurveNames-Union19-Intersection0-Element.oa.mjs";
import { CurveNames_Union2_Intersection0_Element } from "../ANSI-X9-62/CurveNames-Union2-Intersection0-Element.oa.mjs";
import { CurveNames_Union20_Intersection0_Element } from "../ANSI-X9-62/CurveNames-Union20-Intersection0-Element.oa.mjs";
import { CurveNames_Union21_Intersection0_Element } from "../ANSI-X9-62/CurveNames-Union21-Intersection0-Element.oa.mjs";
import { CurveNames_Union22_Intersection0_Element } from "../ANSI-X9-62/CurveNames-Union22-Intersection0-Element.oa.mjs";
import { CurveNames_Union23_Intersection0_Element } from "../ANSI-X9-62/CurveNames-Union23-Intersection0-Element.oa.mjs";
import { CurveNames_Union24_Intersection0_Element } from "../ANSI-X9-62/CurveNames-Union24-Intersection0-Element.oa.mjs";
import { CurveNames_Union25_Intersection0_Element } from "../ANSI-X9-62/CurveNames-Union25-Intersection0-Element.oa.mjs";
import { CurveNames_Union26_Intersection0_Element } from "../ANSI-X9-62/CurveNames-Union26-Intersection0-Element.oa.mjs";
import { CurveNames_Union3_Intersection0_Element } from "../ANSI-X9-62/CurveNames-Union3-Intersection0-Element.oa.mjs";
import { CurveNames_Union4_Intersection0_Element } from "../ANSI-X9-62/CurveNames-Union4-Intersection0-Element.oa.mjs";
import { CurveNames_Union5_Intersection0_Element } from "../ANSI-X9-62/CurveNames-Union5-Intersection0-Element.oa.mjs";
import { CurveNames_Union6_Intersection0_Element } from "../ANSI-X9-62/CurveNames-Union6-Intersection0-Element.oa.mjs";
import { CurveNames_Union7_Intersection0_Element } from "../ANSI-X9-62/CurveNames-Union7-Intersection0-Element.oa.mjs";
import { CurveNames_Union8_Intersection0_Element } from "../ANSI-X9-62/CurveNames-Union8-Intersection0-Element.oa.mjs";
import { CurveNames_Union9_Intersection0_Element } from "../ANSI-X9-62/CurveNames-Union9-Intersection0-Element.oa.mjs";
import { CURVES } from "../ANSI-X9-62/CURVES.oca.mjs";
/**
 * @summary CurveNames
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CurveNames CURVES ::= {
 *     { ID c2pnb163v1 } | -- J.4.1, example 1 --
 *     { ID c2pnb163v2 } | -- J.4.1, example 2 --
 *     { ID c2pnb163v3 } | -- J.4.1, example 3 --
 *     { ID c2pnb176w1 } | -- J.4.2, example 1 --
 *     { ID c2tnb191v1 } | -- J.4.3, example 1 --
 *     { ID c2tnb191v2 } | -- J.4.3, example 2 --
 *     { ID c2tnb191v3 } | -- J.4.3, example 3 --
 *     { ID c2onb191v4 } | -- J.4.3, example 4 --
 *     { ID c2onb191v5 } | -- J.4.3, example 5 --
 *     { ID c2pnb208w1 } | -- J.4.4, example 1 --
 *     { ID c2tnb239v1 } | -- J.4.5, example 1 --
 *     { ID c2tnb239v2 } | -- J.4.5, example 2 --
 *     { ID c2tnb239v3 } | -- J.4.5, example 3 --
 *     { ID c2onb239v4 } | -- J.4.5, example 4 --
 *     { ID c2onb239v5 } | -- J.4.5, example 5 --
 *     { ID c2pnb272w1 } | -- J.4.6, example 1 --
 *     { ID c2pnb304w1 } | -- J.4.7, example 1 --
 *     { ID c2tnb359v1 } | -- J.4.8, example 1 --
 *     { ID c2pnb368w1 } | -- J.4.9, example 1 --
 *     { ID c2tnb431r1 } | -- J.4.10, example 1 --
 *     { ID prime192v1 } | -- J.5.1, example 1 --
 *     { ID prime192v2 } | -- J.5.1, example 2 --
 *     { ID prime192v3 } | -- J.5.1, example 3 --
 *     { ID prime239v1 } | -- J.5.2, example 1 --
 *     { ID prime239v2 } | -- J.5.2, example 2 --
 *     { ID prime239v3 } | -- J.5.2, example 3 --
 *     { ID prime256v1 },  -- J.5.3, example 1 --
 *     ... -- others --
 * }
 * ```
 *
 * @constant
 * @type {CURVES[]}
 *
 */
export const CurveNames: CURVES[] = [
    CurveNames_Union0_Intersection0_Element,
    CurveNames_Union1_Intersection0_Element,
    CurveNames_Union2_Intersection0_Element,
    CurveNames_Union3_Intersection0_Element,
    CurveNames_Union4_Intersection0_Element,
    CurveNames_Union5_Intersection0_Element,
    CurveNames_Union6_Intersection0_Element,
    CurveNames_Union7_Intersection0_Element,
    CurveNames_Union8_Intersection0_Element,
    CurveNames_Union9_Intersection0_Element,
    CurveNames_Union10_Intersection0_Element,
    CurveNames_Union11_Intersection0_Element,
    CurveNames_Union12_Intersection0_Element,
    CurveNames_Union13_Intersection0_Element,
    CurveNames_Union14_Intersection0_Element,
    CurveNames_Union15_Intersection0_Element,
    CurveNames_Union16_Intersection0_Element,
    CurveNames_Union17_Intersection0_Element,
    CurveNames_Union18_Intersection0_Element,
    CurveNames_Union19_Intersection0_Element,
    CurveNames_Union20_Intersection0_Element,
    CurveNames_Union21_Intersection0_Element,
    CurveNames_Union22_Intersection0_Element,
    CurveNames_Union23_Intersection0_Element,
    CurveNames_Union24_Intersection0_Element,
    CurveNames_Union25_Intersection0_Element,
    CurveNames_Union26_Intersection0_Element,
];

/* eslint-enable */
