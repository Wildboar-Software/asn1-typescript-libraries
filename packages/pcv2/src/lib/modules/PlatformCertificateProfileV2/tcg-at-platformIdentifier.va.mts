/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_common } from "../PlatformCertificateProfileV2/tcg-common.va.mjs";


/**
 * @summary tcg_at_platformIdentifier
 * @description
 *
 * Identifier `{tcg-common 8}` for `PlatformIdentifier`. In `subjectAltName` it
 * is the `OtherName` type-id whose value is that sequence. This module also
 * binds it as the identifier of the `platformIdentifier` attribute.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.16 and §5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-platformIdentifier                       OBJECT IDENTIFIER ::= {tcg-common 8}
 * ```
 * 
 * @constant
 */
export
const tcg_at_platformIdentifier: OBJECT_IDENTIFIER = _OID.fromParts([
    8,
], tcg_common);

/* eslint-enable */
