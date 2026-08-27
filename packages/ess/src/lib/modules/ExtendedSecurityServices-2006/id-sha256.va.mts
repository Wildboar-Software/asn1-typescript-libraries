/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_sha256
 * @description
 *
 * NIST SHA-256 algorithm OID; DEFAULT `hashAlgorithm` in `ESSCertIDv2`
 * (`{ joint-iso-itu-t(2) country(16) us(840) organization(1) gov(101) csor(3) nistalgorithm(4) hashalgs(2) 1 }`)
 * ([RFC 5035 Appendix A](https://datatracker.ietf.org/doc/html/rfc5035#appendix-A)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sha256  OBJECT IDENTIFIER ::= { joint-iso-itu-t(2)
 *     country(16) us(840) organization(1) gov(101)
 *     csor(3) nistalgorithm(4) hashalgs(2) 1 }
 * ```
 *
 * @constant
 */
export const id_sha256: OBJECT_IDENTIFIER = _OID.fromParts([
    /* joint-iso-itu-t */ 2,
    /* country */ 16,
    /* us */ 840,
    /* organization */ 1,
    /* gov */ 101,
    /* csor */ 3,
    /* nistalgorithm */ 4,
    /* hashalgs */ 2,
    1,
]);

/* eslint-enable */
