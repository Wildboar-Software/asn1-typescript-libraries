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
import { x9_63_scheme } from "../SEC1-v1-9/x9-63-scheme.va.mjs";
/**
 * @summary mqvSinglePass_sha1kdf
 * @description
 * 
 * Single-pass MQV: U already holds V's keys authentically (often Q2,V = Q1,V)
 * and sends its own keys in one pass (§5.2). ANSI X9.63 KDF with SHA-1.
 * [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §6.2, §C.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mqvSinglePass-sha1kdf OBJECT IDENTIFIER ::= {x9-63-scheme 16}
 * ```
 * 
 * @constant
 */
export
const mqvSinglePass_sha1kdf: OBJECT_IDENTIFIER = _OID.fromParts([
    16,
], x9_63_scheme);

/* eslint-enable */
