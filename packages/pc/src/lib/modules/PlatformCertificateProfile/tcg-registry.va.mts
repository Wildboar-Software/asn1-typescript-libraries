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
 * @summary tcg_registry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-registry OBJECT IDENTIFIER ::= {tcg 18}
 * ```
 * 
 * @constant
 */
export
const tcg_registry: OBJECT_IDENTIFIER = _OID.fromParts([
    18,
], tcg);

/* eslint-enable */
