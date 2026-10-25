/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_attribute } from "../PlatformCertificateProfileV2/tcg-attribute.va.mjs";


/**
 * @summary tcg_at_tcgCredentialSpecification
 * @description
 *
 * Attribute identifier `{tcg-attribute 23}` for `TCGSpecificationVersion`, the
 * platform certificate profile version the certificate claims.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.6 and §5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-tcgCredentialSpecification               OBJECT IDENTIFIER ::= {tcg-attribute 23}
 * ```
 * 
 * @constant
 */
export
const tcg_at_tcgCredentialSpecification: OBJECT_IDENTIFIER = _OID.fromParts([
    23,
], tcg_attribute);

/* eslint-enable */
