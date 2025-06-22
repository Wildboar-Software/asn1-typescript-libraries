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
 * @summary tcg_at_platformSerial
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-platformSerial OBJECT IDENTIFIER ::= { tcg-common 6}
 * ```
 * 
 * @constant
 */
export
const tcg_at_platformSerial: OBJECT_IDENTIFIER = _OID.fromParts([
    6,
], tcg_common);

/* eslint-enable */
