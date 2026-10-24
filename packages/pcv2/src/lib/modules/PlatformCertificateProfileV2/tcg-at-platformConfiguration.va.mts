/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_common } from "../PlatformCertificateProfileV2/tcg-common.va.mjs";


/**
 * @summary tcg_at_platformConfiguration
 * @description
 *
 * Attribute arc `{tcg-common 7}`. The version 3 platform configuration
 * attribute is `{tcg-at-platformConfiguration 3}` and the version 3
 * configuration URI is `{tcg-at-platformConfiguration 4}`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-platformConfiguration                    OBJECT IDENTIFIER ::= {tcg-common 7}
 * ```
 * 
 * @constant
 */
export
const tcg_at_platformConfiguration: OBJECT_IDENTIFIER = _OID.fromParts([
    7,
], tcg_common);

/* eslint-enable */
