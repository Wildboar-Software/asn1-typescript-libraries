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
 * @summary mqvSinglePass_specifiedKDF
 * @description
 * 
 * Single-pass MQV: U already holds V's keys authentically (often Q2,V = Q1,V)
 * and sends its own keys in one pass (§5.2). KDF is given in the parameters
 * (`KeyDerivationFunction`). [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §6.2, §C.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mqvSinglePass-specifiedKDF OBJECT IDENTIFIER ::= {secg-scheme 4}
 * ```
 * 
 * @constant
 */
export
const mqvSinglePass_specifiedKDF: OBJECT_IDENTIFIER = _OID.fromParts([
    4,
], secg_scheme);

/* eslint-enable */
