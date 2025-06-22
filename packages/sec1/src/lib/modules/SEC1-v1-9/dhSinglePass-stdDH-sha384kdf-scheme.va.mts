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
 * @summary dhSinglePass_stdDH_sha384kdf_scheme
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dhSinglePass-stdDH-sha384kdf-scheme OBJECT IDENTIFIER ::= {secg-scheme 11 2}
 * ```
 * 
 * @constant
 */
export
const dhSinglePass_stdDH_sha384kdf_scheme: OBJECT_IDENTIFIER = _OID.fromParts([
    11,
    2,
], secg_scheme);

/* eslint-enable */
