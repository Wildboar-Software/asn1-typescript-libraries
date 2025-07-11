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
import { tcg_common } from "../PlatformCertificateProfile/tcg-common.va.mjs";
/**
 * @summary tcg_at_platformConfiguration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-platformConfiguration OBJECT IDENTIFIER ::= {tcg-common 7}
 * ```
 * 
 * @constant
 */
export
const tcg_at_platformConfiguration: OBJECT_IDENTIFIER = _OID.fromParts([
    7,
], tcg_common);

/* eslint-enable */
