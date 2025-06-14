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
import { tcg_attribute } from "../PlatformCertificateProfile/tcg-attribute.va.mjs";
/* START_OF_SYMBOL_DEFINITION tcg_at_tpmSecurityAssertions */
/**
 * @summary tcg_at_tpmSecurityAssertions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-tpmSecurityAssertions OBJECT IDENTIFIER ::= {tcg-attribute 18}
 * ```
 * 
 * @constant
 */
export
const tcg_at_tpmSecurityAssertions: OBJECT_IDENTIFIER = new _OID([
    18,
], tcg_attribute);
/* END_OF_SYMBOL_DEFINITION tcg_at_tpmSecurityAssertions */

/* eslint-enable */
