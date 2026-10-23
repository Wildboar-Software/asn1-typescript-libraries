/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_ca } from "../PlatformCertificateProfileV2/tcg-ca.va.mjs";


/**
 * @summary tcg_ca_policy
 * @description
 *
 * Arc `{tcg-ca 1}` under which this module places TCG certificate policy
 * identifiers. `tcg-cap-verifiedPlatformCertificate` is `{tcg-ca-policy 4}`.
 * The profile uses that policy identifier and does not otherwise describe this
 * arc.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.10 and §5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * tcg-ca-policy OBJECT IDENTIFIER ::= {tcg-ca 1}
 * ```
 *
 * @constant
 */
export
const tcg_ca_policy: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], tcg_ca);

/* eslint-enable */
