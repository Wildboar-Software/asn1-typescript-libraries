/* eslint-disable */
import { CURVE } from "../PKIXAlgs-2009/CURVE.oca.mjs";
import { secp384r1 } from "../PKIXAlgs-2009/secp384r1.va.mjs";

/**
 * @summary NamedCurve_Union9_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NamedCurve-Union9-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {CURVE}
 * @implements {CURVE}
 */
export const NamedCurve_Union9_Intersection0_Element: CURVE = {
    class: "CURVE",
    decoderFor: {},
    encoderFor: {},
    "&id": secp384r1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
