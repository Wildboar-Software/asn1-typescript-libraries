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
 * @summary dhSinglePass_stdDH_sha1kdf
 * @description
 * 
 * 1-pass ECDH: U already holds V's public key authentically and sends its own
 * key in one pass. Uses the standard Diffie-Hellman primitive P = d_U Q_V
 * (§3.3.1); Q_V shall be fully valid. ANSI X9.63 KDF with SHA-1 (X9.63 scheme
 * OID). [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §6.1, §5.2, §C.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dhSinglePass-stdDH-sha1kdf OBJECT IDENTIFIER ::= {x9-63-scheme 2}
 * ```
 * 
 * @constant
 */
export
const dhSinglePass_stdDH_sha1kdf: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], x9_63_scheme);

/* eslint-enable */
