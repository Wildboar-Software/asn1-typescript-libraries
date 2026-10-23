/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg } from "./tcg.va.mjs";


/**
 * @summary tcg_attribute
 * @description
 *
 * Arc `{tcg 2}` under which TCG attribute identifiers are assigned.
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
 * tcg-attribute                                   OBJECT IDENTIFIER ::= {tcg 2}
 * ```
 * 
 * @constant
 */
export
const tcg_attribute: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], tcg);

/* eslint-enable */
