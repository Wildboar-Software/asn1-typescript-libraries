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
import { tcg } from "../PlatformCertificateProfile/tcg.va.mjs";
/**
 * @summary tcg_attribute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-attribute OBJECT IDENTIFIER ::= {tcg 2}
 * ```
 * 
 * @constant
 */
export
const tcg_attribute: OBJECT_IDENTIFIER = new _OID([
    2,
], tcg);

/* eslint-enable */
