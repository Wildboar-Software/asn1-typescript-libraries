/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_pkix } from "../PKIX1Explicit88/id-pkix.va.mjs";

/**
 * @summary id_pe
 * @description
 *
 * Arc for private certificate extensions under `id-pkix`
 * ([RFC 5280 §4.2.2](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.2),
 * Appendix A.1 / `PKIX1Explicit88`). Imported by the Qualified
 * Certificates modules in
 * [RFC 3739](https://datatracker.ietf.org/doc/html/rfc3739) Appendix A
 * (e.g., `id-pe-biometricInfo`, `id-pe-qcStatements`).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pe OBJECT IDENTIFIER ::= { id-pkix 1 }
 * ```
 *
 * @constant
 */
export const id_pe: OBJECT_IDENTIFIER = _OID.fromParts([1], id_pkix);

/* eslint-enable */
