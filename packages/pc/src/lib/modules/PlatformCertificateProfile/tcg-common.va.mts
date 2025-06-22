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
import { tcg_platformClass } from "../PlatformCertificateProfile/tcg-platformClass.va.mjs";
/**
 * @summary tcg_common
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-common OBJECT IDENTIFIER ::= { tcg-platformClass 1}
 * ```
 * 
 * @constant
 */
export
const tcg_common: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], tcg_platformClass);

/* eslint-enable */
