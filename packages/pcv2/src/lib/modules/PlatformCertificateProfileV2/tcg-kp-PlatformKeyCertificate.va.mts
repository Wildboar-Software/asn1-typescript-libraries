/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_kp } from "../PlatformCertificateProfileV2/tcg-kp.va.mjs";


/**
 * @summary tcg_kp_PlatformKeyCertificate
 * @description
 *
 * Certificate type `{tcg-kp 4}`. A base platform public-key certificate that
 * does not reference another platform certificate lists this identifier in
 * `tCGCredentialType`. The extended key usage extension of a platform
 * public-key certificate should contain it, and that extension is not critical.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.1, §3.3.28, and §5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-kp-PlatformKeyCertificate                   OBJECT IDENTIFIER ::= {tcg-kp 4}
 * ```
 * 
 * @constant
 */
export
const tcg_kp_PlatformKeyCertificate: OBJECT_IDENTIFIER = _OID.fromParts([
    4,
], tcg_kp);

/* eslint-enable */
