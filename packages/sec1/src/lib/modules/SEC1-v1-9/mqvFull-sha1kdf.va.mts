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
 * @summary mqvFull_sha1kdf
 * @description
 * 
 * Full MQV: each party contributes two key pairs (typically static Q1 and
 * ephemeral Q2) as in §6.2. Shared secret from the MQV primitive of §3.4. ANSI
 * X9.63 KDF with SHA-1. [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §6.2, §C.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mqvFull-sha1kdf OBJECT IDENTIFIER ::= {x9-63-scheme 17}
 * ```
 * 
 * @constant
 */
export
const mqvFull_sha1kdf: OBJECT_IDENTIFIER = _OID.fromParts([
    17,
], x9_63_scheme);

/* eslint-enable */
