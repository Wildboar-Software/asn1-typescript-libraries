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
} from "asn1-ts";
import { secg_scheme } from "../SEC1-v1-9/secg-scheme.va.mjs";
/**
 * @summary dhSinglePass_stdDH_sha512kdf_scheme
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dhSinglePass-stdDH-sha512kdf-scheme OBJECT IDENTIFIER ::= {secg-scheme 11 3}
 * ```
 * 
 * @constant
 */
export
const dhSinglePass_stdDH_sha512kdf_scheme: OBJECT_IDENTIFIER = new _OID([
    11,
    3,
], secg_scheme);

/* eslint-enable */
