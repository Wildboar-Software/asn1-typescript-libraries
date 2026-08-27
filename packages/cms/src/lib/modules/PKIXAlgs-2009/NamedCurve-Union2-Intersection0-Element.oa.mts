/* eslint-disable */
import { type CURVE } from "../PKIXAlgs-2009/CURVE.oca.mjs";
import { sect163r2 } from "../PKIXAlgs-2009/sect163r2.va.mjs";

/**
 * @summary NamedCurve_Union2_Intersection0_Element
 * @description
 *
 * Named-curve information object (element of `NamedCurve`) ([RFC 5480 §2.1.1.1](https://datatracker.ietf.org/doc/html/rfc5480#section-2.1.1.1); [RFC 5912](https://datatracker.ietf.org/doc/html/rfc5912)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NamedCurve-Union2-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {CURVE}
 * @implements {CURVE}
 */
export const NamedCurve_Union2_Intersection0_Element: CURVE = {
    class: "CURVE",
    decoderFor: {},
    encoderFor: {},
    "&id": sect163r2 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
