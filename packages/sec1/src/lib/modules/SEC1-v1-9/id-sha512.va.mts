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
import { id_sha } from "../SEC1-v1-9/id-sha.va.mjs";
/**
 * @summary id_sha512
 * @description
 * 
 * SHA-512, 64-octet digest. For ECDSA at a 256-bit security level. [SEC 1 v2](https://www.secg.org/sec1-v2.pdf)
 * §3.5, §C.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-sha512 OBJECT IDENTIFIER ::= { id-sha 3 }
 * ```
 * 
 * @constant
 */
export
const id_sha512: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], id_sha);

/* eslint-enable */
