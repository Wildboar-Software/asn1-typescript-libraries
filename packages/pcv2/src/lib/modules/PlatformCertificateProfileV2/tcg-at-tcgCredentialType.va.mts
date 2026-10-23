/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_attribute } from "../PlatformCertificateProfileV2/tcg-attribute.va.mjs";


/**
 * @summary tcg_at_tcgCredentialType
 * @description
 *
 * Attribute identifier `{tcg-attribute 25}` for `TCGCredentialType`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.1 and §5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-tcgCredentialType                        OBJECT IDENTIFIER ::= {tcg-attribute 25}
 * ```
 * 
 * @constant
 */
export
const tcg_at_tcgCredentialType: OBJECT_IDENTIFIER = _OID.fromParts([
    25,
], tcg_attribute);

/* eslint-enable */
