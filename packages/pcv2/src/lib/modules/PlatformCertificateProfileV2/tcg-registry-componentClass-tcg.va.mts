/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_registry_componentClass } from "../PlatformCertificateProfileV2/tcg-registry-componentClass.va.mjs";


/**
 * @summary tcg_registry_componentClass_tcg
 * @description
 *
 * Component class registry `{tcg-registry-componentClass 1}`, the TCG Component
 * Class Registry cited by the profile. Permitted as `ComponentClassRegistry`.
 * The registry, not this profile, defines the 4-byte class values.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.5 and §5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-registry-componentClass-tcg                 OBJECT IDENTIFIER ::= {tcg-registry-componentClass 1}
 * ```
 * 
 * @constant
 */
export
const tcg_registry_componentClass_tcg: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], tcg_registry_componentClass);

/* eslint-enable */
