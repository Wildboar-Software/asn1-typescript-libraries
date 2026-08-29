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
import { id_ecSigType } from "../SEC1-v1-9/id-ecSigType.va.mjs";
/**
 * @summary ecdsa_with_SHA1
 * @description
 * 
 * ECDSA with SHA-1. In X.509/CRLs the parameters shall be absent (or NULL). Use
 * SHA-1 here only for backwards compatibility. [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §4.1, §3.5, §C.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ecdsa-with-SHA1 OBJECT IDENTIFIER ::= { id-ecSigType sha1(1)}
 * ```
 * 
 * @constant
 */
export
const ecdsa_with_SHA1: OBJECT_IDENTIFIER = _OID.fromParts([
    /* sha1 */ 1,
], id_ecSigType);

/* eslint-enable */
