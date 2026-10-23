/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg } from "../PlatformCertificateProfileV2/tcg.va.mjs";


/**
 * @summary tcg_ca
 * @description
 *
 * Arc `{tcg 11}` for CA-related identifiers. This module assigns
 * `tcg-ca-policy` under it.
 *
 * TCG Platform Certificate Profile, Version 2.1, §5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-ca                                          OBJECT IDENTIFIER ::= {tcg 11}
 * ```
 * 
 * @constant
 */
export
const tcg_ca: OBJECT_IDENTIFIER = _OID.fromParts([
    11,
], tcg);

/* eslint-enable */
