/* eslint-disable */
import { ECDOMAIN } from "../ANSI-X9-62/ECDOMAIN.oca.js";
import { ANSIX9NamedDomains_Union0_Intersection0_Element } from "./ANSIX9NamedDomains-Union0-Intersection0-Element.oa.js";
import { ANSIX9NamedDomains_Union1_Intersection0_Element } from "./ANSIX9NamedDomains-Union1-Intersection0-Element.oa.js";
import { ANSIX9NamedDomains_Union10_Intersection0_Element } from "./ANSIX9NamedDomains-Union10-Intersection0-Element.oa.js";
import { ANSIX9NamedDomains_Union11_Intersection0_Element } from "./ANSIX9NamedDomains-Union11-Intersection0-Element.oa.js";
import { ANSIX9NamedDomains_Union12_Intersection0_Element } from "./ANSIX9NamedDomains-Union12-Intersection0-Element.oa.js";
import { ANSIX9NamedDomains_Union13_Intersection0_Element } from "./ANSIX9NamedDomains-Union13-Intersection0-Element.oa.js";
import { ANSIX9NamedDomains_Union14_Intersection0_Element } from "./ANSIX9NamedDomains-Union14-Intersection0-Element.oa.js";
import { ANSIX9NamedDomains_Union15_Intersection0_Element } from "./ANSIX9NamedDomains-Union15-Intersection0-Element.oa.js";
import { ANSIX9NamedDomains_Union16_Intersection0_Element } from "./ANSIX9NamedDomains-Union16-Intersection0-Element.oa.js";
import { ANSIX9NamedDomains_Union17_Intersection0_Element } from "./ANSIX9NamedDomains-Union17-Intersection0-Element.oa.js";
import { ANSIX9NamedDomains_Union2_Intersection0_Element } from "./ANSIX9NamedDomains-Union2-Intersection0-Element.oa.js";
import { ANSIX9NamedDomains_Union3_Intersection0_Element } from "./ANSIX9NamedDomains-Union3-Intersection0-Element.oa.js";
import { ANSIX9NamedDomains_Union4_Intersection0_Element } from "./ANSIX9NamedDomains-Union4-Intersection0-Element.oa.js";
import { ANSIX9NamedDomains_Union5_Intersection0_Element } from "./ANSIX9NamedDomains-Union5-Intersection0-Element.oa.js";
import { ANSIX9NamedDomains_Union6_Intersection0_Element } from "./ANSIX9NamedDomains-Union6-Intersection0-Element.oa.js";
import { ANSIX9NamedDomains_Union7_Intersection0_Element } from "./ANSIX9NamedDomains-Union7-Intersection0-Element.oa.js";
import { ANSIX9NamedDomains_Union8_Intersection0_Element } from "./ANSIX9NamedDomains-Union8-Intersection0-Element.oa.js";
import { ANSIX9NamedDomains_Union9_Intersection0_Element } from "./ANSIX9NamedDomains-Union9-Intersection0-Element.oa.js";
export { ansix9p192k1 } from "../ANSI-X9-62/ansix9p192k1.va.js";
export { ansix9p192r1 } from "../ANSI-X9-62/ansix9p192r1.va.js";
export { ansix9p224k1 } from "../ANSI-X9-62/ansix9p224k1.va.js";
export { ansix9p224r1 } from "../ANSI-X9-62/ansix9p224r1.va.js";
export { ansix9p256k1 } from "../ANSI-X9-62/ansix9p256k1.va.js";
export { ansix9p256r1 } from "../ANSI-X9-62/ansix9p256r1.va.js";
export { ansix9p384r1 } from "../ANSI-X9-62/ansix9p384r1.va.js";
export { ansix9p521r1 } from "../ANSI-X9-62/ansix9p521r1.va.js";
export { ansix9t163k1 } from "../ANSI-X9-62/ansix9t163k1.va.js";
export { ansix9t163r2 } from "../ANSI-X9-62/ansix9t163r2.va.js";
export { ansix9t233k1 } from "../ANSI-X9-62/ansix9t233k1.va.js";
export { ansix9t233r1 } from "../ANSI-X9-62/ansix9t233r1.va.js";
export { ansix9t283k1 } from "../ANSI-X9-62/ansix9t283k1.va.js";
export { ansix9t283r1 } from "../ANSI-X9-62/ansix9t283r1.va.js";
export { ansix9t409k1 } from "../ANSI-X9-62/ansix9t409k1.va.js";
export { ansix9t409r1 } from "../ANSI-X9-62/ansix9t409r1.va.js";
export { ansix9t571k1 } from "../ANSI-X9-62/ansix9t571k1.va.js";
export { ansix9t571r1 } from "../ANSI-X9-62/ansix9t571r1.va.js";
export { ECDOMAIN } from "../ANSI-X9-62/ECDOMAIN.oca.js";

/* START_OF_SYMBOL_DEFINITION ANSIX9NamedDomains */
/**
 * @summary ANSIX9NamedDomains
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ANSIX9NamedDomains ECDOMAIN ::= {
 * { ID ansix9t163k1 } |    --  L.5.2.2
 * { ID ansix9t163r2 } |    --  L.5.2.3
 * { ID ansix9t233k1 } |    --  L.5.3.2
 * { ID ansix9t233r1 } |    --  L.5.3.3
 * { ID ansix9t283k1 } |    --  L.5.4.2
 * { ID ansix9t283r1 } |    --  L.5.4.3
 * { ID ansix9t409k1 } |    --  L.5.5.2
 * { ID ansix9t409r1 } |    --  L.5.5.3
 * { ID ansix9t571k1 } |    --  L.5.6.2
 * { ID ansix9t571r1 } |    --  L.5.6.3
 * { ID ansix9p192k1 } |    --  L.6.2.2
 * { ID ansix9p192r1 } |    --  L.6.2.3
 * { ID ansix9p224k1 } |    --  L.6.3.2
 * { ID ansix9p224r1 } |    --  L.6.3.3
 * { ID ansix9p256k1 } |    --  L.6.4.2
 * { ID ansix9p256r1 } |    --  L.6.4.3
 * { ID ansix9p384r1 } |    --  L.6.5.2
 * { ID ansix9p521r1 } ,    --  L.6.6.2
 * ... -- Additional named EC domain parameters may be added.
 * }
 * ```
 *
 * @constant
 * @type {ECDOMAIN[]}
 *
 */
export const ANSIX9NamedDomains: ECDOMAIN[] = [
    ANSIX9NamedDomains_Union0_Intersection0_Element,
    ANSIX9NamedDomains_Union1_Intersection0_Element,
    ANSIX9NamedDomains_Union2_Intersection0_Element,
    ANSIX9NamedDomains_Union3_Intersection0_Element,
    ANSIX9NamedDomains_Union4_Intersection0_Element,
    ANSIX9NamedDomains_Union5_Intersection0_Element,
    ANSIX9NamedDomains_Union6_Intersection0_Element,
    ANSIX9NamedDomains_Union7_Intersection0_Element,
    ANSIX9NamedDomains_Union8_Intersection0_Element,
    ANSIX9NamedDomains_Union9_Intersection0_Element,
    ANSIX9NamedDomains_Union10_Intersection0_Element,
    ANSIX9NamedDomains_Union11_Intersection0_Element,
    ANSIX9NamedDomains_Union12_Intersection0_Element,
    ANSIX9NamedDomains_Union13_Intersection0_Element,
    ANSIX9NamedDomains_Union14_Intersection0_Element,
    ANSIX9NamedDomains_Union15_Intersection0_Element,
    ANSIX9NamedDomains_Union16_Intersection0_Element,
    ANSIX9NamedDomains_Union17_Intersection0_Element,
];
/* END_OF_SYMBOL_DEFINITION ANSIX9NamedDomains */

/* eslint-enable */
