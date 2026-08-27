/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_pkix } from "../PKIX1Explicit88/id-pkix.va.mjs";


/**
 * @summary id_qcs
 * @description
 *
 * Arc for Qualified Certificate statements
 * ([RFC 3739](https://datatracker.ietf.org/doc/html/rfc3739) Appendix A).
 * Child OIDs include `id-qcs-pkixQCSyntax-v1` and
 * `id-qcs-pkixQCSyntax-v2`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-qcs  OBJECT IDENTIFIER ::= { id-pkix 11 }
 * ```
 *
 * @constant
 */
export const id_qcs: OBJECT_IDENTIFIER = _OID.fromParts([11], id_pkix);

/* eslint-enable */
