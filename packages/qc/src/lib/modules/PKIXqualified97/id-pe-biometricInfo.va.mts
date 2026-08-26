/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_pe } from "../PKIX1Explicit88/id-pe.va.mjs";


/**
 * @summary id_pe_biometricInfo
 * @description
 *
 * Extension OID for `biometricInfo`
 * ([RFC 3739 §3.2.5](https://datatracker.ietf.org/doc/html/rfc3739#section-3.2.5)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pe-biometricInfo         OBJECT IDENTIFIER ::= { id-pe 2 }
 * ```
 *
 * @constant
 */
export const id_pe_biometricInfo: OBJECT_IDENTIFIER = _OID.fromParts([2], id_pe);

/* eslint-enable */
