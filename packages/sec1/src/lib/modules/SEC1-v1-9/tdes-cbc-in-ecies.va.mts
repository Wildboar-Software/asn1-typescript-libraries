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
 * @summary tdes_cbc_in_ecies
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tdes-cbc-in-ecies OBJECT IDENTIFIER ::= {secg-scheme 19 }
 * ```
 * 
 * @constant
 */
export
const tdes_cbc_in_ecies: OBJECT_IDENTIFIER = _OID.fromParts([
    19,
], secg_scheme);

/* eslint-enable */
