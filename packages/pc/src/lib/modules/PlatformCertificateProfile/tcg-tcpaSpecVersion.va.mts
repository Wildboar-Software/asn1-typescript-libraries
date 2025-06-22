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
import { tcg } from "../PlatformCertificateProfile/tcg.va.mjs";
/**
 * @summary tcg_tcpaSpecVersion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tcpaSpecVersion OBJECT IDENTIFIER ::= {tcg 1}
 * ```
 * 
 * @constant
 */
export
const tcg_tcpaSpecVersion: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], tcg);

/* eslint-enable */
