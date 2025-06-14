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
/* START_OF_SYMBOL_DEFINITION tcg_platformClass */
/**
 * @summary tcg_platformClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-platformClass OBJECT IDENTIFIER ::= {tcg 5}
 * ```
 * 
 * @constant
 */
export
const tcg_platformClass: OBJECT_IDENTIFIER = new _OID([
    5,
], tcg);
/* END_OF_SYMBOL_DEFINITION tcg_platformClass */

/* eslint-enable */
