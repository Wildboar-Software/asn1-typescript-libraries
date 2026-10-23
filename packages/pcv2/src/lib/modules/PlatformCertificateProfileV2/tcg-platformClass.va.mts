/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg } from "../PlatformCertificateProfileV2/tcg.va.mjs";


/**
 * @summary tcg_platformClass
 * @description
 *
 * Arc `{tcg 5}` for platform-class identifiers. `tcg-common` is assigned under
 * it.
 *
 * TCG Platform Certificate Profile, Version 2.1, §5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-platformClass                               OBJECT IDENTIFIER ::= {tcg 5}
 * ```
 * 
 * @constant
 */
export
const tcg_platformClass: OBJECT_IDENTIFIER = _OID.fromParts([
    5,
], tcg);

/* eslint-enable */
