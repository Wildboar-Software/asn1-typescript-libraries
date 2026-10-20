/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_kp } from "../PlatformCertificateProfileV2/tcg-kp.va.mjs";


/**
 * @summary tcg_kp_PlatformAttributeCertificate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-kp-PlatformAttributeCertificate             OBJECT IDENTIFIER ::= {tcg-kp 2}
 * ```
 * 
 * @constant
 */
export
const tcg_kp_PlatformAttributeCertificate: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], tcg_kp);

/* eslint-enable */
