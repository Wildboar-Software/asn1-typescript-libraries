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
 * @summary id_sha224
 * @description
 * 
 * SHA-224, 28-octet digest. Collision resistance at most 112 bits; suitable for
 * ECDSA at about that level. [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §3.5, §C.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-sha224 OBJECT IDENTIFIER ::= { id-sha 4 }
 * ```
 * 
 * @constant
 */
export
const id_sha224: OBJECT_IDENTIFIER = _OID.fromParts([
    4,
], id_sha);

/* eslint-enable */
