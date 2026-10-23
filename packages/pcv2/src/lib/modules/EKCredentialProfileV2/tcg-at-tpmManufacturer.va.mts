/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_attribute } from "../EKCredentialProfileV2/tcg-attribute.va.mjs";


/**
 * @summary tcg_at_tpmManufacturer
 * @description
 *
 * Attribute identifier `{tcg-attribute 1}` for the TPM manufacturer name. See
 * `tpmManufacturer` for the `id:` encoding and where the attribute is carried.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.2
 * and §4.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-tpmManufacturer          OBJECT IDENTIFIER ::= {tcg-attribute 1}
 * ```
 * 
 * @constant
 */
export
const tcg_at_tpmManufacturer: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], tcg_attribute);

/* eslint-enable */
