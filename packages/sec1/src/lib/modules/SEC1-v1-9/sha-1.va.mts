/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";



/**
 * @summary sha_1
 * @description
 * 
 * SHA-1 (FIPS 180-2), 20-octet digest. For ECDSA message digests use only for
 * backwards compatibility: collision attacks are below 80 bits. Collision
 * resistance is not required for KDF, HMAC, RNG, or verifiable curve
 * generation. [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §3.5, §C.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sha-1 OBJECT IDENTIFIER ::= {iso(1) identified-organization(3)
 * oiw(14) secsig(3) algorithm(2) 26}
 * ```
 * 
 * @constant
 */
export
const sha_1: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* oiw */ 14,
    /* secsig */ 3,
    /* algorithm */ 2,
    26,
]);

/* eslint-enable */
