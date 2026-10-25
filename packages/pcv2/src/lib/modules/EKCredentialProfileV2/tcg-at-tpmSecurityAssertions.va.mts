/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_attribute } from "../EKCredentialProfileV2/tcg-attribute.va.mjs";


/**
 * @summary tcg_at_tpmSecurityAssertions
 * @description
 *
 * Attribute identifier `{tcg-attribute 18}` for `TPMSecurityAssertions`.
 * Certificates that conform to this version of the profile should omit this
 * attribute (§3.2.11.1).
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1
 * and §4.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-tpmSecurityAssertions    OBJECT IDENTIFIER ::= {tcg-attribute 18}
 * ```
 * 
 * @constant
 */
export
const tcg_at_tpmSecurityAssertions: OBJECT_IDENTIFIER = _OID.fromParts([
    18,
], tcg_attribute);

/* eslint-enable */
