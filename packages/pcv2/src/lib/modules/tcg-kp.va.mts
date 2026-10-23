/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg } from "./tcg.va.mjs";


/**
 * @summary tcg_kp
 * @description
 *
 * Arc `{tcg 8}` under which TCG extended-key-usage and platform
 * certificate-type identifiers are assigned.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §4. TCG
 * Platform Certificate Profile, Version 2.1, §5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-kp                                          OBJECT IDENTIFIER ::= {tcg 8}
 * ```
 * 
 * @constant
 */
export
const tcg_kp: OBJECT_IDENTIFIER = _OID.fromParts([
    8,
], tcg);

/* eslint-enable */
