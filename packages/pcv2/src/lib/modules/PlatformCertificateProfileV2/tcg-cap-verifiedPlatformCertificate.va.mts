/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_ca_policy } from "../PlatformCertificateProfileV2/tcg-ca-policy.va.mjs";



/**
 * @summary tcg_cap_verifiedPlatformCertificate
 * @description
 *
 * Certificate policy `{tcg-ca-policy 4}`. The issuer of a delta or additional
 * platform certificate may put this identifier in a `policyIdentifier` when
 * that issuer has verified the base certificate and any previous delta
 * certificates. The `certificatePolicies` extension is not critical, contains
 * at least one policy, and that policy includes both a `cPSuri` (an HTTP URL of
 * the endorsement policy) and a `userNotice` whose `explicitText` is the UTF-8
 * string "TCG Trusted Platform Endorsement".
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.10.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-cap-verifiedPlatformCertificate             OBJECT IDENTIFIER ::= {tcg-ca-policy 4}
 * ```
 * 
 * @constant
 */
export
const tcg_cap_verifiedPlatformCertificate: OBJECT_IDENTIFIER = _OID.fromParts([
    4,
], tcg_ca_policy);

/* eslint-enable */
