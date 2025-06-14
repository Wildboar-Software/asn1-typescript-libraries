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
import { tcg_common } from "../PlatformCertificateProfile/tcg-common.va.mjs";
/* START_OF_SYMBOL_DEFINITION tcg_at_platformManufacturerId */
/**
 * @summary tcg_at_platformManufacturerId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-platformManufacturerId OBJECT IDENTIFIER ::= {tcg-common 2}
 * ```
 * 
 * @constant
 */
export
const tcg_at_platformManufacturerId: OBJECT_IDENTIFIER = new _OID([
    2,
], tcg_common);
/* END_OF_SYMBOL_DEFINITION tcg_at_platformManufacturerId */

/* eslint-enable */
