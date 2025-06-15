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
/**
 * @summary tcg_at_platformConfigUri
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-platformConfigUri OBJECT IDENTIFIER ::= {tcg-common 3}
 * ```
 * 
 * @constant
 */
export
const tcg_at_platformConfigUri: OBJECT_IDENTIFIER = new _OID([
    3,
], tcg_common);

/* eslint-enable */
