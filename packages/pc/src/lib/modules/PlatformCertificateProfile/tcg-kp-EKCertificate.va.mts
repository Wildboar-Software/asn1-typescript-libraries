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
import { tcg_kp } from "../PlatformCertificateProfile/tcg-kp.va.mjs";
/**
 * @summary tcg_kp_EKCertificate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-kp-EKCertificate OBJECT IDENTIFIER ::= {tcg-kp 1}
 * ```
 * 
 * @constant
 */
export
const tcg_kp_EKCertificate: OBJECT_IDENTIFIER = new _OID([
    1,
], tcg_kp);

/* eslint-enable */
