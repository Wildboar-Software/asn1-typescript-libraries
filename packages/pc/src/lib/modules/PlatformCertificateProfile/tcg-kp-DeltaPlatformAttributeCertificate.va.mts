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
import { tcg_kp } from "../PlatformCertificateProfile/tcg-kp.va.mjs";
/**
 * @summary tcg_kp_DeltaPlatformAttributeCertificate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-kp-DeltaPlatformAttributeCertificate OBJECT IDENTIFIER ::= {tcg-kp 5}
 * ```
 * 
 * @constant
 */
export
const tcg_kp_DeltaPlatformAttributeCertificate: OBJECT_IDENTIFIER = _OID.fromParts([
    5,
], tcg_kp);

/* eslint-enable */
