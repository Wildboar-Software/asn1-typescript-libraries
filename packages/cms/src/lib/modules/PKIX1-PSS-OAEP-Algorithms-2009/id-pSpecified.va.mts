/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { pkcs_1 } from "../PKIX1-PSS-OAEP-Algorithms-2009/pkcs-1.va.mjs";

/**
 * @summary id_pSpecified
 * @description
 *
 * OID for the pSpecified encoding parameters source (`id-pSpecified`)
 * ([RFC 4055 §4.1](https://datatracker.ietf.org/doc/html/rfc4055#section-4.1)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pSpecified  OBJECT IDENTIFIER ::= { pkcs-1 9 }
 * ```
 *
 * @constant
 */
export const id_pSpecified: OBJECT_IDENTIFIER = _OID.fromParts([9], pkcs_1);

/* eslint-enable */
