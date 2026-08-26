/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_sha384
 * @description
 *
 * OID for SHA384 hash (`id-sha384`) ([RFC 4055 §2.1](https://datatracker.ietf.org/doc/html/rfc4055#section-2.1)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sha384  OBJECT IDENTIFIER ::= { joint-iso-itu-t(2) country(16) us(840) organization(1) gov(101)
 * csor(3) nistAlgorithms(4) hashalgs(2) 2 }
 * ```
 *
 * @constant
 */
export const id_sha384: OBJECT_IDENTIFIER = _OID.fromParts([
    /* joint-iso-itu-t */ 2,
    /* country */ 16,
    /* us */ 840,
    /* organization */ 1,
    /* gov */ 101,
    /* csor */ 3,
    /* nistAlgorithms */ 4,
    /* hashalgs */ 2,
    2,
]);

/* eslint-enable */
