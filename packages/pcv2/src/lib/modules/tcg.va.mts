/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary tcg
 * @description
 *
 * TCG object-identifier arc, `{joint-iso-itu-t(2)
 * international-organizations(23) tcg(133)}`. The arc is registered to TCG as
 * an international body and was inherited from the Trusted Computing Platform
 * Alliance. Assignments under it are for X.509 certificates profiled by RFC
 * 5280 or, for platform certificates, RFC 5755.
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
 * tcg OBJECT IDENTIFIER ::= {joint-iso-itu-t(2) international-organizations(23) tcg(133)}
 * ```
 * 
 * @constant
 */
export
const tcg: OBJECT_IDENTIFIER = _OID.fromParts([
    /* joint-iso-itu-t */ 2,
    /* international-organizations */ 23,
    /* tcg */ 133,
]);

/* eslint-enable */
