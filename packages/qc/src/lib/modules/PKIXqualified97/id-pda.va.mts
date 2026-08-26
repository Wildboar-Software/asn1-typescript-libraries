/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_pkix } from "../PKIX1Explicit88/id-pkix.va.mjs";


/**
 * @summary id_pda
 * @description
 *
 * Arc for Qualified Certificate personal data attributes
 * ([RFC 3739](https://datatracker.ietf.org/doc/html/rfc3739) Appendix A).
 * Child OIDs identify `dateOfBirth`, `placeOfBirth`, `gender`,
 * `countryOfCitizenship`, and `countryOfResidence`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pda  OBJECT IDENTIFIER ::= { id-pkix 9 }
 * ```
 *
 * @constant
 */
export const id_pda: OBJECT_IDENTIFIER = _OID.fromParts([9], id_pkix);

/* eslint-enable */
