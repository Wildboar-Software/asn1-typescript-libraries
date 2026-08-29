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
import { tcg_at_platformConfiguration } from "../PlatformCertificateProfile/tcg-at-platformConfiguration.va.mjs";
/**
 * @summary tcg_at_platformConfiguration_v1
 * @description
 *
 * Platform configuration attribute version 1
 * (`{ tcg-at-platformConfiguration 1 }`). Parsers SHOULD be
 * version-aware of prior `platformConfiguration` encodings. TCG
 * Platform Certificate Profile v1.1 r19 §3.1.6, §4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-platformConfiguration-v1 OBJECT IDENTIFIER ::= {tcg-at-platformConfiguration 1}
 * ```
 * 
 * @constant
 */
export
const tcg_at_platformConfiguration_v1: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], tcg_at_platformConfiguration);

/* eslint-enable */
