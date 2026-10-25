/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_attribute } from "../EKCredentialProfileV2/tcg-attribute.va.mjs";


/**
 * @summary tcg_at_tpmSpecification
 * @description
 *
 * Attribute identifier `{tcg-attribute 16}` for `TPMSpecification`.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.3
 * and §4.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-tpmSpecification         OBJECT IDENTIFIER ::= {tcg-attribute 16}
 * ```
 * 
 * @constant
 */
export
const tcg_at_tpmSpecification: OBJECT_IDENTIFIER = _OID.fromParts([
    16,
], tcg_attribute);

/* eslint-enable */
