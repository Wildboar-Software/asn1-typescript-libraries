/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_kp } from "../PlatformCertificateProfileV2/tcg-kp.va.mjs";


/**
 * @summary tcg_kp_AdditionalPlatformKeyCertificate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-kp-AdditionalPlatformKeyCertificate         OBJECT IDENTIFIER ::= {tcg-kp 8}
 * ```
 * 
 * @constant
 */
export
const tcg_kp_AdditionalPlatformKeyCertificate: OBJECT_IDENTIFIER = _OID.fromParts([
    8,
], tcg_kp);

/* eslint-enable */
