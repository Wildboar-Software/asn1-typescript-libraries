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
import { tcg_attribute } from "../PlatformCertificateProfile/tcg-attribute.va.mjs";
/**
 * @summary tcg_at_tpmIdLabel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-tpmIdLabel OBJECT IDENTIFIER ::= {tcg-attribute 15}
 * ```
 * 
 * @constant
 */
export
const tcg_at_tpmIdLabel: OBJECT_IDENTIFIER = _OID.fromParts([
    15,
], tcg_attribute);

/* eslint-enable */
