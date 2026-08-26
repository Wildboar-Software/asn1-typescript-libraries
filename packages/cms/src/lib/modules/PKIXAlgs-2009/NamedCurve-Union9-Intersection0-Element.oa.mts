/* eslint-disable */
import { type CURVE } from "../PKIXAlgs-2009/CURVE.oca.mjs";
import { secp384r1 } from "../PKIXAlgs-2009/secp384r1.va.mjs";

/**
 * @summary NamedCurve_Union9_Intersection0_Element
 * @description
 *
 * Named-curve information object (element of `NamedCurve`) ([RFC 5480 §2.1.1.1](https://datatracker.ietf.org/doc/html/rfc5480#section-2.1.1.1); [RFC 5912](https://datatracker.ietf.org/doc/html/rfc5912)).
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
