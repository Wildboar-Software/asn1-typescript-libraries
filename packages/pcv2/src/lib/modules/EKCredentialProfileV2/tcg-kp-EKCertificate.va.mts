/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_kp } from "../EKCredentialProfileV2/tcg-kp.va.mjs";


/**
 * @summary tcg_kp_EKCertificate
 * @description
 *
 * Extended key usage `{tcg-kp 1}` that identifies a certificate as an
 * endorsement-key certificate. The extended key usage extension is optional,
 * not critical, and when present should contain this identifier.
 *
 * An issuing CA that issues only endorsement-key certificates may also put this
 * identifier in the CA certificate. A CA that issues several known purposes may
 * include the corresponding set of extended-key-usage identifiers.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.2.16
 * and §4.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-kp-EKCertificate            OBJECT IDENTIFIER ::= {tcg-kp 1}
 * ```
 * 
 * @constant
 */
export
const tcg_kp_EKCertificate: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], tcg_kp);

/* eslint-enable */
