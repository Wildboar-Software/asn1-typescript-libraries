/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_kp } from "../PlatformCertificateProfileV2/tcg-kp.va.mjs";


/**
 * @summary tcg_kp_DeltaPlatformKeyCertificate
 * @description
 *
 * Certificate type `{tcg-kp 6}`. A delta platform certificate encoded as a
 * public-key certificate lists this identifier in `tCGCredentialType`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.1 and §5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-kp-DeltaPlatformKeyCertificate              OBJECT IDENTIFIER ::= {tcg-kp 6}
 * ```
 * 
 * @constant
 */
export
const tcg_kp_DeltaPlatformKeyCertificate: OBJECT_IDENTIFIER = _OID.fromParts([
    6,
], tcg_kp);

/* eslint-enable */
