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
 * @summary mqvSinglePass_sha224kdf_scheme
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mqvSinglePass-sha224kdf-scheme OBJECT IDENTIFIER ::= {secg-scheme 15 0}
 * ```
 * 
 * @constant
 */
export
const mqvSinglePass_sha224kdf_scheme: OBJECT_IDENTIFIER = _OID.fromParts([
    15,
    0,
], secg_scheme);

/* eslint-enable */
