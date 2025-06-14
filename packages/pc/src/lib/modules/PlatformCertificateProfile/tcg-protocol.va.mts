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
 * @summary tcg_protocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-protocol OBJECT IDENTIFIER ::= {tcg 3}
 * ```
 * 
 * @constant
 */
export
const tcg_protocol: OBJECT_IDENTIFIER = new _OID([
    3,
], tcg);

/* eslint-enable */
