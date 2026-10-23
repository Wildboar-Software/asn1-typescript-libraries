/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_attribute } from "../EKCredentialProfileV2/tcg-attribute.va.mjs";


/**
 * @summary tcg_at_tpmPQCVersion
 * @description
 *
 * Attribute identifier `{tcg-attribute 27}` for the post-quantum firmware
 * threshold. See `tpmPQCVersion`.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.5
 * and §4.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-tpmPQCVersion            OBJECT IDENTIFIER ::= {tcg-attribute 27}
 * ```
 * 
 * @constant
 */
export
const tcg_at_tpmPQCVersion: OBJECT_IDENTIFIER = _OID.fromParts([
    27,
], tcg_attribute);

/* eslint-enable */
