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
 * @summary dhSinglePass_stdDH_sha224kdf_scheme
 * @description
 * 
 * 1-pass ECDH: U already holds V's public key authentically and sends its own
 * key in one pass. Uses the standard Diffie-Hellman primitive P = d_U Q_V
 * (§3.3.1); Q_V shall be fully valid. SHA-224 KDF. [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §6.1, §5.2, §C.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dhSinglePass-stdDH-sha224kdf-scheme OBJECT IDENTIFIER ::= {secg-scheme 11 0}
 * ```
 * 
 * @constant
 */
export
const dhSinglePass_stdDH_sha224kdf_scheme: OBJECT_IDENTIFIER = _OID.fromParts([
    11,
    0,
], secg_scheme);

/* eslint-enable */
