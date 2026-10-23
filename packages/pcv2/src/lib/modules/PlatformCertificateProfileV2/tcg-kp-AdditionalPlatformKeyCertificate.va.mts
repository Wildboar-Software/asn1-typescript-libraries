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
 * Certificate type `{tcg-kp 8}`. A platform public-key certificate that
 * references another platform certificate or delta platform certificate lists
 * this identifier in `tCGCredentialType`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.1 and §5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
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
