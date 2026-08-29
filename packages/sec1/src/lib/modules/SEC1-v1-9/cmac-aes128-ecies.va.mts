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
 * @summary cmac_aes128_ecies
 * @description
 * 
 * CMAC-AES-128 in ECIES (SP 800-38B). Tag length is always 128 bits. [SEC 1 v2](https://www.secg.org/sec1-v2.pdf)
 * §3.7, §C.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cmac-aes128-ecies OBJECT IDENTIFIER ::= {secg-scheme 24 0 }
 * ```
 * 
 * @constant
 */
export
const cmac_aes128_ecies: OBJECT_IDENTIFIER = _OID.fromParts([
    24,
    0,
], secg_scheme);

/* eslint-enable */
