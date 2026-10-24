/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_registry_componentClass } from "../PlatformCertificateProfileV2/tcg-registry-componentClass.va.mjs";


/**
 * @summary tcg_registry_componentClass_ietf
 * @description
 *
 * Component class registry identifier `{tcg-registry-componentClass 2}`.
 * Section 5 assigns the arc. Section 4.2.5's permitted `ComponentClassRegistry`
 * values do not include it, and the profile does not describe the registry.
 *
 * TCG Platform Certificate Profile, Version 2.1, §5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-registry-componentClass-ietf                OBJECT IDENTIFIER ::= {tcg-registry-componentClass 2}
 * ```
 * 
 * @constant
 */
export
const tcg_registry_componentClass_ietf: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], tcg_registry_componentClass);

/* eslint-enable */
