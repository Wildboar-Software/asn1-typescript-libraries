/* eslint-disable */
import { type CURVE } from "../PKIXAlgs-2009/CURVE.oca.mjs";
import { secp521r1 } from "../PKIXAlgs-2009/secp521r1.va.mjs";

/**
 * @summary NamedCurve_Union12_Intersection0_Element
 * @description
 *
 * Named-curve information object (element of `NamedCurve`) ([RFC 5480 §2.1.1.1](https://datatracker.ietf.org/doc/html/rfc5480#section-2.1.1.1); [RFC 5912](https://datatracker.ietf.org/doc/html/rfc5912)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NamedCurve-Union12-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {CURVE}
 * @implements {CURVE}
 */
export const NamedCurve_Union12_Intersection0_Element: CURVE = {
    class: "CURVE",
    decoderFor: {},
    encoderFor: {},
    "&id": secp521r1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
