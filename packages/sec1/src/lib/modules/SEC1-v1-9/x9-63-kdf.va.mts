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
 * @summary x9_63_kdf
 * @description
 * 
 * ANSI X9.63 KDF. For i = 1..ceil(keydatalen/hashlen), each Ki is Hash(Z ||
 * Counter || [SharedInfo]) with Counter a 4-octet big-endian integer starting
 * at 1. Parameters are the hash. [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §3.6.1, §C.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * x9-63-kdf OBJECT IDENTIFIER ::= {secg-scheme 17 0}
 * ```
 * 
 * @constant
 */
export
const x9_63_kdf: OBJECT_IDENTIFIER = _OID.fromParts([
    17,
    0,
], secg_scheme);

/* eslint-enable */
