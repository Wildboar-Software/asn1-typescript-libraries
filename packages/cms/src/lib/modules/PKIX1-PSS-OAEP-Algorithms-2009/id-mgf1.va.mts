/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { pkcs_1 } from "../PKIX1-PSS-OAEP-Algorithms-2009/pkcs-1.va.mjs";

/**
 * @summary id_mgf1
 * @description
 *
 * OID for MGF1 mask generation function (`id-mgf1`)
 * ([RFC 4055 §2.2](https://datatracker.ietf.org/doc/html/rfc4055#section-2.2)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mgf1  OBJECT IDENTIFIER ::= { pkcs-1 8 }
 * ```
 *
 * @constant
 */
export const id_mgf1: OBJECT_IDENTIFIER = _OID.fromParts([8], pkcs_1);

/* eslint-enable */
