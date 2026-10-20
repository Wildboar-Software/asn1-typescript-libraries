/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_ca_policy } from "../PlatformCertificateProfileV2/tcg-ca-policy.va.mjs";



/**
 * @summary tcg_cap_verifiedPlatformCertificate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-cap-verifiedPlatformCertificate             OBJECT IDENTIFIER ::= {tcg-ca-policy 4}
 * ```
 * 
 * @constant
 */
export
const tcg_cap_verifiedPlatformCertificate: OBJECT_IDENTIFIER = _OID.fromParts([
    4,
], tcg_ca_policy);

/* eslint-enable */
