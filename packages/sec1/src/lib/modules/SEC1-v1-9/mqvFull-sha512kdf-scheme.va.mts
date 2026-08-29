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
import { secg_scheme } from "../SEC1-v1-9/secg-scheme.va.mjs";
/**
 * @summary mqvFull_sha512kdf_scheme
 * @description
 * 
 * Full MQV: each party contributes two key pairs (typically static Q1 and
 * ephemeral Q2) as in §6.2. Shared secret from the MQV primitive of §3.4.
 * SHA-512 KDF. [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §6.2, §C.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mqvFull-sha512kdf-scheme OBJECT IDENTIFIER ::= {secg-scheme 16 3}
 * ```
 * 
 * @constant
 */
export
const mqvFull_sha512kdf_scheme: OBJECT_IDENTIFIER = _OID.fromParts([
    16,
    3,
], secg_scheme);

/* eslint-enable */
