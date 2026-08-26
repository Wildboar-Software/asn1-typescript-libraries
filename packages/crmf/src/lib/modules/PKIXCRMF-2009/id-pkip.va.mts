/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_pkix } from "@wildboar/x500/PkiPmiExternalDataTypes";

/**
 * @summary id_pkip
 * @description
 *
 * PKIX arc for Internet X.509 PKI protocols and components:
 * `{ id-pkix 5 }`
 * ([RFC 4211 §8](https://datatracker.ietf.org/doc/html/rfc4211#section-8)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pkip  OBJECT IDENTIFIER ::= { id-pkix 5 }
 * ```
 *
 * @constant
 */
export const id_pkip: OBJECT_IDENTIFIER = _OID.fromParts([5], id_pkix);

/* eslint-enable */
