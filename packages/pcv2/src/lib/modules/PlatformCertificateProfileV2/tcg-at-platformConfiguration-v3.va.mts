/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_at_platformConfiguration } from "../PlatformCertificateProfileV2/tcg-at-platformConfiguration.va.mjs";


/**
 * @summary tcg_at_platformConfiguration_v3
 * @description
 *
 * Attribute identifier `{tcg-at-platformConfiguration 3}` for
 * `PlatformConfiguration-v3`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.19 and §5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-platformConfiguration-v3                 OBJECT IDENTIFIER ::= {tcg-at-platformConfiguration 3}
 * ```
 * 
 * @constant
 */
export
const tcg_at_platformConfiguration_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], tcg_at_platformConfiguration);

/* eslint-enable */
