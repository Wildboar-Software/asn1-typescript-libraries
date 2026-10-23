/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_platformClass } from "../PlatformCertificateProfileV2/tcg-platformClass.va.mjs";


/**
 * @summary tcg_common
 * @description
 *
 * Arc `{tcg-platformClass 1}` for platform-class common attributes, including
 * `tcg-at-platformConfiguration` and `tcg-at-platformIdentifier`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-common                                      OBJECT IDENTIFIER ::= {tcg-platformClass 1}
 * ```
 * 
 * @constant
 */
export
const tcg_common: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], tcg_platformClass);

/* eslint-enable */
