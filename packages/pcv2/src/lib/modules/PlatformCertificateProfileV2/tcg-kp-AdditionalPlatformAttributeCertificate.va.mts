/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_kp } from "../PlatformCertificateProfileV2/tcg-kp.va.mjs";


/**
 * @summary tcg_kp_AdditionalPlatformAttributeCertificate
 * @description
 *
 * Certificate type `{tcg-kp 7}`. A platform attribute certificate that
 * references another platform certificate or delta platform certificate lists
 * this identifier in `tCGCredentialType`. That referencing certificate is a
 * rebase certificate (§2.1.3).
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.1 and §5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-kp-AdditionalPlatformAttributeCertificate   OBJECT IDENTIFIER ::= {tcg-kp 7}
 * ```
 * 
 * @constant
 */
export
const tcg_kp_AdditionalPlatformAttributeCertificate: OBJECT_IDENTIFIER = _OID.fromParts([
    7,
], tcg_kp);

/* eslint-enable */
